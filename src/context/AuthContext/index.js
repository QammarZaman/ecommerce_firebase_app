import React, { createContext, useReducer, useEffect } from "react";
import { auth } from "config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import ActionReducer from "./ActionReducer";

export const AuthContext = createContext();

const initialState = { isAuthenticated: false };

export default function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(ActionReducer, initialState);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        console.log("User Signed in");
        const idTokenResult = await user.getIdTokenResult();
        dispatch({
          type: "LOGIN",
          payload: {
            email: user.email,
            token: idTokenResult.token,
          },
        });
        // ...
      } else {
        // User is signed out
        // ...

        console.log("User Signed Out");
        console.log(state);
      }
    });

    // clean up

    return () => unsubscribe();
  }, []);
  return (
    <AuthContext.Provider value={{ authentication: state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
