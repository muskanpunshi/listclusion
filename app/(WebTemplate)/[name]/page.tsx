
import Container from "@components/container";
import React from "react";
import InnerCategoryDetail from "./components/innerCategoryDetails";
import {
  categoryDetails,
  StructuredCategories,
  StructuredCategory,
} from "data/categoryDetail";
import Banner from "./components/banner";
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
