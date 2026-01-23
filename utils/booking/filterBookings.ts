// utils/booking/filterBookings.ts
import { Booking, BookingStatus } from '@/types/types';

export interface BookingFilter {
  keyword?: string;
  date?: string;
  status?: BookingStatus | 'ALL';
}

export function filterBookings(
  bookings: Booking[],
  filter: BookingFilter
): Booking[] {
  return bookings.filter((booking) => {
    const keywordMatch =
      !filter.keyword ||
      booking.id.includes(filter.keyword) ||
      booking.equipment.includes(filter.keyword) ||
      booking.user.includes(filter.keyword);

    const dateMatch =
      !filter.date || booking.date === filter.date;

    const statusMatch =
      !filter.status ||
      filter.status === 'ALL' ||
      booking.status === filter.status;

    return keywordMatch && dateMatch && statusMatch;
  });
}
