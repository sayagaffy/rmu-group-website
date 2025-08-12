import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("http://rekayasamineralutama.com/"),
  title: "RMU Group - Advanced Mining Technology & Construction Services",
  description:
    "Leading provider of MPAL technology for sustainable mineral processing, marine sand mining, and comprehensive construction services in Indonesia.",
  keywords:
    "MPAL technology, mining, construction, marine sand, mineral processing, Indonesia, ESG, sustainable mining",
  authors: [{ name: "RMU Group", url: "https://www.rmineral.com" }],
  creator: "RMU Group",
  publisher: "RMU Group",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_ID",
    url: "http://rekayasamineralutama.com/",
    title: "RMU Group - Advanced Mining Technology",
    description:
      "Sustainable mineral processing with innovative MPAL technology",
    siteName: "RMU Group",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RMU Group - Mining Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RMU Group - Advanced Mining Technology",
    description:
      "Sustainable mineral processing with innovative MPAL technology",
    images: ["/images/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="canonical" href="https://www.rmineral.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "RMU Group",
              alternateName: "Rekayasa Mineral Utama Group",
              description:
                "Advanced mining technology and construction services provider specializing in MPAL technology for sustainable mineral processing",
              url: "https://www.rmineral.com",
              logo: "https://www.rmineral.com/images/logo.png",
              foundingDate: "2006",
              address: {
                "@type": "PostalAddress",
                streetAddress: "JL. TB Simatupang Kav. 36, RT.001/RW015",
                addressLocality: "Cilandak Barat",
                addressRegion: "Jakarta Selatan",
                postalCode: "12430",
                addressCountry: "Indonesia",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+62-21-22761331",
                contactType: "Customer Service",
                email: "info@rekayasamineralutama.com",
              },
              sameAs: ["https://www.rmineral.com"],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Mining and Construction Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "MPAL Technology",
                      description:
                        "Modular Pressurized Acid Leaching technology for sustainable mineral processing",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Marine Sand Mining",
                      description:
                        "Sustainable marine sand extraction and processing services",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Construction Services",
                      description:
                        "Comprehensive construction and infrastructure development services",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
