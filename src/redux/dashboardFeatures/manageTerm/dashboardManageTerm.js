import { baseApi } from "../../api/baseApi";




const dashboardManageTermApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addTermsApi: builder.mutation({
            query: (addTermInfo) => ({
                url: `/admin/addTerm`,
                method: "POST",
                body:addTermInfo
            }),
            providesTags: ['manageTerm'],
        }),
        getAllTermApi: builder.query({
            query: ({search="", per_page, page}) => ({
                url: `/admin/getAllTerms?search=${search}&per_page=${per_page}&page=${page}`,
                method: "GET"
            }),
            providesTags: ['manageTerm'],
        }),
        


        getSingleTermApi: builder.query({
            query: (id) => ({
                url: `/admin/showTerm/${id}`,
                method: "GET"
            }),
            providesTags: ['manageTerm'],
        }),
        getSearchTermApi: builder.query({
            query: () => ({
                url: ``,
                method: "GET"
            }),
            providesTags: ['manageTerm'],
        }),

        updateTermApi: builder.mutation({
            query: ({updateTermInfo,id}) => ({
                url: `/admin/updateTerm/${id}`,
                method: "POST",
                body:updateTermInfo,
            }),
            providesTags: ['manageTerm'],
        }),
        deleteTermApi: builder.mutation({
            query: (id) => ({
                url: `/admin/deleteTerm/${id}`,
                method: "DELETE"
            }),
            providesTags: ['manageTerm'],
        }),

    })
})


export const {useAddTermsApiMutation,useGetAllTermApiQuery,useGetSingleTermApiQuery,useGetSearchTermApiQuery,useUpdateTermApiMutation,useDeleteTermApiMutation} = dashboardManageTermApi;