import { Dispatch, ReactNode, createContext, useReducer } from "react";

export enum CartActionType {
  ADD_TO_CART,
  CLOSE_CART_MODAL,
}

interface CartAction {
  type: CartActionType;
  payload?: unknown;
}

interface CartBook {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

interface CartState {
  isModalOpen: boolean;
}

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case CartActionType.ADD_TO_CART: {
      return {
        ...state,
        isModalOpen: true,
      };
    }
    case CartActionType.CLOSE_CART_MODAL: {
      return {
        ...state,
        isModalOpen: false,
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export const CartContext = createContext<CartState>({ isModalOpen: false });
export const CartDispatchContext = createContext<Dispatch<CartAction> | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, cartDispatch] = useReducer(cartReducer, { isModalOpen: false });

  return (
    <CartContext.Provider value={cart}>
      <CartDispatchContext.Provider value={cartDispatch}>{children}</CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}
