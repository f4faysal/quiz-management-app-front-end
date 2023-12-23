import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const quiz_url = "/quizzes";

export const quizApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // create quiz
    createQuiz: build.mutation({
      query: (paylod) => ({
        url: `${quiz_url}`,
        method: "POST",
        data: paylod,
      }),
      invalidatesTags: [tagTypes.quiz],
    }),
    // quizs
    quizzes: build.query({
      query: () => ({
        url: `${quiz_url}`,
        method: "GET",
      }),
      transformResponse: (response, meta) => {
        return {
          quiz: response,
          meta,
        };
      },

      providesTags: [tagTypes.quiz],
    }),
    // quiz
    quiz: build.query({
      query: (id) => ({
        url: `${quiz_url}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.quiz],
    }),
    // quiz quiz
    updateQuiz: build.mutation({
      query: (paylod) => ({
        url: `${quiz_url}/${paylod.id}`,
        method: "PATCH",
        data: paylod.data,
      }),
      invalidatesTags: [tagTypes.quiz],
    }),
    // delete quiz
    deleteQuiz: build.mutation({
      query: (id) => ({
        url: `${quiz_url}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.quiz],
    }),
  }),
});

export const {} = quizApi;
