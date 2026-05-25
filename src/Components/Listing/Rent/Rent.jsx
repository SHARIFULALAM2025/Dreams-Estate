import React from 'react';
import { useAgencyPageData } from '../../Hook/agency';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import { FaStar } from 'react-icons/fa';

const Rent = () => {
     const { i18n } = useTranslation()
      const currentLang = i18n.language
    const { data: agency, isLoading, isError, error } = useAgencyPageData()
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
            Failed to load agents
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {agency?.map((data) => (
              <Link
                to={`/AgencyDetails/${data.id}`}
                key={data?.id || data?._id}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col"
              >
                {/* Image & Listing Badge Section */}
                <div className="relative aspect-square w-full bg-slate-100 dark:bg-slate-800 overflow-hidden shrink-0">
                  <img
                    src={data.img}
                    alt={data?.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Listings Floating Badge (Top Right) */}
                  <div className="absolute top-3 right-3 bg-[#4F46E5] text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-sm tracking-wide">
                    {currentLang === 'bn'
                      ? data.listings_count.text_bn
                      : data.listings_count.text_en}
                  </div>
                </div>

                {/* Card Body Info */}
                <div className="p-5 flex flex-col items-center justify-center text-center flex-grow">
                  {/* Rating & Review Stars */}
                  <div className="flex items-center justify-center gap-1.5 mb-2">
                    <div className="flex items-center gap-0.5 text-amber-400 text-xs">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400 pt-0.5">
                      {currentLang === 'bn'
                        ? data.reviews_heading.text_bn
                        : data.reviews_heading.text_en}
                    </span>
                  </div>

                  {/* Agent Name */}
                  <h3 className="text-base font-black text-slate-800 dark:text-white group-hover:text-emerald-500 transition-colors duration-200 line-clamp-1">
                    {currentLang === 'bn'
                      ? data.agent_info.name.name_bn
                      : data.agent_info.name.name_en}
                  </h3>

                  {/* Agent Role / Designation */}
                  <p className="text-[12px] font-medium text-slate-400 dark:text-slate-500 mt-0.5">
                    {currentLang === 'bn'
                      ? data.agent_info.agent.agenttype_bn
                      : data.agent_info.agent.agenttype_en}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    )
};

export default Rent;