import Container from "@components/container";
import React from "react";
import InnerCategoryDetail from "./components/innerCategoryDetails";
import { categoryDetails, StructuredCategory } from "data/categoryDetail";
import Banner from "./components/banner";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

export const revalidate = false;
export const dynamic = "force-static";

interface PageProps {
  params: Promise<{ name: string }>;
}

type Props = {
  params: Promise<{ name: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { name } = await params;
  console.log(name, "asdasdasdsdfasd");
  const category = categoryDetails.find((item) => item.categorySlug === name);

  if (!category) {
    return {
      title: "Category Not Found - ListClusion",
      description: "The requested category does not exist in our directory.",
    };
  }

  // Format category name for display (remove hyphens, capitalize)
  const formattedCategory = category.category
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  // Common keywords for all categories
  const baseKeywords = [
    "Pakistan",
    "directory",
    "ListClusion",
    "professional services",
  ];

  // Category-specific keywords
  const categoryKeywords = [
    `${formattedCategory} services`,
    `Best ${formattedCategory}`,
    `${formattedCategory} Karachi`,
    `${formattedCategory} Lahore`,
    `${formattedCategory} firms`,
  ];

  return {
    title: `${formattedCategory} Services in Pakistan | ListClusion Directory`,
    description: `Find and connect with top ${formattedCategory.toLowerCase()} professionals across Pakistan.`,
    keywords: [...categoryKeywords, ...baseKeywords],

    openGraph: {
      title: `${formattedCategory} Services | ListClusion Professional Directory`,
      description: `Browse our verified network of ${formattedCategory.toLowerCase()} providers in major Pakistani cities.`,
      url: `https://listclusion.com/categories/${name}`,
      images: `${category.categoryBannerImage}`
        ? [
            {
              url: `${category.categoryBannerImage}`,
              width: 1200,
              height: 630,
              alt: `${formattedCategory} Services Banner`,
            },
          ]
        : [],
    },

    twitter: {
      card: "summary_large_image",
      title: `${formattedCategory} Services in Pakistan | ListClusion`,
      description: `Find professional ${formattedCategory.toLowerCase()} providers across Pakistan`,
      images: category.categoryBannerImage
        ? [category.categoryBannerImage]
        : [],
    },

    alternates: {
      canonical: `https://listclusion.com/categories/${name}`,
    },
  };
}

async function Page({ params }: PageProps) {
  const { name } = await params;
  const data: StructuredCategory | undefined = categoryDetails.find(
    (item: any) => item.categorySlug === name
  );

  if (!data) {
    notFound();
  }

  return (
    <>
      <Banner title={data.category} image={data.categoryBannerImage} />
      <div className="bg-[#e5e5e5]">
        <Container>
          <InnerCategoryDetail data={data} />
        </Container>
      </div>
    </>
  );
}

export default Page;

export async function generateStaticParams() {
  return categoryDetails.map((item) => ({
    name: item.categorySlug,
  }));
}
