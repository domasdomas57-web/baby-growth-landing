import PremiumLanding from "@/components/PremiumLanding";
import { getPremiumLandingMessages } from "@/i18n/premiumLanding";
import { getLocaleFromCookies } from "@/i18n/server";

export default async function Home() {
  const locale = await getLocaleFromCookies();

  return <PremiumLanding messages={getPremiumLandingMessages(locale)} />;
}
