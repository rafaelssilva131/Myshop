import { createSlice } from "@reduxjs/toolkit";

interface User {
    name: string;
    email: string;
}

interface UserState{
    user: User | null;
}

const initialState: UserState = {
    user: null,
}

export const userSlice = createSlice({
    initialState,
    name: 'user',
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        lougout: (state, action) => {
            state.user = null;
        }
    }
})

export const { login, lougout} = userSlice.actions