'use client';

import dynamic from 'next/dynamic';

const BookingDashboardPage = dynamic(
  () => import('@/components/Dashboard/booking/BookingDashboardPage'),
  { ssr: false }
);

export default function ClientPage() {
  return <BookingDashboardPage />;
}
