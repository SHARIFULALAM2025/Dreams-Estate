import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAgentPageData } from '../../Hook/agent';
import {
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGlobe,
  FaStar,
} from 'react-icons/fa6'
import { IoChevronDownOutline, IoChevronUpOutline, IoSearchOutline } from 'react-icons/io5';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router';
const AgentProfileListSidebar = () => {
    const { i18n } = useTranslation()
          const currentLang = i18n.language
          const {
            data: agent = [],
            isLoading,
            isError,
            error,
    } = useAgentPageData()
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
              {isCategoryOpen ? (
                <IoChevronUpOutline />
              ) : (
                <IoChevronDownOutline />
              )}
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
          <div className=" flex flex-col gap-5">
            {agent.map((agent) => (
              <div
                key={agent.id}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-5 flex flex-col md:flex-row items-center md:items-start lg:items-center gap-6 shadow-2xl transition-all duration-300 hover:shadow-md"
              >
                <div className="w-full md:w-44 h-36 flex items-center justify-center bg-slate-100 dark:bg-slate-800 rounded-md overflow-hidden shrink-0 border border-slate-100 dark:border-slate-700">
                  <img
                    src={agent.img}
                    alt={agent.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 w-full text-center md:text-left">
                  {/* রেটিং ও রিভিউ */}
                  <div className="flex items-center justify-center md:justify-start gap-1 mb-1">
                    <div className="flex text-amber-400 text-xs gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300 ml-1">
                      {currentLang === 'bn'
                        ? agent.reviews_heading.text_bn
                        : agent.reviews_heading.text_en}
                    </span>
                  </div>

                  {/* এজেন্সির নাম */}
                  <Link
                    to={`/BuyDetails/${agent.id}`}
                    className="text-xl font-bold text-slate-800 dark:text-white hover:text-emerald-500 transition-colors duration-200 line-clamp-1 mb-0.5"
                  >
                    {currentLang === 'bn'
                      ? agent.agent_info.name.name_bn
                      : agent.agent_info.name.name_en}
                  </Link>

                  {/* লোকেশন */}
                  <p className="text-xs text-slate-400 dark:text-slate-500 mb-3 flex items-center justify-center md:justify-start gap-1">
                    {(currentLang === 'bn'
                      ? agent?.agent_info?.service_area?.service_bn
                      : agent?.agent_info?.service_area?.service_en
                    )?.map((area, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"
                      >
                        <FaMapMarkerAlt className="text-indigo-500 text-xs" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </p>

                  {/* ডেসক্রিপশন */}
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-5 leading-relaxed max-w-3xl">
                    {currentLang === 'bn'
                      ? agent.agent_info.agent.agenttype_bn
                      : agent.agent_info.agent.agenttype_en}
                  </p>

                  <hr className="border-slate-100 dark:border-slate-800 my-3 w-full" />

                  {/* সোশ্যাল মিডিয়া আইকনস */}
                  <div className="flex items-center justify-center md:justify-start gap-4 text-slate-400 dark:text-slate-500">
                    <a
                      href="#"
                      className="hover:text-slate-700 dark:hover:text-white transition-colors text-sm"
                    >
                      <FaXTwitter />
                    </a>
                    <a
                      href="#"
                      className="hover:text-blue-600 transition-colors text-sm"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      href="#"
                      className="hover:text-pink-600 transition-colors text-sm"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      href="#"
                      className="hover:text-blue-500 transition-colors text-sm"
                    >
                      <FaLinkedinIn />
                    </a>
                    <a
                      href="#"
                      className="hover:text-emerald-500 transition-colors text-sm"
                    >
                      <FaGlobe />
                    </a>
                  </div>
                </div>

                <div className="w-full md:w-auto flex justify-center md:justify-end shrink-0 pt-2 md:pt-0">
                  <span className="bg-indigo-600 text-white text-xs font-semibold px-3 py-1.5 rounded bg-[mediumblue] dark:bg-indigo-700 whitespace-nowrap">
                    {currentLang === 'bn'
                      ? agent.listings_count.text_bn
                      : agent.listings_count.text_en}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
};

export default AgentProfileListSidebar;