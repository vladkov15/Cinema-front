import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { userApii } from "@/services/UserService";
import { bookingApi } from "@/services/BookingService";
import { filmApi } from "@/services/FilmService";
import { seatApi } from "@/services/SeatService";
import { sessionApi } from "@/services/SessionService";
import { ticketApi } from "@/services/TicketService";

const rootReducer = combineReducers({
  [userApii.reducerPath]: userApii.reducer,
  [bookingApi.reducerPath]: bookingApi.reducer,
  [filmApi.reducerPath]: filmApi.reducer,
  [seatApi.reducerPath]: seatApi.reducer,
  [sessionApi.reducerPath]: sessionApi.reducer,
  [ticketApi.reducerPath] : ticketApi.reducer

})

export const setupStore = () =>{
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware().concat(userApii.middleware, bookingApi.middleware, filmApi.middleware, seatApi.middleware, sessionApi.middleware, ticketApi.middleware)
  })
}

export type RootState = ReturnType<typeof rootReducer>

export type AppStore = ReturnType<typeof setupStore>

export type AppDispatch = AppStore['dispatch']