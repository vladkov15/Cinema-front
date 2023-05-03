export interface CardProps {
  buttons: string[];
}

// export interface Seat {
//   id?:number;
//   session_id?:number;
//   film_id?:number;
//   seat_id: string;
//   row: number;
//   seatNumber: number;
//   selected: boolean;
//   booking: boolean;
// }

export interface User {
  id?: number;
  email?: string;
  name?: string;
  second_name?: string;
  password?: string;
  bookings?: Booking[];
}

export interface Film {
  id?: number;
  title?: string;
  description?: string;
  rating?: string;
  poster_url?: string;
  seats?: Seat[];
  bookings?: Booking[];
  sessions?: Session[];
}

export interface Seat {
  id?: number;
  session_id?: number;
  film_id?: number;
  seat_id?: string;
  row?: number;
  seat_number?: number;
  avaible?: boolean;
  selected?: boolean | false;
  bookings?: Booking[];
}
export interface CreateSeat {
  session_id?: number;
  film_id?: number;
  seat_id?: string;
  row?: number;
  seat_number?: number;
  avaible?: boolean;
}

export interface Session {
  [x: string]: any;
  id?: number;
  film_id?: number;
  film?: Film;
  date?: Date;
  start_time?: Date;
  end_time?: Date;
  booking_expiry?: Date;
  seats?: Seat[];
  bookings?: Booking[];
}

export interface Booking {
  id?: number;
  user_id?: number;
  film_id?: number;
  session_id?: number;
  seat_id?: number;
  pay?: boolean;
  created_at?: Date;
  booking_expiry?: Date;
  user?: User;
  session?: Session;
  seat?: Seat;
  tickets?: Ticket[];
}
export interface Ticket {
  id?: number;
  booking_id?: number;
  booking?: Booking;
  seat_id?: number;
  film_id?: number;
  session_id?: number;
  seat?: Seat;
  created_at?: Date;
}
