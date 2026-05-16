import React from 'react'

const Gallery = () => {
  return (
    <div className="bg-white dark:bg-slate-950 transition-colors duration-300 py-16">
      <div className="max-w-7xl mx-auto px-4 space-y-8">
        {/* Header Section */}
        <div className="text-center pb-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
            Visual <span className="text-emerald-500">Journey</span>
          </h2>
          <div className="w-24 h-1.5 bg-emerald-500 mx-auto rounded-full shadow-sm shadow-emerald-500/50"></div>
        </div>

        {/* Grid Pattern 1: 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="overflow-hidden rounded-2xl group shadow-lg border border-slate-100 dark:border-slate-800">
            <figure className="h-72 md:h-96 relative">
              <img
                src="https://i.ibb.co.com/TDswrtys/gallery-07.jpg"
                alt="Gallery 07"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500"></div>
            </figure>
          </div>
          <div className="overflow-hidden rounded-2xl group shadow-lg border border-slate-100 dark:border-slate-800">
            <figure className="h-72 md:h-96 relative">
              <img
                src="https://i.ibb.co.com/dJ17LCc9/gallery-02.jpg"
                alt="Gallery 02"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500"></div>
            </figure>
          </div>
        </div>

        {/* Grid Pattern 2: 3 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            'https://i.ibb.co.com/JjkDxWQc/gallery-03.jpg',
            'https://i.ibb.co.com/MDT9ZsYK/gallery-04.jpg',
            'https://i.ibb.co.com/pB872jg9/gallery-05.jpg',
          ].map((src, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-2xl group shadow-lg border border-slate-100 dark:border-slate-800"
            >
              <figure className="h-64 relative">
                <img
                  src={src}
                  alt={`Gallery ${idx + 3}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500"></div>
              </figure>
            </div>
          ))}
        </div>

        {/* Grid Pattern 3: 2 Columns (Reverse Heights/Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="overflow-hidden rounded-2xl group shadow-lg border border-slate-100 dark:border-slate-800">
            <figure className="h-72 md:h-96 relative">
              <img
                src="https://i.ibb.co.com/GQHjPhqW/gallery-06.jpg"
                alt="Gallery 06"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500"></div>
            </figure>
          </div>
          <div className="overflow-hidden rounded-2xl group shadow-lg border border-slate-100 dark:border-slate-800">
            <figure className="h-72 md:h-96 relative">
              <img
                src="https://i.ibb.co.com/TDswrtys/gallery-07.jpg"
                alt="Gallery 07"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500"></div>
            </figure>
          </div>
        </div>

        {/* Grid Pattern 4: 3 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            'https://i.ibb.co.com/TJCSZJd/gallery-08.jpg',
            'https://i.ibb.co.com/1Ym5QK2K/gallery-09.jpg',
            'https://i.ibb.co.com/dJDkdPC8/gallery-10.jpg',
          ].map((src, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-2xl group shadow-lg border border-slate-100 dark:border-slate-800"
            >
              <figure className="h-64 relative">
                <img
                  src={src}
                  alt={`Gallery ${idx + 8}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500"></div>
              </figure>
            </div>
          ))}
        </div>

        {/* Grid Pattern 5: 2 Columns (Bottom Section) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="overflow-hidden rounded-2xl group shadow-lg border border-slate-100 dark:border-slate-800">
            <figure className="h-72 md:h-96 relative">
              <img
                src="https://i.ibb.co.com/KpZV8x9M/gallery-11.jpg"
                alt="Gallery 11"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500"></div>
            </figure>
          </div>
          <div className="overflow-hidden rounded-2xl group shadow-lg border border-slate-100 dark:border-slate-800">
            <figure className="h-72 md:h-96 relative">
              <img
                src="https://i.ibb.co.com/6RM7F5CP/gallery-12.jpg"
                alt="Gallery 12"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500"></div>
            </figure>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
