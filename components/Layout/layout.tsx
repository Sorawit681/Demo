// components/Layout/Layout.tsx
'use client'

import React, { ReactNode } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { Sidebar } from './Sidebar'; 

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    // ✅ ใช้ Flex เพื่อให้ Sidebar อยู่ซ้าย และเนื้อหาอยู่ขวา
    <Flex minH="100vh" bg="gray.50" direction="row"> 
      
      {/* 1. Sidebar (ถูก Fix ตำแหน่งไว้ซ้ายสุด) */}
      <Sidebar />

      {/* 2. เนื้อหา (ต้องขยับหนี Sidebar 260px ไม่งั้นจะทับกัน) */}
      <Box 
        flex="1" 
        ml="260px" // ⚠️ ตรงนี้สำคัญมาก! ต้องเท่ากับความกว้าง Sidebar
        p={8} 
        w="calc(100% - 260px)"
      >
        <Box maxW="7xl" mx="auto">
            {children}
        </Box>
      </Box>

    </Flex>
  );
};