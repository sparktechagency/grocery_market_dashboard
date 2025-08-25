import { baseApi } from "../../api/baseApi";




const dashboardManageOrderApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getOrderApi: builder.query({
            query: ({per_page,page,status}) => ({
                url: `/admin/allOrders?per_page=${per_page}&page=${page}&status=${status}`,
                method: "GET",
            }),
            providesTags: ['manageOrder'],
        }),
        updateStatusApi: builder.mutation({
            query: ({updateStatusInfo,id}) => ({
                url: `/app/orders/${id}/status`,
                method: "POST",
                body:updateStatusInfo
            }),
            providesTags: ['manageOrder'],
        }),
       
    

        // updateTermApi: builder.mutation({
        //     query: ({updateTermInfo,id}) => ({
        //         url: `/admin/updateTerm/${id}`,
        //         method: "POST",
        //         body:updateTermInfo,
        //     }),
        //     providesTags: ['manageTerm'],
        // }),
        // deleteTermApi: builder.mutation({
        //     query: (id) => ({
        //         url: `/admin/deleteTerm/${id}`,
        //         method: "DELETE"
        //     }),
        //     providesTags: ['manageTerm'],
        // }),

    })
})


export const {useGetOrderApiQuery} = dashboardManageOrderApi;