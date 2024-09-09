import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


export const metadata: Metadata = {
  title: "crud",
  description: "create a crud about likes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
