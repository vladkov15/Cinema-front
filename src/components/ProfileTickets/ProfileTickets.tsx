import { User } from "@/models/models"
import BookingCards from "../BookingCards/BookingsCards"
import { FC } from "react"
import TicketCards from "../TicketCards/TicketCards"


interface ProfileTicketProps{
    user: User
}

const ProfileTicket:FC<ProfileTicketProps> = ({user}) =>{
  
    
    return(
        <>
            <BookingCards user={user.id!} />
            <br/>
        </>
    )
}

export default ProfileTicket