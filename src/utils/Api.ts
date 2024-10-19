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