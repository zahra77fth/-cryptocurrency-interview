import type { Metadata } from "next";
import './globals.css';
import { ReactNode } from 'react';
import Header from "../components/layout/Header";
import ReactQueryWrapper from "../components/layout/ReactQueryWrapper";
import localFont from 'next/font/local'

export const metadata: Metadata = {
    title: "بیت پین",
    description: "Test assignment for BitPin currency company",
};

const vazir = localFont({ src: '../public/fonts/vazir.ttf' })

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" dir="rtl">
        <body className={vazir.className}>
        <Header />
        <ReactQueryWrapper>
            {children}
        </ReactQueryWrapper>
        </body>
        </html>
    );
}
