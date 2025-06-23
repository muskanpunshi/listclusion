import HeroBanner from "@components/heroBanner";
import BlockFeature from "@components/blockFeature";
import FooterPromoBanner from "@components/footerPromoBanner";
import ListingCard from "@components/listingCard";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <BlockFeature />
      <ListingCard />
      <FooterPromoBanner />
    </div>
  );
}
