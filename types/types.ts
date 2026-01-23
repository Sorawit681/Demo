import { IconType } from "react-icons";

export type BookingStatus = 'confirmed' | 'pending' | 'problem';

export type Booking = {
  id: string;
  equipment: string;
  user: string;
  date: string;
  time: string;
  center: string;
  status: BookingStatus;
};

export type SummaryCardItem = {
  title: string;
  value: number;
  sub: string;
  color: string;
  icon: IconType;
};

export type PieItem = {
  name: string;
  value: number;
  color: string;
};

export type TimeSlot = {
  time: string;
  bookings: number;
};

export type Utilization = {
  rank: number;
  center: string;
  utilization: number;
};
