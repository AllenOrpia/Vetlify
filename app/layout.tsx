import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vetlify",
  description: "AI-powered veterinary care platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{ 
        variables: {
          colorPrimary: '#34d399', // primary color
          colorText: '#d1d5db', // text color
          colorTextSecondary: '#a1a1aa', // secondary text color
          // colorBackground: '#0f172a', // background color

          
          



        }
      }}
    
    >
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
        >
          {children}
        </body>
      </html>

    </ClerkProvider>
  );
}
