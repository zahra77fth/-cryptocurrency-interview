import type { Metadata } from "next";
import './globals.css';
import { ReactNode } from 'react';
import Header from "../components/layout/Header";
import ReactQueryWrapper from "../components/layout/ReactQueryWrapper";

export const metadata: Metadata = {
    title: "بیت پین",
    description: "Test assignment for BitPin currency company",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" dir="rtl">
        <body>
        <Header />
        <ReactQueryWrapper>
            {children}
        </ReactQueryWrapper>
        </body>
        </html>
    );
}
