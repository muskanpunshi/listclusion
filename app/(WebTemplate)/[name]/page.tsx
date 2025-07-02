import Banner from "@components/common/banner";
import Container from "@components/container";
import React from "react";
import InnerCategoryDetail from "./components/innerCategoryDetails";
import { categoryDetails } from "data/categoryDetail";
import { Metadata } from "next";
interface PageProps {
  params: Promise<{ name: string }>;
}

export async function generateMetadata({
  params
}: {
  params: { name: string };
}): Promise<Metadata> {
  const { name } = params;

  const matchedCategory = categoryDetails.find(
    (item) => item.categorySlug === name
  );

  return {
    title: matchedCategory
      ? `${matchedCategory.category} -  ListClusion`
      : "ListClusion"
  };
}

async function Page({ params }: PageProps) {
  const { name } = await params;
  const data = categoryDetails.filter(
    (item: any) => item.categorySlug === name
  );
  return (
    <>
      <Banner title={data[0]?.category} image={data[0]?.categoryBannerImage} />
      <div className="bg-[#e5e5e5]">
        <Container>
          <InnerCategoryDetail data={data} />
        </Container>
      </div>
    </>
  );
}

export default Page;
