import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";

export const metadata = {
  title: "BudgetIQ",
  description: "AI Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={``}>
          {/* Header */}
          <Header />
          <main className="pt-23 md:pt-24">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
