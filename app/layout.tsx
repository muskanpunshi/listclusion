import type { Metadata } from "next";

import "@styles/globals.css";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/effect-fade";



export const metadata: Metadata = {
  title: "Home - ListClusion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-white dark:bg-white font-primary  `}>
        {children}
      </body>
    </html>
  );
}
