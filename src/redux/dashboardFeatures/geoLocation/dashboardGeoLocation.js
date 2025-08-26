import { baseApi } from "../../api/baseApi";




const dashboardGeoLocationApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        AddGeoLocationApi: builder.mutation({
            query: (addGeolocationInfo) => ({
                url: `/admin/addGeolocation`,
                method: "POST",
                body: addGeolocationInfo,
            }),
            invalidatesTags: ['geolocation'],
        }),
        getGeoLocationApi: builder.query({
            query: ({ search = '', per_page, page }) => ({
                url: `/admin/getAllGeolocations?search=${search}&per_page=${per_page}&page=${page}`,
                method: "GET",
            }),
            providesTags: ['geolocation'],
        }),
        singleGeoLocationApi: builder.query({
            query: (id) => ({
                url: `/admin/showGeolocation/${id}`,
                method: "GET",
            }),
            providesTags: ['geolocation'],
        }),
        updateGeoLocationApi: builder.mutation({
            query: ({editGLocationInfo,id}) => ({
                url: `/admin/updateGeolocation/${id}`,
                method: "POST",
                body:editGLocationInfo,
            }),
            providesTags: ['geolocation'],
        }),
        deleteGeoLocationApi: builder.mutation({
            query: (id) => ({
                url: `/admin/deleteGeolocation/${id}`,
                method: "DELETE",
            }),
            providesTags: ['geolocation'],
        }),

    })
})


export const {useAddGeoLocationApiMutation,useGetGeoLocationApiQuery,useSingleGeoLocationApiQuery,useUpdateGeoLocationApiMutation,useDeleteGeoLocationApiMutation } = dashboardGeoLocationApi;