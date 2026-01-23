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
import { timeSlots } from '@/mocks/mock';

export default function TimeSlotBarChart() {
  return (
    <div className="bg-white rounded-2xl shadow p-6 flex flex-col">
      <h3 className="font-bold mb-6 text-lg">
        ช่วงเวลาที่มีการจองมากที่สุด
      </h3>

        <div className="w-full min-h-[260px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={timeSlots}
              margin={{
                top: 10,
                right: 0,
                left: 0,
                bottom: 50,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              
              <XAxis
                dataKey="time"
                height={40}
                tickMargin={20}
                tick={{
                  fontSize: 12,
                  fill: '#475569',
                }}
                angle={-15}
                textAnchor="end"
              />

              <YAxis
              width={20}
                tick={{
                  fontSize: 12,
                  fill: '#475569',
                }}
              />

              <Tooltip
                formatter={(value) => {
                  if (typeof value === 'number') {
                    return [`${value} ครั้ง`, 'จำนวนการจอง'];
                  }
                  return [value, 'จำนวนการจอง'];
                }}
              />

              <Bar
                dataKey="bookings"
                fill="#3b82f6"
                radius={[8, 8, 0, 0]}
                barSize={48}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
  );
}