import axios from "axios";
import { iUser } from "../types/Interface"
// import { useNavigate } from "react-router-dom";

export const url = import.meta.env.VITE_APP_API_URL;

// const navigate = useNavigate()

// user signup
export const signupUser = async (data: iUser)  => {
    try {
        const register = await axios.post(`${url}/api/users/`, data)

        return register.data
        // navigate("/signup/verifysignup")

        console.log("sign up success", register.data);

    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("Axios Error", error.message)
            if (error.response) {
                console.error("Response data: ", error.response.data);
                console.error("Response status: ", error.response.status)
            } else if (error.request) {
                console.error("Request: ", error.request)
            }
        } else {
            console.error("Unexpected Error: ", error)
        }
        throw error
    }
}


// sign up verification from user email
export const verifyUser = async (token: string, uidb64: string) => {
    try {
        const response = await axios.get(`${url}/api/users/activate/${uidb64}/${token}/`);
        
        return response; // Return the response if verification is successful
        console.log(response);
    } catch (error) {
        // Handle errors appropriately
        if (axios.isAxiosError(error)) {
            throw error.response?.data || 'Verification failed'; // Throw the error message from response or a default message
        } else {
            throw new Error('Verification failed'); // Handle unexpected errors
        }
    }
};