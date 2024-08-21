import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Billspot",
  description: "Bill and Utility purchase made easy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="shortcut icon" href="/static/logo.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
