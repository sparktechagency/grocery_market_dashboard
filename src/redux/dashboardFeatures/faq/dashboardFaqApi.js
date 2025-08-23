import { baseApi } from "../../api/baseApi";




const dashboardFaqApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
       faqAddApi: builder.mutation({
            query: (addFaqInfo) => ({
                url: `/admin/addFaq`,
                method: "POST",
                body:addFaqInfo
            }),
            providesTags: ['dashboardFaq'],
        }),



       faqEditApi: builder.mutation({
            query: ({editFaqInfo,id}) => ({
                url: `/admin/updateFaq/${id}`,
                method: "POST",
                body:editFaqInfo
            }),
            providesTags: ['dashboardFaq'],
        }),


        getAllFaqApi: builder.query({
            query: () => ({
                url: `/admin/getAllFaq`,
                method: "GET"
            }),
            providesTags: ['dashboardFaq'],
        }),
        getSingleFaqApi: builder.query({
            query: (id) => ({
                url: `/admin/showFaq/${id}`,
                method: "GET"
            }),
            providesTags: ['dashboardFaq'],
        }),
        faqDeleteApi: builder.mutation({
            query: (id) => ({
                url: `/admin/deleteFaq/${id}`,
                method: "DELETE",
            }),
            providesTags: ['dashboardFaq'],
        }),
    })
})


export const {useFaqAddApiMutation,useFaqEditApiMutation,useGetAllFaqApiQuery,useGetSingleFaqApiQuery,useFaqDeleteApiMutation} = dashboardFaqApi;