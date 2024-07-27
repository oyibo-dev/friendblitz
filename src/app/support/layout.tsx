import React from 'react';
import MainNav from '../components/main-nav';

const title = 'Support';

export const metadata = {
  title,
  openGraph: {
    title,
    images: [`/api/og?title=${title}`],
  },
};

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div>
        <MainNav />
        {children}
    </div>
  )
}
