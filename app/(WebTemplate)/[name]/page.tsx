import Banner from "@components/common/banner";
import Container from "@components/container";
import React from "react";
import InnerCategoryDetail from "./components/innerCategoryDetails";
import categoryDetail from "../../../data/categoryDetail";
interface PageProps {
  params: Promise<{ name: string }>;
}

 async function Page({ params }: PageProps) {
   const { name } = await params;
   console.log(name)
  const data = categoryDetail.find((item) => item.slug === name);
  return (
    <>
      <Banner title={data?.name} />
      <Container>
        <InnerCategoryDetail data={data}/>
      </Container>
    </>
  );
};

export default Page;
