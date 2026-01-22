// components/Layout/Layout.tsx
'use client'

import React, { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';
import { Navbar } from './Navbar'; 

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box minH="100vh" bg="gray.50">
      <Navbar />
      <Box p={8} maxW="7xl" mx="auto">
        {children}
      </Box>
    </Box>
  );
};