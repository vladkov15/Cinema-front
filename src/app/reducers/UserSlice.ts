import { User } from "@/models/models";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { create } from "domain";

interface UserState{
    user: User
}

const initialState: UserState ={
    user: {},
}

export  const userSlice = createSlice({
   name: 'user',
   initialState, 
   reducers:{
        add(state, action: PayloadAction<User>){
            state.user = action.payload;
        }
   }
})

export default userSlice.reducer;