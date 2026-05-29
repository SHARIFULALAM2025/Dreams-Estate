import React from 'react'
import {
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGlobe,
} from 'react-icons/fa6'
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import { useAgencyPageData } from '../../Hook/agency'
import { Link } from 'react-router'
const AgentList = () => {
  const { i18n } = useTranslation()
  const currentLang = i18n.language
  const { data: agency = [], isLoading, isError, error } = useAgencyPageData()
  console.log(agency)
  return (
    <section className="bg-slate-50 dark:bg-black py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-5">
        {agency.map((agent) => (
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
    </section>
  )
}

export default AgentList
