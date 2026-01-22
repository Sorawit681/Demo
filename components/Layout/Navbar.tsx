'use client'

import React from 'react';
import { Box, Flex, Text, Button, HStack, VStack } from '@chakra-ui/react';

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
            {/* ใช้ Emoji แทนไอคอนชั่วคราว */}
            <Text fontSize="2xl">📊</Text> 
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
            gap={2}
          >
            <span>💰</span> {/* Emoji ถุงเงิน */}
            <Text>รายรับ & รายจ่าย</Text>
          </Button>

          <Button 
            variant="ghost" 
            color="white"
            _hover={{ bg: 'whiteAlpha.200' }}
            size="md"
            borderRadius="full"
            px={6}
            gap={2}
          >
            <span>📅</span> {/* Emoji ปฏิทิน */}
            <Text>ระบบจองอุปกรณ์</Text>
          </Button>
        </HStack>

      </VStack>
    </Box>
  );
};