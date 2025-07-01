import Container from "@components/container";
import RegisterForm from "./components/form";
import Heading from "@components/heading";
import Paragraph from "@components/common/paragraph";
import Link from "next/link";
import Banner from "@public/register-banner.jpeg";
import Image from "next/image";

const RegisterPage = () => {
  return (
    <>
      <div className="lg:pt-36   py-34">
        <Container className="container mx-auto px-4">
          <div className="text-center max-w-5xl  mx-auto lg:mb-16 mb-10 fade-in-up">
            <Heading isHeadingH1={true}>Register Your <span className="text-primary">Company</span></Heading>
            {/* <Paragraph className="text-xl text-primary ">
              Already have an account?{" "}
              <Link href={"#"} className="text-secondary  hover:underline ">
                Login
              </Link>
            </Paragraph> */}
          </div>

          <div className="my-10 lg:my-20 h-full shadow-xl relative  w-full bg-[url('/template/shape/shape_28.svg')] bg-no-repeat bg-center bg-cover py-[20px] px-[20px] max-md:p-[8px] ">
            <RegisterForm />
          </div>
        </Container>
      </div>
    </>
  );
};

export default RegisterPage;
