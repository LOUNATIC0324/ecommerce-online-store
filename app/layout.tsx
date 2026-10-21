import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Green Basket | Fresh Fruits & Vegetables',
  description: 'Fresh vegetables and fruits delivered to your doorstep.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
