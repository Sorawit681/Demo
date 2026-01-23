'use client'

import React from 'react';
import { Box, Text, VStack, Flex, Icon } from '@chakra-ui/react';
import { FaShoppingBag, FaMoneyBillWave } from 'react-icons/fa';

// แก้ให้รับ data ผ่าน props
export const RecentTransactions = ({ data }: { data: any[] }) => {
  return (
    <Box bg="white" p={6} borderRadius="xl" shadow="sm" border="1px" borderColor="gray.100" h="100%">
      <Flex justify="space-between" align="center" mb={4}>
        <Text fontSize="lg" fontWeight="bold">รายการล่าสุด ({data.length})</Text>
        <Text fontSize="xs" color="purple.500" cursor="pointer">ดูทั้งหมด</Text>
      </Flex>

      <VStack spacing={4} align="stretch">
        {/* กรณีไม่มีข้อมูล */}
        {data.length === 0 && (
            <Text color="gray.400" textAlign="center" py={10}>ไม่พบรายการที่เลือก</Text>
        )}

        {data.map((item) => {
          const isIncome = item.type === 'income';
          
          return (
            <Flex key={item.id} justify="space-between" align="center">
              <Flex gap={3} align="center">
                <Flex 
                  w={10} h={10} 
                  bg={isIncome ? 'green.50' : 'red.50'} 
                  borderRadius="full" 
                  align="center" 
                  justify="center"
                  color={isIncome ? 'green.500' : 'red.500'}
                >
                  <Icon as={isIncome ? FaMoneyBillWave : FaShoppingBag} w={4} h={4} />
                </Flex>
                
                <Box>
                  <Text fontSize="sm" fontWeight="semibold">{item.title}</Text>
                  <Text fontSize="xs" color="gray.500">{item.date}</Text>
                </Box>
              </Flex>

              <Text 
                fontWeight="bold" 
                fontSize="sm" 
                color={isIncome ? 'green.500' : 'red.500'}
              >
                {isIncome ? '+' : '-'}{item.amount.toLocaleString()}
              </Text>
            </Flex>
          );
        })}
      </VStack>
    </Box>
  );
};