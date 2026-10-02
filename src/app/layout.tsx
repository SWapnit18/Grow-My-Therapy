import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds, PsyD | Santa Monica Therapist for Anxiety, Trauma & Burnout",
  description:
    "Dr. Maya Reynolds, PsyD is a Licensed Clinical Psychologist providing warm, collaborative therapy for adults in Santa Monica, California and secure telehealth statewide.",
  keywords: [
    "Santa Monica therapist",
    "therapist in Santa Monica",
    "anxiety therapy Santa Monica",
    "trauma therapy Santa Monica",
    "burnout therapy Santa Monica",
    "psychologist Santa Monica",
  ],
  authors: [{ name: "Dr. Maya Reynolds, PsyD" }],
  openGraph: {
    title: "Dr. Maya Reynolds, PsyD | Santa Monica Therapist for Anxiety, Trauma & Burnout",
    description:
      "Warm, collaborative, evidence-based therapy for adults navigating anxiety, trauma, and burnout in Santa Monica and throughout California.",
    url: "https://drmayareynolds.com",
    siteName: "Dr. Maya Reynolds, PsyD",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${plusJakarta.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist",
              "image": "/images/dr-maya-reynolds.jpg",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123th Street 45 W",
                "addressLocality": "Santa Monica",
                "addressRegion": "CA",
                "postalCode": "90401",
                "addressCountry": "US",
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 34.0195,
                "longitude": -118.4912,
              },
              "description":
                "Santa Monica therapist for adults experiencing anxiety, trauma, and burnout. In-person therapy in Santa Monica and secure telehealth across California.",
              "medicalSpecialty": "Psychology",
              "areaServed": ["Santa Monica", "California"],
            }),
          }}
        />
      </head>
      <body className="bg-[#FAF8F5] text-[#272A2B] font-sans antialiased selection:bg-[#E8EFEA] selection:text-[#3B5249]">
        {children}
      </body>
    </html>
  );
}
