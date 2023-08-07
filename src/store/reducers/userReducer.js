import { createSlice } from "@reduxjs/toolkit";

const DEFAULT_USER_STATE = {
    loading: false,
    data: {
        email: null,
        username: null,
    },
    auth: false,
};

const userSlice = createSlice({
    name: "user",
    initialState: DEFAULT_USER_STATE,
    reducers: {
        login: (state) => {
            state.data = {
                email: "examplemail@gmail.com",
                username: "exampleUserName",
            };
            state.auth = true;
        },
        logout: (state) => {
            state.auth = false;
            state.data = { ...DEFAULT_USER_STATE.data };
        },
    },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
