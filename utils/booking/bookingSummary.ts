import { Booking } from '@/types/types';

export interface BookingSummary {
  total: number;
  available: number;
  booked: number;
  problem: number;
}

export function calculateBookingSummary(
  bookings: Booking[],
  totalEquipment: number
): BookingSummary {
  const booked = bookings.filter(
    (b) => b.status === 'confirmed'
  ).length;

  const problem = bookings.filter(
    (b) => b.status === 'problem'
  ).length;

  return {
    total: totalEquipment,
    booked,
    available: totalEquipment - booked,
    problem,
  };
}
