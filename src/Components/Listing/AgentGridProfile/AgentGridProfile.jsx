import React from 'react';
import { useTranslation } from 'react-i18next';

import { useState } from 'react';
import {
  IoSearchOutline,
  IoChevronDownOutline,
  IoChevronUpOutline,
} from 'react-icons/io5'
import { FaStar } from 'react-icons/fa6';
import { Link } from 'react-router';
import { useAgentPageData } from '../../Hook/agent';
const AgentGridProfile = () => {
  const { i18n } = useTranslation()
  const currentLang = i18n.language
  const [isSearchOpen, setIsSearchOpen] = useState(true)
  const [isCategoryOpen, setIsCategoryOpen] = useState(true)

  // সাইডবারের ডাইনামিক টেক্সট ডাটা (en / bn)
  const sidebarText = {
    searchTitle: { en: 'Search', bn: 'অনুসন্ধান' },
    searchPlaceholder: { en: 'Search here...', bn: 'এখানে খুঁজুন...' },
    agencyType: { en: 'Agency Type', bn: 'এজেন্সির ধরন' },
    buyingAgency: { en: 'Buying Agency', bn: 'বায়িং এজেন্সি' },
    selectCity: { en: 'Select City', bn: 'শহর নির্বাচন করুন' },
    selectArea: { en: 'Select Area', bn: 'এলাকা নির্বাচন করুন' },
    selectCategory: { en: 'Select Category', bn: 'ক্যাটাগরি নির্বাচন করুন' },
    categoriesTitle: { en: 'Categories', bn: 'ক্যাটাগরি সমূহ' },
    rentals: { en: 'Rentals', bn: 'ভাড়া' },
    sales: { en: 'Sales', bn: 'বিক্রয়' },
    selectPlaceholder: { en: 'Select', bn: 'বাছাই করুন' },
  }

  const getLangText = (obj) => (currentLang === 'bn' ? obj.bn : obj.en)
  const { data: agent= [], isLoading, isError, error } = useAgentPageData()
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
  return (
    <section className="grid grid-cols-12 gap-2 dark:bg-black">
      <aside className="  shrink-0 col-span-3 flex flex-col gap-5">
        {/* ১. প্রধান সার্চ ও ফিল্টার বক্স */}
        <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-sm shadow-sm overflow-hidden">
          {/* হেডার (অ্যাকর্ডিয়ন টগল সহ) */}
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="w-full flex items-center justify-between p-4 font-bold text-slate-800 dark:text-white border-b border-slate-50 dark:border-slate-800/60 text-sm md:text-base"
          >
            <span>{getLangText(sidebarText.searchTitle)}</span>
            {isSearchOpen ? <IoChevronUpOutline /> : <IoChevronDownOutline />}
          </button>

          {/* কন্টেন্ট বডি */}
          {isSearchOpen && (
            <div className="p-4 flex flex-col gap-4">
              {/* সার্চ ইনপুট ফিল্ড */}
              <div className="relative">
                <input
                  type="text"
                  placeholder={getLangText(sidebarText.searchPlaceholder)}
                  className="w-full bg-slate-50 dark:bg-slate-800 text-sm pl-10 pr-4 py-2.5 rounded border border-transparent focus:border-indigo-500 focus:bg-white dark:focus:bg-slate-900 focus:outline-none text-slate-700 dark:text-slate-200 transition-all"
                />
                <IoSearchOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />
              </div>

              {/* এজেন্সির ধরন (Agency Type) */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  {getLangText(sidebarText.agencyType)}
                </label>
                <div className="relative">
                  <select className="w-full bg-slate-50 dark:bg-slate-800 text-sm px-3 py-2.5 rounded border border-transparent appearance-none focus:outline-none focus:border-indigo-500 text-slate-600 dark:text-slate-300 font-medium cursor-pointer">
                    <option>{getLangText(sidebarText.buyingAgency)}</option>
                  </select>
                  <IoChevronDownOutline className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
              </div>

              {/* শহর (Select City) */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  {getLangText(sidebarText.selectCity)}
                </label>
                <div className="relative">
                  <select className="w-full bg-slate-50 dark:bg-slate-800 text-sm px-3 py-2.5 rounded border border-transparent appearance-none focus:outline-none focus:border-indigo-500 text-slate-400 font-medium cursor-pointer">
                    <option>
                      {getLangText(sidebarText.selectPlaceholder)}
                    </option>
                  </select>
                  <IoChevronDownOutline className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
              </div>

              {/* এলাকা (Select Area) */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  {getLangText(sidebarText.selectArea)}
                </label>
                <div className="relative">
                  <select className="w-full bg-slate-50 dark:bg-slate-800 text-sm px-3 py-2.5 rounded border border-transparent appearance-none focus:outline-none focus:border-indigo-500 text-slate-400 font-medium cursor-pointer">
                    <option>
                      {getLangText(sidebarText.selectPlaceholder)}
                    </option>
                  </select>
                  <IoChevronDownOutline className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
              </div>

              {/* ক্যাটাগরি (Select Category) */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  {getLangText(sidebarText.selectCategory)}
                </label>
                <div className="relative">
                  <select className="w-full bg-slate-50 dark:bg-slate-800 text-sm px-3 py-2.5 rounded border border-transparent appearance-none focus:outline-none focus:border-indigo-500 text-slate-400 font-medium cursor-pointer">
                    <option>
                      {getLangText(sidebarText.selectPlaceholder)}
                    </option>
                  </select>
                  <IoChevronDownOutline className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ২. ক্যাটাগরি চেকবক্স সেকশন */}
        <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-lg shadow-sm overflow-hidden">
          <button
            onClick={() => setIsCategoryOpen(!isCategoryOpen)}
            className="w-full flex items-center justify-between p-4 font-bold text-slate-800 dark:text-white border-b border-slate-50 dark:border-slate-800/60 text-sm md:text-base"
          >
            <span>{getLangText(sidebarText.categoriesTitle)}</span>
            {isCategoryOpen ? <IoChevronUpOutline /> : <IoChevronDownOutline />}
          </button>

          {isCategoryOpen && (
            <div className="p-4 flex flex-col gap-3">
              {/* Rentals চেকবক্স */}
              <label className="flex items-center gap-3 text-slate-600 dark:text-slate-300 text-sm font-medium cursor-pointer group">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer accent-indigo-600"
                />
                <span className="group-hover:text-indigo-600 transition-colors">
                  {getLangText(sidebarText.rentals)}{' '}
                  <span className="text-slate-400 dark:text-slate-500 text-xs">
                    (24)
                  </span>
                </span>
              </label>

              {/* Sales চেকবক্স */}
              <label className="flex items-center gap-3 text-slate-600 dark:text-slate-300 text-sm font-medium cursor-pointer group">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer accent-indigo-600"
                />
                <span className="group-hover:text-indigo-600 transition-colors">
                  {getLangText(sidebarText.sales)}{' '}
                  <span className="text-slate-400 dark:text-slate-500 text-xs">
                    (75)
                  </span>
                </span>
              </label>
            </div>
          )}
        </div>
      </aside>
      <div className="col-span-12 lg:col-span-9">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {isLoading
            ? /* লোডিং ট্রু হলে এই ৮টি কার্ডের সুন্দর অ্যানিমেটেড স্কেলিটন দেখাবে */
              [1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <div
                  key={n}
                  className="bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 overflow-hidden shadow-sm animate-pulse flex flex-col"
                >
                  {/* ইমেজ স্কেলিটন (হুবহু স্কয়ার প্রপোরশন) */}
                  <div className="relative aspect-square w-full bg-slate-200 dark:bg-slate-800" />

                  {/* টেক্সট ও কন্টেন্ট স্কেলিটন */}
                  <div className="p-5 flex flex-col items-center space-y-3 flex-grow justify-center">
                    {/* রেটিং স্টার স্কেলিটন */}
                    <div className="h-3.5 bg-slate-200 dark:bg-slate-800 rounded w-1/2" />
                    {/* নাম স্কেলিটন */}
                    <div className="h-5 bg-slate-200 dark:bg-slate-800 rounded w-3/4" />
                    {/* ডেজিগনেশন স্কেলিটন */}
                    <div className="h-3.5 bg-slate-200 dark:bg-slate-800 rounded w-1/3" />
                  </div>
                </div>
              ))
            : /* লোডিং শেষ হলে আসল ডেটা রেন্ডার হবে */
              agent?.map((data) => (
                <Link
                  to={`/BuyDetails/${data.id}`}
                  key={data?.id || data?._id}
                  className="bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col"
                >
                  {/* Image & Listing Badge Section */}
                  <div className="relative aspect-square w-full bg-slate-100 dark:bg-slate-800 overflow-hidden shrink-0">
                    <img
                      src={data.img}
                      alt={data?.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Listings Floating Badge */}
                    <div className="absolute top-3 right-3 bg-[#4F46E5] text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-sm tracking-wide">
                      {currentLang === 'bn'
                        ? data.listings_count?.text_bn
                        : data.listings_count?.text_en}
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
                          ? data.reviews_heading?.text_bn
                          : data.reviews_heading?.text_en}
                      </span>
                    </div>

                    {/* Agent Name */}
                    <h3 className="text-base font-black text-slate-800 dark:text-white group-hover:text-emerald-500 transition-colors duration-200 line-clamp-1">
                      {currentLang === 'bn'
                        ? data.agent_info?.name?.name_bn
                        : data.agent_info?.name?.name_en}
                    </h3>

                    {/* Agent Role */}
                    <p className="text-[12px] font-medium text-slate-400 dark:text-slate-500 mt-0.5">
                      {currentLang === 'bn'
                        ? data.agent_info?.agent?.agenttype_bn
                        : data.agent_info?.agent?.agenttype_en}
                    </p>
                  </div>
                </Link>
              ))}
        </div>
      </div>
    </section>
  )
}

export default AgentGridProfile

