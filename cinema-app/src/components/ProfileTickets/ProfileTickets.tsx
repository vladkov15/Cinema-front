import { User } from "@/models/models"
import BookingCards from "../BookingCards/BookingsCards"
import { FC } from "react"
import TicketCards from "../TicketCards/TicketCards"


interface ProfileTicketProps{
    user: User
}

const ProfileTicket:FC<ProfileTicketProps> = ({user}) =>{
    return(
        <div>
            <BookingCards user={user.id!} />
            <br/>
        </div>
    )
}

export default ProfileTicket