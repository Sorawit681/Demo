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

  // 2. Logic กรองรายการธุรกรรม (Transactions) - ใช้แสดงในรายการล่าสุดด้านขวาล่าง
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

  // 3. Logic กรองข้อมูลกราฟ (Chart Data) - ใช้แสดงในกราฟและตารางรายเดือน
  const filteredChartData = useMemo(() => {
    if (filterMonth === 'all') return monthlyData;
    
    // แปลงรหัสเดือนเป็นชื่อเดือนให้ตรงกับข้อมูลใน mockData
    const monthMap: Record<string, string> = {
      '01': 'ม.ค.', '02': 'ก.พ.', '03': 'มี.ค.', 
      '04': 'เม.ย.', '05': 'พ.ค.', '06': 'มิ.ย.',
      '07': 'ก.ค.', '08': 'ส.ค.', '09': 'ก.ย.',
      '10': 'ต.ค.', '11': 'พ.ย.', '12': 'ธ.ค.'
    };
    return monthlyData.filter(d => d.name === monthMap[filterMonth]);
  }, [filterMonth]);

  // 4. (ใหม่) Logic คำนวณยอดรวมสำหรับการ์ด SummaryCards
  // จะคำนวณจาก filteredChartData เพื่อให้ยอดตรงกับกราฟและตาราง
  const summaryInfo = useMemo(() => {
    const total = filteredChartData.reduce((acc, curr) => ({
      income: acc.income + curr.income,
      expense: acc.expense + curr.expense,
    }), { income: 0, expense: 0 });

    return {
      income: total.income,
      expense: total.expense,
      balance: total.income - total.expense
    };
  }, [filteredChartData]);

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

      {/* การ์ดสรุปยอด (ส่งค่าที่คำนวณใหม่เข้าไป) */}
      <SummaryCards 
        income={summaryInfo.income}
        expense={summaryInfo.expense}
        balance={summaryInfo.balance}
      />

      {/* กราฟและรายการล่าสุด */}
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