import HeroBanner from "@components/heroBanner";
import BlockFeature from "@components/blockFeature";
import FooterPromoBanner from "@components/footerPromoBanner";
import Testimonials from "@components/testimonials";
import ListingCard from "@components/listingCard";

import { faqData } from "@utils/data";
import HomeFaqs from "@components/homeFaqs";
import HomeCounter from "@components/homeCounter";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <BlockFeature />
      <HomeCounter />
      <ListingCard />
      <Testimonials />
      <HomeFaqs faqs={faqData} />
      <FooterPromoBanner />
    </div>
  );
}
