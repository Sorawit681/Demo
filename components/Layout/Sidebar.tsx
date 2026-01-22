// components/Layout/Sidebar.tsx
'use client'

import React from 'react';
import { Box, VStack, HStack, Text, Icon, Button, Flex } from '@chakra-ui/react';
import { FaWallet } from 'react-icons/fa';
import { MdDashboard, MdCalendarToday } from 'react-icons/md';
import Link from 'next/link'; // ✅ ต้องมีตัวนี้เพื่อเปลี่ยนหน้า
import { usePathname } from 'next/navigation'; // ✅ ใช้เช็คว่าอยู่หน้าไหน

export const Sidebar = () => {
  const pathname = usePathname(); // ดึง path ปัจจุบันมาดู

  // ฟังก์ชั่นเช็คว่าปุ่มไหนต้องเป็นสีม่วง
  const isActive = (path: string) => pathname === path;

  return (
    <Box
      as="nav"
      w="260px"
      h="100vh"
      bg="white"
      borderRight="1px"
      borderColor="gray.100"
      pos="fixed"
      left={0}
      top={0}
      py={8}
      px={4}
      boxShadow="sm"
      zIndex="sticky"
    >
      <VStack spacing={10} align="stretch">
        
        {/* Logo */}
        <HStack spacing={3} px={4}>
           <Flex
             bgGradient="linear(to-r, blue.500, purple.500)"
             p={2}
             borderRadius="lg"
             color="white"
             align="center"
             justify="center"
           >
             <Icon as={MdDashboard} boxSize={6} />
           </Flex>
           <Box>
             <Text fontWeight="bold" fontSize="lg" lineHeight="1">Dashboard</Text>
             <Text fontSize="xs" color="gray.500">Finance App</Text>
           </Box>
        </HStack>

        {/* Menu Items */}
        <VStack spacing={2} align="stretch">
            
            {/* เมนู 1: หน้าหลัก (รายรับรายจ่าย) */}
            <Link href="/" passHref>
              <Button
                  as="a" // ให้ทำตัวเป็น Link
                  variant="ghost"
                  justifyContent="flex-start"
                  leftIcon={<FaWallet />} 
                  w="100%"
                  // ถ้าอยู่หน้าแรก (/) ให้เป็นสีม่วง, ถ้าไม่ใช่เป็นสีเทา
                  bg={isActive('/') ? 'purple.50' : 'transparent'}
                  color={isActive('/') ? 'purple.600' : 'gray.500'}
                  _hover={{ bg: 'purple.100' }}
              >
                  รายรับ & รายจ่าย
              </Button>
            </Link>

            {/* เมนู 2: หน้าจอง (Booking) */}
            <Link href="/booking" passHref>
              <Button
                  as="a"
                  variant="ghost"
                  justifyContent="flex-start"
                  leftIcon={<MdCalendarToday />}
                  w="100%"
                  // ถ้าอยู่หน้า booking (/booking) ให้เป็นสีม่วง
                  bg={isActive('/booking') ? 'purple.50' : 'transparent'}
                  color={isActive('/booking') ? 'purple.600' : 'gray.500'}
                  _hover={{ bg: 'purple.100' }}
              >
                  ระบบจองอุปกรณ์
              </Button>
            </Link>

        </VStack>
      </VStack>
    </Box>
  );
};