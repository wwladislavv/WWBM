import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
    weight: ['400', '600'],
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'WWBM',
    description: 'Who Wants to Be a Millionaire?',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={inter.className}>
            <body>{children}</body>
        </html>
    );
}
