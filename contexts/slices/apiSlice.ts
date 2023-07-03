import { CheckoutFormValues } from "@/components/checkout/CheckoutForm";
import { District, PreviewInfo, Ward } from "@/utils/types/checkout";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface User {
  id: string;
  name: string;
  email: string;
}

export interface CartBook {
  id: string;
  name: string;
  image: string;
  currentPrice: number;
}

export interface CartItem {
  book: CartBook;
  quantity: number;
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: `http://${process.env.NEXT_PUBLIC_HOST}` }),
  tagTypes: ["User", "Cart"],
  endpoints: (builder) => ({
    user: builder.query<User, {}>({
      query: () => ({
        url: "/user/login-cookie",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["User"],
    }),
    login: builder.mutation<{}, { email: string; password: string }>({
      query: ({ email, password }) => {
        const formData = new URLSearchParams();
        formData.append("email", email);
        formData.append("password", password);
        return {
          url: "/user/login",
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formData.toString(),
          credentials: "include",
        };
      },
      invalidatesTags: ["User"],
    }),
    register: builder.mutation<{}, { name: string; email: string; password: string }>({
      query: ({ name, email, password }) => {
        const formData = new URLSearchParams();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("password", password);

        return {
          url: "/user/register",
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formData.toString(),
          credentials: "include",
        };
      },
      invalidatesTags: ["User"],
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/user/logout",
        method: "GET",
        credentials: "include",
      }),
      invalidatesTags: ["User"],
    }),
    cart: builder.query<CartItem[], {}>({
      query: () => ({
        url: "/user/cart",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["User", "Cart"],
    }),
    addToCart: builder.mutation<{}, { itemId: string; amount?: number }>({
      query: ({ itemId, amount }) => {
        return {
          url: "/user/add-to-cart",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ itemId, amount }),
          credentials: "include",
        };
      },
      invalidatesTags: ["Cart"],
    }),
    decreaseCartItem: builder.mutation<{}, { itemId: string }>({
      query: ({ itemId }) => {
        return {
          url: "/user/decrease-cart-item",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ itemId }),
          credentials: "include",
        };
      },
      invalidatesTags: ["Cart"],
    }),
    removeCartItem: builder.mutation<{}, { itemId: string }>({
      query: ({ itemId }) => {
        return {
          url: "/user/remove-cart-item",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ itemId }),
          credentials: "include",
        };
      },
      invalidatesTags: ["Cart"],
    }),
    updateCartItem: builder.mutation<{}, { itemId: string; quantity: number }>({
      query: ({ itemId, quantity }) => {
        return {
          url: "/user/update-cart-item",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ itemId, quantity }),
          credentials: "include",
        };
      },
      invalidatesTags: ["Cart"],
    }),
    checkoutDistrict: builder.query<District[], { provinceId: string }>({
      query: ({ provinceId }) => ({
        url: `/checkout/district/${provinceId}`,
        method: "GET",
        credentials: "include",
      }),
    }),
    checkoutWard: builder.query<Ward[], { districtId: string }>({
      query: ({ districtId }) => ({
        url: `/checkout/ward/${districtId}`,
        method: "GET",
        credentials: "include",
      }),
    }),
    submitOrder: builder.mutation<{}, { formValues: CheckoutFormValues }>({
      query: ({ formValues }) => {
        return {
          url: "/checkout/submit-order",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formValues),
          credentials: "include",
        };
      },
      invalidatesTags: ["Cart"],
    }),
    previewOrder: builder.mutation<PreviewInfo, { formValues: Pick<CheckoutFormValues, "district" | "ward"> }>({
      query: ({ formValues }) => {
        return {
          url: "/checkout/preview-order",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formValues),
          credentials: "include",
        };
      },
    }),
  }),
});

export const {
  useUserQuery,
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useCartQuery,
  useAddToCartMutation,
  useDecreaseCartItemMutation,
  useRemoveCartItemMutation,
  useUpdateCartItemMutation,
  useCheckoutDistrictQuery,
  useCheckoutWardQuery,
  useSubmitOrderMutation,
  usePreviewOrderMutation,
} = apiSlice;
