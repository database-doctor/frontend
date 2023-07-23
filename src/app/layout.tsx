import "./globals.css";
import { Inter } from "next/font/google";
import ProvideChakra from "@/chakraprovider";
import Navbar from "@/components/navigation/navbar/Navbar";
const inter = Inter({ subsets: ["latin"] });
import { ApolloWrapper } from "@/apollo-provider";

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
            {/* @ts-ignore */}
            <Navbar />
            {children}
          </ProvideChakra>
        </ApolloWrapper>
      </body>
    </html>
  );
}
