import SiteHeader from "@/components/SiteHeader";
import { getPremiumLandingMessages } from "@/i18n/premiumLanding";
import { getLocaleFromCookies } from "@/i18n/server";

type BlogShellProps = {
  children: React.ReactNode;
  /** Homepage-style hash nav when true; blog-oriented nav when false. */
  homeNav?: boolean;
};

export default async function BlogShell({ children, homeNav = false }: BlogShellProps) {
  const locale = await getLocaleFromCookies();
  const messages = getPremiumLandingMessages(locale);

  const navItems = homeNav
    ? [
        { label: messages.nav.story, href: "/#story" },
        { label: messages.nav.features, href: "/#features" },
        { label: messages.nav.reviews, href: "/#reviews" },
        { label: "Blog", href: "/blog" },
      ]
    : [
        { label: "Home", href: "/" },
        { label: "Blog", href: "/blog" },
        { label: messages.nav.features, href: "/#features" },
      ];

  return (
    <div className="relative overflow-hidden text-slate-950">
      <div className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(circle_at_top_left,rgba(202,227,255,0.95),transparent_42%),radial-gradient(circle_at_top_right,rgba(255,228,239,0.75),transparent_32%),linear-gradient(180deg,#fffefb_0%,#f6fbff_54%,#fbfcff_100%)]" />
      <SiteHeader
        brandName={messages.brandName}
        iconAlt={messages.iconAlt}
        brandHref="/"
        navItems={navItems}
        downloadLabel={messages.nav.download}
        downloadMenu={messages.downloadMenu}
      />
      {children}
    </div>
  );
}
