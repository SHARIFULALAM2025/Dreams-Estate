import React from 'react'
import { useTranslation } from 'react-i18next'
import { useHomeAboutPageData } from '../../Hook/HomeAbout'
import { Link } from 'react-router'

const HomeAbout = () => {
  const { i18n } = useTranslation()

  const currentLang = i18n.language?.startsWith('bn') ? 'bn' : 'en'

  const { data: homeAbout, isLoading, isError } = useHomeAboutPageData()

  // Content Data
  const contentData = homeAbout

  // Dynamic Stats
  const stats = contentData?.stats?.[`stats_${currentLang}`] || []

  // Dynamic Content
  const about = contentData?.about?.[`about_${currentLang}`]

  const title = contentData?.description1?.[`des1_${currentLang}`]

  const description = contentData?.description2?.[`des2_${currentLang}`]

  const addButton = contentData?.add?.[`add_${currentLang}`]

  const contactButton = contentData?.contact?.[`con_${currentLang}`]

  // Loading
  if (isLoading) {
    return (
      <section className="py-20 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto px-4 animate-pulse">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-5">
              <div className="w-32 h-10 bg-slate-200 rounded-md"></div>

              <div className="h-14 bg-slate-200 rounded w-full"></div>

              <div className="h-14 bg-slate-200 rounded w-3/4"></div>

              <div className="h-24 bg-slate-200 rounded"></div>

              <div className="flex gap-4">
                <div className="w-48 h-14 bg-slate-200 rounded-lg"></div>
                <div className="w-40 h-14 bg-slate-200 rounded-lg"></div>
              </div>
            </div>

            <div className="h-[450px] bg-slate-200 rounded-2xl"></div>
          </div>
        </div>
      </section>
    )
  }

  // Error
  if (isError) {
    return (
      <div className="py-20 text-center text-red-500">Failed to load data</div>
    )
  }

  return (
    <section className="bg-[#f8f8f8] py-20 dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <Link
              to="/About"
              className="inline-flex w-fit bg-white hover:bg-[#6f52ff] text-slate-900 hover:text-white transition-all duration-300 px-6 py-3 rounded-xl text-sm shadow-xl font-semibold border border-slate-200 hover:border-[#6f52ff] items-center gap-2 group mb-5"
            >
              {about}
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            <h2 className="text-4xl lg:text-6xl font-black dark:text-white text-slate-900 leading-tight">
              {title}
            </h2>

            <p className="text-slate-500 dark:text-white text-lg leading-8 mt-6 max-w-2xl">
              {description}
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                to="/addProperty"
                className="   bg-white hover:bg-[#6f52ff] text-slate-900 hover:text-white transition-all duration-300 px-6 py-3 rounded-xl text-xs shadow-xl font-semibold border border-slate-200 hover:border-[#6f52ff] flex items-center gap-2 group"
              >
                {addButton}
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
              <Link
                to="/Contact"
                className="   bg-white hover:bg-[#6f52ff] text-slate-900 hover:text-white transition-all duration-300 px-6 py-3 rounded-xl text-xs shadow-xl font-semibold border border-slate-200 hover:border-[#6f52ff] flex items-center gap-2 group"
              >
                {contactButton}
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div>
            <img
              src="https://i.ibb.co.com/9k6Cx66B/section-bg-01-removebg-preview.png"
              alt="Property"
              className="object-cover w-full"
            />
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {stats.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 flex items-center gap-5"
            >
              {/* Image */}
              <div className="bg-slate-50 rounded-lg flex items-center justify-center shrink-0 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="rounded-md w-10 h-10 object-cover"
                />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-4xl font-extrabold text-slate-900">
                  {item.number}
                </h3>

                <p className="text-slate-500 text-lg mt-1">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeAbout
