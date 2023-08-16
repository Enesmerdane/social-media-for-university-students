import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginAction = createAsyncThunk(
    "user/loginAction",
    async ({ email, password }) => {
        try {
            console.log("we are in try catch block");
            console.log("username and password is ", email, " - ", password);
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
