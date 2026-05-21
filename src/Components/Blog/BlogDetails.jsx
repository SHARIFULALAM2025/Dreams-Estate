import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaCalendarAlt } from 'react-icons/fa'
import { useParams } from 'react-router'
import { BiLike, BiDislike } from 'react-icons/bi'

const BlogDetails = () => {
  const { blogId } = useParams()
  const { i18n } = useTranslation()
  const currentLang = i18n.language

  // Fetch dynamic single data object from API backend
  const {
    data: blog,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['blogDetails', blogId],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_Backend_url}/blog/single/${blogId}`
      )
      return data
    },
    enabled: !!blogId,
    staleTime: 1000 * 60 * 10,
  })

  // 1. Loading State Placeholder Skeleton (Fixed to match the updated responsive container layout)
  if (isLoading) {
    return (
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 animate-pulse space-y-6">
        <div className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] bg-slate-200 dark:bg-slate-800 rounded-2xl sm:rounded-3xl" />
        <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-1/6" />
        <div className="h-8 bg-slate-200 dark:bg-slate-800 rounded w-3/4" />
        <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-1/2" />
        <div className="space-y-3 pt-6">
          <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-full" />
          <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-full" />
          <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-5/6" />
        </div>
      </div>
    )
  }

  // 2. Error Fallback UI Alert Panel
  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[500px] p-6 text-center">
        <div className="w-16 h-16 bg-rose-50 dark:bg-rose-950/30 text-rose-500 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
          !
        </div>
        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
          Failed to load blog content
        </h3>
        <p className="text-sm text-slate-400 max-w-xs">
          {error?.message || 'Something went wrong while pulling this article.'}
        </p>
      </div>
    )
  }

  return (
    <div className="bg-slate-50/50 dark:bg-slate-950 min-h-screen transition-colors duration-300 pb-16">
      {/* Maximum content width container across all screen scales */}
      <div className=" mx-auto px-.5 sm:px-1 lg:px-2 ">
        {/* Banner Section Container */}
        <div className="relative bg-slate-100 dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800/50 rounded-xl mb-32 sm:mb-28 md:mb-24 lg:mb-24">
          <figure className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] overflow-hidden rounded-xl">
            <img
              src={blog?.details || blog?.profile}
              alt="blog feature banner"
              className="w-full h-full object-cover"
            />
          </figure>

          {/* Absolute floating panel - Structured to avoid overlapping text on compact mobile screens */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[85%] bg-white dark:bg-slate-900 rounded-xl sm:rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-center text-center gap-2.5 z-10">
            {/* Category Badge label */}
            <span className="px-2.5 py-0.5 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 font-bold rounded text-[10px] uppercase tracking-wider">
              {currentLang === 'bn'
                ? blog?.blog_info?.category?.text_bn
                : blog?.blog_info?.category?.text_en}
            </span>

            {/* Main Article Title Heading line */}
            <h1 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-black text-slate-800 dark:text-white max-w-2xl leading-snug">
              {currentLang === 'bn'
                ? blog?.blog_info?.heading?.text_bn
                : blog?.blog_info?.heading?.text_en}
            </h1>

            {/* Meta Rows (Author, Time stamp markers) */}
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 mt-1 border-t border-slate-100 dark:border-slate-800/80 pt-3 w-full max-w-md">
              {/* Profile Author Badge setup */}
              <div className="flex items-center gap-1.5">
                {blog?.blog_info?.singleProfile && (
                  <img
                    src={blog?.blog_info?.singleProfile}
                    alt="author profile"
                    className="w-5 h-5 rounded-full object-cover border border-slate-200 dark:border-slate-700"
                  />
                )}
                <span className="text-[12px] font-semibold text-slate-600 dark:text-slate-400">
                  {currentLang === 'bn'
                    ? blog?.blog_info?.name?.name_bn
                    : blog?.blog_info?.name?.name_en}
                </span>
              </div>

              {/* Created Calendar Date string point */}
              <div className="flex items-center gap-1 text-[11px] font-medium text-slate-400 dark:text-slate-500">
                <FaCalendarAlt className="text-slate-300 dark:text-slate-600" />
                <span>
                  {currentLang === 'bn'
                    ? blog?.blog_info?.date_since?.text_bn
                    : blog?.blog_info?.date_since?.text_en}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Core Text & Media content area */}
        <div className="space-y-4 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed mt-4">
          <p>
            {currentLang === 'bn'
              ? blog?.blog_info?.desc1?.text1_bn
              : blog?.blog_info?.desc1?.text1_en}
          </p>

          <p className="font-bold text-slate-900 dark:text-white">
            {currentLang === 'bn'
              ? blog?.blog_info?.heading?.text_bn
              : blog?.blog_info?.heading?.text_en}
            :
          </p>

          {/* Dynamic Responsive Image Grid Showcase */}
          {blog?.blog_info?.gallery && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-6 sm:my-8">
              {blog?.blog_info?.gallery.map((imgUrl, idx) => (
                <img
                  key={idx}
                  src={imgUrl}
                  className="w-full aspect-[4/3] object-cover rounded-xl shadow-sm hover:scale-[1.02] transition-transform duration-200"
                  alt="grid gallery showcase"
                />
              ))}
            </div>
          )}

          <p>
            {currentLang === 'bn'
              ? blog?.blog_info?.comment?.text_bn
              : blog?.blog_info?.comment?.text_en}
            :
          </p>

          {/* Author Bio Card Component */}
          <div className="mt-10 p-5 sm:p-6 bg-slate-100/70 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 rounded-2xl flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
            <img
              src={
                blog?.blog_info?.singleProfile ||
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150'
              }
              alt="author badge profile"
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-white dark:border-slate-800 shadow-sm shrink-0"
            />
            <div className="space-y-1">
              <span className="text-[10px] sm:text-[11px] uppercase font-bold text-emerald-500 tracking-wider block">
                {currentLang === 'bn'
                  ? blog?.blog_info?.auth?.text_bn
                  : blog?.blog_info?.auth?.text_en}
              </span>
              <h4 className="text-base font-black text-slate-800 dark:text-white">
                {currentLang === 'bn'
                  ? blog?.blog_info?.authName?.text_bn
                  : blog?.blog_info?.authName?.text_en}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal">
                {currentLang === 'bn'
                  ? blog?.blog_info?.authDes?.text_bn
                  : blog?.blog_info?.authDes?.text_en}
              </p>
            </div>
          </div>

          {/* User Engagement Interactive Poll Bar */}
          <div className="mt-6 p-4 border border-slate-100 dark:border-slate-800/60 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 bg-white dark:bg-slate-900/20 shadow-sm">
            <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-center sm:text-left">
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                {currentLang === 'bn'
                  ? blog?.blog_info?.question?.text_bn
                  : blog?.blog_info?.question?.text_en}
              </span>
            </div>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              {currentLang === 'bn'
                ? blog?.blog_info?.help?.text_bn
                : blog?.blog_info?.help?.text_en}
            </span>
            <div className="flex items-center gap-2 w-full sm:w-auto justify-center">
              <button className="flex-1 sm:flex-none justify-center px-4 py-1.5 text-xs font-semibold bg-slate-50 hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-lg flex items-center gap-1.5 transition-all">
                <BiLike className="text-emerald-500 text-sm" /> Yes
              </button>
              <button className="flex-1 sm:flex-none justify-center px-4 py-1.5 text-xs font-semibold bg-slate-50 hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-lg flex items-center gap-1.5 transition-all">
                <BiDislike className="text-rose-500 text-sm" /> No
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogDetails
