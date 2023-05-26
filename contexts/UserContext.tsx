import { error } from "console";
import { Dispatch, ReactNode, createContext, useEffect, useReducer } from "react";

interface User {
  name: string;
  email: string;
}

type UserAction = { type: "LOGIN"; user: User } | { type: "LOGOUT" };

interface AuthState {
  user?: User;
  isLogin: boolean;
}

function userReducer(state: AuthState, action: UserAction): AuthState {
  switch (action.type) {
    case "LOGIN": {
      return {
        ...state,
        user: action.user,
        isLogin: true,
      };
    }
    case "LOGOUT": {
      return {
        isLogin: false,
      };
    }
  }
}

export const UserContext = createContext<AuthState>({ isLogin: false });

export const UserDispatchContext = createContext<Dispatch<UserAction> | null>(null);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, dispatch] = useReducer(userReducer, { isLogin: false });

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://${process.env.NEXT_PUBLIC_HOST}/user/login-cookie`, {
        method: "GET",
        credentials: "include"
      });
      if (res.ok) {
        const user = await res.json();
        console.log(user)
        dispatch({ type: "LOGIN", user });
      }
    };
    fetchData().catch((_) => {
      console.log("Failed to fetch login session");
    });
  }, []);

  return (
    <UserContext.Provider value={user}>
      <UserDispatchContext.Provider value={dispatch}>{children}</UserDispatchContext.Provider>
    </UserContext.Provider>
  );
}
