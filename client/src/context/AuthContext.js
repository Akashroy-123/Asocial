import {  createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";
const INITIAL_STATE ={
    user:{
        

        _id:"66406b7660bea20fbbd0ff55",
        username:"girl",
        email:"girl@gmail.com",
        
        profilePicture:"",
        coverPicture:"",
        
        followers:[1],
        isAdmin:false,
        followings:[],

    },
    isFetching:false,
    error:false
};

export const AuthContext = createContext(INITIAL_STATE);
export const AuthContextProvider =({children}) =>
{
    const [state, dispatch]=useReducer(AuthReducer,INITIAL_STATE);
    return(
        <AuthContext.Provider value={{user:state.user, isFetching:state.isFetching, error:state.error, dispatch}}>
            {children}

        </AuthContext.Provider>
    )
}