export const authMidleware=store=>next=>action=>{
    const state=store.getState()


    if (action.type==="API_CALL"){
        if(!state.user.loggedIn || !state.user.token){
            console.log("Unauthorised!, Please login again")
            return;
        }
        console.log("User is logged in:", state.user.name);
        action.payload.headers={
            ...action.payload.headers,Authorization:`Bearer ${state.user.token}`
        }
        setTimeout(() => {
            const data = { message: "API data fetched successfully" }; 
            console.log("Data fetched from API:", data);
        }, 1000);

    return; 
  
    }
    return next(action)
}