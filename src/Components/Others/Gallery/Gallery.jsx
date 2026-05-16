import React from 'react'

const Gallery = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 space-y-4">
      {/* Header Section */}
      <div className="text-center pb-10">
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
          Visual <span className="text-emerald-500">Journey</span>
        </h2>
        <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
      </div>

      {/* Grid Pattern 1: 2 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="overflow-hidden rounded-2xl group shadow-md">
          <figure className="h-72 md:h-96">
            <img
              src="https://i.ibb.co.com/TDswrtys/gallery-07.jpg"
              alt="Gallery 07"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </figure>
        </div>
        <div className="overflow-hidden rounded-2xl group shadow-md">
          <figure className="h-72 md:h-96">
            <img
              src="https://i.ibb.co.com/dJ17LCc9/gallery-02.jpg"
              alt="Gallery 06"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </figure>
        </div>
      </div>

      {/* Grid Pattern 2: 3 Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="overflow-hidden rounded-2xl group shadow-md">
          <figure className="h-64">
            <img
              src="https://i.ibb.co.com/JjkDxWQc/gallery-03.jpg"
              alt="Gallery 03"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </figure>
        </div>
        <div className="overflow-hidden rounded-2xl group shadow-md">
          <figure className="h-64">
            <img
              src="https://i.ibb.co.com/MDT9ZsYK/gallery-04.jpg"
              alt="Gallery 04"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </figure>
        </div>
        <div className="overflow-hidden rounded-2xl group shadow-md">
          <figure className="h-64">
            <img
              src="https://i.ibb.co.com/pB872jg9/gallery-05.jpg"
              alt="Gallery 05"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </figure>
        </div>
      </div>

      {/* Grid Pattern 3: 2 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="overflow-hidden rounded-2xl group shadow-md">
          <figure className="h-72 md:h-96">
            <img
              src="https://i.ibb.co.com/GQHjPhqW/gallery-06.jpg"
              alt="Gallery 06"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </figure>
        </div>
        <div className="overflow-hidden rounded-2xl group shadow-md">
          <figure className="h-72 md:h-96">
            <img
              src="https://i.ibb.co.com/TDswrtys/gallery-07.jpg"
              alt="Gallery 07"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </figure>
        </div>
      </div>

      {/* Grid Pattern 4: 3 Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="overflow-hidden rounded-2xl group shadow-md">
          <figure className="h-64">
            <img
              src="https://i.ibb.co.com/TJCSZJd/gallery-08.jpg"
              alt="Gallery 08"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </figure>
        </div>
        <div className="overflow-hidden rounded-2xl group shadow-md">
          <figure className="h-64">
            <img
              src="https://i.ibb.co.com/1Ym5QK2K/gallery-09.jpg"
              alt="Gallery 09"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </figure>
        </div>
        <div className="overflow-hidden rounded-2xl group shadow-md">
          <figure className="h-64">
            <img
              src="https://i.ibb.co.com/dJDkdPC8/gallery-10.jpg"
              alt="Gallery 10"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </figure>
        </div>
      </div>

      {/* Grid Pattern 5: 2 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="overflow-hidden rounded-2xl group shadow-md">
          <figure className="h-72 md:h-96">
            <img
              src="https://i.ibb.co.com/KpZV8x9M/gallery-11.jpg"
              alt="Gallery 11"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </figure>
        </div>
        <div className="overflow-hidden rounded-2xl group shadow-md">
          <figure className="h-72 md:h-96">
            <img
              src="https://i.ibb.co.com/6RM7F5CP/gallery-12.jpg"
              alt="Gallery 12"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </figure>
        </div>
      </div>

      {/* Grid Pattern 6: 3 Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="overflow-hidden rounded-2xl group shadow-md">
          <figure className="h-64">
            <img
              src="https://i.ibb.co.com/99Vb7Vky/gallery-13.jpg"
              alt="Gallery 13"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </figure>
        </div>
        <div className="overflow-hidden rounded-2xl group shadow-md">
          <figure className="h-64">
            <img
              src="https://i.ibb.co.com/JWKXP5Dm/gallery-14.jpg"
              alt="Gallery 14"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </figure>
        </div>
        <div className="overflow-hidden rounded-2xl group shadow-md">
          <figure className="h-64">
            <img
              src="https://i.ibb.co.com/3tJYFKT/gallery-15.jpg"
              alt="Gallery 15"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </figure>
        </div>
      </div>
    </div>
  )
}

export default Gallery
