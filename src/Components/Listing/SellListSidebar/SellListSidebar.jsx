import React from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  FaSearch,
  FaChevronDown,
  FaChevronUp,
  FaStar,
  FaFilter,
  FaHeart,
  FaRegCompass,
  FaBuilding,
  FaWind,
  FaTv,
  FaCar,
} from 'react-icons/fa'
import { MdOutlineBalcony, MdOutlineKitchen, MdOutlineWaterDrop } from 'react-icons/md'
import { FaBath, FaBed, FaFileArrowDown } from 'react-icons/fa6'

import { Link } from 'react-router'
import { BiCategory, BiArea } from 'react-icons/bi'

import { MdOutlineDashboardCustomize as DashIcon } from 'react-icons/md'
import { IoLocationOutline, IoPricetagOutline } from 'react-icons/io5'

import { useSellPageData } from '../../Hook/Sell'

const SellListSidebar = ({ onApplyFilter }) => {
  const { i18n } = useTranslation()
  const currentLang = i18n.language || 'en'
  const { data: buyProperties = [], isLoading, isError } = useSellPageData()
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

  // ল্যাঙ্গুয়েজ ডিকশনারি (English & Bengali Translation)
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

  // ডামি কাউন্ট ডেটা
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

  // লোকাল সেফ টেক্সট হেল্পার ফাংশন (অবজেক্ট বা স্ট্রিং দুইটাই হ্যান্ডেল করবে)
  const getSafeText = (field) => {
    if (!field) return ''
    if (typeof field === 'object') {
      return field[currentLang] || field['en'] || ''
    }
    return field
  }

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
    <section className="grid grid-cols-12 gap-4 p-4 bg-gray-50 dark:bg-black min-h-screen">
      {/* SIDEBAR FILTER */}
      <aside className="col-span-12 lg:col-span-3 bg-white dark:bg-slate-950 border border-gray-200 dark:border-slate-800 rounded-xl shadow-xs overflow-hidden h-fit">
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
          <h2 className="text-base font-bold text-slate-800 dark:text-white flex items-center gap-2">
            <FaFilter className="text-indigo-600 dark:text-violet-400 text-sm" />
            {t.title[currentLang]}
          </h2>
          <button
            type="button"
            onClick={handleReset}
            className="text-xs font-semibold text-rose-500 hover:text-rose-600 transition-colors cursor-pointer"
          >
            {t.reset[currentLang]}
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="divide-y divide-gray-100 dark:divide-slate-800"
        >
          {/* 1. Search Box & Inputs Section */}
          <div className="p-4">
            <div
              className="flex items-center justify-between pb-3 cursor-pointer group"
              onClick={() => toggleSection('search')}
            >
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2 uppercase tracking-wider">
                <FaSearch className="text-slate-400 group-hover:text-indigo-500 dark:group-hover:text-violet-400 transition-colors" />
                {t.searchSec[currentLang]}
              </span>
              {openSections.search ? (
                <FaChevronUp className="text-slate-400 text-xs" />
              ) : (
                <FaChevronDown className="text-slate-400 text-xs" />
              )}
            </div>

            {openSections.search && (
              <div className="flex flex-col gap-3.5 mt-2 transition-all">
                {/* Search input */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder={t.searchPlace[currentLang]}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-8 pr-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded text-xs text-slate-900 dark:text-white focus:outline-hidden focus:border-indigo-500 focus:bg-white dark:focus:bg-slate-950 transition-all"
                  />
                  <FaSearch className="absolute left-2.5 top-3 text-slate-400 text-xs" />
                </div>

                {/* Select Location */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-500 dark:text-slate-400 mb-1.5">
                    {t.selectLoc[currentLang]}
                  </label>
                  <div className="relative">
                    <select
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full px-2.5 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded text-xs text-slate-700 dark:text-slate-300 appearance-none focus:outline-hidden focus:border-indigo-500 focus:bg-white dark:focus:bg-slate-950"
                    >
                      <option value="">{t.selectOpt[currentLang]}</option>
                      <option value="Chicago">Chicago</option>
                      <option value="New York">New York</option>
                      <option value="Dhaka">Dhaka</option>
                    </select>
                    <FaChevronDown className="absolute right-2.5 top-3 text-slate-400 text-[10px] pointer-events-none" />
                  </div>
                </div>

                {/* No of Bedrooms */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-500 dark:text-slate-400 mb-1.5">
                    {t.noBed[currentLang]}
                  </label>
                  <div className="relative">
                    <select
                      value={bedrooms}
                      onChange={(e) => setBedrooms(e.target.value)}
                      className="w-full px-2.5 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded text-xs text-slate-700 dark:text-slate-300 appearance-none focus:outline-hidden focus:border-indigo-500 focus:bg-white dark:focus:bg-slate-950"
                    >
                      <option value="">{t.selectOpt[currentLang]}</option>
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
                  <label className="block text-[11px] font-semibold text-slate-500 dark:text-slate-400 mb-1.5">
                    {t.noBath[currentLang]}
                  </label>
                  <div className="relative">
                    <select
                      value={bathrooms}
                      onChange={(e) => setBathrooms(e.target.value)}
                      className="w-full px-2.5 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded text-xs text-slate-700 dark:text-slate-300 appearance-none focus:outline-hidden focus:border-indigo-500 focus:bg-white dark:focus:bg-slate-950"
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
                  <label className="block text-[11px] font-semibold text-slate-500 dark:text-slate-400 mb-1.5">
                    {t.minSqft[currentLang]}
                  </label>
                  <input
                    type="number"
                    placeholder={t.searchPlace[currentLang]}
                    value={minSqft}
                    onChange={(e) => setMinSqft(e.target.value)}
                    className="w-full px-2.5 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded text-xs text-slate-900 dark:text-white focus:outline-hidden focus:border-indigo-500 focus:bg-white dark:focus:bg-slate-950"
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
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2 uppercase tracking-wider">
                <BiCategory className="text-slate-400 group-hover:text-indigo-500 dark:group-hover:text-violet-400 text-sm transition-colors" />
                {t.categories[currentLang]}
              </span>
              {openSections.categories ? (
                <FaChevronUp className="text-slate-400 text-xs" />
              ) : (
                <FaChevronDown className="text-slate-400 text-xs" />
              )}
            </div>
            {openSections.categories && (
              <div className="mt-3 flex flex-col gap-2.5">
                {categoriesList.map((cat) => (
                  <label
                    key={cat.id}
                    className="flex items-center gap-2.5 text-xs text-slate-600 dark:text-slate-400 font-medium cursor-pointer"
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
                  className="text-[11px] font-bold text-indigo-600 dark:text-violet-400 text-left mt-1 hover:underline cursor-pointer"
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
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2 uppercase tracking-wider">
                <DashIcon className="text-slate-400 group-hover:text-indigo-500 dark:group-hover:text-violet-400 text-sm transition-colors" />
                {t.amenities[currentLang]}
              </span>
              {openSections.amenities ? (
                <FaChevronUp className="text-slate-400 text-xs" />
              ) : (
                <FaChevronDown className="text-slate-400 text-xs" />
              )}
            </div>
            {openSections.amenities && (
              <div className="mt-3 flex flex-col gap-2.5">
                {amenitiesList.map((amenity) => (
                  <label
                    key={amenity.id}
                    className="flex items-center gap-2.5 text-xs text-slate-600 dark:text-slate-400 font-medium cursor-pointer"
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
                  className="text-[11px] font-bold text-indigo-600 dark:text-violet-400 text-left mt-1 hover:underline cursor-pointer"
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
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2 uppercase tracking-wider">
                <IoPricetagOutline className="text-slate-400 group-hover:text-indigo-500 dark:group-hover:text-violet-400 text-sm transition-colors" />
                {t.price[currentLang]}
              </span>
              {openSections.price ? (
                <FaChevronUp className="text-slate-400 text-xs" />
              ) : (
                <FaChevronDown className="text-slate-400 text-xs" />
              )}
            </div>
            {openSections.price && (
              <div className="mt-4 px-1">
                <div className="relative mb-2">
                  <input
                    type="range"
                    min="200"
                    max="5695"
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full h-1 bg-indigo-100 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-600 dark:accent-violet-400"
                  />
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-indigo-600 dark:bg-violet-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded shadow-sm">
                    ${priceRange}
                  </div>
                </div>
                <div className="flex justify-between items-center text-[11px] text-slate-500 dark:text-slate-400 font-semibold mt-4">
                  <span>{t.range[currentLang]} : $200 - $5695</span>
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
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2 uppercase tracking-wider">
                <FaStar className="text-slate-400 group-hover:text-indigo-500 dark:group-hover:text-violet-400 text-sm transition-colors" />
                {t.reviews[currentLang]}
              </span>
              {openSections.reviews ? (
                <FaChevronUp className="text-slate-400 text-xs" />
              ) : (
                <FaChevronDown className="text-slate-400 text-xs" />
              )}
            </div>
            {openSections.reviews && (
              <div className="mt-3 flex flex-col gap-2">
                {[5, 4, 3, 2, 1].map((stars) => (
                  <label
                    key={stars}
                    className="flex items-center gap-2.5 text-xs text-slate-600 dark:text-slate-400 font-medium cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-900 p-0.5 rounded transition-colors"
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
                            i < stars
                              ? 'text-amber-400'
                              : 'text-gray-200 dark:text-slate-700'
                          }
                        />
                      ))}
                    </div>
                    <span className="text-slate-500 dark:text-slate-400 text-[11px]">
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
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2 uppercase tracking-wider">
                <BiArea className="text-slate-400 group-hover:text-indigo-500 dark:group-hover:text-violet-400 text-sm transition-colors" />
                {t.style[currentLang]}
              </span>
              {openSections.style ? (
                <FaChevronUp className="text-slate-400 text-xs" />
              ) : (
                <FaChevronDown className="text-slate-400 text-xs" />
              )}
            </div>
            {openSections.style && (
              <div className="mt-3 flex flex-col gap-2.5">
                {stylesList.map((style) => (
                  <label
                    key={style.id}
                    className="flex items-center gap-2.5 text-xs text-slate-600 dark:text-slate-400 font-medium cursor-pointer"
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
          <div className="p-4 bg-slate-50/50 dark:bg-slate-900/30">
            <button
              type="submit"
              className="w-full bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-white dark:text-slate-950 text-white py-2.5 rounded font-bold text-xs uppercase tracking-wider shadow-xs transition-all cursor-pointer active:scale-98"
            >
              {t.applyBtn[currentLang]}
            </button>
          </div>
        </form>
      </aside>

      {/* PROPERTY LIST VIEW */}
      <section className="col-span-12 lg:col-span-9">
        <div className="flex flex-col gap-4">
          {allData.map((property, index) => {
            const propertyId = property?.id || property?._id || `prop-${index}`

            // প্রাইস ক্যালকুলেশন সেফটি এবং লোকাল ফরম্যাটিং
            const priceValue = property?.property_price_sale
              ? Number(property.property_price_sale)
              : 0
            const displayPrice =
              !isNaN(priceValue) && priceValue > 0
                ? priceValue.toLocaleString(
                    currentLang === 'bn' ? 'bn-BD' : 'en-IN'
                  )
                : null

            // ফিচার লিস্ট অ্যারে
            const propertyFeatures = [
              {
                icon: <FaBed />,
                label: { en: 'Bedrooms', bn: 'বেডরুম' },
                value: property?.property_bedrooms || 0,
              },
              {
                icon: <FaBath />,
                label: { en: 'Bathrooms', bn: 'বাথরুম' },
                value: property?.property_bathrooms || 0,
              },
              {
                icon: <FaCar />,
                label: { en: 'Parking', bn: 'পার্কিং' },
                value: property?.property_parking || 0,
              },
              {
                icon: <MdOutlineBalcony className="text-base" />,
                label: { en: 'Balcony', bn: 'বারান্দা' },
                value: property?.property_balcony || 0,
              },
              {
                icon: <FaBuilding />,
                label: { en: 'Floor', bn: 'তলা' },
                value: property?.property_floor || 0,
              },
              {
                icon: <FaFileArrowDown />,
                label: { en: 'Wardrobe', bn: 'ওয়ারড্রোব' },
                value: property?.property_wardrobe || 0,
              },
              {
                icon: <FaTv />,
                label: { en: 'TV', bn: 'টিভি' },
                value: property?.property_tv || 0,
              },
              {
                icon: <MdOutlineWaterDrop className="text-base" />,
                label: { en: 'Water Purifier', bn: 'পানির ফিল্টার' },
                value: property?.property_water_purifier || 0,
              },
              {
                icon: <MdOutlineKitchen className="text-base" />,
                label: { en: 'Microwave', bn: 'মাইক্রোওয়েভ' },
                value: property?.property_microwave || 0,
              },
              {
                icon: <FaWind />,
                label: { en: 'AC', bn: 'এসি' },
                value: property?.property_ac || 0,
              },
              {
                icon: <FaBuilding />,
                label: { en: 'Fridge', bn: 'ফ্রিজ' },
                value: property?.property_fridge || 0,
              },
              {
                icon: <FaRegCompass />,
                label: { en: 'Curtains', bn: 'পর্দা' },
                value: property?.property_available_curtains
                  ? currentLang === 'bn'
                    ? 'আছে'
                    : 'Yes'
                  : currentLang === 'bn'
                    ? 'নেই'
                    : 'No',
              },
            ]

            return (
              <div
                key={propertyId}
                className="flex flex-col md:flex-row dark:bg-slate-950 bg-white rounded-xl overflow-hidden shadow-xs border border-gray-200 dark:border-slate-800 hover:shadow-lg transition-all duration-300 relative group"
              >
                {/* Image Section */}
                <div className="relative w-full md:w-72 xl:w-80 h-52 md:h-auto flex-shrink-0 overflow-hidden">
                  <img
                    src={
                      property?.attachment?.[0] ||
                      'https://via.placeholder.com/400x300?text=No+Image'
                    }
                    alt={getSafeText(property?.property_name) || 'Property'}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex gap-1.5 z-10">
                    {property?.isNew && (
                      <span className="bg-rose-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm uppercase">
                        New
                      </span>
                    )}
                    {property?.featured && (
                      <span className="bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm uppercase">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Wishlist Button */}
                  <button className="absolute top-3 right-3 bg-white/80 dark:bg-slate-900/80 hover:bg-white text-gray-700 dark:text-slate-300 p-2 rounded-full transition-colors shadow-xs cursor-pointer z-10">
                    <FaHeart className="w-3 h-3 group-hover:text-red-500 transition-colors" />
                  </button>
                </div>

                {/* Content Section */}
                <div className="flex flex-col justify-between flex-grow p-4 min-w-0">
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                      <div>
                        {/* Rating */}
                        <div className="mb-1.5 flex items-center gap-1 text-xs text-gray-500 dark:text-slate-400">
                          <div className="flex text-amber-400 gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <FaStar key={i} className="text-[10px]" />
                            ))}
                          </div>
                          <span className="font-semibold text-gray-700 dark:text-slate-300">
                            4.5
                          </span>
                          <span>(4.5 Reviews)</span>
                        </div>

                        {/* Title */}
                        <Link
                          to={`/buyList/propertyDetails/${propertyId}`}
                          className="text-base font-bold text-slate-950 dark:text-white hover:text-indigo-600 dark:hover:text-violet-400 transition-colors cursor-pointer block truncate"
                        >
                          {getSafeText(property?.property_name) ||
                            (currentLang === 'bn'
                              ? 'নামহীন প্রপার্টি'
                              : 'Untitled Property')}
                        </Link>
                      </div>

                      {/* Price Badge */}
                      <div className="sm:text-right flex-shrink-0">
                        <span className="text-lg font-black text-slate-950 dark:text-white block">
                          ৳{' '}
                          {displayPrice ||
                            (currentLang === 'bn' ? 'আলোচনা সাপেক্ষ' : 'N/A')}
                        </span>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-1 text-gray-500 dark:text-slate-400 text-xs mb-3">
                      <IoLocationOutline className="text-indigo-500 dark:text-violet-400 flex-shrink-0 w-3.5 h-3.5" />
                      <span className="truncate">
                        {property?.city
                          ? `${getSafeText(property.city)}, `
                          : ''}
                        {property?.state
                          ? `${getSafeText(property.state)}, `
                          : ''}
                        {property?.country ? getSafeText(property.country) : ''}
                        {!property?.city &&
                          !property?.state &&
                          !property?.country &&
                          (currentLang === 'bn'
                            ? 'ঠিকানা উপলব্ধ নেই'
                            : 'No Location Specified')}
                      </span>
                    </div>

                    {/* Horizontal Features Smooth Scroll */}
                    <div className="flex flex-row gap-2 overflow-x-auto pb-3 pt-1 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-slate-700">
                      {propertyFeatures.map((feat, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 px-2.5 py-1.5 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-lg flex-shrink-0 w-[115px]"
                        >
                          <div className="text-indigo-500 dark:text-violet-400 text-sm flex-shrink-0">
                            {feat.icon}
                          </div>
                          <div className="min-w-0 leading-tight">
                            <p className="text-[9px] text-gray-400 dark:text-slate-400 font-medium truncate">
                              {feat.label[currentLang]}
                            </p>
                            <p className="text-xs font-bold text-gray-700 dark:text-slate-300 truncate">
                              {feat.value}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t p-1 text-sm text-gray-500">
                    {/* Avatar */}
                    <div className="flex items-center gap-1">
                      <img
                        src={property?.profileUrl}
                        alt=""
                        className="h-10 w-10 rounded-full border-[3px] border-white object-cover"
                      />
                      <div className="">
                        <p className="text-xs text-black">
                          {property?.post_name}
                        </p>
                        <p className="text-xs text-black">
                          {getLocalizedText(property?.country)}
                        </p>
                      </div>
                    </div>

                    <div>
                      <button className="px-3 py-2 text-sm font-medium text-white transition  bg-black  rounded-md">
                        {currentLang === 'bn' ? 'বুক নিউ' : 'Book Now'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </section>
  )
}

export default SellListSidebar

