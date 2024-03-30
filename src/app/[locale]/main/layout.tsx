import { Metadata } from 'next';
import "@/styles/globals.css";
import { Noto_Sans, Noto_Sans_Arabic } from "next/font/google";
import { Providers } from '@/components/providers';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import { Suspense } from 'react';
import Loading from './loading';
import { useRouter } from 'next/navigation';

const notoSans = Noto_Sans({ subsets: ['latin'], variable: '--noto-sans' });
const notoSansArabic = Noto_Sans_Arabic({ subsets: ['arabic'], variable: '--noto-sans' });

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
}


export default function MainLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: { locale: string };
}) {
  const dir = params.locale === "ar" ? "rtl" : "ltr";
  const font = params.locale === "ar" ? notoSansArabic : notoSans;
  
  
  return (
    <html lang={params.locale} dir={dir}>
      <body className={font.variable} suppressHydrationWarning={true} >
        <Providers locale={params.locale}>
          <Navbar />
          <Suspense fallback={<Loading />}>
            {children}
          </Suspense>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}