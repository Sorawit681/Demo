// app/booking/page.tsx
'use client'

import React from 'react';
// ถอยกลับ 2 ครั้ง (../../) เพื่อออกไปหา components
import { Layout } from '../../components/Layout/Layout'; 
import { Box, Text, Center, Icon, VStack } from '@chakra-ui/react';
import { MdBuild } from 'react-icons/md'; // ไอคอนรูปประแจ

export default function BookingPage() {
  return (
    <Layout>
      {/* ส่วนหัวข้อ */}
      <Box mb={6}>
        <Text fontSize="2xl" fontWeight="bold" color="purple.700">
          ระบบจองอุปกรณ์
        </Text>
        <Text color="gray.500">เลือกจองวันและเวลาใช้งานอุปกรณ์</Text>
      </Box>
      
      {/* กล่องเนื้อหาตรงกลาง (ทำเป็นหน้าว่างๆ ไว้ก่อน) */}
      <Center h="400px" bg="white" borderRadius="xl" shadow="sm" flexDirection="column" gap={4}>
        <VStack spacing={4}>
            <Box p={4} bg="purple.50" borderRadius="full">
                <Icon as={MdBuild} w={10} h={10} color="purple.500" />
            </Box>
            <Text fontSize="lg" fontWeight="semibold" color="gray.600">
                กำลังพัฒนาระบบจอง...
            </Text>
            <Text fontSize="sm" color="gray.400">
                (Booking System Coming Soon)
            </Text>
        </VStack>
      </Center>
    </Layout>
  );
}