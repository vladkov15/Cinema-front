import { ticketApi } from "@/services/TicketService";
import { FC } from "react";
import TicketCard from "../TicketCard/TickedCard";

interface TicketCardsProps {
  user: number;
}

const TicketCards:FC<TicketCardsProps> = ({user}) => {
  const { data: ticket } = ticketApi.useFetchTicketsByUserIdQuery(user);
  
  if (!ticket) {
    return null; // or render a loading spinner
  }

  // Group bookings by session_id
  const bookingsBySessionId: { [key: number]: Array<any> } = {};
  ticket.forEach((ticket) => {
    if (ticket.session_id !== undefined && bookingsBySessionId[ticket.session_id]) {
      bookingsBySessionId[ticket.session_id].push(ticket);
    } else {
      bookingsBySessionId[ticket.session_id!] = [ticket];
    }
  });
  return (
    <div>
      <h1>Купленные билеты:</h1>
      <div >
        {Object.values(bookingsBySessionId).map((bookings) => (
          <div>
            {/* <h3>Session {bookings[0].session_id}</h3> display session_id */}
              <TicketCard ticket={bookings}  />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketCards;
