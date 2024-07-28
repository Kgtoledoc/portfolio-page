import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kevin | Personal Portfolio",
  description: "Kevin is a Cloud DevOps Engineer with 5 years of experience. He is passionate person that want to use the tech to save the world! ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative h-[5000px] pt-28 sm:pt-36`}>
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 righ-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2x1:left-[-5rem]"></div>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
