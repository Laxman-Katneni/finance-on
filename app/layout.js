import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/Header";
import Image from "next/image";

export const metadata = {
  title: "BudgetIQ",
  description: "AI Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          {/* Header */}
          <Header />
          <main className="min-h-screen pt-16 md:pt-20 ">{children}</main>
          <Toaster richColors />
          <footer className="bg-blue-50 py-12">
            <div className="flex flex-col items-center container mx-auto px-4 text-center text-gray-600">
              <Image
                height={200}
                width={100}
                alt="Laxman Logo"
                src="/LaxmanLogo2.png"
                className="h-20"
              />
              <p>Created by Laxman Katneni</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
