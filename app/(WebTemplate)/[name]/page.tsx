
import Container from "@components/container";
import React from "react";
import InnerCategoryDetail from "./components/innerCategoryDetails";
import {
  categoryDetails,
  StructuredCategories,
  StructuredCategory,
} from "data/categoryDetail";
import Banner from "./components/banner";
interface PageProps {
  params: Promise<{ name: string }>;
}

async function Page({ params }: PageProps) {
  const { name } = await params;
  const data: StructuredCategory = categoryDetails.find(
    (item: any) => item.categorySlug === name
  );
  return (
    <>
      <Banner title={data?.category} image={data?.categoryBannerImage} />
      <div className="bg-[#e5e5e5]">
        <Container>
          <InnerCategoryDetail data={data} />
        </Container>
      </div>
    </>
  );
}

export default Page;
