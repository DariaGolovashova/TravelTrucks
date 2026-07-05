import QueryProvider from '../providers/QueryProvider';
import './globals.css';
import { Toaster } from 'react-hot-toast';

export const metadata = {
  metadataBase: new URL('http://localhost:3001'),
  title: 'TravelTrucks',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          {children} <Toaster position="top-right" />
        </QueryProvider>
      </body>
    </html>
  );
}
