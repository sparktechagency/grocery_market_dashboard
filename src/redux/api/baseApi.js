import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://10.10.10.90:8000/api",
    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem("token");
      // console.log("9 baseApi", token);
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
        headers.set("accept", "application/json");
      }
      return headers;
    },
  }),
  tagTypes: [
    "dashboardHome",
    "auth",
    "setting",
    "notification",
    "dashboardFaq",
    "promotion",
    "manageTerm",
    "manageOrder",
    "geolocation",
    "shopper",
    "allProduct",
    "allStore",
    "transition",
    "verify_token",
    "dashboardUser",
  ],
  endpoints: () => ({}),
});