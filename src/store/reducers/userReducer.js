import { createSlice } from "@reduxjs/toolkit";

const DEFAULT_USER_STATE = {
    loading: false,
    data: {
        email: "example@gmail.com",
        username: "exusername",
    },
    auth: true,
};

export const userSlice = createSlice({
    name: "user",
    initialState: DEFAULT_USER_STATE,
    reducers: {},
});
