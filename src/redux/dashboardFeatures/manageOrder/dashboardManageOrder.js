import { baseApi } from "../../api/baseApi";




const dashboardManageOrderApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getOrderApi: builder.query({
            query: ({ per_page, page, status }) => ({
                url: `/admin/allOrders?per_page=${per_page}&page=${page}&status=${status}`,
                method: "GET",
            }),
            providesTags: ['manageOrder'],
        }),
        updateNewStatusOrderApi: builder.mutation({
            query: ({updateNewStatusInfo,id}) => ({
                url: `/app/orders/${id}/status`,
                method: "POST",
                body:updateNewStatusInfo,
            }),
            invalidatesTags: ['manageOrder'],
        }),


        // all shoper name
         getAllShopperApi: builder.query({
            query: () => ({
                url: `/admin/allShoppersForAdmin`,
                method: "GET",
            }),
            providesTags: ['manageOrder'],
        }),
    })
})


export const { useGetOrderApiQuery,useUpdateNewStatusOrderApiMutation,useGetAllShopperApiQuery } = dashboardManageOrderApi;