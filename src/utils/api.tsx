import axios from "axios";  
 

const  api = axios.create({
baseURL: 'https://expensetracker-be.herokuapp.com',

})

export default api;