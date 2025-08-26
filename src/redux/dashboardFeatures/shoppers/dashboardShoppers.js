import { baseApi } from "../../api/baseApi";




const dashboardShoppersApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getShopperApi: builder.query({
            query: ({ search = "", per_page, page }) => ({
                url: `/admin/allShoppersForAdmin?search=${search}&per_page=${per_page}&page=${page}`,
                method: "GET",
            }),
            providesTags: ['shopper'],
        }),
    })
})


export const { useGetShopperApiQuery } = dashboardShoppersApi;