// app/page.tsx
'use client'

import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Layout } from '../components/Layout/layout'; // ต้องตรงกับชื่อไฟล์ Layout.tsx

export default function Home() {
  return (
    <Layout>
      <Box mb={6}>
        <Text fontSize="2xl" fontWeight="bold" color="purple.700">
          รายรับ & รายจ่าย
        </Text>
        <Text color="gray.500">ติดตามและจัดการการเงินของคุณ</Text>
      </Box>
      
      {/* พื้นที่สำหรับ Stat Cards */}
      <Box 
        h="200px" 
        border="2px dashed" 
        borderColor="gray.300" 
        borderRadius="xl" 
        display="flex" 
        alignItems="center" 
        justifyContent="center" 
        color="gray.400"
      >
        พื้นที่สำหรับวาง Stat Cards
      </Box>
    </Layout>
  );
}