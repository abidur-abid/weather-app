import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/shared components/Navbar";


const roboto = Roboto({ subsets: ["latin"], weight: ['100', '300', '400', '500', '700', '900'] });

export const metadata: Metadata = {
  title: "Weather App",
  description: "Dynamic Weather Information based on Location",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar/>
        <main className="max-w-5xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
