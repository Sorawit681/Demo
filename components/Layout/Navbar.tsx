// components/Layout/Navbar.tsx
'use client'

import React from 'react';
import { Box, Flex, Text, Button, Icon, HStack, VStack } from '@chakra-ui/react';
import { FaWallet } from 'react-icons/fa'; 
import { MdDashboard, MdCalendarToday } from 'react-icons/md';

export const Navbar = () => {
  return (
    <Box 
      as="nav" 
      bgGradient="linear(to-r, blue.500, purple.500)" 
      color="white" 
      px={8} 
      py={6}
      shadow="md"
    >
      <VStack spacing={6} align="stretch">
        
        {/* ส่วนโลโก้ */}
        <HStack spacing={3}>
          <Flex 
            bg="whiteAlpha.300" 
            p={2} 
            borderRadius="lg" 
            align="center" 
            justify="center"
          >
            <Icon as={MdDashboard} w={6} h={6} />
          </Flex>
          <Box>
            <Text fontSize="xl" fontWeight="bold" lineHeight="shorter">
              Dashboard
            </Text>
            <Text fontSize="xs" opacity={0.8}>
              ระบบจัดการข้อมูลแบบครบวงจร
            </Text>
          </Box>
        </HStack>

        {/* ส่วนปุ่มเมนู */}
        <HStack spacing={4}>
          <Button 
            bg="white" 
            color="purple.600"
            _hover={{ bg: 'gray.100' }}
            variant="solid"
            size="md"
            borderRadius="full"
            px={6}
            leftIcon={<FaWallet />} // ใส่แบบนี้ตรงๆ ได้เลย
          >
            รายรับ & รายจ่าย
          </Button>

          <Button 
            variant="ghost" 
            color="white"
            _hover={{ bg: 'whiteAlpha.200' }}
            size="md"
            borderRadius="full"
            px={6}
            leftIcon={<MdCalendarToday />} // ใส่แบบนี้ตรงๆ ได้เลย
          >
            ระบบจองอุปกรณ์
          </Button>
        </HStack>

      </VStack>
    </Box>
  );
};