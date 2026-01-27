// components/Dashboard/SummaryCards.tsx
'use client'

import React, { ElementType } from 'react';
import { SimpleGrid, Box, Text, Flex, Icon } from '@chakra-ui/react';
import { FaWallet, FaArrowUp, FaArrowDown } from 'react-icons/fa';

// 1. Interface สำหรับข้อมูลที่จะรับเข้ามาใน Component หลัก
interface SummaryCardsProps {
  income: number;
  expense: number;
  balance: number;
}

// 2. Interface สำหรับ Props ของ Card แต่ละใบ (แก้ปัญหา any)
interface CardProps {
  title: string;
  amount: number;
  color: string;
  bg: string;
  icon: ElementType; // ใช้ ElementType สำหรับ Component ที่ส่งมาเป็น Icon
}

export const SummaryCards = ({ income, expense, balance }: SummaryCardsProps) => {
  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mb={8}>
      
      {/* 1. การ์ดรายรับ */}
      <Card 
        title="รายรับทั้งหมด" 
        amount={income} 
        color="green.500" 
        bg="green.50" 
        icon={FaArrowUp} 
      />

      {/* 2. การ์ดรายจ่าย */}
      <Card 
        title="รายจ่ายทั้งหมด" 
        amount={expense} 
        color="red.500" 
        bg="red.50" 
        icon={FaArrowDown} 
      />

      {/* 3. การ์ดเงินคงเหลือ */}
      <Card 
        title="เงินคงเหลือสุทธิ" 
        amount={balance} 
        color="purple.500" 
        bg="purple.50" 
        icon={FaWallet} 
      />

    </SimpleGrid>
  );
};

// Component ย่อย: ระบุ Type CardProps แทน any แล้ว
const Card = ({ title, amount, color, bg, icon }: CardProps) => (
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