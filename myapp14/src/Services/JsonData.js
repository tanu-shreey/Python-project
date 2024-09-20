import axios from 'axios';


const API_url = 'https://dummyjson.com/users';
export const JsonData = async () => {
    try {
        const response = await axios.get(API_url);
        return response.data;
    }
    catch (error) {
        console.log('error in fetching data', error);
        throw (error);
    }
};