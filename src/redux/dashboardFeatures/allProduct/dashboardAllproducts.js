import { baseApi } from "../../api/baseApi";




const dashboardAllProductApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getProductApi: builder.query({
            query: ({ search = "", per_page, page}) => ({
                url: `/admin/allProducts?search=${search}&page=${page}&per_page=${per_page}`,
                method: "GET",
            }),
            providesTags: ['allProduct'],
        }),

    })
})


export const { useGetProductApiQuery} = dashboardAllProductApi;