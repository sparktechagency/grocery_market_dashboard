import { baseApi } from "../../api/baseApi";




const dashboardManageOrderApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
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


export const {} = dashboardManageOrderApi;