import { baseApi } from "../api/baseApi";




const dashboardAllShopperApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getDashboardAllShopperApi: builder.query({
            query: ({ search = "", per_page, page }) => ({
                url: `/admin/allStores?search=${search}&page=${page}&per_page=${per_page}`,
                method: "GET"
            }),
            providesTags: ['dashboardShopper'],
        }),
    })
})


export const {useGetDashboardAllShopperApiQuery} = dashboardAllShopperApi;