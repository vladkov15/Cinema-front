import { filmApi } from "@/services/FilmService"
import AdminFilmCard from "../AdminFilmCard/AdminFilmCard"
import styles from './AdminFilmCards.module.scss'

const AdminFilmCards = () =>{
    const {data: films} = filmApi.useFetchAllFilmsQuery('')
    return(
        <div className={styles.container}>
            {films?.map((film) =>
            <AdminFilmCard  key={film.id} data={film} />
            )}
        </div>
    )
}

export default AdminFilmCards