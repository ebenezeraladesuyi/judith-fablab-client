import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { iUser } from "../../types/Interface";
import { signupUser as signupUserApi } from "../../utils/Api";
import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// const navigate = useNavigate()

interface UserState {
    userInfo: any;
    loading: boolean;
    error: string | null;
}

const initialState: UserState = {
    userInfo: null,
    loading: false,
    error: null,
}

// createAsyncThunk for signup action
export const signupUserr = createAsyncThunk(
    "user/signup",
    async ({ userData, navigate }: { userData: iUser, navigate: Function }, { rejectWithValue }: any) => {
        try {
            const response = await signupUserApi(userData);
            navigate("/signup/verifysignup")
            return response;

            // navigate("/signup/verifysignup")

        } catch (error: any) {
            // Handle network errors and API errors
            if (error.message === 'Network Error') {
                return rejectWithValue({ message: 'Network Error' });
            }
            if (error.response && error.response.data) {
                return rejectWithValue(error.response.data);
            }
            return rejectWithValue({ message: 'Failed to sign up' });
        }
    }
);

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder: any) => {
        builder
            .addCase(signupUserr.pending, (state: any) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signupUserr.fulfilled, (state: any, action: any) => {
                state.loading = false;
                state.userInfo = action.payload;
                toast.success("Sign up successful! ");  // Success toast notification
            })
            .addCase(signupUserr.rejected, (state: any, action: any) => {
                state.loading = false;
                
                // Extract error message
                let error = "Failed to sign up";
                if (action.payload?.email) {
                    error = action.payload.email[0];
                } else if (action.payload?.message === "Network Error") {
                    error = "Network error occurred. Please check your internet connection.";
                } else if (action.payload?.message) {
                    error = action.payload.message;
                }

                state.error = error;

                // Display error toast notifications
                if (error.includes("user with this email already exists")) {
                    toast.error("User with this email already exists!");
                } else if (error.includes("Network error")) {
                    toast.error("Network error. Please check your connection.");
                } else {
                    toast.error(error);
                }
            });
    }
});

export default userSlice.reducer;
