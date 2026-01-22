'use client';

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { equipmentPie } from './mock';

export default function EquipmentPieChart() {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h3 className="font-bold mb-4">อุปกรณ์ที่ถูกจองมากที่สุด</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={equipmentPie} dataKey="value" nameKey="name" outerRadius={110} label>
            {equipmentPie.map((item, i) => (
              <Cell key={i} fill={item.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
