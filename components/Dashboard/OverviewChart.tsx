// components/Dashboard/OverviewChart.tsx
'use client'

import React, { useState } from 'react';
import { Box, Text, Flex, IconButton, ButtonGroup } from '@chakra-ui/react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
  PieChart, Pie, Cell 
} from 'recharts';
import { FaChartBar, FaChartPie } from 'react-icons/fa';
import { expenseCategoryData } from './mockData';

export const OverviewChart = ({ data }: { data: any[] }) => {
  const [chartType, setChartType] = useState<'bar' | 'pie'>('bar');

  return (
    <Box bg="white" p={6} borderRadius="xl" shadow="sm" border="1px" borderColor="gray.100" h="450px">
      
      <Flex justify="space-between" align="center" mb={6}>
        <Text fontSize="lg" fontWeight="bold">
          {chartType === 'bar' ? 'ภาพรวมรายรับ-รายจ่าย (รายเดือน)' : 'สัดส่วนค่าใช้จ่ายตามหมวดหมู่'}
        </Text>

        <ButtonGroup size="sm" isAttached variant="outline">
          <IconButton 
            aria-label="Bar Chart" 
            icon={<FaChartBar />} 
            colorScheme={chartType === 'bar' ? 'purple' : 'gray'}
            variant={chartType === 'bar' ? 'solid' : 'outline'}
            onClick={() => setChartType('bar')}
          />
          <IconButton 
            aria-label="Pie Chart" 
            icon={<FaChartPie />} 
            colorScheme={chartType === 'pie' ? 'purple' : 'gray'}
            variant={chartType === 'pie' ? 'solid' : 'outline'}
            onClick={() => setChartType('pie')}
          />
        </ButtonGroup>
      </Flex>
      
      <ResponsiveContainer width="100%" height="85%">
        {chartType === 'bar' ? (
          <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#718096', fontSize: 12 }} 
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#718096', fontSize: 12 }} 
              tickFormatter={(value: any) => `฿${value/1000}k`}
            />
            <Tooltip 
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              formatter={(value: any) => [`฿${Number(value).toLocaleString()}`, '']}
            />
            <Legend wrapperStyle={{ paddingTop: '20px' }} />
            
            <Bar dataKey="income" name="รายรับ" fill="#48BB78" radius={[4, 4, 0, 0]} barSize={20} />
            <Bar dataKey="expense" name="รายจ่าย" fill="#F56565" radius={[4, 4, 0, 0]} barSize={20} />
          </BarChart>
        ) : (
          <PieChart>
            <Pie
              data={expenseCategoryData}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={100}
              paddingAngle={2}
              dataKey="value"
              nameKey="name"
              // ✅ แก้ตรงนี้: ใส่ : any เพื่อบอกว่าให้ข้ามการเช็ค Type ตรงนี้ไปเลย
              label={({ name, percent }: any) => `${name} ${(percent * 100).toFixed(0)}%`}
              labelLine={false}
            >
              {expenseCategoryData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
               formatter={(value: any) => `฿${Number(value).toLocaleString()}`}
               contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
            />
            <Legend 
                layout="vertical" 
                align="right" 
                verticalAlign="middle"
                iconType="circle"
            />
          </PieChart>
        )}
      </ResponsiveContainer>
    </Box>
  );
};