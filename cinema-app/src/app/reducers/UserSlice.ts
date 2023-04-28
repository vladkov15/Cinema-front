import { User } from '@/models/models';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface UserState {
  users: User[];
  isLoading: boolean;
  error: string;
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    usersFetching(state) {
      state.isLoading = true;
    },
    userFetchingSuccess(state, action: PayloadAction<User[]>) {
      state.isLoading = true;
      state.error = ''
      state.users = action.payload
    },
    userFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = true;
      state.error = action.payload
    },
  },
});

export default userSlice.reducer;
