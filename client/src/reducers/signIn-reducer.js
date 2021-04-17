const initialState = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    isSignedIn: false,
    cart: {},
  };
  
  export default function signin(state = initialState, action) {
    switch (action.type) {
      case "SIGN_IN":
        return {
          ...state,
          ...action.user,
          isSignedIn: true,
        };
  
      case "SIGN_OUT":
        return { ...state, email: "", password: "", isSignedIn: false };
  
      default:
        return state;
    }
  }
  