import React from 'react'
import { useTranslation } from 'react-i18next'

const steps = [
  {
    id: '01',
    image: 'https://i.ibb.co.com/jvkBnKnN/work-icon-1.jpg',
    title: {
      en: 'Search for Location',
      bn: 'লোকেশন অনুসন্ধান করুন',
    },
    description: {
      en: 'Find properties by location quickly, matching your lifestyle and preferences easily.',
      bn: 'সহজেই আপনার জীবনধারা ও পছন্দ অনুযায়ী লোকেশন ভিত্তিক প্রপার্টি খুঁজুন।',
    },
  },
  {
    id: '02',
    image: 'https://i.ibb.co.com/4xhY2hF/work-icon-2.jpg',
    title: {
      en: 'Select Property Type',
      bn: 'প্রপার্টির ধরন নির্বাচন করুন',
    },
    description: {
      en: 'Choose your ideal property type easily, from apartments to villas.',
      bn: 'অ্যাপার্টমেন্ট থেকে ভিলা পর্যন্ত সহজেই আপনার পছন্দের প্রপার্টি নির্বাচন করুন।',
    },
  },
  {
    id: '03',
    image: 'https://i.ibb.co.com/tPTLcnzW/work-icon-3.jpg',
    title: {
      en: 'Book Your Property',
      bn: 'আপনার প্রপার্টি বুক করুন',
    },
    description: {
      en: 'Secure your dream property quickly with a simple, hassle-free booking process.',
      bn: 'সহজ ও ঝামেলামুক্ত বুকিং প্রক্রিয়ার মাধ্যমে দ্রুত আপনার স্বপ্নের প্রপার্টি বুক করুন।',
    },
  },
]

const Work = () => {
     const { i18n } = useTranslation()
      const currentLang = i18n.language
  return (
    <section className="bg-white-50 dark:bg-slate-950 py-5 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">

          <h2 className="mt-5 text-4xl md:text-5xl dark:text-white font-bold text-slate-900">
            {currentLang === 'bn' ? 'কিভাবে কাজ করে' : 'How It Works'}
          </h2>

          <div className="flex items-center justify-center gap-2 mt-5">
            <span className="h-1 w-12 rounded-full bg-emerald-500"></span>
            <span className="h-1 w-6 rounded-full bg-violet-500"></span>
          </div>

          <p className="mt-5 max-w-2xl mx-auto text-lg dark:text-white text-slate-500 leading-8">
            {currentLang === 'bn'
              ? 'আপনার পছন্দের প্রপার্টি বুক করতে নিচের সহজ ধাপগুলো অনুসরণ করুন।'
              : 'Follow these simple steps to book your perfect property quickly and hassle-free.'}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="group relative bg-white rounded-[30px] border border-slate-200 p-8 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 overflow-hidden"
            >
              {/* Hover Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-emerald-50 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Step Number */}
              <span className="absolute top-5 right-6 text-6xl font-extrabold text-slate-100 group-hover:text-slate-200 transition duration-500">
                {step.id}
              </span>

              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Image */}
                <div className="w-12 h-12 rounded-xl overflow-hidden shadow-lg ring-4 ring-slate-100 group-hover:scale-110 transition duration-500">
                  <img
                    src={step.image}
                    alt={step.title.en}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Title */}
                <h3 className="mt-8 text-2xl lg:text-3xl font-bold text-slate-900">
                  {step.title[currentLang]}
                </h3>

                {/* Description */}
                <p className="mt-4 text-slate-500 text-lg leading-8 max-w-sm">
                  {step.description[currentLang]}
                </p>

                {/* Bottom line */}
                <div className="mt-8 h-1 w-14 rounded-full bg-slate-200 group-hover:w-24 group-hover:bg-violet-500 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
