import { createSlice } from "@reduxjs/toolkit";

const DEFAULT_USER_STATE = {
    loading: false,
    data: {
        email: null,
        username: null,
    },
    auth: false,
};

export const userSlice = createSlice({
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
            state = DEFAULT_USER_STATE;
        },
    },
});
