import WebLayout from "@components/container/layout";
import { GoogleReCaptchaProvider } from "@utils/libs/google-recaptcha";
import NextTopLoader from "nextjs-toploader";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTHA_SITE_KEY as string}
        scriptProps={{
          async: true,
          defer: true,
          appendTo: "head",
          nonce: undefined
        }}
      >
        <NextTopLoader
          color="#e8c347"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
        />
        <WebLayout>{children}</WebLayout>
      </GoogleReCaptchaProvider>
    </>
  );
}
