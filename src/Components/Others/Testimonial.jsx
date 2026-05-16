import React from 'react'
import { FaStar } from 'react-icons/fa'

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Robert King',
      address: 'Harlingen',
      img: 'https://i.ibb.co.com/FbZTfjb8/user-01.jpg',
      rating: 5,
      text: "We ended up with our dream home in less than two months! I can't recommend them enough.",
    },
    {
      id: 2,
      name: 'Erin Hawkins',
      address: 'Penns Neck.',
      img: 'https://i.ibb.co.com/MxhjQfXY/user-02.webp',
      rating: 4,
      text: 'They explained every step clearly and found me the perfect home within my budget.',
    },
    {
      id: 3,
      name: 'Margaret Buchanan',
      address: 'Wausau.',
      img: 'https://i.ibb.co.com/XfH9sFVM/user-04.webp',
      rating: 5,
      text: 'Selling our family home was an emotional journey, but Ethel Laughlin made it was easier!',
    },
    {
      id: 4,
      name: 'George William',
      address: 'Memphis.',
      img: 'https://i.ibb.co.com/NgbWDmbk/user-03.webp',
      rating: 5,
      text: 'Highly recommend for anyone selling a home. Their market expertise helped us price the home right.',
    },
    {
      id: 5,
      name: 'Kent Lintz',
      address: 'San Jose.',
      img: 'https://i.ibb.co.com/xSFgPN1h/user-05.jpg',
      rating: 5,
      text: "I've worked with [Agent/Company Name] on three investment properties, and every time.",
    },
    {
      id: 6,
      name: 'Margaret Lee',
      address: 'Montgomery.',
      img: 'https://i.ibb.co.com/RTd3sHNx/user-13.webp',
      rating: 4,
      text: "They've brought solid opportunities and helped me maximize returns. Their property management.",
    },
  ]

  return (
    <section className="bg-white dark:bg-slate-950 py-20 px-6 lg:px-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
            Client <span className="text-emerald-500">Testimonials</span>
          </h2>
          <div className="w-24 h-1.5 bg-emerald-500 mx-auto rounded-full shadow-sm shadow-emerald-500/50"></div>
          <p className="mt-6 text-slate-500 dark:text-slate-400 max-w-2xl mx-auto italic">
            "What our clients say about their journey with Dreams Estate"
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50/50 dark:bg-slate-900/40 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:translate-y-[-5px] transition-all duration-300 group"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={
                      i < item.rating
                        ? 'text-orange-400'
                        : 'text-slate-200 dark:text-slate-700'
                    }
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-8 font-medium italic">
                "{item.text}"
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-emerald-500 rounded-full scale-0 group-hover:scale-110 transition-transform duration-500 opacity-20"></div>
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-white dark:border-slate-800 shadow-md"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white leading-tight">
                    {item.name}
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {item.address}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonial
