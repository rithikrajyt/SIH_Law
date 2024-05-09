import { paste } from "@testing-library/user-event/dist/paste";
import axios from "axios";

const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://localhost:3000",
  };


const API_URI = "http://localhost:8080/api/v1";


// Sign Up API
export const signUp = async (email,password) => {
    try {
     const response = await axios.post(
        `${API_URI}/registerLawyer/`,
        {
            email : email,
            password : password,
        },
        {
            headers : {
                headers,
            },
        }
     );
     return response.data;   
    } catch (error) {
        
    }
}

//Login API End Point
export const login = async (email,password) => {
    try {
     const response = await axios.post(
        `${API_URI}/loginLawyer/`,
        {
            email : email,
            password : password,
        },
        {
            headers : {
                headers,
            },
        }
     );
     return response.data;   
    } catch (error) {
        
    }
}