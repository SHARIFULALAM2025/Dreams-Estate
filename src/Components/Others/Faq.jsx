import React, { useState } from 'react'

const Faq = () => {
  const [openId, setOpenId] = useState('General-0')

  const categories = [
    'General',
    'Buying',
    'Sellings',
    'Renting',
    'Legal',
    'Financial',
  ]

  const faqData = {
    General: [
      {
        question: 'What is real estate?',
        answer:
          'Real estate refers to land and any permanent structures on it, such as homes or buildings.',
      },
      {
        question: 'What types of properties are included?',
        answer:
          'Residential, commercial, industrial, and raw land are the primary types.',
      },
      {
        question: 'What is the role of a real estate agent?',
        answer:
          'Agents represent buyers or sellers in transactions and help negotiate deals.',
      },
    ],
    Buying: [
      {
        question: 'How do I start the buying process?',
        answer:
          'Begin by getting pre-approved for a mortgage to understand your budget.',
      },
      {
        question: 'What is a home inspection?',
        answer:
          "An examination of a property's condition, usually performed by a professional before purchase.",
      },
      {
        question: 'What are closing costs?',
        answer:
          'Fees paid at the end of a real estate transaction, typically including taxes and legal fees.',
      },
    ],
    Sellings: [
      {
        question: 'How do I determine my home’s value?',
        answer:
          'A comparative market analysis (CMA) or professional appraisal is the best way.',
      },
      {
        question: 'Should I renovate before selling?',
        answer:
          'Focus on high-ROI repairs like fresh paint, minor kitchen updates, and curb appeal.',
      },
      {
        question: 'How long does it take to sell a house?',
        answer:
          'The average time varies by market, but usually takes between 30 to 90 days.',
      },
    ],
    Renting: [
      {
        question: 'What is a security deposit?',
        answer:
          'A refundable payment made to cover potential damages to the rental property.',
      },
      {
        question: 'Can a landlord increase rent anytime?',
        answer:
          'Usually, rent increases must follow the terms of the lease and local laws.',
      },
      {
        question: 'What is renter’s insurance?',
        answer:
          'Insurance that protects your personal belongings and provides liability coverage.',
      },
    ],
    Legal: [
      {
        question: 'What is a title search?',
        answer:
          'A process to verify the legal owner of a property and check for any liens or claims.',
      },
      {
        question: 'What is an easement?',
        answer:
          'A legal right to use another person’s land for a specific limited purpose.',
      },
      {
        question: 'What are zoning laws?',
        answer:
          'Regulations that dictate how a property can be used (e.g., residential vs. commercial).',
      },
    ],
    Financial: [
      {
        question: 'What is a fixed-rate mortgage?',
        answer:
          'A mortgage where the interest rate remains the same for the entire life of the loan.',
      },
      {
        question: 'What is PMI?',
        answer:
          'Private Mortgage Insurance is usually required if your down payment is less than 20%.',
      },
      {
        question: 'What is equity?',
        answer:
          'The difference between the market value of your home and the amount you owe on your mortgage.',
      },
    ],
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="bg-white dark:bg-slate-950 transition-colors duration-300">
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 py-16 px-6 lg:px-10 max-w-7xl mx-auto">
        {/* Sidebar - Table of Contents */}
        <div className="col-span-1 md:col-span-3">
          <div className="sticky top-24 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
            <h2 className="font-bold text-xl mb-6 text-slate-900 dark:text-white">
              Topics
            </h2>
            <div className="flex flex-col gap-2">
              {categories.map((tab) => (
                <button
                  key={tab}
                  onClick={() => scrollToSection(tab)}
                  className="text-left px-4 py-3 rounded-xl transition-all duration-300 text-slate-500 dark:text-slate-400 hover:bg-emerald-50 dark:hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium"
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="col-span-1 md:col-span-9 flex flex-col gap-16">
          {categories.map((category) => (
            <div key={category} id={category} className="scroll-mt-24">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-3xl font-black text-slate-900 dark:text-white">
                  {category}
                </h2>
                <div className="h-1 flex-grow bg-slate-100 dark:bg-slate-800 rounded-full">
                  <div className="h-full w-20 bg-emerald-500 rounded-full"></div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                {faqData[category].map((item, index) => {
                  const uniqueId = `${category}-${index}`
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
                          className={`text-lg font-bold transition-colors ${isOpen ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-700 dark:text-slate-200'}`}
                        >
                          {item.question}
                        </span>
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-emerald-500 text-white rotate-180' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}
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
                          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
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
          ))}
        </div>
      </section>
    </div>
  )
}

export default Faq


