import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginAction = createAsyncThunk(
    "user/loginAction",
    async ({ email, password }) => {
        console.log("we re here");
        try {
            const res = await axios.post("api/auth/login", {
                email: email,
                password: password,
            });

            return { data: res.data.user, token: res.data.token };
        } catch (error) {
            throw error;
        }
    }
);
