import { Booking, SummaryCardItem , PieItem, TimeSlot, Utilization } from '@/types/types';

import { FiBox, FiCheckCircle, FiClock, FiAlertTriangle } from 'react-icons/fi';


export const summaryCardItem: SummaryCardItem[] = [
  {
    title: 'จำนวนอุปกรณ์ทั้งหมด',
    value: 150,
    sub: 'รายการทั้งหมด',
    color: 'blue',
    icon: FiBox,
  },
  {
    title: 'อุปกรณ์ที่ว่าง',
    value: 146,
    sub: 'พร้อมใช้งาน',
    color: 'green',
    icon: FiCheckCircle,
  },
  {
    title: 'อุปกรณ์ที่ถูกจอง',
    value: 4,
    sub: 'กำลังใช้งาน',
    color: 'orange',
    icon: FiClock,
  },
  {
    title: 'การจองที่มีปัญหา',
    value: 2,
    sub: 'ต้องดำเนินการ',
    color: 'red',
    icon: FiAlertTriangle,
  },
];



export const bookings: Booking[] = [
  { id: 'BK001', equipment: 'รถไถนา', user: 'สมชาย ใจดี', date: '2026-01-20', time: '14:00-16:00', center: 'ศูนย์ A1', status: 'confirmed' },
  { id: 'BK002', equipment: 'เครื่องพ่นยา', user: 'สมหญิง รักสะอาด', date: '2026-01-20', time: '10:00-12:00', center: 'ศูนย์ B2', status: 'confirmed' },
  { id: 'BK003', equipment: 'เครื่องหว่านปุ๋ย', user: 'ประเสริฐ มั่นคง', date: '2026-01-21', time: '08:00-10:00', center: 'ศูนย์ A1', status: 'pending' },
  { id: 'BK004', equipment: 'ปั๊มน้ำ', user: 'วิไล สวยงาม', date: '2026-01-21', time: '14:00-16:00', center: 'ศูนย์ C3', status: 'problem' },
];

export const equipmentPie: PieItem[] = [
  { name: 'รถไถนา', value: 45, color: '#3b82f6' },
  { name: 'เครื่องพ่นยา', value: 38, color: '#10b981' },
  { name: 'เครื่องหว่านปุ๋ย', value: 32, color: '#f59e0b' },
  { name: 'ปั๊มน้ำ', value: 28, color: '#ef4444' },
  { name: 'โดรนการเกษตร', value: 25, color: '#8b5cf6' },
];

export const timeSlots: TimeSlot[] = [
  { time: '08:00-10:00', bookings: 12 },
  { time: '10:00-12:00', bookings: 25 },
  { time: '12:00-14:00', bookings: 18 },
  { time: '14:00-16:00', bookings: 32 },
  { time: '16:00-18:00', bookings: 28 },
  { time: '18:00-20:00', bookings: 15 },
];

export const utilization: Utilization[] = [
  { rank: 1, center: 'ศูนย์ A1', utilization: 82 },
  { rank: 2, center: 'ศูนย์ B2', utilization: 75 },
  { rank: 3, center: 'ศูนย์ C3', utilization: 68 },
  { rank: 4, center: 'ศูนย์ D4', utilization: 55 },
  { rank: 5, center: 'ศูนย์ E5', utilization: 42 },
];
