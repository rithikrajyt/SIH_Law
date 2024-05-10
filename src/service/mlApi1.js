import axios from "axios";

const headers = {
    "Content-Type" : "application/json",
    "Access-Control-Allow-Origin": "http://localhost:3000",
};

const API_URI = "http://localhost:8000";

//API Endpoint to get Questions Array
export const getQuestions = async (category) => {
    try {
        const response = await axios.post(`${API_URI}/drafting/questions/`,
        {
          title : category,  
        },
        {
        headers: {
            headers,
        }
    });

        return response.data;
    } catch (error) {
        console.log(error);
    }
}
