import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { ProductJson } from "../../interface-type";

export const productSlice = createApi({
  reducerPath: "productApi", // Unique name for the API slice
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    getProducts: builder.query<any, void>({
      query: () => "products",
    }),
  }),
  
});

export const getProductById = createApi({
  reducerPath: 'productByIdApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:4000/api/v2/' }),
  endpoints: (builder) => ({
    getProductById: builder.query<any, string>({
      query: (_id) => `product/${_id}`,
    }),
  }),
})


export const { useGetProductsQuery } = productSlice;
export const {useGetProductByIdQuery } = getProductById;