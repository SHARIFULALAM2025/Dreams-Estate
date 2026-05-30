import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  FaSearch,
  FaChevronDown,
  FaChevronUp,
  FaStar,
  FaFilter
} from 'react-icons/fa'
import { MdOutlineGridView } from 'react-icons/md'
import { FaBath, FaBed, FaRegHeart } from 'react-icons/fa6'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { Link } from 'react-router'
import {
  BiCategory,

  BiArea
} from 'react-icons/bi'
import { MdOutlineDashboardCustomize } from 'react-icons/md'
import { IoPricetagOutline } from 'react-icons/io5'

import { useBuyPageData } from '../../Hook/Buy'

const BuyGridSidebar = ({ onApplyFilter }) => {
  const { i18n } = useTranslation()
    

const currentLang = i18n.language || 'en'
      const { data: buyProperties = [], isLoading, isError } = useBuyPageData()
      const allData = buyProperties?.data || []

  // কলাপ্স/এক্সপ্যান্ড স্টেট (Accordion States)
  const [openSections, setOpenSections] = useState({
    search: true,
    categories: true,
    amenities: true,
    price: true,
    reviews: true,
    style: true,
  })

  // ফিল্টার ডেটা স্টেট
  const [searchQuery, setSearchQuery] = useState('')
  const [location, setLocation] = useState('')
  const [bedrooms, setBedrooms] = useState('')
  const [bathrooms, setBathrooms] = useState('')
  const [minSqft, setMinSqft] = useState('')
  const [selectedCats, setSelectedCats] = useState([])
  const [selectedAmenities, setSelectedAmenities] = useState([])
  const [priceRange, setPriceRange] = useState(3800)
  const [selectedRating, setSelectedRating] = useState('')
  const [selectedStyle, setSelectedStyle] = useState([])

  // সেকশন টগল করার ফাংশন
  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }))
  }

  // ল্যাঙ্গুয়েজ ডিকশনারি (English & Bengali Translation)
  const t = {
    title: { en: 'Filter', bn: 'ফিল্টার' },
    reset: { en: 'Reset', bn: 'রিসেট' },
    searchSec: { en: 'Search', bn: 'অনুসন্ধান' },
    searchPlace: { en: 'Search here...', bn: 'এখানে খুঁজুন...' },
    selectLoc: { en: 'Select Location', bn: 'লোকেশন নির্বাচন করুন' },
    noBed: { en: 'No of Bedrooms', bn: 'বেডরুমের সংখ্যা' },
    noBath: { en: 'No of Bathrooms', bn: 'বাথরুমের সংখ্যা' },
    minSqft: { en: 'Min Sqft', bn: 'নূন্যতম স্কয়ার ফিট' },
    categories: { en: 'Categories', bn: 'ক্যাটাগরি' },
    amenities: { en: 'Amenities', bn: 'সুযোগ-সুবিধা' },
    price: { en: 'Price', bn: 'মূল্য বা বাজেট' },
    range: { en: 'Range', bn: 'সীমা' },
    reviews: { en: 'Reviews', bn: 'রিভিউ' },
    style: { en: 'Style', bn: 'স্টাইল' },
    applyBtn: { en: 'Apply Filter', bn: 'ফিল্টার প্রয়োগ করুন' },
    selectOpt: { en: 'Select', bn: 'বাছাই করুন' },
  }

  // ডামি কাউন্ট ডেটা (ডিজাইন হুবহু মিলানোর জন্য)
  const categoriesList = [
    {
      id: 'apartments',
      label: { en: 'Apartments (45)', bn: 'অ্যাপার্টমেন্ট (৪৫)' },
    },
    { id: 'condos', label: { en: 'Condos (12)', bn: 'কনডো (১২)' } },
    { id: 'land', label: { en: 'Land (18)', bn: 'জমি (১৮)' } },
    { id: 'office', label: { en: 'Office (12)', bn: 'অফিস (১২)' } },
  ]

  const amenitiesList = [
    { id: 'backyard', label: { en: 'Backyard (34)', bn: 'সবুজ উঠান (৩৪)' } },
    {
      id: 'centralAir',
      label: { en: 'Central Air (28)', bn: 'সেন্ট্রাল এসি (২৮)' },
    },
    {
      id: 'accessible',
      label: { en: 'Chair Accessible (29)', bn: 'হুইলচেয়ার প্রবেশযোগ্য (২৯)' },
    },
  ]

  const stylesList = [
    { id: 'budget', label: { en: 'Budget', bn: 'বাজেট ফ্রেন্ডলি' } },
    { id: 'midrange', label: { en: 'Midrange', bn: 'মধ্যম বাজেট' } },
    { id: 'luxury', label: { en: 'Luxury', bn: 'বিলাসবহুল' } },
    { id: 'family', label: { en: 'Family Friendly', bn: 'পারিবারিক পরিবেশ' } },
  ]

  const handleReset = () => {
    setSearchQuery('')
    setLocation('')
    setBedrooms('')
    setBathrooms('')
    setMinSqft('')
    setSelectedCats([])
    setSelectedAmenities([])
    setPriceRange(3800)
    setSelectedRating('')
    setSelectedStyle([])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (onApplyFilter) {
      onApplyFilter({
        searchQuery,
        location,
        bedrooms,
        bathrooms,
        minSqft,
        selectedCats,
        selectedAmenities,
        priceRange,
        selectedRating,
        selectedStyle,
      })
    }
    }


  return (
    <section className="grid grid-cols-12 gap-1 dark:bg-black">
      <aside className=" col-span-3 bg-white border border-gray-200 rounded-xl shadow-xs overflow-hidden h-fit">
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-slate-50/50">
          <h2 className="text-base font-bold text-slate-800 flex items-center gap-2">
            <FaFilter className="text-indigo-600 text-sm" />
            {t?.title[currentLang]}
          </h2>
          <button
            onClick={handleReset}
            className="text-xs font-semibold text-rose-500 hover:text-rose-600 transition-colors cursor-pointer"
          >
            {t?.reset[currentLang]}
          </button>
        </div>

        <form onSubmit={handleSubmit} className="divide-y divide-gray-100">
          {/* 1. Search Box & Inputs Section */}
          <div className="p-4">
            <div
              className="flex items-center justify-between pb-3 cursor-pointer group"
              onClick={() => toggleSection('search')}
            >
              <span className="text-xs font-bold text-slate-700 flex items-center gap-2 uppercase tracking-wider">
                <FaSearch className="text-slate-400 group-hover:text-indigo-500 transition-colors" />
                {t.searchSec[currentLang]}
              </span>
              {openSections.search ? (
                <FaChevronUp className="text-slate-400 text-xs" />
              ) : (
                <FaChevronDown className="text-slate-400 text-xs" />
              )}
            </div>

            {openSections.search && (
              <div className="flex flex-col gap-3.5 mt-2 animate-fadeIn">
                {/* Search input */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder={t?.searchPlace[currentLang]}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-8 pr-3 py-2 bg-slate-50 border border-slate-200 rounded text-xs focus:outline-hidden focus:border-indigo-500 focus:bg-white transition-all"
                  />
                  <FaSearch className="absolute left-2.5 top-3 text-slate-400 text-xs" />
                </div>

                {/* Select Location */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-500 mb-1.5">
                    {t.selectLoc[currentLang]}
                  </label>
                  <div className="relative">
                    <select
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full px-2.5 py-2 bg-slate-50 border border-slate-200 rounded text-xs text-slate-700 appearance-none focus:outline-hidden focus:border-indigo-500 focus:bg-white"
                    >
                      <option value="">{t?.selectOpt[currentLang]}</option>
                      <option value="Chicago">Chicago</option>
                      <option value="New York">New York</option>
                      <option value="Dhaka">Dhaka</option>
                    </select>
                    <FaChevronDown className="absolute right-2.5 top-3 text-slate-400 text-[10px] pointer-events-none" />
                  </div>
                </div>

                {/* No of Bedrooms */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-500 mb-1.5">
                    {t.noBed[currentLang]}
                  </label>
                  <div className="relative">
                    <select
                      value={bedrooms}
                      onChange={(e) => setBedrooms(e.target.value)}
                      className="w-full px-2.5 py-2 bg-slate-50 border border-slate-200 rounded text-xs text-slate-700 appearance-none focus:outline-hidden focus:border-indigo-500 focus:bg-white"
                    >
                      <option value="">{t?.selectOpt[currentLang]}</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4+</option>
                    </select>
                    <FaChevronDown className="absolute right-2.5 top-3 text-slate-400 text-[10px] pointer-events-none" />
                  </div>
                </div>

                {/* No of Bathrooms */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-500 mb-1.5">
                    {t?.noBath[currentLang]}
                  </label>
                  <div className="relative">
                    <select
                      value={bathrooms}
                      onChange={(e) => setBathrooms(e.target.value)}
                      className="w-full px-2.5 py-2 bg-slate-50 border border-slate-200 rounded text-xs text-slate-700 appearance-none focus:outline-hidden focus:border-indigo-500 focus:bg-white"
                    >
                      <option value="">{t.selectOpt[currentLang]}</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                    <FaChevronDown className="absolute right-2.5 top-3 text-slate-400 text-[10px] pointer-events-none" />
                  </div>
                </div>

                {/* Min Sqft */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-500 mb-1.5">
                    {t?.minSqft[currentLang]}
                  </label>
                  <input
                    type="number"
                    placeholder={t.searchPlace[currentLang]}
                    value={minSqft}
                    onChange={(e) => setMinSqft(e.target.value)}
                    className="w-full px-2.5 py-2 bg-slate-50 border border-slate-200 rounded text-xs focus:outline-hidden focus:border-indigo-500 focus:bg-white"
                  />
                </div>
              </div>
            )}
          </div>

          {/* 2. Categories Section */}
          <div className="p-4">
            <div
              className="flex items-center justify-between pb-2 cursor-pointer group"
              onClick={() => toggleSection('categories')}
            >
              <span className="text-xs font-bold text-slate-700 flex items-center gap-2 uppercase tracking-wider">
                <BiCategory className="text-slate-400 group-hover:text-indigo-500 text-sm transition-colors" />
                {t?.categories[currentLang]}
              </span>
              {openSections.categories ? (
                <FaChevronUp className="text-slate-400 text-xs" />
              ) : (
                <FaChevronDown className="text-slate-400 text-xs" />
              )}
            </div>
            {openSections.categories && (
              <div className="mt-3 flex flex-col gap-2.5 animate-fadeIn">
                {categoriesList.map((cat) => (
                  <label
                    key={cat.id}
                    className="flex items-center gap-2.5 text-xs text-slate-600 font-medium cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="rounded-sm border-gray-300 text-indigo-600 focus:ring-indigo-500 w-3.5 h-3.5"
                    />
                    <span>{cat.label[currentLang]}</span>
                  </label>
                ))}
                <button
                  type="button"
                  className="text-[11px] font-bold text-indigo-600 text-left mt-1 hover:underline"
                >
                  {currentLang === 'bn' ? 'আরও দেখুন' : 'See More'}
                </button>
              </div>
            )}
          </div>

          {/* 3. Amenities Section */}
          <div className="p-4">
            <div
              className="flex items-center justify-between pb-2 cursor-pointer group"
              onClick={() => toggleSection('amenities')}
            >
              <span className="text-xs font-bold text-slate-700 flex items-center gap-2 uppercase tracking-wider">
                <MdOutlineDashboardCustomize className="text-slate-400 group-hover:text-indigo-500 text-sm transition-colors" />
                {t.amenities[currentLang]}
              </span>
              {openSections?.amenities ? (
                <FaChevronUp className="text-slate-400 text-xs" />
              ) : (
                <FaChevronDown className="text-slate-400 text-xs" />
              )}
            </div>
            {openSections?.amenities && (
              <div className="mt-3 flex flex-col gap-2.5 animate-fadeIn">
                {amenitiesList.map((amenity) => (
                  <label
                    key={amenity.id}
                    className="flex items-center gap-2.5 text-xs text-slate-600 font-medium cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="rounded-sm border-gray-300 text-indigo-600 focus:ring-indigo-500 w-3.5 h-3.5"
                    />
                    <span>{amenity.label[currentLang]}</span>
                  </label>
                ))}
                <button
                  type="button"
                  className="text-[11px] font-bold text-indigo-600 text-left mt-1 hover:underline"
                >
                  {currentLang === 'bn' ? 'আরও দেখুন' : 'See More'}
                </button>
              </div>
            )}
          </div>

          {/* 4. Price Slider Section */}
          <div className="p-4">
            <div
              className="flex items-center justify-between pb-2 cursor-pointer group"
              onClick={() => toggleSection('price')}
            >
              <span className="text-xs font-bold text-slate-700 flex items-center gap-2 uppercase tracking-wider">
                <IoPricetagOutline className="text-slate-400 group-hover:text-indigo-500 text-sm transition-colors" />
                {t.price[currentLang]}
              </span>
              {openSections?.price ? (
                <FaChevronUp className="text-slate-400 text-xs" />
              ) : (
                <FaChevronDown className="text-slate-400 text-xs" />
              )}
            </div>
            {openSections?.price && (
              <div className="mt-4 px-1 animate-fadeIn">
                <div className="relative mb-2">
                  <input
                    type="range"
                    min="200"
                    max="5695"
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full h-1 bg-indigo-100 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                  />
                  {/* বর্তমান সিলেক্টেড প্রাইস বুদবুদ বা ব্যাজ */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded shadow-sm">
                    ${priceRange}
                  </div>
                </div>
                <div className="flex justify-between items-center text-[11px] text-slate-500 font-semibold mt-4">
                  <span>{t?.range[currentLang]} : $200 - $5695</span>
                </div>
              </div>
            )}
          </div>

          {/* 5. Reviews Rating Section */}
          <div className="p-4">
            <div
              className="flex items-center justify-between pb-2 cursor-pointer group"
              onClick={() => toggleSection('reviews')}
            >
              <span className="text-xs font-bold text-slate-700 flex items-center gap-2 uppercase tracking-wider">
                <FaStar className="text-slate-400 group-hover:text-indigo-500 text-sm transition-colors" />
                {t?.reviews[currentLang]}
              </span>
              {openSections.reviews ? (
                <FaChevronUp className="text-slate-400 text-xs" />
              ) : (
                <FaChevronDown className="text-slate-400 text-xs" />
              )}
            </div>
            {openSections?.reviews && (
              <div className="mt-3 flex flex-col gap-2 animate-fadeIn">
                {[5, 4, 3, 2, 1].map((stars) => (
                  <label
                    key={stars}
                    className="flex items-center gap-2.5 text-xs text-slate-600 font-medium cursor-pointer hover:bg-slate-50 p-0.5 rounded transition-colors"
                  >
                    <input
                      type="radio"
                      name="rating"
                      value={stars}
                      checked={Number(selectedRating) === stars}
                      onChange={(e) => setSelectedRating(e.target.value)}
                      className="border-gray-300 text-indigo-600 focus:ring-indigo-500 w-3.5 h-3.5"
                    />
                    <div className="flex text-amber-400 text-[11px] gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={
                            i < stars ? 'text-amber-400' : 'text-gray-200'
                          }
                        />
                      ))}
                    </div>
                    <span className="text-slate-500 text-[11px]">
                      {stars} {currentLang === 'bn' ? 'স্টার' : 'Star'}
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* 6. Style Section */}
          <div className="p-4">
            <div
              className="flex items-center justify-between pb-2 cursor-pointer group"
              onClick={() => toggleSection('style')}
            >
              <span className="text-xs font-bold text-slate-700 flex items-center gap-2 uppercase tracking-wider">
                <BiArea className="text-slate-400 group-hover:text-indigo-500 text-sm transition-colors" />
                {t?.style[currentLang]}
              </span>
              {openSections.style ? (
                <FaChevronUp className="text-slate-400 text-xs" />
              ) : (
                <FaChevronDown className="text-slate-400 text-xs" />
              )}
            </div>
            {openSections?.style && (
              <div className="mt-3 flex flex-col gap-2.5 animate-fadeIn">
                {stylesList?.map((style) => (
                  <label
                    key={style.id}
                    className="flex items-center gap-2.5 text-xs text-slate-600 font-medium cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="rounded-sm border-gray-300 text-indigo-600 focus:ring-indigo-500 w-3.5 h-3.5"
                    />
                    <span>{style.label[currentLang]}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Submit / Apply Button */}
          <div className="p-4 bg-slate-50/50">
            <button
              type="submit"
              className="w-full bg-slate-900 hover:bg-slate-900/90 text-white py-2.5 rounded font-bold text-xs uppercase tracking-wider shadow-xs transition-all cursor-pointer active:scale-98"
            >
              {t?.applyBtn[currentLang]}
            </button>
          </div>
        </form>
      </aside>
      <section className=" col-span-1 md:col-span-9">
        <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 xl:grid-cols-3">
          {allData?.map((property) => (
            <div
              key={property.id}
              className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={property?.attachment[0]}
                  alt={property.title}
                  className="h-[260px] w-full object-cover transition duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30" />

                {/* Top badges */}
                <div className="absolute left-4 top-4 flex items-center gap-2">
                  {property.isNew && (
                    <span className="rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
                      New
                    </span>
                  )}

                  {property.featured && (
                    <span className="rounded-full bg-orange-400 px-3 py-1 text-xs font-semibold text-white">
                      Featured
                    </span>
                  )}
                </div>

                {/* Favorite */}
                <button className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-700 shadow-md">
                  <FaRegHeart />
                </button>

                {/* Price */}
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white">
                    {property.price}
                  </h3>
                </div>

                {/* Avatar */}
                <div className="absolute bottom-4 right-4">
                  <img
                    src={property?.profileUrl}
                    alt=""
                    className="h-12 w-12 rounded-full border-[3px] border-white object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-1">
                {/* Rating */}
                <div className="mb-3 flex items-center gap-1 text-sm text-gray-500">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  <span className="font-medium text-gray-700">4.5</span>

                  <span>(4.5 Reviews)</span>
                </div>

                {/* Title */}
                <Link
                  to={`GridPropertyDetails/propertyDetails/${property.id}`}
                  className="mb-2 text-xl font-bold text-gray-900 transition group-hover:text-violet-600"
                >
                  {property?.property_name?.[currentLang]}
                </Link>

                {/* Location */}
                <div className="mb-5 flex items-center gap-2 text-sm text-gray-500">
                  <FaMapMarkerAlt className="text-violet-500" />
                  <span>
                    {property?.city?.[currentLang]} ,{property?.state?.[currentLang]}
                    ,{property?.country?.[currentLang]}
                  </span>
                </div>

                {/* Info */}
                <div className="mb-5 grid grid-cols-3 gap-2 rounded-lg bg-gray-100 p-3 text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <FaBed className="text-violet-500" />
                    <span>{property.property_bedrooms} Bedroom</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FaBath className="text-violet-500" />
                    <span>{property.property_bathrooms} Bath</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <MdOutlineGridView className="text-violet-500" />
                    <span>{property?.property_sqft} Sq Ft</span>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between border-t pt-4 text-sm text-gray-500">
                  <p>
                    <span className="font-semibold text-gray-800">
                      Listed on :
                    </span>{' '}
                    {new Date(
                      property?.property_available_from
                    ).toLocaleDateString()}
                  </p>

                  <p>
                    <span className="font-semibold text-gray-800">
                      Category :
                    </span>{' '}
                    {property?.property_category[currentLang]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  )
}



export default BuyGridSidebar;