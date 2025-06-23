// import PopularCategory from "@components/popularCategory";
import HeroBanner from "@components/heroBanner";
import BlockFeature from "@components/blockFeature";
import FooterPromoBanner from "@components/footerPromoBanner";
import Testimonials from "@components/testimonials";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      {/* <PopularCategory /> */}
      <BlockFeature />
      <Testimonials />
      <FooterPromoBanner />

     
    </div>
  );
}
