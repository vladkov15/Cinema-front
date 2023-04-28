import { User } from "@/models/models"
import BookingCards from "../BookingCards/BookingsCards"
import { FC } from "react"

interface ProfileTicketProps{
    user: User
}

const ProfileTicket:FC<ProfileTicketProps> = ({user}) =>{
    return(
        <div>
            <BookingCards user={user.id!} />
        </div>
    )
}

export default ProfileTicket