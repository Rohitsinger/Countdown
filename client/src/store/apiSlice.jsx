import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseUrI = "http://localhost:5000/"

export const apiSlice = createApi({
    baseQuery:fetchBaseQuery({baseUrl:baseUrI}),
    endpoints:builder=>({
        getCategories:builder.query({
            query:()=>'api/categories',
            providesTags:['categories']
          
        }),
      //get labels
      getLabels:builder.query({
        query:()=>'api/labels',
        providesTags:['transaction']
      }),

      //add transaction
      addTransaction:builder.mutation({
        query:(initialTransaction)=>({
            url:'api/transaction',
            method:"POST",
            body:initialTransaction
        }),
        invalidatesTags:['transaction']
      }),
      //delete Record

      deleteTransaction:builder.mutation({
        query:recordId=>({
            url:`api/transaction`,
            method:'DELETE',
            body:recordId
        }),
        invalidatesTags:['transaction']
      })
    })
})
export const {useGetCategoriesQuery} = apiSlice
export const {useGetLabelsQuery} = apiSlice
export const {useDeleteTransactionMutation} = apiSlice

export default apiSlice;