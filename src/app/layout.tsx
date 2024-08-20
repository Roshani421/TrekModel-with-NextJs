import React from 'react';
import { Inter } from 'next/font/google';
import SideNavbar from '../app/components/SideNavBar'; 
import { ToastContainer } from 'react-toastify'; // Corrected path to match the latest structure
import '../app/globals.css'; // Import global styles

// Import Google Font
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Responsive Sidebar',
  description: 'A project with a responsive sidebar using Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SideNavbar />
        <main>{children}</main>
        <ToastContainer /> {/* Add ToastContainer here */}
      </body>
    </html>
  );
}
