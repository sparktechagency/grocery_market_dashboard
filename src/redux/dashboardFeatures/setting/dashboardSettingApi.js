import { baseApi } from "../../api/baseApi";

const dashboardSettingApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        aboutSettingApi: builder.mutation({
            query: (settingAboutInfo) => ({
                url: `/admin/setAboutUs`,
                method: "POST",
                body: settingAboutInfo,
            }),
            invalidatesTags: ['setting'],
        }),
        getAboutSettingApi: builder.query({
            query: () => ({
                url: `/admin/getAboutUs`,
                method: "GET",
    
            }),
            invalidatesTags: ['setting'],
        }),

    })
})


export const { useAboutSettingApiMutation,useGetAboutSettingApiQuery } = dashboardSettingApi;