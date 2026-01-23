// components/Dashboard/FilterBar.tsx
'use client'

import React from 'react';
import { Flex, Select, HStack, Text, Icon, Box } from '@chakra-ui/react';
import { FaFilter } from 'react-icons/fa';

interface FilterBarProps {
  currentType: string;
  onTypeChange: (value: string) => void;
  currentMonth: string;
  onMonthChange: (value: string) => void;
}

export const FilterBar = ({ 
  currentType, 
  onTypeChange, 
  currentMonth, 
  onMonthChange 
}: FilterBarProps) => {
  return (
    <Flex 
      bg="white" 
      p={4} 
      borderRadius="xl" 
      shadow="sm" 
      border="1px" 
      borderColor="gray.100"
      mb={6}
      justify="space-between"
      align="center"
      wrap="wrap"
      gap={4}
    >
      <HStack>
        <Box p={2} bg="purple.50" borderRadius="lg" color="purple.500">
          <Icon as={FaFilter} />
        </Box>
        <Text fontWeight="bold" color="gray.700">ตัวกรองข้อมูล:</Text>
      </HStack>

      <HStack spacing={4} flex={1} justify="flex-end">
        {/* เลือกประเภท (Type) */}
        <Select 
          w={{ base: "100%", md: "200px" }} 
          value={currentType}
          onChange={(e) => onTypeChange(e.target.value)}
          bg="gray.50"
          borderColor="gray.200"
          borderRadius="lg"
        >
          <option value="all">ทั้งหมด (All Types)</option>
          <option value="income">รายรับ (Income)</option>
          <option value="expense">รายจ่าย (Expense)</option>
        </Select>

        {/* เลือกเดือน (Month) */}
        <Select 
          w={{ base: "100%", md: "200px" }}
          value={currentMonth}
          onChange={(e) => onMonthChange(e.target.value)}
          bg="gray.50"
          borderColor="gray.200"
          borderRadius="lg"
        >
          <option value="all">ทุกเดือน (All Months)</option>
          <option value="01">มกราคม</option>
          <option value="02">กุมภาพันธ์</option>
          <option value="03">มีนาคม</option>
          <option value="04">เมษายน</option>
          <option value="05">พฤษภาคม</option>
          <option value="06">มิถุนายน</option>
          <option value="07">กรกฎาคม</option>
          <option value="08">สิงหาคม</option>
          <option value="09">กันยายน</option>
          <option value="10">ตุลาคม</option>
          <option value="11">พฤศจิกายน</option>
          <option value="12">ธันวาคม</option>
        </Select>
      </HStack>
    </Flex>
  );
};