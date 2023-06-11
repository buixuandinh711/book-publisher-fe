import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  name: string;
  email: string;
}

type UserAction = { type: "LOGIN"; user: User } | { type: "LOGOUT" };

export interface AuthState {
  user?: User;
  isLogin: boolean;
}

const initialState: AuthState = {
  isLogin: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isLogin = true;
    },
    logout: (state, action) => {
      state.user = undefined;
      state.isLogin = false;
    },
  },
});
