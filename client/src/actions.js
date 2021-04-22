export const signIn = (user) => ({
    type: "SIGN_IN",
    user,
  });
  export const signOut = () => {
    return {
      type: "SIGN_OUT",
    };
  };
  
  export const signUp = (user) => ({
    type: "SIGN_UP",
    user,
  });

  export const addQuestion = (question) => ({
    type: "ADD_QUESTION",
    question,
  });
  