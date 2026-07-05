import QueryProvider from '../providers/QueryProvider';
import './globals.css';

export const metadata = {
  metadataBase: new URL('http://localhost:3001'),
  title: 'TravelTrucks',
};
// const queryClient = new QueryClient();
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
