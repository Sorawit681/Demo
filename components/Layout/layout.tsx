// components/Layout/Layout.tsx
'use client'

import React, { ReactNode } from 'react'; // import ReactNode เพื่อแก้ตัวแดง
import { Box } from '@chakra-ui/react';
import { Navbar } from './Navbar'; // เรียกไฟล์ Navbar ที่อยู่ข้างๆ กัน

interface LayoutProps {
  children: ReactNode; // กำหนด Type ให้ชัดเจน
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box minH="100vh" bg="gray.50"> {/* พื้นหลังสีเทาทั้งหน้า */}
      <Navbar />
      <Box p={8} maxW="7xl" mx="auto"> {/* กล่องเนื้อหาตรงกลาง */}
        {children}
      </Box>
    </Box>
  );
};