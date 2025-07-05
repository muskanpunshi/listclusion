import Container from "@components/container";
import RegisterForm from "./components/form";
import Heading from "@components/heading";
import Paragraph from "@components/common/paragraph";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Register Your Company - ListClusion Business Directory | Get More Clients",
  description:
    "List your construction, architecture, or interior design business in Pakistan's premier professional directory. Increase visibility and connect with potential clients.",
  keywords: [
    "register company Pakistan",
    "business directory listing",
    "construction professionals directory",
    "architect registration",
    "contractor listing",
    "ListClusion signup",
    "Karachi business registration",
    "Lahore professional directory",
    "get more construction clients",
  ],

  openGraph: {
    title:
      "Register on ListClusion - Pakistan's Professional Services Directory",
    description:
      "Get your construction, architecture, or design business listed to connect with clients across Pakistan. Simple registration process.",
    url: "https://listclusion.com/register-company",
    siteName: "ListClusion",
    images: [
      {
        url: "https://listclusion.com/template/logo1.png",
        width: 1200,
        height: 630,
        alt: "ListClusion Company Registration - Grow Your Business",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Register Your Business on ListClusion",
    description:
      "Join Pakistan's fastest growing directory for construction and design professionals",
    images: ["https://listclusion.com/images/twitter-register.jpg"],
  },

  alternates: {
    canonical: "https://listclusion.com/register-company",
  },

  other: {
    "registration:eligibility":
      "Construction, Architecture, Interior Design professionals",
    "registration:deadline": "Open enrollment",
  },
};

const RegisterPage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Company Registration",
    description: "Registration form for professional services companies",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://listclusion.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Register Company",
          item: "https://listclusion.com/register-company",
        },
      ],
    },
    potentialAction: {
      "@type": "RegisterAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://listclusion.com/register-company",
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
        ],
      },
      result: {
        "@type": "Organization",
        name: "New Company Registration",
      },
    },
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="lg:pt-36   py-34">
        <Container className="container mx-auto px-4">
          <div className="text-center max-w-5xl  mx-auto lg:mb-16 mb-10 fade-in-up">
            <Heading isHeadingH1={true}>
              Register Your <span className="text-primary">Company</span>
            </Heading>
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
