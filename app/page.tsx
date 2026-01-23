// app/page.tsx
'use client'

import React, { useState, useMemo } from 'react';
import { Box, Text, Grid, GridItem } from '@chakra-ui/react';
import { Layout } from '../components/Layout/Layout';
// Components
import { FilterBar } from '../components/Dashboard/FilterBar';
import { SummaryCards } from '../components/Dashboard/SummaryCards';
import { OverviewChart } from '../components/Dashboard/OverviewChart';
import { RecentTransactions } from '../components/Dashboard/RecentTransactions';
import { MonthlyTable } from '../components/Dashboard/MonthlyTable';
// Data
import { recentTransactions, monthlyData } from '../components/Dashboard/mockData';

export default function Home() {
  // 1. สร้างตัวแปรเก็บค่าการกรอง
  const [filterType, setFilterType] = useState('all');
  const [filterMonth, setFilterMonth] = useState('all');

  // 2. Logic กรองรายการธุรกรรม (Transactions)
  const filteredTransactions = useMemo(() => {
    return recentTransactions.filter(item => {
      // กรองประเภท
      const matchType = filterType === 'all' || item.type === filterType;
      // กรองเดือน (ดึงจากวันที่ เช่น '2024-06-25')
      const monthStr = item.date.split('-')[1]; 
      const matchMonth = filterMonth === 'all' || monthStr === filterMonth;
      
      return matchType && matchMonth;
    });
  }, [filterType, filterMonth]);

  // 3. Logic กรองข้อมูลกราฟ (Chart Data)
  const filteredChartData = useMemo(() => {
    if (filterMonth === 'all') return monthlyData;
    
    // แปลงรหัสเดือนเป็นชื่อเดือนให้ตรงกับข้อมูลใน mockData
    const monthMap: Record<string, string> = {
      '01': 'ม.ค.', '02': 'ก.พ.', '03': 'มี.ค.', 
      '04': 'เม.ย.', '05': 'พ.ค.', '06': 'มิ.ย.'
    };
    return monthlyData.filter(d => d.name === monthMap[filterMonth]);
  }, [filterMonth]);

  return (
    <Layout>
      <Box mb={6}>
        <Text fontSize="2xl" fontWeight="bold" color="purple.700">
          แดชบอร์ดการเงิน
        </Text>
        <Text color="gray.500">สรุปภาพรวมสถานะการเงินของคุณ</Text>
      </Box>

      {/* ส่วนตัวกรอง */}
      <FilterBar 
        currentType={filterType}
        onTypeChange={setFilterType}
        currentMonth={filterMonth}
        onMonthChange={setFilterMonth}
      />

      {/* การ์ดสรุปยอด (ยังใช้ข้อมูลรวม ถ้าอยากกรองต้องเขียน logic เพิ่ม) */}
      <SummaryCards />

      {/* กราฟและรายการล่าสุด (ส่งข้อมูลที่กรองแล้วเข้าไป) */}
      <Grid templateColumns={{ base: "1fr", lg: "2fr 1fr" }} gap={6} mb={6}>
        <GridItem>
          <OverviewChart data={filteredChartData} />
        </GridItem>
        <GridItem>
          <RecentTransactions data={filteredTransactions} />
        </GridItem>
      </Grid>

      {/* ตารางสรุปรายเดือน */}
      <Box>
        <MonthlyTable data={filteredChartData} />
      </Box>

    </Layout>
  );
}