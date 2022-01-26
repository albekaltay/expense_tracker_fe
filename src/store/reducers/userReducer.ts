import { User, UserAction, UserState } from "../../types/User";


const defaultState: UserState = {
    data : {} as User,
    loading: false,
    error : ""

}


export const userReducer = (state:UserState = defaultState , action: UserAction  ) => {


        switch(action.type) {
            case "LOGIN_START": 
            return {...state, loading: true, error: ""};
            case "LOGIN_SUCCESS": 
            return {...state, loading: false, data: action.payload};
            case  "LOGIN_ERROR": 
            return {...state, loading: false, error: "Login failed"};

            default: return state;
        }



}