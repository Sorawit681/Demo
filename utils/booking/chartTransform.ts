// utils/booking/chartTransform.ts
import { Booking } from '@/types/types';

export function groupByEquipment(bookings: Booking[]) {
  const map: Record<string, number> = {};

  bookings.forEach((b) => {
    map[b.equipment] = (map[b.equipment] || 0) + 1;
  });

  return Object.entries(map).map(([name, value]) => ({
    name,
    value,
  }));
}

export function groupByTimeSlot(bookings: Booking[]) {
  const map: Record<string, number> = {};

  bookings.forEach((b) => {
    map[b.time] = (map[b.time] || 0) + 1;
  });

  return Object.entries(map).map(([time, count]) => ({
    time,
    count,
  }));
}

