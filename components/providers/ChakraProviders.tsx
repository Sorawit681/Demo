'use client';

import { PropsWithChildren } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

const cache = createCache({ key: 'css', prepend: true });

export default function ChakraProviders({ children }: PropsWithChildren) {
  return (
    <CacheProvider value={cache}>
      <ChakraProvider>
        {children}
      </ChakraProvider>
    </CacheProvider>
  );
}
