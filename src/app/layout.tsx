import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";

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
        <main className="max-w-5xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
