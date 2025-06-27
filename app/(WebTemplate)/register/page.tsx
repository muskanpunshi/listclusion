import Container from "@components/container";
import RegisterForm from "./components/form";
import Heading from "@components/heading";
import Paragraph from "@components/common/paragraph";
import Link from "next/link";
import Banner from '@public/register-banner.jpeg'
import Image from "next/image";

const RegisterPage = () => {
  return (
    <>
      <div className="lg:pt-36   py-34">
        <Container className="container mx-auto px-4">
          <div className="text-center max-w-5xl  mx-auto lg:mb-16 mb-10 fade-in-up">
            <Heading isHeadingH1={true}>Register</Heading>
            <Paragraph className="text-xl ">
              Already have an account?{" "}
              <Link href={"#"} className="text-primary hover:underline ">
                Login
              </Link>
            </Paragraph>
          </div>
          <div className="grid lg:grid-cols-3 gap-6  my-10 lg:my-20">
            <div className="col-span-1 h-full w-full    rounded-lg shadow-md ">
              <Image src={Banner} alt="register banner" className="object-cover rounded-lg"/>
            </div>
            <div className="col-span-2 h-full   p-10 bg-amber-50 rounded-lg shadow-md">
              <RegisterForm />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default RegisterPage;
