import AdminFilmCards from "@/components/AdminFilmCards/AdminFilmCards";
import MovieForm from "@/components/MovieForm/MovieForm";
import { Seat } from "@/models/models";
import { seatApi } from "@/services/SeatService";
import { useState } from "react";
interface CustomSeat extends Seat {
    additional_prop: string;
  }
const AdminPage = () => {
  const [formActive, setFormActive] = useState(false)
  let form 
  if (formActive) {
    form = <MovieForm />
  } else{
    form = <></>
  }
  return (
    <div>
      <AdminFilmCards />
      <button onClick={() => setFormActive(!formActive)}>Добавить фильм</button>
      {form}
    </div>
  );
};

export default AdminPage