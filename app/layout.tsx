import { Nunito } from "next/font/google";

import "./globals.css";
import Navbar from "@/app/components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/Modals/RegisterModal";

export const metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <div className="pb-20 pt-28">
          <ClientOnly>
            <RegisterModal />
            <Navbar />
          </ClientOnly>
        </div>
        {children}
      </body>
    </html>
  );
}
