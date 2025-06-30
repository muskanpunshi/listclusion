import Banner from "@components/common/banner";
import Container from "@components/container";
import React from "react";
import InnerCategoryDetail from "./components/innerCategoryDetails";
import { categoryDetails } from "data/categoryDetail";
interface PageProps {
  params: Promise<{ name: string }>;
}

async function Page({ params }: PageProps) {
  const { name } = await params;
  console.log(name);
  const data = categoryDetails.filter((item: any) => item.categorySlug === name);
  return (
    <>
      <Banner title={data[0]?.category} image={data[0]?.categoryBannerImage}/>
      <div className="bg-[#e5e5e5]">
        <Container>
          <InnerCategoryDetail data={data} />
        </Container>
      </div>
    </>
  );
}

export default Page;
