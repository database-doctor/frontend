import "./globals.css";

import { ApolloWrapper } from "@/apollo-provider";
import { Inter } from "next/font/google";
import Navbar from "@/components/navigation/navbar/Navbar";
import ProvideChakra from "@/app/config/chakraprovider";
import { ProvideSession } from "@/lib/sessionprovider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Database Doctors",
  description:
    "Database monitoring tool - University of Waterloo CS 348 Project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ApolloWrapper>
          <ProvideChakra>
            <ProvideSession>
              {/* @ts-ignore */}
              <Navbar />
              {children}
            </ProvideSession>
          </ProvideChakra>
        </ApolloWrapper>
      </body>
    </html>
  );
}
