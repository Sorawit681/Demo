'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { timeSlots } from './mock';

export default function TimeSlotBarChart() {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h3 className="font-bold mb-4">ช่วงเวลาที่มีการจองมากที่สุด</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={timeSlots}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="bookings" fill="#3b82f6" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
