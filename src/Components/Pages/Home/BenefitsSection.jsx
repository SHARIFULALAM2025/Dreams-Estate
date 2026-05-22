import React from 'react'
import { useTranslation } from 'react-i18next'
import { useBenefitPageData } from '../../Hook/benefit'

const BenefitsSection = () => {
    const { i18n } = useTranslation()

    const currentLang = i18n.language?.startsWith('bn') ? 'bn' : 'en'

    const { data: benefit , isLoading, isError } = useBenefitPageData()

const benefitData = benefit || []
console.log(benefit)

  const imageTransforms = [
    'rotate-6 translate-y-26 hover:-translate-y-6 hover:rotate-0',
    '-rotate-3 translate-y-26 hover:-translate-y-6 hover:rotate-0',
    'rotate-2 translate-y-26 hover:-translate-y-6 hover:rotate-0',
    '-rotate-6 translate-y-26 hover:-translate-y-6 hover:rotate-0',
    'rotate-3 translate-y-26 hover:-translate-y-6 hover:rotate-0',
    '-rotate-2 translate-y-26 hover:-translate-y-6 hover:rotate-0',
  ]

  return (
    <section className="dark:bg-slate-950 text-white py-20 px-6 sm:px-12  overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* হেডার সেকশন */}
        <div className="text-center mb-16">
          <div className="text-3xl md:text-4xl font-bold tracking-tight flex items-center justify-center text-center mb-4 gap-3">
            {/* 🧭 প্রথম কম্পাস: এটি কাউন্টার-ক্লকওয়াইজ বা উল্টোদিকে ঘুরবে */}
            <div className="text-gray-400 font-normal animate-[spin_10s_linear_infinite] [animation-direction:reverse]">
              🧭
            </div>

            {/* মূল টেক্সট */}
            <div>
              <span className="dark:text-white text-black">
                {currentLang === 'bn' ? 'বিশেষ সুবিধা ও' : 'Discover the'}{' '}
              </span>
              <span className="text-[#10B981]">
                {currentLang === 'bn' ? 'উপকারিতাগুলো' : 'Advantages'}
              </span>{' '}
              &{' '}
              <span className="dark:text-white text-black">
                {currentLang === 'bn' ? 'আবিষ্কার করুন' : 'Exclusive Benefits'}
              </span>
            </div>

            {/* 🧭 দ্বিতীয় কম্পাস: এটি ডিফল্ট ক্লকওয়াইজ বা সাধারণ দিকে ঘুরবে */}
            <div className="text-gray-400 font-normal animate-[spin_10s_linear_infinite]">
              🧭
            </div>
          </div>
          <p className="dark:text-gray-100  text-black text-sm md:text-base max-w-2xl mx-auto">
            {currentLang === 'bn'
              ? 'এই যাত্রাপথে, বি অসাধারণ ক্লায়েন্টদের সাথে কাজ করার এবং উত্তেজনাপূর্ণ চ্যালেঞ্জ মোকাবেলা করার সুযোগ পেয়েছে।'
              : "Along the way, we've collaborated with incredible clients,tackled exciting challenges"}
          </p>
        </div>

        {/* গ্রিড সেকশন (৬টি বেনিফিট কার্ড) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 ">
          {benefitData?.benefits?.map((bene, index) => (
            <div
              key={index}
              className="flex flex-col items-start space-y-3 group"
            >
              {/* গ্রিন চেক আইকন */}
              <div className="flex items-center justify-center w-8 h-8 rounded-full border border-[#10B981]/30 bg-[#10B981]/10 text-[#10B981]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </div>

              {/* টেক্সট কন্টেন্ট */}
              <h3 className="text-xl text-black font-semibold dark:text-gray-100 group-hover:text-[#10B981] transition-colors duration-300">
                {currentLang === 'bn' ? bene.title.bn : bene.title.en}
              </h3>
              <p className="dark:text-gray-400 text-black text-sm leading-relaxed">
                {currentLang === 'bn'
                  ? bene.description.bn
                  : bene.description.en}
              </p>
            </div>
          ))}
        </div>

        <div className="relative pt-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 items-center">
            {benefitData?.images?.map((imgUrl, idx) => (
              <div
                key={idx}
                className={`relative aspect-[3/4] rounded-xl overflow-hidden shadow-2xl transition-all duration-300 ease-out transform cursor-pointer ${imageTransforms[idx]}`}
              >
                <img
                  src={imgUrl}
                  alt={`Real estate interior ${idx + 1}`}
                  className="w-full h-full object-cover filter brightness-90 hover:brightness-100 transition-all duration-300"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection
