import { baseApi } from "../../api/baseApi";




const dashboardTransitionApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getTransitionApi: builder.query({
            query: ({ search = "", per_page, page }) => ({
                url: `/admin/allTransactions?search=${search}&page=${page}&per_page=${per_page}`,
                method: "GET",
            }),
            providesTags: ['transition'],
        }),
        singleGetTransitionApi: builder.query({
            query: (id) => ({
                url: `/admin/allTransactions/${id}`,
                method: "GET",
            }),
            providesTags: ['transition'],
        }),

    })
})


export const { useGetTransitionApiQuery ,useSingleGetTransitionApiQuery} = dashboardTransitionApi;