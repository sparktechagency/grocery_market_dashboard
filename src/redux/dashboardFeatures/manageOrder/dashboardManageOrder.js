import { baseApi } from "../../api/baseApi";




const dashboardManageOrderApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getOrderApi: builder.query({
            query: () => ({
                url: `/admin/allOrders?per_page=5&page=1&status=complete`,
                method: "GET",
            }),
            providesTags: ['manageOrder'],
        }),
    })
})


export const {useGetOrderApiQuery} = dashboardManageOrderApi;