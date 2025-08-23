import { baseApi } from "../../api/baseApi";




const dashboardNotificationApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getNotificationApi: builder.query({
            query: () => ({
                url: `/app/getNotifications`,
                method: "GET"
            }),
            providesTags: ['notification'],
        }),
        getTotalNotificationApi: builder.query({
            query: () => ({
                url: `/app/totalNotification`,
                method: "GET"
            }),
            providesTags: ['notification'],
        }),
        // postMarkRedNotificationApi: builder.mutation({
        //     query: (id) => ({
        //         url: `/mark-notification/${id}`,
        //         method: "POST"
        //     }),
        //     providesTags: ['notification'],
        // }),
        // postAllMarkRedNotificationApi: builder.mutation({
        //     query: () => ({
        //         url: `/mark-all-notification`,
        //         method: "POST"
        //     }),
        //     providesTags: ['notification'],
        // }),
    })
})


export const {useGetNotificationApiQuery,useGetTotalNotificationApiQuery} = dashboardNotificationApi;