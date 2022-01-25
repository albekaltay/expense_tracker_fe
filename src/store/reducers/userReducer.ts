import { User, UserAction, UserState } from "../../types/User";


const defaultState: UserState = {
    data : {} as User,
    loading: false,
    error : ""

}


export const userReducer = (state:UserState = defaultState , action: UserAction  ) => {

    return action;

}