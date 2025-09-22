const initialstate={
    name:"",
    loggedIn:false,
}

export const userReducer=(state=initialstate,action)=>{
    switch(action.type){
        case "LOGIN":
            return { ...state, name: action.payload, loggedIn: true };
        case "LOGOUT":
            return { ...state, name: "", loggedIn: false };
        default:
            return state
    }

}