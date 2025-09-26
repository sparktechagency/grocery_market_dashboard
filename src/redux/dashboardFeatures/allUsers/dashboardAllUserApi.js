import { baseApi } from "../../api/baseApi";




const dashboardAllUserApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getDashboardAllUserApi: builder.query({
            query: ({totalUser,page,search=""}) => ({
                url: `/admin/totalUser?totalUser=${totalUser}&page=${page}&search=${search}`,
                method: "GET"
            }),
            providesTags: ['dashboardUser'],
        }),
    })
})


export const {useGetDashboardAllUserApiQuery} = dashboardAllUserApi;