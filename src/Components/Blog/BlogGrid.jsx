import React from 'react'
import { useTranslation } from 'react-i18next'
import { useBlogPageData } from '../Hook/blog'
import { Link } from 'react-router'
import { FaCalendarAlt } from 'react-icons/fa'

const BlogGrid = () => {
  const { i18n } = useTranslation()
  const currentLang = i18n.language
  const { data: blogs, isLoading, isError, error } = useBlogPageData()

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
            <div
              key={n}
              className="bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 overflow-hidden animate-pulse"
            >
              <div className="w-full h-64 bg-slate-200 dark:bg-slate-800" />
              <div className="p-5 space-y-3">
                <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-1/2 mx-auto" />
                <div className="h-5 bg-slate-200 dark:bg-slate-800 rounded w-3/4 mx-auto" />
                <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-1/3 mx-auto" />
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] p-6 text-center">
        <div className="w-16 h-16 bg-rose-50 dark:bg-rose-950/30 text-rose-500 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
          !
        </div>
        <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1">
          Failed to load blogs
        </h3>
        <p className="text-sm text-slate-400 max-w-xs">
          {error?.message || 'Something went wrong.'}
        </p>
      </div>
    )
  }

  return (
    <div className="bg-slate-50/50 dark:bg-slate-950 min-h-screen py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {blogs?.map((data) => (
            <Link
              key={data?.id || data?._id}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col"
            >
              {/* Image Section */}
              <div className="relative aspect-square w-full bg-slate-100 dark:bg-slate-800 overflow-hidden shrink-0">
                <img
                  src={data?.profile}
                  alt={
                    currentLang === 'bn'
                      ? data?.blog_info?.name?.name_bn
                      : data?.blog_info?.name?.name_en
                  }
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Dynamic Metadata Container (Responsive & Formatted) */}
              <div className="px-1  grid grid-cols-1 gap-1 sm:flex sm:items-center sm:justify-between border-b border-slate-50 dark:border-slate-800 ">
                {/* Category Badge */}
                <div className="flex items-center">
                  <span className="px-2 py-0.5 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 font-medium rounded-md text-[11px] uppercase tracking-wider">
                    {currentLang === 'bn'
                      ? data?.blog_info?.category?.text_bn
                      : data?.blog_info?.category?.text_en}
                  </span>
                </div>

                {/* Profile / Author Section */}
                <div className="flex items-center gap-1.5">
                  {data?.blog_info?.singleProfile && (
                    <img
                      src={data?.blog_info?.singleProfile}
                      alt="author profile"
                      className="w-4 h-4 rounded-full object-cover border border-slate-200 dark:border-slate-700"
                    />
                  )}
                  <span className="text-xs font-semibold text-slate-600 dark:text-slate-400 line-clamp-1">
                    {currentLang === 'bn'
                      ? data?.blog_info?.name?.name_bn
                      : data?.blog_info?.name?.name_en}
                  </span>
                </div>

                {/* Calendar Date Section */}
                <div className="flex items-center gap-1 text-[11px] font-medium text-slate-400 dark:text-slate-500">
                  <FaCalendarAlt className="text-slate-300 dark:text-slate-600 shrink-0" />
                  <span>
                    {currentLang === 'bn'
                      ? data?.blog_info?.date_since?.text_bn
                      : data?.blog_info?.date_since?.text_en}
                  </span>
                </div>
              </div>

              {/* Card Body Info */}
              <div className="p-3 flex flex-col flex-grow">
                {/* Blog Property Name Title */}
                <Link
                  to={`/BlogDetails/${data.id}`}
                  className="text-base font-black text-slate-800 dark:text-white group-hover:text-emerald-500 transition-colors duration-200 line-clamp-2 mb-2"
                >
                  {currentLang === 'bn'
                    ? data?.blog_info?.propertyName?.text_bn
                    : data?.blog_info?.propertyName?.text_en}
                </Link>

                {/* Blog Description Short Text */}
                <p className="text-[12px] font-medium text-slate-400 dark:text-slate-500 line-clamp-3">
                  {currentLang === 'bn'
                    ? data?.blog_info?.desc?.text_bn
                    : data?.blog_info?.desc?.text_en}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogGrid
