import type { Metadata } from "next";

//import "./globals.css";
 import "../styles/global.css"

export const metadata: Metadata = {
  title: "Comelon",
  description: "Mejores restaurantes",
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
