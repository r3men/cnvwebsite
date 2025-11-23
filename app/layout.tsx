import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Code Name Verity",
  description: "Template from Vercel.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-black text-white">
      <head />
      <body className="font-sans bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
