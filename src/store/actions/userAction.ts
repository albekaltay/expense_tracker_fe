import { LoginForm, User, UserDispatch } from "../../types/User";
import api from "../../utils/api";



 const login = (creds : LoginForm ) => async(dispatch: UserDispatch) => {

    dispatch({type: "LOGIN_START"})
    try{
         const response =  await api.post<User>("/users/login", creds) 
    dispatch({type:"LOGIN_SUCCESS" , payload: response.data})
    localStorage.setItem("token",response.data.token);


    } catch {

        dispatch({type:'LOGIN_ERROR'});

    }
   
}

export default login;