import { Metadata } from 'next';
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
}


export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: { locale: string };
}) {



  return (
    <>
      {children}
    </>

  )
}