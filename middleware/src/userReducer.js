const initialUser = { name: "", loggedIn: false, token: null };

export const userReducer = (state = initialUser, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, name: action.payload.name, loggedIn: true, token: action.payload.token };
    case "LOGOUT":
      return { ...state, name: "", loggedIn: false, token: null };
    default:
      return state;
  }
}