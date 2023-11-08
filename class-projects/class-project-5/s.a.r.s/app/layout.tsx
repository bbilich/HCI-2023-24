import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";

// Get this info from some external source (e.g. CMS)
const pages = {
  Home: "/",
  AboutUs: "/about",
  Blog: "/blog",
  Activities: "/activities",
  FoodNBeer: "/foodNbeer",
  LineUp: "/lineup",
  Shop: "/shop",
  SignIn: "/signin",
};

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "S.A.R.S.",
  description: "Next.js lab project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="flex items-center justify-center p-4">
          <ul className="flex gap-8">
            {Object.entries(pages).map(([name, path]) => (
              <li key={name}>
                <Link href={path}>{name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
