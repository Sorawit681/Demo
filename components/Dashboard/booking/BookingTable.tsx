import { Booking, BookingStatus } from '@/types/types';
import BookingFilter from './BookingFilter';

interface Props {
  bookings: Booking[];
  filter: {
    keyword: string;
    date: string;
    status: BookingStatus | 'ALL';
  };
  onFilterChange: (
    next: Partial<{
      keyword: string;
      date: string;
      status: BookingStatus | 'ALL';
    }>
  ) => void;
}

const badge = (status: BookingStatus) =>
  status === 'confirmed'
    ? 'bg-green-100 text-green-700'
    : status === 'pending'
    ? 'bg-yellow-100 text-yellow-700'
    : 'bg-red-100 text-red-700';

const label = (status: BookingStatus) =>
  status === 'confirmed'
    ? 'ยืนยันแล้ว'
    : status === 'pending'
    ? 'รอดำเนินการ'
    : 'มีปัญหา';

export default function BookingTable({
  bookings,
  filter,
  onFilterChange,
}: Props) {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">
          รายการจองทั้งหมด
        </h2>

        <BookingFilter
          keyword={filter.keyword}
          date={filter.date}
          status={filter.status}
          onChange={onFilterChange}
        />
      </div>

      <table className="w-full text-sm">
        <thead>
          <tr className="border-b text-gray-600">
            <th className="text-left py-2">รหัส</th>
            <th className="text-left">อุปกรณ์</th>
            <th className="text-left">ผู้จอง</th>
            <th className="text-left">วันที่</th>
            <th className="text-left">เวลา</th>
            <th className="text-left">ศูนย์</th>
            <th className="text-left">สถานะ</th>
          </tr>
        </thead>

        <tbody>
          {bookings.map((b) => (
            <tr key={b.id} className="border-b last:border-none">
              <td className="py-2 font-semibold">{b.id}</td>
              <td>{b.equipment}</td>
              <td>{b.user}</td>
              <td>{b.date}</td>
              <td>{b.time}</td>
              <td>{b.center}</td>
              <td>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${badge(
                    b.status
                  )}`}
                >
                  {label(b.status)}
                </span>
              </td>
            </tr>
          ))}

          {bookings.length === 0 && (
            <tr>
              <td
                colSpan={7}
                className="text-center py-6 text-gray-400"
              >
                ไม่พบรายการจอง
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
