// components/Dashboard/SummaryCards.tsx
'use client'

import React from 'react';
import { SimpleGrid, Box, Text, Flex, Icon } from '@chakra-ui/react';
import { FaWallet, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { summaryData } from './mockData';

export const SummaryCards = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mb={8}>
      
      {/* 1. การ์ดรายรับ (สีเขียว) */}
      <Card 
        title="รายรับทั้งหมด" 
        amount={summaryData.income} 
        color="green.500" 
        bg="green.50" 
        icon={FaArrowUp} 
      />

      {/* 2. การ์ดรายจ่าย (สีแดง) */}
      <Card 
        title="รายจ่ายทั้งหมด" 
        amount={summaryData.expense} 
        color="red.500" 
        bg="red.50" 
        icon={FaArrowDown} 
      />

      {/* 3. การ์ดเงินคงเหลือ (สีม่วง) */}
      <Card 
        title="เงินคงเหลือสุทธิ" 
        amount={summaryData.balance} 
        color="purple.500" 
        bg="purple.50" 
        icon={FaWallet} 
      />

    </SimpleGrid>
  );
};

// Component ย่อยสำหรับการ์ดแต่ละใบ
const Card = ({ title, amount, color, bg, icon }: any) => (
  <Box bg="white" p={6} borderRadius="xl" shadow="sm" border="1px" borderColor="gray.100">
    <Flex justify="space-between" align="center">
      <Box>
        <Text color="gray.500" fontSize="sm" mb={1}>{title}</Text>
        <Text fontSize="2xl" fontWeight="bold" color={color}>
          ฿{amount.toLocaleString()}
        </Text>
      </Box>
      <Flex bg={bg} p={3} borderRadius="lg" color={color}>
        <Icon as={icon} w={6} h={6} />
      </Flex>
    </Flex>
  </Box>
);