import React from 'react'
import { useAboutPageData } from '../../Hook/about'
import { useTranslation } from 'react-i18next'

const About = () => {
  const { i18n } = useTranslation()
  const currentLang = i18n.language
  const { data, isLoading, isError, error } = useAboutPageData()

  if (isLoading)
    return <div className="text-center p-10">Loading page data...</div>
  if (isError)
    return (
      <div className="text-center p-10 text-red-500">
        Error: {error.message}
      </div>
    )

  
  const pageData = data

  return (
    <div className="bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Section 1: Hero Content */}
      <section className="max-w-7xl mx-auto py-12 md:py-20 px-6 lg:px-10 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
          {currentLang === 'bn'
            ? pageData.hero_title.text_bn
            : pageData.hero_title.text_en}
        </h1>
        <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
          {currentLang === 'bn'
            ? pageData.hero_desc.text_bn
            : pageData.hero_desc.text_en}
        </p>

        {/* Gallery Grid (ডাটাবেজের topImages এরে থেকে ম্যাপ করা হয়েছে) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12 md:mt-16">
          {pageData.topImages?.map((img, index) => (
            <figure
              key={index}
              className="overflow-hidden rounded-2xl shadow-xl group border border-slate-100 dark:border-slate-800"
            >
              <img
                src={img}
                alt={`About us gallery ${index + 1}`}
                className="w-full h-64 md:h-72 object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
            </figure>
          ))}
        </div>
      </section>

      {/* Section: Stats Counter (ডাটাবেজের aboutStats থেকে ডাইনামিক করা হয়েছে) */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pageData.aboutStats?.map((stat, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm"
            >
              <figure className="shrink-0">
                <img
                  src={stat.img}
                  alt={currentLang === 'bn' ? stat.text_bn : stat.text_en}
                  className="w-14 h-14 rounded-full object-cover border-2 border-emerald-500/20"
                />
              </figure>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white leading-none mb-1">
                  {stat.text}
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                  {currentLang === 'bn' ? stat.text_bn : stat.text_en}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Detailed Info (Parallax Effect) */}
      <section
        className="relative py-20 md:py-28 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `url("https://i.ibb.co.com/5XHQV4tw/Gemini-Generated-Image-wiw3xdwiw3xdwiw3.png")`,
        }}
      >
        <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-[2px]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-emerald-500 rounded-2xl hidden md:block opacity-40"></div>
              <figure className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                <img
                  src="https://i.ibb.co.com/CKhQvR4q/about-us-04.webp"
                  alt="Dream Space"
                  className="w-full h-[300px] md:h-full object-cover"
                />
              </figure>
            </div>
            <div className="text-white space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-emerald-400 leading-tight">
                {currentLang === 'bn'
                  ? pageData.discover_section.title.text_bn
                  : pageData.discover_section.title.text_en}
              </h2>
              <div className="space-y-4 text-slate-200 leading-relaxed text-base md:text-lg">
                <p className="font-medium text-emerald-100 italic border-l-4 border-emerald-500 pl-4 py-1 bg-emerald-500/5">
                  {currentLang === 'bn'
                    ? pageData.discover_section.desc_1.text_bn
                    : pageData.discover_section.desc_1.text_en}
                </p>
                <p>
                  {currentLang === 'bn'
                    ? pageData.discover_section.desc_2.text_bn
                    : pageData.discover_section.desc_2.text_en}
                </p>
              </div>
              <button className="w-full sm:w-auto px-10 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-full transition-all shadow-lg active:scale-95">
                {currentLang === 'bn'
                  ? pageData.discover_section.btn_text.text_bn
                  : pageData.discover_section.btn_text.text_en}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Partners Slider (ডাটাবেজের partnerLogos থেকে ডাইনামিক করা হয়েছে) */}
      <section className="py-20 md:py-24 bg-slate-50 dark:bg-slate-900/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-2">
            {currentLang === 'bn'
              ? pageData.partners_header.title.text_bn
              : pageData.partners_header.title.text_en}
          </h2>
          <div className="flex justify-center mb-6">
            <div className="flex w-16 h-1.5 rounded-full overflow-hidden">
              <div className="bg-emerald-500 w-1/2"></div>
              <div className="bg-indigo-600 w-1/2"></div>
            </div>
          </div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12 px-4">
            {currentLang === 'bn'
              ? pageData.partners_header.desc.text_bn
              : pageData.partners_header.desc.text_en}
          </p>

          {/* Partners Grid / Scroll */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 overflow-hidden">
            {pageData.partnerLogos?.map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 px-6 py-4 md:px-8 md:py-6 rounded-2xl flex items-center gap-3 min-w-[140px] sm:min-w-[200px] shadow-sm hover:shadow-md transition-all group"
              >
                <img
                  src={logo.img}
                  alt={`${currentLang === 'bn' ? logo.text_bn : logo.text_en} logo`}
                  className="h-6 md:h-8 w-auto object-contain"
                />
                <span className="text-sm md:text-lg font-semibold text-slate-800 dark:text-slate-200">
                  {currentLang === 'bn' ? logo.text_bn : logo.text_en}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
