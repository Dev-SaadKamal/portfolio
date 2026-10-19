import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FAFAF7",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://dev-saadkamal.vercel.app"),
  title: "Saad Kamal | MERN Stack Developer & Full-Stack Web Developer",
  description:
    "Saad Kamal is a MERN Stack Developer building modern web applications, SaaS products and scalable business systems with React, Node.js, Express and MongoDB.",
  keywords: [
    "MERN Stack Developer",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Next.js Developer",
    "SaaS Developer",
    "Web Application Developer",
    "Full Stack Developer Pakistan",
    "Saad Kamal",
    "Software Engineer",
  ],
  authors: [{ name: "Saad Kamal", url: "https://github.com/Dev-SaadKamal" }],
  creator: "Saad Kamal",
  publisher: "Saad Kamal",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Saad Kamal | MERN Stack Developer & Full-Stack Web Developer",
    description:
      "MERN Stack Developer building modern web applications, SaaS products and scalable business systems.",
    url: "https://dev-saadkamal.vercel.app",
    siteName: "Saad Kamal Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saad Kamal | MERN Stack Developer & Full-Stack Web Developer",
    description:
      "MERN Stack Developer building modern web applications, SaaS products and scalable business systems.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Saad Kamal",
    jobTitle: "MERN Stack Developer",
    description:
      "MERN Stack Developer building modern web applications, SaaS products and scalable business systems.",
    url: "https://dev-saadkamal.vercel.app",
    email: "saadkamal937@gmail.com",
    sameAs: [
      "https://github.com/Dev-SaadKamal",
      "https://www.linkedin.com/in/i-muhammadsaad/",
      "https://www.instagram.com/dev_saadkamal/",
      "https://www.facebook.com/DevSaadKamal/",
    ],
    knowsAbout: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "REST APIs",
      "JWT Authentication",
    ],
  };

  const jsonLdWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Saad Kamal Portfolio",
    url: "https://dev-saadkamal.vercel.app",
    description:
      "Personal portfolio of Saad Kamal - MERN Stack Developer building production web applications.",
    author: {
      "@type": "Person",
      name: "Saad Kamal",
    },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans bg-warm-white text-charcoal min-h-screen selection:bg-emerald-signal selection:text-charcoal-deep antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
