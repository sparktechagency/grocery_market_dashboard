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

    })
})


export const {useAddGeoLocationApiMutation,useGetGeoLocationApiQuery, } = dashboardGeoLocationApi;