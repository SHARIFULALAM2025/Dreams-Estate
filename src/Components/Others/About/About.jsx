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
  console.log(pageData);

  return (
    <div className="bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Section 1: Hero Content */}
      <section className="max-w-7xl mx-auto py-12 md:py-20 px-6 lg:px-10 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
          {currentLang === 'bn' ? pageData.headige.bn : pageData.headige.en}
        </h1>
        <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
          {currentLang === 'bn' ? pageData.text.bn : pageData.text.en}
        </p>

        {/* Gallery Grid (ডাটাবেজের topImages এরে থেকে ম্যাপ করা হয়েছে) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12 md:mt-16">
          {pageData.image?.map((img, index) => (
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

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pageData.cards?.map((stat, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm"
            >
              <figure className="shrink-0">
                <img
                  src={stat.image}
                  alt={currentLang === 'bn' ? stat.text.en : stat.text.bn}
                  className="w-14 h-14 rounded-full object-cover border-2 border-emerald-500/20"
                />
              </figure>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white leading-none mb-1">
                  {currentLang === 'bn' ? stat.text.bn : stat.text.en}
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                  {currentLang === 'bn' ? stat.text1.bn : stat.text1.en}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        className="relative py-20 md:py-28 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `url(${pageData.bgImage})`,
        }}
      >
        <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-[2px]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-emerald-500 rounded-2xl hidden md:block opacity-40"></div>
              <figure className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                <img
                  src={pageData.overImage}
                  alt="Dream Space"
                  className="w-full h-[300px] md:h-full object-cover"
                />
              </figure>
            </div>
            <div className="text-white space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-emerald-400 leading-tight">
                {currentLang === 'bn'
                  ? pageData.text2.bn
                  : pageData.text2.en}
              </h2>
              <div className="space-y-4 text-slate-200 leading-relaxed text-base md:text-lg">
                <p className="font-medium text-emerald-100 italic border-l-4 border-emerald-500 pl-4 py-1 bg-emerald-500/5">
                  {currentLang === 'bn'
                    ? pageData.text3.bn
                    : pageData.text3.en}
                </p>
                <p>
                  {currentLang === 'bn'
                    ? pageData.text4.bn
                    : pageData.text4.en}
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-slate-50 dark:bg-slate-900/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-2">
            {currentLang === 'bn'
              ? pageData.text5.bn
              : pageData.text5.en}
          </h2>
          <div className="flex justify-center mb-6">
            <div className="flex w-16 h-1.5 rounded-full overflow-hidden">
              <div className="bg-emerald-500 w-1/2"></div>
              <div className="bg-indigo-600 w-1/2"></div>
            </div>
          </div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12 px-4">
            {currentLang === 'bn'
              ? pageData.text6.bn
              : pageData.text6.en}
          </p>


          <div className="flex flex-wrap justify-center gap-4 md:gap-8 overflow-hidden">
            {pageData.logo?.map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 px-6 py-4 md:px-8 md:py-6 rounded-2xl flex items-center gap-3 min-w-[140px] sm:min-w-[200px] shadow-sm hover:shadow-md transition-all group"
              >
                <img
                  src={logo}
                  alt={`${currentLang === 'bn' ? logo.text_bn : logo.text_en} logo`}
                  className="h-6 md:h-8 w-auto bg-white object-contain"
                />

              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About












