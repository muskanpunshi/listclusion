import HeroBanner from "@components/heroBanner";
import BlockFeature from "@components/blockFeature";
import FooterPromoBanner from "@components/footerPromoBanner";
import Testimonials from "@components/testimonials";
import ListingCard from "@components/listingCard";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <BlockFeature />
      <ListingCard />
      <Testimonials />
      <FooterPromoBanner />
    </div>
  );
}
