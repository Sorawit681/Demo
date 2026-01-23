'use client'

import React from 'react';
import { 
  Box, Table, Thead, Tbody, Tr, Th, Td, 
  TableContainer, Text, Badge 
} from '@chakra-ui/react';

// แก้ให้รับ data ผ่าน props
export const MonthlyTable = ({ data }: { data: any[] }) => {
  return (
    <Box bg="white" p={6} borderRadius="xl" shadow="sm" border="1px" borderColor="gray.100">
      <Text fontSize="lg" fontWeight="bold" mb={4}>สรุปยอดเงินรายเดือน</Text>
      
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>เดือน</Th>
              <Th isNumeric>รายรับ</Th>
              <Th isNumeric>รายจ่าย</Th>
              <Th isNumeric>คงเหลือ</Th>
              <Th>สถานะ</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.length === 0 && (
              <Tr><Td colSpan={5} textAlign="center" color="gray.400">ไม่พบข้อมูล</Td></Tr>
            )}
            
            {data.map((item, index) => {
              const balance = item.income - item.expense;
              const isPositive = balance > 0;

              return (
                <Tr key={index}>
                  <Td fontWeight="medium">{item.name}</Td>
                  <Td isNumeric color="green.500">+{item.income.toLocaleString()}</Td>
                  <Td isNumeric color="red.500">-{item.expense.toLocaleString()}</Td>
                  <Td isNumeric fontWeight="bold" color={isPositive ? "blue.500" : "red.500"}>
                    {balance.toLocaleString()}
                  </Td>
                  <Td>
                    <Badge colorScheme={isPositive ? 'green' : 'red'}>
                      {isPositive ? 'เงินเหลือ' : 'ขาดทุน'}
                    </Badge>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};