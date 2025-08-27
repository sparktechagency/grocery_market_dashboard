import { baseApi } from "../../../api/baseApi";





const dashboardAllStoreApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getStoreApi: builder.query({
            query: ({ search = "", per_page, page }) => ({
                url: `/admin/allStores?search=${search}&page=${page}&per_page=${per_page}`,
                method: "GET",
            }),
            providesTags: ['allStore'],
        }),

    })
})


export const { useGetStoreApiQuery } = dashboardAllStoreApi;