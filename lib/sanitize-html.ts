/**
 * Conservative HTML sanitizer for SSE article content.
 * Strips scripts, event handlers, and dangerous URLs.
 */

const FORBIDDEN_TAGS = new Set([
  "script",
  "style",
  "iframe",
  "object",
  "embed",
  "link",
  "meta",
  "base",
  "form",
  "input",
  "button",
  "textarea",
  "select",
  "svg",
  "math",
]);

const ALLOWED_TAGS = new Set([
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "p",
  "br",
  "hr",
  "ul",
  "ol",
  "li",
  "strong",
  "b",
  "em",
  "i",
  "u",
  "s",
  "blockquote",
  "pre",
  "code",
  "a",
  "img",
  "figure",
  "figcaption",
  "table",
  "thead",
  "tbody",
  "tfoot",
  "tr",
  "th",
  "td",
  "div",
  "span",
  "section",
  "article",
]);

const ALLOWED_ATTRS: Record<string, Set<string>> = {
  a: new Set(["href", "title", "rel", "target"]),
  img: new Set(["src", "alt", "title", "width", "height", "loading"]),
  th: new Set(["colspan", "rowspan", "scope"]),
  td: new Set(["colspan", "rowspan"]),
  "*": new Set(["class", "id"]),
};

function isSafeUrl(value: string, kind: "href" | "src"): boolean {
  const trimmed = value.trim();
  if (!trimmed) return false;
  const lower = trimmed.toLowerCase();
  if (lower.startsWith("javascript:") || lower.startsWith("data:") || lower.startsWith("vbscript:")) {
    return false;
  }
  if (kind === "href") {
    return (
      lower.startsWith("http://") ||
      lower.startsWith("https://") ||
      lower.startsWith("mailto:") ||
      lower.startsWith("/") ||
      lower.startsWith("#")
    );
  }
  return lower.startsWith("http://") || lower.startsWith("https://") || lower.startsWith("/");
}

export function stripHtmlToText(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/\s+/g, " ")
    .trim();
}

export function estimateReadingTimeMinutes(html: string): number {
  const words = stripHtmlToText(html).split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 220));
}

export function formatReadableDate(value?: string | null): string | null {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export function sanitizeArticleHtml(dirty: string): string {
  if (!dirty) return "";

  let html = dirty
    .replace(/<\s*(script|style)[^>]*>[\s\S]*?<\s*\/\s*\1\s*>/gi, "")
    .replace(/<\s*(script|style)[^>]*\/?\s*>/gi, "");

  html = html.replace(/<\/?([a-zA-Z][a-zA-Z0-9]*)\b([^>]*)\/?>/g, (match, rawTag, rawAttrs) => {
    const tag = String(rawTag).toLowerCase();
    const isClosing = match.startsWith("</");

    if (FORBIDDEN_TAGS.has(tag) || !ALLOWED_TAGS.has(tag)) {
      return "";
    }

    if (isClosing) {
      return `</${tag}>`;
    }

    const selfClosing = /\/>$/.test(match) || tag === "br" || tag === "hr" || tag === "img";
    const allowed = new Set([
      ...(ALLOWED_ATTRS["*"] ?? []),
      ...(ALLOWED_ATTRS[tag] ?? []),
    ]);

    const attrs: string[] = [];
    const attrRegex = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g;
    let attrMatch: RegExpExecArray | null;
    while ((attrMatch = attrRegex.exec(String(rawAttrs))) !== null) {
      const name = attrMatch[1].toLowerCase();
      const value = attrMatch[2] ?? attrMatch[3] ?? attrMatch[4] ?? "";
      if (name.startsWith("on")) continue;
      if (!allowed.has(name)) continue;

      if (name === "href" && !isSafeUrl(value, "href")) continue;
      if (name === "src" && !isSafeUrl(value, "src")) continue;

      if (name === "target") {
        attrs.push('target="_blank"', 'rel="noopener noreferrer"');
        continue;
      }

      const escaped = value.replace(/"/g, "&quot;");
      attrs.push(`${name}="${escaped}"`);
    }

    if (tag === "a" && !attrs.some((a) => a.startsWith("rel="))) {
      // leave relative links without forced noreferrer
    }

    const attrText = attrs.length ? ` ${attrs.join(" ")}` : "";
    return selfClosing ? `<${tag}${attrText} />` : `<${tag}${attrText}>`;
  });

  return html;
}
