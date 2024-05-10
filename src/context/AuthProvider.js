import React, { createContext, useContext, useEffect, useState } from "react";

// Create the AuthContext
export const AuthContext = createContext();

// Create the AuthProvider component
const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const getTokenFromCookie = () => {
            const cookieValue = document.cookie
              .split("; ")
              .find((row) => row.startsWith("token="));
            if (cookieValue) {
              const tokenWithPrefix = cookieValue.split("=")[1];
              if (tokenWithPrefix.length > 0) {
                const token = tokenWithPrefix.slice(1); // Remove the prefix
                return token;
              }
            }
            return null;
        };

        const fetchData = async () => {
            const token = getTokenFromCookie();
            if(token){
            setUser(token);
            }else{
                setUser(null);
            }
            setLoading(false);

        }

        fetchData();
    }, [])
   

    const isLoggedIn = Boolean(user);
    const isLoggedOut = !isLoggedIn;
  

    return (
        <AuthContext.Provider value={{isLoggedIn , isLoggedOut, loading}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
  };
  