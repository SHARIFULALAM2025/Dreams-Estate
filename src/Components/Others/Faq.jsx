import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useFaqPageData } from '../Hook/Faq'

const Faq = () => {
  const { i18n } = useTranslation()
  const currentLang = i18n.language === 'bn' ? 'bn' : 'en'

  const { data: faq, isLoading, isError } = useFaqPageData()
console.log(faq);

  const [openId, setOpenId] = useState('General-0')

  const contentData = faq
  console.log(contentData)


  const scrollToSection = (id) => {
    const element = document.getElementById(id)

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  if (isLoading) {
    return <div className="py-20 text-center">Loading...</div>
  }

  if (isError) {
    return (
      <div className="py-20 text-center text-red-500">Something went wrong</div>
    )
  }

  return (
    <div className="bg-white dark:bg-slate-950 transition-colors duration-300">
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 py-16 px-6 lg:px-10 max-w-7xl mx-auto">
        {/* Sidebar */}
        <div className="col-span-1 md:col-span-3">
          <div className="sticky top-24 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
            <h2 className="font-bold text-xl mb-6 text-slate-900 dark:text-white">
              Topics
            </h2>

            <div className="flex flex-col gap-2">
              {contentData?.categories?.categories_en?.map(
                (enCategory, index) => {
                  const categoryLabel =
                    currentLang === 'bn'
                      ? contentData?.categories?.categories_bn?.[index]
                      : enCategory

                  return (
                    <button
                      key={enCategory}
                      onClick={() => scrollToSection(enCategory)}
                      className="text-left px-4 py-3 rounded-xl transition-all duration-300 text-slate-500 dark:text-slate-400 hover:bg-emerald-50 dark:hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium"
                    >
                      {categoryLabel}
                    </button>
                  )
                }
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="col-span-1 md:col-span-9 flex flex-col gap-16">
          {contentData?.categories?.categories_en?.map((category, index) => {
            // Dynamic data access
            const faqItems =
              contentData?.[category]?.[`${category}_${currentLang}`] || []

            const categoryTitle =
              currentLang === 'bn'
                ? contentData?.categories?.categories_bn?.[index]
                : category

            return (
              <div key={category} id={category} className="scroll-mt-24">
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-3xl font-black text-slate-900 dark:text-white">
                    {categoryTitle}
                  </h2>

                  <div className="h-1 flex-grow bg-slate-100 dark:bg-slate-800 rounded-full">
                    <div className="h-full w-20 bg-emerald-500 rounded-full"></div>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  {faqItems.map((item, faqIndex) => {
                    const uniqueId = `${category}-${faqIndex}`

                    const isOpen = openId === uniqueId

                    return (
                      <div
                        key={uniqueId}
                        className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                          isOpen
                            ? 'border-emerald-500 shadow-lg shadow-emerald-500/5 bg-white dark:bg-slate-900'
                            : 'border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/40 hover:border-slate-200 dark:hover:border-slate-700'
                        }`}
                      >
                        <button
                          className="w-full flex justify-between items-center p-6 text-left transition-colors"
                          onClick={() => setOpenId(isOpen ? null : uniqueId)}
                        >
                          <span
                            className={`text-lg font-bold transition-colors ${
                              isOpen
                                ? 'text-emerald-600 dark:text-emerald-400'
                                : 'text-slate-700 dark:text-slate-200'
                            }`}
                          >
                            {item.question}
                          </span>

                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                              isOpen
                                ? 'bg-emerald-500 text-white rotate-180'
                                : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                            }`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </button>

                        <div
                          className={`transition-all duration-500 ease-in-out overflow-hidden ${
                            isOpen
                              ? 'max-h-96 opacity-100'
                              : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-50 dark:border-slate-800/50 pt-4">
                            {item.answer}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Faq
