'use client';

import SummaryCards from './SummaryCards';
import BookingTable from './BookingTable';
import EquipmentPieChart from './EquipmentPieChart';
import TimeSlotBarChart from './TimeSlotBarChart';
import UtilizationTable from './UtilizationTable';

export default function BookingDashboardPage() {
  return (
    <div className="p-8 space-y-10 bg-slate-50 min-h-screen">
      <div>
        <h1 className="text-3xl font-bold text-indigo-700">ระบบจองอุปกรณ์</h1>
        <p className="text-gray-500">จัดการและติดตามการจองอุปกรณ์</p>
      </div>

      <SummaryCards />
      <BookingTable />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <EquipmentPieChart />
        <TimeSlotBarChart />
      </div>

      <UtilizationTable />
    </div>
  );
}
