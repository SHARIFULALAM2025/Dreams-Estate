import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useFaqPageData } from '../../Hook/Faq'
import { Link } from 'react-router'

const HomeFaq = () => {
  const { i18n } = useTranslation()

  const currentLang = i18n.language?.startsWith('bn') ? 'bn' : 'en'

  const { data: faq, isLoading, isError } = useFaqPageData()

  const [openIndex, setOpenIndex] = useState(0)

  const images = faq?.image || []

  const faqItems = faq?.Home?.[`Home_${currentLang}`] || []

  if (isLoading) {
    return <div className="py-20 text-center">Loading...</div>
  }

  if (isError) {
    return (
      <div className="py-20 text-center text-red-500">Failed to load FAQ</div>
    )
  }

  return (
    <section className="bg-[#f8f8f8] py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-slate-900">
            {currentLang === 'bn' ? 'প্রায়শই জিজ্ঞাসিত' : 'Frequently Asked'}
            <span className="text-emerald-500">
              {currentLang === 'bn' ? 'প্রশ্ন' : 'Questions'}
            </span>
          </h2>

          <p className="text-slate-500 mt-3">
            {currentLang === 'bn'
              ? 'দ্রুত উত্তর হলো সাধারণ খরচ'
              : 'Quick Answers to Common Questions'}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Images */}
          <div className="grid grid-cols-2 gap-4 relative h-[450px]">
            {/* Left Large Image */}
            <div className="h-full">
              <img
                src={images[0]}
                alt="faq"
                className="w-full h-full object-cover rounded-md"
              />
            </div>

            {/* Right Images */}
            <div className="relative flex flex-col gap-4 h-full">
              <img
                src={images[1]}
                alt="faq"
                className="h-1/2 w-full object-cover rounded-md"
              />

              <img
                src={images[2]}
                alt="faq"
                className="h-1/2 w-full object-cover rounded-md"
              />

              {/* Read More FAQ Button */}
              <Link
                to="/Faq"
                className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white hover:bg-[#6f52ff] text-slate-900 hover:text-white transition-all duration-300 px-6 py-3 rounded-xl text-xs shadow-xl font-semibold border border-slate-200 hover:border-[#6f52ff] flex items-center gap-2 group"
              >
                {currentLang === 'bn' ? 'আরও পড়ুন' : 'Read More'}
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>

            {/* Badge */}
            <div className="absolute top-1/2 left-[45%] -translate-x-1/2 -translate-y-1/2 bg-[#6f52ff] text-white rounded-full w-28 h-28 flex flex-col justify-center items-center shadow-xl rotate-[-20deg] animate-[spin_10s_linear_infinite]">
              <h3 className="text-3xl font-bold">
                {currentLang === 'bn' ? '১০+' : '10+'}
              </h3>
              <p className="text-xs text-center leading-tight">
                {currentLang === 'bn' ? 'বছরের' : 'Years of'}
                <br />
                {currentLang === 'bn' ? 'অভিজ্ঞতা' : 'Experience'}
              </p>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqItems?.map((item, index) => {
              const isOpen = openIndex === index

              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-md overflow-hidden"
                >
                  <button
                    className="w-full flex justify-between items-center px-6 py-5 text-left"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span className="font-medium text-slate-800">
                      {item.question}
                    </span>

                    <span className="text-xl text-slate-500">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      isOpen ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="px-6 pb-5 text-slate-500 leading-7 border-t">
                      {item.answer}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeFaq
