'use client';

import { BookingStatus } from '@/types/types';

interface Props {
  keyword: string;
  date: string;
  status: BookingStatus | 'ALL';
  onChange: (next: Partial<Props>) => void;
}

export default function BookingFilter({
  keyword,
  date,
  status,
  onChange,
}: Props) {
  return (
    <div className="flex items-center gap-3">
      <input
        type="text"
        placeholder="ค้นหา..."
        value={keyword}
        onChange={(e) =>
          onChange({ keyword: e.target.value })
        }
        className="border rounded-lg px-3 py-2 w-64 text-sm"
      />

      <input
        type="date"
        value={date}
        onChange={(e) =>
          onChange({ date: e.target.value })
        }
        className="border rounded-lg px-3 py-2 text-sm"
      />

      <select
        value={status}
        onChange={(e) =>
          onChange({
            status: e.target.value as BookingStatus | 'ALL',
          })
        }
        className="border rounded-lg px-3 py-2 text-sm"
      >
        <option value="ALL">ทุกสถานะ</option>
        <option value="confirmed">ยืนยันแล้ว</option>
        <option value="pending">รอดำเนินการ</option>
        <option value="problem">มีปัญหา</option>
      </select>
    </div>
  );
}
