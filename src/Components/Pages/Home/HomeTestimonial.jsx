import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaQuoteRight, FaStar } from 'react-icons/fa'
import { useTestimonialPageData } from '../../Hook/testimonial'
import { Link } from 'react-router'


const HomeTestimonial = () => {
  const { i18n } = useTranslation()

  const currentLang = i18n.language?.startsWith('bn')
    ? 'bn'
    : 'en'

  const { data, isLoading, isError } =
    useTestimonialPageData()

  const testimonials =
    data?.testimonials?.[
      `testimonials_${currentLang}`
    ] || []

  // Loading Skeleton
  if (isLoading) {
    return (
      <section className="bg-[#f8f8f8] dark:bg-slate-950  px-5">
        <div className="max-w-7xl mx-auto animate-pulse">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="h-10 w-[400px] max-w-full bg-slate-200 dark:bg-slate-800 rounded mx-auto"></div>
            <div className="h-5 w-[250px] bg-slate-200 dark:bg-slate-800 rounded mx-auto mt-5"></div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="bg-white dark:bg-slate-900 rounded-md p-8 border border-slate-100 dark:border-slate-800"
              >
                <div className="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-full mx-auto mb-6"></div>

                <div className="space-y-3 mb-8">
                  <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded"></div>
                  <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded"></div>
                  <div className="h-4 w-2/3 bg-slate-200 dark:bg-slate-700 rounded mx-auto"></div>
                </div>

                <div className="flex justify-center gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-4 h-4 rounded-full bg-slate-200 dark:bg-slate-700"
                    />
                  ))}
                </div>

                <div className="border-t border-slate-200 dark:border-slate-700 pt-6 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-slate-200 dark:bg-slate-700"></div>

                  <div className="flex-1">
                    <div className="h-4 w-28 bg-slate-200 dark:bg-slate-700 rounded mb-2"></div>
                    <div className="h-3 w-20 bg-slate-200 dark:bg-slate-700 rounded"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  // Error
  if (isError) {
    return (
      <div className="py-20 text-center text-red-500">
        Failed to load testimonials
      </div>
    )
  }

  return (
    <section className="bg-[#f8f8f8] dark:bg-slate-950 py-5 px-5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
            <span className="text-emerald-400">~</span>{' '}
            {currentLang === 'bn' ? 'সফলতার' : 'Success'}{' '}
            <span className="text-emerald-500">
              {currentLang === 'bn' ? 'গল্প' : 'Stories'}
            </span>{' '}
            {currentLang === 'bn' ? 'তাদের নিজের ভাষায়' : 'in their Own Words'}{' '}
            <span className="text-emerald-400">~</span>
          </h2>

          <p className="text-slate-500 dark:text-slate-400 mt-4 text-lg">
            {currentLang === 'bn'
              ? 'আমাদের সন্তুষ্ট গ্রাহকদের অভিজ্ঞতা শুনুন'
              : 'Hear from our happy customers'}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.slice(0, 4).map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-slate-900 rounded-md p-8 border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Quote */}
              <div className="flex justify-center mb-5">
                <FaQuoteRight className="text-[#7C3AED] text-4xl group-hover:scale-110 transition-transform duration-300" />
              </div>

              {/* Text */}
              <p className="text-slate-600 dark:text-slate-300 text-center leading-9 text-lg min-h-[150px]">
                {item.text}
              </p>

              {/* Stars */}
              <div className="flex justify-center gap-1 text-yellow-400 mt-4 mb-8">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Divider */}
              <div className="border-t border-slate-200 dark:border-slate-700 mb-7"></div>

              {/* User */}
              <div className="flex items-center gap-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover border border-slate-200 dark:border-slate-700"
                />

                <div>
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                    {item.name}
                  </h3>

                  <p className="text-slate-500 dark:text-slate-400 text-sm">
                    {item.address}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Rating Badge */}
        <div className="flex justify-center mt-3 gap-3 items-center ">
          <div className="bg-[#bdbdbd] dark:bg-slate-800 rounded-full px-5 py-2 flex items-center gap-4 shadow-md">
            {/* Avatar Stack */}
            <div className="flex -space-x-3">
              {testimonials.slice(0, 4).map((item) => (
                <img
                  key={item.id}
                  src={item.img}
                  alt={item.name}
                  className="w-12 h-12 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>

            {/* Rating */}
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-white">Ratings 5.0</span>

                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} size={14} />
                  ))}
                </div>
              </div>

              <p className="text-white text-sm">
                {currentLang === 'bn'
                  ? 'সারা বিশ্বের ক্লায়েন্টদের আস্থা'
                  : 'Trusted By Client around the World'}
              </p>
            </div>
          </div>
          <div className="">
            <Link
              to="/Testimonial"
              className="   bg-white hover:bg-[#6f52ff] text-slate-900 hover:text-white transition-all duration-300 px-6 py-3 rounded-xl text-xs shadow-xl font-semibold border border-slate-200 hover:border-[#6f52ff] flex items-center gap-2 group"
            >
              {currentLang === 'bn' ? 'আরও পড়ুন' : 'Read More'}
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeTestimonial

