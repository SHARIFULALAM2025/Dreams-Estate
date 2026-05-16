import React, { useState } from 'react'
import { IoCalendarOutline } from 'react-icons/io5'

const AddProperty = () => {
  // টপ নেভিগেশন ট্যাব ট্র্যাকিং
  const [activeTab, setActiveTab] = useState('Property Information')

  const tabs = [
    'Property Information',
    'Property Details',
    'Amenities',
    'Documents',
    'Gallery',
    'Videos',
    'Description',
    'Floor Plans',
    'Location',
  ]

  const amenitiesList = [
    { label: 'Air Conditioning', defaultChecked: true },
    { label: 'TV Cable', defaultChecked: false },
    { label: 'Refrigerator', defaultChecked: true },
    { label: 'Lawn', defaultChecked: true },
    { label: 'Dryer', defaultChecked: false },
    { label: 'Wifi', defaultChecked: false },
    { label: 'Swimming Pool', defaultChecked: false },
    { label: 'Outdoor Shower', defaultChecked: true },
    { label: 'Laundry', defaultChecked: false },
    { label: 'Barbeque', defaultChecked: false },
    { label: 'Washer', defaultChecked: false },
    { label: 'Washer', defaultChecked: false },
    { label: 'Microwave', defaultChecked: false },
    { label: 'Gym', defaultChecked: true },
    { label: 'Window Coverings', defaultChecked: false },
    { label: 'Wide Open Spaces', defaultChecked: true },
    { label: 'Parks', defaultChecked: false },
    { label: 'Rooftop Gardens', defaultChecked: true },
    { label: 'Billiards Table', defaultChecked: false },
    { label: 'Clubhouse', defaultChecked: true },
    { label: 'Spa', defaultChecked: false },
    { label: 'Valet Trash', defaultChecked: false },
    { label: 'Sporting Facilities', defaultChecked: true },
  ]

  return (
    <div className="bg-slate-50/50 dark:bg-slate-950 min-h-screen   transition-colors duration-300">
      <div className="max-w-7xl mx-auto bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 p-6 md:p-10">
        {/* Top Horizontal Navigation Tab */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 border-b border-slate-100 dark:border-slate-800 no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap px-4 py-2.5 rounded-lg text-sm font-bold transition-all ${
                activeTab === tab
                  ? 'bg-[#0F172A] text-white dark:bg-slate-800'
                  : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Form Body Layout */}
        <form className="space-y-16">
          {/* SECTION 1: Property Information */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4 space-y-2">
              <h3 className="text-xl font-black text-slate-900 dark:text-white">
                Property Information
              </h3>
              <p className="text-sm text-slate-400 dark:text-slate-500 leading-relaxed">
                Explore essential details like size, type, pricing, and standout
                features perfect for comfortable living or smart investment.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50/30 dark:bg-slate-900/40 p-6 rounded-2xl border border-slate-100/70 dark:border-slate-800/60">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                  Property Name
                </label>
                <input
                  type="text"
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                  Property Type
                </label>
                <select className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white">
                  <option>Select</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                  Property Category
                </label>
                <select className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white">
                  <option>Select</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                  Currency Type
                </label>
                <select className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white">
                  <option>Select</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                  Sale Price
                </label>
                <input
                  type="text"
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                  Offer Price
                </label>
                <input
                  type="text"
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white"
                />
              </div>
            </div>
          </div>

          {/* SECTION 2: Property Details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4 space-y-2">
              <h3 className="text-xl font-black text-slate-900 dark:text-white">
                Property Details
              </h3>
              <p className="text-sm text-slate-400 dark:text-slate-500 leading-relaxed">
                Get key spaces including layout, dimensions, and materials that
                define this property's quality, structure, and overall design.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-50/30 dark:bg-slate-900/40 p-6 rounded-2xl border border-slate-100/70 dark:border-slate-800/60">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                  Property Id
                </label>
                <input
                  type="text"
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                  Price Per Sqft
                </label>
                <input
                  type="text"
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                  Structure Type
                </label>
                <select className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white">
                  <option>Select</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                  No of Bedrooms
                </label>
                <input
                  type="text"
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                  No of Bathrooms
                </label>
                <input
                  type="text"
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                  Sqft
                </label>
                <input
                  type="text"
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                  Parking
                </label>
                <input
                  type="text"
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                  Balcony
                </label>
                <select className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white">
                  <option>Select</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                  Floor
                </label>
                <input
                  type="text"
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                  Wardrobe
                </label>
                <input
                  type="text"
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                  TV
                </label>
                <input
                  type="text"
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                  Water Purifier
                </label>
                <input
                  type="text"
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                  Microwave
                </label>
                <input
                  type="text"
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                  AC
                </label>
                <input
                  type="text"
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                  Fridge
                </label>
                <input
                  type="text"
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                  Wardrobe
                </label>
                <input
                  type="text"
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                  Garage Size
                </label>
                <input
                  type="text"
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white"
                />
              </div>

              {/* Date Input 1 */}
              <div className="relative">
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                  Available From
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="dd/mm/yyyy"
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white"
                  />
                  <IoCalendarOutline className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                  Curtains
                </label>
                <select className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white">
                  <option>Select</option>
                </select>
              </div>

              {/* Date Input 2 */}
              <div className="relative md:col-span-2">
                <div className="max-w-[340px]">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                    Year Constructed
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="dd/mm/yyyy"
                      className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white"
                    />
                    <IoCalendarOutline className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 3: Amenities */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-slate-100 dark:border-slate-800 pt-12">
            <div className="lg:col-span-4 space-y-2">
              <h3 className="text-xl font-black text-slate-900 dark:text-white">
                Amenities
              </h3>
              <p className="text-sm text-slate-400 dark:text-slate-500 leading-relaxed">
                Enjoy premium features like pool, gym, parking, security, and
                more—all designed for modern, comfortable everyday living.
              </p>
            </div>

            {/* Custom 3-Column Grid for Checkboxes */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-6 p-2">
              {amenitiesList.map((item, idx) => (
                <label
                  key={idx}
                  className="flex items-center gap-3 cursor-pointer select-none group py-1"
                >
                  <input
                    type="checkbox"
                    defaultChecked={item.defaultChecked}
                    className="w-[18px] h-[18px] rounded accent-emerald-500 dark:accent-emerald-400 border-slate-300 dark:border-slate-700 cursor-pointer"
                  />
                  <span className="text-[13px] font-semibold text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                    {item.label}
                  </span>
                </label>
              ))}
            </div>
          </div>
          {/* SECTION 4: Property Documents */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-slate-100 dark:border-slate-800 pt-12">
            <div className="lg:col-span-4 space-y-2">
              <h3 className="text-xl font-black text-slate-900 dark:text-white">
                Property Documents
              </h3>
              <p className="text-sm text-slate-400 dark:text-slate-500 leading-relaxed">
                View and Upload all essential legal documents, including title,
                approvals, and receipts, organized for transparency and
                convenience.
              </p>
            </div>

            <div className="lg:col-span-8 bg-slate-50/30 dark:bg-slate-900/40 p-6 rounded-2xl border border-slate-100/70 dark:border-slate-800/60 space-y-4">
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                Upload Documents
              </label>
              <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-1.5 max-w-full overflow-hidden">
                <button
                  type="button"
                  className="bg-[#0F172A] hover:bg-slate-800 dark:bg-slate-700 dark:hover:bg-slate-600 text-white font-bold text-xs px-4 py-2.5 rounded-lg shrink-0 transition-colors"
                >
                  Browse Files
                </button>
                <span className="text-xs text-slate-400 truncate">
                  No Files Selected
                </span>
              </div>
              <ul className="list-disc list-inside text-xs text-slate-400 space-y-1 pl-1">
                <li>The maximum size is 8 MB. Format: PDF.</li>
                <li>Maximum number of files upload will be 5 files.</li>
              </ul>
              <div className="flex items-center gap-1.5 text-xs text-emerald-500 font-bold pt-1">
                <span>✓</span> Document Uploaded Successfully
              </div>
            </div>
          </div>

          {/* SECTION 5: Property Gallery */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-slate-100 dark:border-slate-800 pt-12">
            <div className="lg:col-span-4 space-y-2">
              <h3 className="text-xl font-black text-slate-900 dark:text-white">
                Property Gallery
              </h3>
              <p className="text-sm text-slate-400 dark:text-slate-500 leading-relaxed">
                Browse high-resolution images of interiors and exteriors to get
                a true feel of the design and atmosphere.
              </p>
            </div>

            <div className="lg:col-span-8 bg-slate-50/30 dark:bg-slate-900/40 p-6 rounded-2xl border border-slate-100/70 dark:border-slate-800/60 space-y-4">
              {/* Image Previews */}
              <div className="flex items-center gap-4 flex-wrap mb-2">
                {[
                  {
                    id: 1,
                    src: 'https://i.ibb.co.com/TDswrtys/gallery-07.jpg',
                  },
                  {
                    id: 2,
                    src: 'https://i.ibb.co.com/dJ17LCc9/gallery-02.jpg',
                  },
                  {
                    id: 3,
                    src: 'https://i.ibb.co.com/JjkDxWQc/gallery-03.jpg',
                  },
                ].map((img) => (
                  <div
                    key={img.id}
                    className="relative w-20 h-20 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 group"
                  >
                    <img
                      src={img.src}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      className="absolute top-1 right-1 bg-rose-500 text-white w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold shadow-md hover:bg-rose-600"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>

              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                Photo
              </label>
              <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-1.5">
                <button
                  type="button"
                  className="bg-[#0F172A] hover:bg-slate-800 dark:bg-slate-700 text-white font-bold text-xs px-4 py-2.5 rounded-lg shrink-0 transition-colors"
                >
                  Browse Files
                </button>
                <span className="text-xs text-slate-400">
                  3 Photos Selected
                </span>
              </div>
              <ul className="list-disc list-inside text-xs text-slate-400 space-y-1 pl-1">
                <li>
                  The maximum photo size is 8 MB. Formats: jpeg, jpg,. Put the
                  main picture first
                </li>
                <li>Maximum number of files upload will be 10 files.</li>
              </ul>
              <div className="flex items-center gap-1.5 text-xs text-emerald-500 font-bold pt-1">
                <span>✓</span> Photos Uploaded Successfully
              </div>
            </div>
          </div>

          {/* SECTION 6: Property Video */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-slate-100 dark:border-slate-800 pt-12">
            <div className="lg:col-span-4 space-y-2">
              <h3 className="text-xl font-black text-slate-900 dark:text-white">
                Property Video
              </h3>
              <p className="text-sm text-slate-400 dark:text-slate-500 leading-relaxed">
                Watch immersive property videos offering a real-time view of
                space, flow, lighting, and ambiance from every angle.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50/30 dark:bg-slate-900/40 p-6 rounded-2xl border border-slate-100/70 dark:border-slate-800/60">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                  Embed Video
                </label>
                <select className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white">
                  <option>Select</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                  Video Link
                </label>
                <input
                  type="text"
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white"
                />
              </div>
            </div>
          </div>

          {/* SECTION 7: Description */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-slate-100 dark:border-slate-800 pt-12">
            <div className="lg:col-span-4 space-y-2">
              <h3 className="text-xl font-black text-slate-900 dark:text-white">
                Description
              </h3>
              <p className="text-sm text-slate-400 dark:text-slate-500 leading-relaxed">
                A beautifully designed home combining style and function, ideal
                for modern lifestyles and peaceful, long-term living.
              </p>
            </div>

            <div className="lg:col-span-8 bg-slate-50/30 dark:bg-slate-900/40 p-6 rounded-2xl border border-slate-100/70 dark:border-slate-800/60">
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                Description of Property
              </label>
              <textarea
                rows={5}
                className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white resize-none"
              ></textarea>
            </div>
          </div>

          {/* SECTION 8: Floor Plans */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-slate-100 dark:border-slate-800 pt-12">
            <div className="lg:col-span-4 space-y-2">
              <h3 className="text-xl font-black text-slate-900 dark:text-white">
                Floor Plans
              </h3>
              <p className="text-sm text-slate-400 dark:text-slate-500 leading-relaxed">
                See detailed floor layouts showing room sizes, flow, and
                structure to help visualize furniture or future changes.
              </p>
            </div>

            <div className="lg:col-span-8 bg-slate-50/30 dark:bg-slate-900/40 p-6 rounded-2xl border border-slate-100/70 dark:border-slate-800/60 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                    Property Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                    Property Type
                  </label>
                  <select className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white">
                    <option>Select</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                    Property Category
                  </label>
                  <select className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white">
                    <option>Select</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                    Currency Type
                  </label>
                  <select className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white">
                    <option>Select</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                    Sale Price
                  </label>
                  <input
                    type="text"
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                    Offer Price
                  </label>
                  <input
                    type="text"
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                  Description of Property
                </label>
                <textarea
                  rows={4}
                  placeholder="Description"
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white resize-none"
                ></textarea>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                  Photo
                </label>
                <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-1.5">
                  <button
                    type="button"
                    className="bg-[#0F172A] hover:bg-slate-800 dark:bg-slate-700 text-white font-bold text-xs px-4 py-2.5 rounded-lg shrink-0 transition-colors"
                  >
                    Browse Files
                  </button>
                  <span className="text-xs text-slate-400">
                    3 Photos Selected
                  </span>
                </div>
              </div>

              {/* Add More Button inside Floor Plans */}
              <div className="flex justify-end pt-2">
                <button
                  type="button"
                  className="text-rose-500 hover:text-rose-600 font-bold text-sm flex items-center gap-1 transition-colors"
                >
                  <span className="text-lg">+</span> Add More
                </button>
              </div>
            </div>
          </div>
          {/* SECTION 9: Property Location */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-slate-100 dark:border-slate-800 pt-12">
            <div className="lg:col-span-4 space-y-2">
              <h3 className="text-xl font-black text-slate-900 dark:text-white">
                Property Location
              </h3>
              <p className="text-sm text-slate-400 dark:text-slate-500 leading-relaxed">
                Centrally located near schools, shops, and transport—offering
                everyday convenience and strong long-term property value.
              </p>
            </div>

            <div className="lg:col-span-8 bg-slate-50/30 dark:bg-slate-900/40 p-6 rounded-2xl border border-slate-100/70 dark:border-slate-800/60 space-y-6">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                  Address
                </label>
                <input
                  type="text"
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                    Country
                  </label>
                  <select className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white">
                    <option>Select</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                    State
                  </label>
                  <select className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white">
                    <option>Select</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                    City
                  </label>
                  <select className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white">
                    <option>Select</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                    Landmark
                  </label>
                  <input
                    type="text"
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                    Zipcode
                  </label>
                  <input
                    type="text"
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white"
                  />
                </div>
              </div>

              {/* Google Maps Container Overlay placeholder */}
              <div className="w-full h-80 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 relative bg-slate-100">
                
                <iframe
                  title="Property Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.895738096285!2d90.3908883!3d23.7511111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ1JTA0LjAiTiA5MMKwMjMnMjcuMiJF!5e0!3m2!1sbn!2sbd!4v1652697600000!5m2!1sbn!2sbd"
                  className="w-full h-full border-0 dark:invert-[90%] dark:hue-rotate-180"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>

          {/* SECTION 10: Form Actions (Reset & Add Property) */}
          <div className="flex justify-end items-center gap-4 pt-8 border-t border-slate-100 dark:border-slate-800">
            <button
              type="reset"
              className="px-6 py-3 bg-[#F43F5E] hover:bg-rose-600 text-white font-bold rounded-xl shadow-md shadow-rose-500/10 transition-all active:scale-95 text-sm"
            >
              Reset
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-[#0F172A] dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white font-bold rounded-xl shadow-md transition-all active:scale-95 text-sm"
            >
              Add Property
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddProperty
