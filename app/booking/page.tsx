'use client';

import { Layout } from '@/components/Layout/layout';
import BookingDashboardPage from '@/components/Dashboard/booking/BookingDashboardPage';

export default function Page() {
  const [filter, setFilter] = useState({
    keyword: '',
    date: '',
    status: 'ALL' as BookingStatus | 'ALL',
  });

  const filteredBookings = filterBookings(bookings, {
    keyword: filter.keyword,
    date: filter.date,
    status: filter.status,
  });

  return (
    <Layout>
      <div className="p-8 space-y-10 bg-slate-50 min-h-screen">
        <div>
          <h1 className="text-3xl font-bold text-indigo-700">
            ระบบจองอุปกรณ์
          </h1>
          <p className="text-gray-500">
            จัดการและติดตามการจองอุปกรณ์
          </p>
        </div>

        <SummaryCards />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <EquipmentPieChart />
          <TimeSlotBarChart />
        </div>

        <BookingTable bookings={filteredBookings}
          filter={filter}
          onFilterChange={(next) =>
            setFilter((prev) => ({ ...prev, ...next }))
          }/>

        <UtilizationTable />
      </div>
    </Layout>
  );
}