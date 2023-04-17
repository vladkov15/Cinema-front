export interface CardProps {
  imageUrl: string;
  title: string;
  subtitle: string;
  buttons: string[];
}

export interface Seat {
  row: number;
  seatNumber: number;
  selected: boolean;
}
