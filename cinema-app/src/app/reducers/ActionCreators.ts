import axios from "axios";
import { AppDispatch } from "../store";
import { User } from "@/models/models";
import {userSlice} from './UserSlice'

export const fetchUsers = () => async(dispatch: AppDispatch) =>{
    try {
        dispatch(userSlice.actions.usersFetching())
        const response = await axios.get<User[]>(`${process.env.API_URL}/users`)
        dispatch(userSlice.actions.userFetchingSuccess(response.data))

    } catch (error) {
        // dispatch(userSlice.actions.userFetchingError(error.message))
    }
}