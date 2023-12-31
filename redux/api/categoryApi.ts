import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const CATEGORY_URL = "/category";

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // create category
    createCategory: build.mutation({
      query: (payload) => ({
        url: `${CATEGORY_URL}`,
        method: "POST",
        data: payload,
      }),
      invalidatesTags: [tagTypes.category],
    }),
    // categorys
    categories: build.query({
      query: () => ({
        url: `${CATEGORY_URL}`,
        method: "GET",
      }),

      providesTags: [tagTypes.category],
    }),
    // CATEGORY
    category: build.query({
      query: (id) => ({
        url: `${CATEGORY_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.category],
    }),
    // score api

    addQuizScore: build.mutation({
      query: (payload) => ({
        url: `/score`,
        method: "POST",
        data: payload,
      }),
      invalidatesTags: [tagTypes.score],
    }),
    // scores
    scores: build.query({
      query: () => ({
        url: `/score`,
        method: "GET",
      }),
      providesTags: [tagTypes.score],
    }),
    // score
    score: build.query({
      query: (id) => ({
        url: `/score/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.score],
    }),
  }),
});

export const {
  useCreateCategoryMutation,
  useCategoriesQuery,
  useCategoryQuery,

  useAddQuizScoreMutation,
  useScoresQuery,
  useScoreQuery,
} = categoryApi;
