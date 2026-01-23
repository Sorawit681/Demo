'use client';

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  PieLabelRenderProps,
} from 'recharts';
import { equipmentPie } from '@/mocks/mock';

const renderLabel = ({
  name,
  percent,
}: PieLabelRenderProps) => {
  if (!name || percent === undefined) return null;
  return `${name} ${(percent * 100).toFixed(0)}%`;
};

export default function EquipmentPieChart() {
  return (
    <div className="bg-white rounded-2xl shadow p-6 flex flex-col">
      <h3 className="font-bold mb-4 text-lg">
        อุปกรณ์ที่ถูกจองมากที่สุด
      </h3>

      <div className="w-full min-h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={equipmentPie}
              dataKey="value"
              nameKey="name"
              outerRadius={100}
              label={renderLabel}
              labelLine={false}
            >
              {equipmentPie.map((item, i) => (
                <Cell key={i} fill={item.color} />
              ))}
            </Pie>

            <Tooltip
              formatter={(value?: number) =>
                value !== undefined ? `${value} ครั้ง` : ''
              }
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 space-y-3">
        {equipmentPie.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between text-sm"
          >
            <div className="flex items-center gap-3">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span>{item.name}</span>
            </div>

            <span className="font-semibold">
              {item.value} ครั้ง
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}