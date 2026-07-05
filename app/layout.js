import './globals.css';
import { Barlow_Condensed, Space_Mono } from 'next/font/google';

const barlow = Barlow_Condensed({ subsets: ['latin'], variable: '--font-barlow', weight: ['600', '700', '800'] });
const spacemono = Space_Mono({ subsets: ['latin'], variable: '--font-spacemono', weight: ['400', '700'] });

export const metadata = {
  title: 'PortalReservasi — Lima Cara Mengambil Antrian',
  description: 'PortalReservasi: 5 aplikasi booking dengan paradigma berbeda — restoran, hotel, klinik, futsal, dan bioskop.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${barlow.variable} ${spacemono.variable} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
