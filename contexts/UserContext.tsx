import { Dispatch, ReactNode, createContext, useReducer } from "react";

export enum UserActionType {
  LOGIN,
  LOGOUT,
}

interface UserAction {
  type: UserActionType;
  payload?: unknown;
}

interface UserState {
  name?: string;
  email?: string;
  isLogin: boolean;
}

function userReducer(state: UserState, action: UserAction): UserState {
  const { type, payload } = action;
  switch (type) {
    case UserActionType.LOGIN: {
      return {
        ...state,
        name: (payload as UserState).name,
        email: (payload as UserState).email,
        isLogin: true,
      };
    }
    case UserActionType.LOGOUT: {
        return {
            isLogin: false
        }
    }
    default: {
      throw Error("Unknown action: " + type);
    }
  }
}

export const UserContext = createContext<UserState>({ isLogin: false });

export const UserDispatchContext = createContext<Dispatch<UserAction> | null>(null);

export function UserProvider({ children }: { children: ReactNode }) {
  const [tasks, dispatch] = useReducer(userReducer, { isLogin: false });

  return (
    <UserContext.Provider value={tasks}>
      <UserDispatchContext.Provider value={dispatch}>{children}</UserDispatchContext.Provider>
    </UserContext.Provider>
  );
}
