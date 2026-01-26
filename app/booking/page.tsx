'use client';

import { useState } from 'react';
import SummaryCards from '@/components/Dashboard/booking/SummaryCards';
import BookingTable from '@/components/Dashboard/booking/BookingTable';
import EquipmentPieChart from '@/components/Dashboard/booking/EquipmentPieChart';
import TimeSlotBarChart from '@/components/Dashboard/booking/TimeSlotBarChart';
import UtilizationTable from '@/components/Dashboard/booking/UtilizationTable';

import { bookings } from '@/mocks/mock';
import { BookingStatus } from '@/types/types';
import { filterBookings } from '@/utils/booking/filterBookings';
import { Layout } from '@/components/Layout/Layout';


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
            แดชบอร์ดระบบจองอุปกรณ์
          </h1>
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