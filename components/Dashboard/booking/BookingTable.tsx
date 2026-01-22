import { bookings } from './mock';
import { BookingStatus } from './types';

const badge = (status: BookingStatus) =>
  status === 'confirmed'
    ? 'bg-green-100 text-green-700'
    : status === 'pending'
    ? 'bg-yellow-100 text-yellow-700'
    : 'bg-red-100 text-red-700';

export default function BookingTable() {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h2 className="text-xl font-bold mb-4">รายการจองทั้งหมด</h2>
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
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${badge(b.status)}`}>
                  {b.status === 'confirmed'
                    ? 'ยืนยันแล้ว'
                    : b.status === 'pending'
                    ? 'รอดำเนินการ'
                    : 'มีปัญหา'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
