import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetKpisResponse, GetProductsResponse, GetTransactionsResponse } from "./types";

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
    reducerPath: "main",
    tagTypes: ["Kpis","Products","Transactions"],//keep Performance indicator
    endpoints: (build) => ({
        getKpis: build.query<Array<GetKpisResponse>, void>({
            query: () => "kpi/kpis/", // import.meta.env.VITE_BASE_URL/kpi/kpis
            providesTags: ["Kpis"]
        }),

        getProducts: build.query<Array<GetProductsResponse>, void>({
            query: () => "product/products/", // import.meta.env.VITE_BASE_URL/kpi/kpis
            providesTags: ["Products"]
        }),

        getTransactions: build.query<Array<GetTransactionsResponse>, void>({
            query: () => "transaction/transactions/", // import.meta.env.VITE_BASE_URL/kpi/kpis
            providesTags: ["Transactions"]
        })
    })
})

export const { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } = api;  //useGetKpisQuery is same as getKpis
