import { Dispatch, ReactNode, createContext, useReducer } from "react";

export type CartAction =
  | { type: "ADD_TO_CART"; book: CartBook }
  | { type: "CLOSE_CART_MODAL" }
  | { type: "INCREASE_ITEM_QUANTITY"; bookId: number }
  | { type: "DECREASE_ITEM_QUANTITY"; bookId: number }
  | { type: "REMOVE_ITEM"; bookId: number }
  | { type: "ADD_WITH_AMOUNT"; book: CartBook; amount: number };

export interface CartBook {
  id: number;
  name: string;
  image: string;
  price: number;
}

export interface CartItem {
  book: CartBook;
  quantity: number;
}

interface CartState {
  isModalOpen: boolean;
  cartItems: CartItem[];
}

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_TO_CART": {
      const book = action.book;
      const isAdded = state.cartItems.some((item) => item.book.id === book.id);
      if (isAdded) {
        return {
          ...state,
          isModalOpen: true,
          cartItems: state.cartItems.map((item) => {
            if (item.book.id === book.id) {
              return {
                ...item,
                quantity: item.quantity + 1,
              };
            }
            return item;
          }),
        };
      } else {
        return {
          ...state,
          isModalOpen: true,
          cartItems: state.cartItems.concat({ book, quantity: 1 }),
        };
      }
    }
    case "CLOSE_CART_MODAL": {
      return {
        ...state,
        isModalOpen: false,
      };
    }
    case "INCREASE_ITEM_QUANTITY": {
      return {
        ...state,
        isModalOpen: true,
        cartItems: state.cartItems.map((item) => {
          if (item.book.id === action.bookId) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        }),
      };
    }
    case "DECREASE_ITEM_QUANTITY": {
      const newCartItems = state.cartItems
        .map((item) => {
          if (item.book.id === action.bookId) {
            return {
              ...item,
              quantity: item.quantity > 0 ? item.quantity - 1 : 0,
            };
          }
          return item;
        })
        .filter((item) => item.book.id !== action.bookId || item.quantity > 0);
      return {
        ...state,
        isModalOpen: newCartItems.length > 0,
        cartItems: newCartItems,
      };
    }
    case "REMOVE_ITEM": {
      const newCartItems = state.cartItems.filter((item) => item.book.id !== action.bookId);
      return {
        ...state,
        isModalOpen: newCartItems.length > 0,
        cartItems: newCartItems,
      };
    }
    case "ADD_WITH_AMOUNT": {
      const book = action.book;
      const isAdded = state.cartItems.some((item) => item.book.id === book.id);
      if (isAdded) {
        return {
          ...state,
          isModalOpen: true,
          cartItems: state.cartItems.map((item) => {
            if (item.book.id === book.id) {
              return {
                ...item,
                quantity: item.quantity + action.amount,
              };
            }
            return item;
          }),
        };
      } else {
        return {
          ...state,
          isModalOpen: true,
          cartItems: state.cartItems.concat({ book, quantity: action.amount }),
        };
      }
    }
  }
}

export const CartContext = createContext<CartState>({ isModalOpen: false, cartItems: [] });
export const CartDispatchContext = createContext<Dispatch<CartAction> | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, cartDispatch] = useReducer(cartReducer, { isModalOpen: false, cartItems: [] });

  return (
    <CartContext.Provider value={cart}>
      <CartDispatchContext.Provider value={cartDispatch}>{children}</CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}
