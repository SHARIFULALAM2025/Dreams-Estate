import React from 'react'
import { useParams } from 'react-router'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useTranslation } from 'react-i18next'
import {
  FaChevronUp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaStar,
  FaWhatsapp,
} from 'react-icons/fa'

const AgentDetails = () => {
  const { agentId } = useParams()
  const { i18n } = useTranslation()
  const currentLang = i18n.language

  const {
    data: agent,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['agentDetails', agentId],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_Backend_url}/single/agent/${agentId}`
      )
      return data
    },
    enabled: !!agentId,
    staleTime: 1000 * 60 * 10,
  })

  // --- ১. নির্দিষ্ট পেজ লেআউট অনুযায়ী স্কেলিটন লোডার (Skeleton Correction) ---
  if (isLoading) {
    return (
      <div className="bg-slate-50 dark:bg-slate-950 min-h-screen py-8 px-4 sm:px-6 lg:px-8 animate-pulse">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Top Profile Header Skeleton */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 p-6 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex flex-col sm:flex-row items-center gap-5 w-full">
              <div className="w-24 h-24 sm:w-28 sm:h-28 bg-slate-200 dark:bg-slate-800 rounded-xl" />
              <div className="space-y-3 flex-1 w-full">
                <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-1/4 mx-auto sm:mx-0" />
                <div className="h-6 bg-slate-200 dark:bg-slate-800 rounded w-1/2 mx-auto sm:mx-0" />
                <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-1/3 mx-auto sm:mx-0" />
              </div>
            </div>
          </div>
          {/* Main Grid Skeleton */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              <div className="h-44 bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 p-6 shadow-sm" />
              <div className="h-28 bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 p-6 shadow-sm" />
            </div>
            <div className="h-96 bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 p-6 shadow-sm" />
          </div>
        </div>
      </div>
    )
  }

  // --- ২. এরর হ্যান্ডলিং এবং ডাটা সেফটি চেক ---
  if (isError) {
    return (
      <div className="text-center py-12 text-rose-500 font-bold">
        Error: {error?.message || 'Something went wrong.'}
      </div>
    )
  }

  // অপশনাল চেইনিং সেফটি গার্ড (যদি ডাটা না থাকে পেজ ক্র্যাশ করা আটকাবে)
  if (!agent) {
    return (
      <div className="text-center py-12 text-slate-500 font-bold">
        No agent data found!
      </div>
    )
  }

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen py-8 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* --- Top Header Profile Card --- */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 p-6 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 shadow-sm">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
            <img
              src={agent?.img}
              alt={
                currentLang === 'bn'
                  ? agent?.agent_info?.name?.name_bn
                  : agent?.agent_info?.name?.name_en
              }
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl object-cover border border-slate-100 dark:border-slate-800"
            />
            <div className="space-y-2">
              {/* Rating */}
              <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-400 text-xs">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
                <span className="text-slate-500 dark:text-slate-400 font-medium ml-1 text-sm">
                  {currentLang === 'bn'
                    ? agent?.reviews_heading?.text_bn
                    : agent?.reviews_heading?.text_en}
                </span>
              </div>
              {/* Name & Type */}
              <h1 className="text-xl sm:text-2xl font-black text-slate-800 dark:text-white">
                {currentLang === 'bn'
                  ? agent?.agent_info?.name?.name_bn
                  : agent?.agent_info?.name?.name_en}
              </h1>
              <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                {currentLang === 'bn'
                  ? agent?.agent_info?.agent?.agenttype_bn
                  : agent?.agent_info?.agent?.agenttype_en}
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-1 text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
                <span>
                  {currentLang === 'bn'
                    ? agent?.agent_info?.member_since?.text_bn
                    : agent?.agent_info?.member_since?.text_en}
                </span>
                <span className="hidden sm:inline">|</span>
                <span>
                  {currentLang === 'bn'
                    ? agent?.agent_info?.agent_license?.text_bn
                    : agent?.agent_info?.agent_license?.text_en}
                </span>
                <span className="hidden sm:inline">|</span>
                <span>
                  {currentLang === 'bn'
                    ? agent?.agent_info?.tax_number?.text_bn
                    : agent?.agent_info?.tax_number?.text_en}
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 w-full sm:w-auto justify-center">
            <button className="flex items-center gap-2 bg-[#00e676] hover:bg-[#00c853] text-white text-xs font-bold px-4 py-2.5 rounded-lg shadow-sm transition-all">
              <FaWhatsapp className="text-base" /> WhatsApp
            </button>
            <button className="flex items-center gap-2 bg-slate-900 hover:bg-black dark:bg-slate-800 dark:hover:bg-slate-700 text-white text-xs font-bold px-4 py-2.5 rounded-lg shadow-sm transition-all">
              <FaPhoneAlt className="text-xs" /> Call Me
            </button>
          </div>
        </div>

        {/* --- Main Content Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column (Details Sections) */}
          <div className="lg:col-span-2 space-y-4">
            {/* About Section */}
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 p-6 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-base font-bold text-slate-800 dark:text-white">
                  {currentLang === 'bn'
                    ? agent?.about_section?.title?.text_bn
                    : agent?.about_section?.title?.text_en}
                </h2>
                <FaChevronUp className="text-slate-400 text-xs" />
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {currentLang === 'bn'
                  ? agent?.about_section?.desc?.text_bn
                  : agent?.about_section?.desc?.text_en}
              </p>
              <button className="text-emerald-500 text-xs font-bold mt-3 inline-block hover:underline">
                Read More ˅
              </button>
            </div>

            {/* Service Areas Section */}
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 p-6 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-base font-bold text-slate-800 dark:text-white">
                  {currentLang === 'bn'
                    ? agent?.agent_info?.service_areas_heading?.area_bn
                    : agent?.agent_info?.service_areas_heading?.area_en}
                </h2>
                <FaChevronUp className="text-slate-400 text-xs" />
              </div>
              <div className="flex flex-wrap gap-4">
                {/* 💡 ফিক্সড: লুপে টার্নারি অপারেশনের সাথে 'return' এবং অপশনাল চেইনিং দেওয়া হয়েছে */}
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
              </div>
            </div>

            {/* Specialities Section */}
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 p-6 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-base font-bold text-slate-800 dark:text-white">
                  {currentLang === 'bn'
                    ? agent?.agent_info?.Specialities1?.spical_bn
                    : agent?.agent_info?.Specialities1?.spical_en}
                </h2>
                <FaChevronUp className="text-slate-400 text-xs" />
              </div>
              <div className="flex flex-wrap gap-2">
                {/* 💡 ফিক্সড: এখানেও কার্লি ব্রেসেস ছাড়াই ডাইনামিক রিটার্ন নিশ্চিত করা হয়েছে */}
                {(currentLang === 'bn'
                  ? agent?.agent_info?.Specialities?.Specialities_bn
                  : agent?.agent_info?.Specialities?.Specialities_en
                )?.map((speciality, idx) => (
                  <span
                    key={idx}
                    className="bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-xs px-3 py-1.5 rounded-md"
                  >
                    {speciality}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (Enquiry Form Side-bar) */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 p-6 shadow-sm h-fit">
            <h2 className="text-base font-bold text-slate-800 dark:text-white mb-4">
              Enquiry
            </h2>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-lg p-3 text-xs focus:outline-none focus:border-indigo-500 dark:text-white"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-lg p-3 text-xs focus:outline-none focus:border-indigo-500 dark:text-white"
              />
              <input
                type="text"
                placeholder="Your Phone Number"
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-lg p-3 text-xs focus:outline-none focus:border-indigo-500 dark:text-white"
              />
              <select className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-lg p-3 text-xs text-slate-400 focus:outline-none focus:border-indigo-500">
                <option value="">Select</option>
                <option value="buyer">I am a Buyer</option>
                <option value="rent">I want to Rent</option>
              </select>
              <textarea
                rows="4"
                defaultValue="Yes, I'm Interested"
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-lg p-3 text-xs focus:outline-none focus:border-indigo-500 dark:text-white resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-slate-950 hover:bg-black dark:bg-indigo-600 dark:hover:bg-indigo-700 text-white text-xs font-bold py-3 rounded-lg shadow-sm transition-all mt-2"
              >
                Send Email
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AgentDetails
