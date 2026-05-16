import React, { useState } from 'react'

const Faq = () => {
  // Use state to track which accordion item is open across all sections
  // We'll use a string like "General-0" to ensure only one item is open at a time
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
    <section className="grid grid-cols-12 gap-8 p-10 max-w-7xl mx-auto font-sans">
      {/* Sidebar - Fixed/Sticky so it stays visible while scrolling */}
      <div className="col-span-3">
        <div className="sticky top-10 border border-gray-100 rounded-lg p-6 shadow-sm">
          <h2 className="font-bold text-xl mb-6">Table of Contents</h2>
          <div className="flex flex-col gap-2">
            {categories.map((tab) => (
              <button
                key={tab}
                onClick={() => scrollToSection(tab)}
                className="text-left px-4 py-3 rounded-lg transition-all duration-200 text-gray-500 hover:bg-gray-50 hover:text-[#0F172A]"
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Area - Shows all categories */}
      <div className="col-span-9 flex flex-col gap-12">
        {categories.map((category) => (
          <div key={category} id={category} className="scroll-mt-10">
            <h2 className="text-3xl font-bold mb-6 text-[#0F172A]">
              {category}
            </h2>
            <div className="flex flex-col gap-4">
              {faqData[category].map((item, index) => {
                const uniqueId = `${category}-${index}`
                const isOpen = openId === uniqueId

                return (
                  <div
                    key={uniqueId}
                    className="border border-gray-200 rounded-xl overflow-hidden bg-white"
                  >
                    <button
                      className="w-full flex justify-between items-center p-5 text-left font-semibold text-lg hover:bg-gray-50 transition-colors"
                      onClick={() => setOpenId(isOpen ? null : uniqueId)}
                    >
                      {item.question}
                      <span className="text-2xl text-gray-400">
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 text-gray-600 border-t border-gray-100 pt-4 animate-fadeIn">
                        {item.answer}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Faq
