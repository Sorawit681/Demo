import { Booking, SummaryCard, PieItem, TimeSlot, Utilization } from './types';

export const summaryCards: SummaryCard[] = [
  { title: 'จำนวนอุปกรณ์ทั้งหมด', value: 150, color: 'bg-blue-600' },
  { title: 'อุปกรณ์ที่ว่าง', value: 146, color: 'bg-green-600' },
  { title: 'อุปกรณ์ที่ถูกจอง', value: 4, color: 'bg-orange-500' },
  { title: 'การจองที่มีปัญหา', value: 2, color: 'bg-red-600' },
];

export const bookings: Booking[] = [
  { id: 'BK001', equipment: 'โปรเจคเตอร์', user: 'สมชาย ใจดี', date: '2026-01-20', time: '14:00-16:00', center: 'ศูนย์ A1', status: 'confirmed' },
  { id: 'BK002', equipment: 'กล้องถ่ายรูป', user: 'สมหญิง รักสะอาด', date: '2026-01-20', time: '10:00-12:00', center: 'ศูนย์ B2', status: 'confirmed' },
  { id: 'BK003', equipment: 'ไมโครโฟน', user: 'ประเสริฐ มั่นคง', date: '2026-01-21', time: '08:00-10:00', center: 'ศูนย์ A1', status: 'pending' },
  { id: 'BK004', equipment: 'ลำโพง', user: 'วิไล สวยงาม', date: '2026-01-21', time: '14:00-16:00', center: 'ศูนย์ C3', status: 'problem' },
];

export const equipmentPie: PieItem[] = [
  { name: 'โปรเจคเตอร์', value: 45, color: '#3b82f6' },
  { name: 'กล้องถ่ายรูป', value: 38, color: '#10b981' },
  { name: 'ไมโครโฟน', value: 32, color: '#f59e0b' },
  { name: 'ลำโพง', value: 28, color: '#ef4444' },
  { name: 'คอมพิวเตอร์', value: 25, color: '#8b5cf6' },
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
