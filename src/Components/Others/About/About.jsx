import React from 'react'

const About = () => {
  const gridImages = [
    'https://i.ibb.co.com/qYWMsx73/about-us-01.webp',
    'https://i.ibb.co.com/k2PL1XgC/about-us-03.webp',
    'https://i.ibb.co.com/vnd2VHq/about-us-02.webp',
  ]

  const aboutStats = [
    {
      text: '50K',
      text1: 'Listings Added',
      img: 'https://i.ibb.co.com/hxKWrvjY/listing.jpg',
    },
    {
      text: '3000+',
      text1: 'Agents Listed',
      img: 'https://i.ibb.co.com/8nwSYBkm/agents.jpg',
    },
    {
      text: '2000+',
      text1: 'Sales Completed',
      img: 'https://i.ibb.co.com/GvB9qDrQ/sales.jpg',
    },
    {
      text: '5000+',
      text1: 'Users Joined',
      img: 'https://i.ibb.co.com/wrpPmsFp/users.jpg',
    },
  ]

  const partnerLogos = [
    {
      id: 1,
      name: 'LiveChat',
      img: 'https://i.ibb.co.com/Rp3YMqHw/Capturhe-removebg-preview.png',
    },
    {
      id: 2,
      name: 'Headspace',
      img: 'https://i.ibb.co.com/kgMyd4sF/Captlkure-removebg-preview.png',
    },
    {
      id: 3,
      name: 'Payhere',
      img: 'https://i.ibb.co.com/ynCnywvs/Captubbbre-removebg-preview.png',
    },
    {
      id: 4,
      name: 'Scapic',
      img: 'https://i.ibb.co.com/SXxTXvw6/Captukkkre-removebg-preview.png',
    },
    {
      id: 5,
      name: 'Memberstack',
      img: 'https://i.ibb.co.com/Rp3YMqHw/Capturhe-removebg-preview.png',
    },
    {
      id: 6,
      name: 'Memberstack',
      img: 'https://i.ibb.co.com/BXHs4Rw/Caphjture-removebg-preview.png',
    },
  ]

  return (
    <div className="bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Section 1: Hero Content */}
      <section className="max-w-7xl mx-auto py-12 md:py-20 px-6 lg:px-10 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
          We Connect <span className="text-emerald-500">Building</span> With
          People
        </h1>
        <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
          We believe in more than just property transactions—we believe in
          creating meaningful connections. "We Connect Building With People"
          represents our mission to bridge the gap between spaces and those who
          bring them to life.
        </p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12 md:mt-16">
          {gridImages.map((img, index) => (
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

      {/* Section: Stats Counter */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {aboutStats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm"
            >
              <figure className="shrink-0">
                <img
                  src={stat.img}
                  alt={stat.text1}
                  className="w-14 h-14 rounded-full object-cover border-2 border-emerald-500/20"
                />
              </figure>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white leading-none mb-1">
                  {stat.text}
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                  {stat.text1}
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
                Discover Your Dream Space Effortlessly
              </h2>
              <div className="space-y-4 text-slate-200 leading-relaxed text-base md:text-lg">
                <p className="font-medium text-emerald-100 italic border-l-4 border-emerald-500 pl-4 py-1 bg-emerald-500/5">
                  Explore a wide range of verified property listings tailored to
                  match your lifestyle.
                </p>
                <p>
                  Whether you're seeking a luxurious apartment or a cozy family
                  home, our platform provides a reliable booking experience.
                </p>
              </div>
              <button className="w-full sm:w-auto px-10 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-full transition-all shadow-lg active:scale-95">
                Explore Listings
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Partners Slider */}
      <section className="py-20 md:py-24 bg-slate-50 dark:bg-slate-900/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-2">
            Hundreds of Partners
          </h2>
          <div className="flex justify-center mb-6">
            <div className="flex w-16 h-1.5 rounded-full overflow-hidden">
              <div className="bg-emerald-500 w-1/2"></div>
              <div className="bg-indigo-600 w-1/2"></div>
            </div>
          </div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12 px-4">
            Every day, we build trust through communication, transparency, and
            results.
          </p>

          {/* Partners Grid / Scroll */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 overflow-hidden">
            {partnerLogos.map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 px-6 py-4 md:px-8 md:py-6 rounded-2xl flex items-center gap-3 min-w-[140px] sm:min-w-[200px] shadow-sm hover:shadow-md transition-all group"
              >
                <img
                  src={logo.img}
                  alt={`${logo.name} logo`}
                  className="h-6 md:h-8 w-auto object-contain"
                />
                <span className="text-sm md:text-lg font-semibold text-slate-800 dark:text-slate-200">
                  {logo.name}
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
