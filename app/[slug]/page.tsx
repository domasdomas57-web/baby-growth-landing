import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SeoLandingPage from "@/components/SeoLandingPage";
import { buildPageMetadata } from "@/lib/seo";
import { SEO_PAGE_BY_SLUG, SEO_PAGE_SLUGS } from "@/lib/seoPages";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return SEO_PAGE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = SEO_PAGE_BY_SLUG[slug];

  if (!page) {
    return {};
  }

  return buildPageMetadata({
    title: page.title,
    description: page.metaDescription,
    path: `/${page.slug}`,
  });
}

export default async function SeoSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const page = SEO_PAGE_BY_SLUG[slug];

  if (!page) {
    notFound();
  }

  return <SeoLandingPage content={page} />;
}
