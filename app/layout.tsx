import './globals.css';
import { PropsWithChildren } from 'react';
import ChakraProviders from '@/components/providers/ChakraProviders';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="th">
      <body suppressHydrationWarning>
        <ChakraProviders>
          {children}
        </ChakraProviders>
      </body>
    </html>
  );
}
