import { baseApi } from "../../api/baseApi";




const dashboardHomeApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getDashboardHomeApi: builder.query({
            query: (filter) => ({
                url: `/admin/dashboard?filter=${filter}`,
                method: "GET"
            }),
            providesTags: ['dashboardHome'],
        }),
    })
})


export const {useGetDashboardHomeApiQuery} = dashboardHomeApi;