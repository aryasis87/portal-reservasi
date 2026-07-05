import './globals.css';
import { Barlow_Condensed, Space_Mono } from 'next/font/google';

const barlow = Barlow_Condensed({ subsets: ['latin'], variable: '--font-barlow', weight: ['600', '700', '800'] });
const spacemono = Space_Mono({ subsets: ['latin'], variable: '--font-spacemono', weight: ['400', '700'] });


const __jsonld = {"@context":"https://schema.org","@type":"CollectionPage","name":"PortalReservasi","description":"Koleksi 5 aplikasi booking","url":"https://portal-reservasi-nu.vercel.app","isPartOf":{"@type":"WebSite","name":"PintuWeb","url":"https://pintuweb.id"}};

export const metadata = {
  metadataBase: new URL("https://portal-reservasi-nu.vercel.app"),
  title: "PortalReservasi — Lima Cara Mengambil Antrian",
  description: "PortalReservasi: 5 aplikasi booking dengan paradigma berbeda — restoran, hotel, klinik, futsal, dan bioskop.",
  applicationName: "PortalReservasi",
  keywords: ["template booking", "aplikasi reservasi", "sistem booking", "koleksi template reservasi"],
  authors: [{ name: "PortalReservasi" }],
  creator: "PortalReservasi",
  publisher: "PortalReservasi",
  alternates: { canonical: "https://portal-reservasi-nu.vercel.app" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://portal-reservasi-nu.vercel.app",
    siteName: "PortalReservasi",
    title: "PortalReservasi — Lima Cara Mengambil Antrian",
    description: "PortalReservasi: 5 aplikasi booking dengan paradigma berbeda — restoran, hotel, klinik, futsal, dan bioskop.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "PortalReservasi — Lima Cara Mengambil Antrian" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PortalReservasi — Lima Cara Mengambil Antrian",
    description: "PortalReservasi: 5 aplikasi booking dengan paradigma berbeda — restoran, hotel, klinik, futsal, dan bioskop.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${barlow.variable} ${spacemono.variable} antialiased`}>
        <main>{children}</main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
