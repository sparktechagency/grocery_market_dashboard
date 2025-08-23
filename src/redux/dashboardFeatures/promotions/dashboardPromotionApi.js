import { baseApi } from "../../api/baseApi";




const dashboardPromotionsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addPromotionApi: builder.mutation({
            query: (addPromotionInfo) => ({
                url: `/admin/addBanner`,
                method: "POST",
                body:addPromotionInfo,
            }),
            providesTags: ['promotion'],
        }),
        getAllPromotionApi: builder.query({
            query: () => ({
                url: `/admin/getAllBanners`,
                method: "GET"
            }),
            providesTags: ['promotion'],
        }),
        deletePromotionApi: builder.mutation({
            query: (id) => ({
                url: `/admin/deleteBanner/${id}`,
                method: "DELETE"
            }),
            providesTags: ['promotion'],
        }),
    })
})


export const { useAddPromotionApiMutation, useGetAllPromotionApiQuery, useDeletePromotionApiMutation } = dashboardPromotionsApi;