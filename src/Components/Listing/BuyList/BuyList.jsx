import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaBed, FaBath, FaWind, FaTv, FaStar, FaHeart } from 'react-icons/fa'
import {
  FaCar,
  FaRegCompass,
  FaBuilding,
  FaFileArrowDown,
} from 'react-icons/fa6'
import { IoLocationOutline } from 'react-icons/io5'
import { useBuyPageData } from '../../Hook/Buy'
import {
  MdOutlineBalcony,
  MdOutlineKitchen,
  MdOutlineWaterDrop,
} from 'react-icons/md'
import { Link } from 'react-router'

const BuyList = () => {
  const { i18n } = useTranslation()
  const currentLang = i18n.language || 'en'

  const { data: buyProperties = [], isLoading, isError } = useBuyPageData()
  const allData = buyProperties?.data || []

  // অবজেক্ট বা স্ট্রিং থেকে সেফলি ল্যাঙ্গুয়েজ অনুযায়ী টেক্সট ফিল্টার করার ফাংশন
  const getLocalizedText = (field) => {
    if (!field) return ''
    if (typeof field === 'string') return field
    return field[currentLang] || field['en'] || ''
  }

  // লোডিং এবং এরর স্টেট হ্যান্ডেল করা (সংশোধিত ও সুসজ্জিত সেফটি গার্ড)
  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20 bg-gray-50 dark:bg-black min-h-screen">
        <p className="text-lg font-semibold text-slate-600 dark:text-slate-400">
          {currentLang === 'bn'
            ? 'প্রপার্টি লোড হচ্ছে...'
            : 'Loading properties...'}
        </p>
      </div>
    )
  }

  if (isError || !allData.length) {
    return (
      <div className="flex justify-center items-center py-20 bg-gray-50 dark:bg-black min-h-screen">
        <p className="text-lg font-semibold text-rose-500">
          {currentLang === 'bn'
            ? 'প্রপার্টি লোড করতে ব্যর্থ হয়েছে!'
            : 'Failed to load properties.'}
        </p>
      </div>
    )
  }

  return (
    <div className="dark:bg-black p-4 bg-gray-50 min-h-screen">
      {/* Property List Wrapper */}
      <div className="flex flex-col gap-3">
        {allData.map((property) => {
          // propertyFeatures অ্যারেটি সেফ রেন্ডারিং এর জন্য লুপের ভিতরে মডিফাই করা হয়েছে
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
              icon: <MdOutlineBalcony className="text-xl" />,
              label: { en: 'Balcony', bn: 'বারান্দা' },
              value: property?.property_balcony || 'N/A',
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
              icon: <MdOutlineWaterDrop className="text-xl" />,
              label: { en: 'Water Purifier', bn: 'পানির পিউরিফায়ার' },
              value: property?.property_water_purifier || 0,
            },
            {
              icon: <MdOutlineKitchen className="text-xl" />,
              label: { en: 'Microwave', bn: 'মাইক্রোওয়েভ' },
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
              key={property.id}
              className="flex flex-col md:flex-row dark:bg-slate-900 bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-slate-800 hover:shadow-md transition-shadow duration-300 relative group"
            >
              {/* 1. Image Section */}
              <div className="relative w-full md:w-80 h-56 md:h-auto flex-shrink-0">
                <img
                  src={
                    property?.attachment?.[0] ||
                    'https://via.placeholder.com/400x300?text=No+Image'
                  }
                  alt={getLocalizedText(property?.property_name)}
                  className="w-full h-full object-cover"
                />
                {/* Badges */}
                <div className="absolute top-3 left-3 flex gap-1.5">
                  {property?.isNew && (
                    <span className="bg-pink-500 text-white text-[11px] font-bold px-2 py-0.5 rounded shadow-sm uppercase">
                      New
                    </span>
                  )}
                  {property?.featured && (
                    <span className="bg-amber-500 text-white text-[11px] font-bold px-2 py-0.5 rounded shadow-sm uppercase">
                      Featured
                    </span>
                  )}
                </div>
                {/* Wishlist Button */}
                <button className="absolute top-3 right-3 bg-black/30 hover:bg-black/50 text-white p-1.5 rounded-full backdrop-blur-xs transition-colors">
                  <FaHeart className="w-3.5 h-3.5 text-white/90 group-hover:text-red-500 transition-colors" />
                </button>
                {/* User Avatar */}
                <div className="absolute bottom-3 left-3">
                  <img
                    src={
                      property?.profileUrl || 'https://via.placeholder.com/100'
                    }
                    alt="Agent"
                    className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm"
                  />
                </div>
              </div>

              {/* 2. Content Section */}
              <div className="flex flex-col justify-between flex-grow p-5 min-w-0">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                    <div>
                      {/* Rating */}
                      <div className="mb-3 flex items-center gap-1 text-sm text-gray-500 dark:text-slate-400">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <FaStar
                              key={i}
                              className="text-xs text-amber-400"
                            />
                          ))}
                        </div>
                        <span className="font-medium text-gray-700 dark:text-slate-300">
                          4.5
                        </span>
                        <span className="text-xs text-gray-400 dark:text-slate-400">
                          (4.5 Reviews)
                        </span>
                      </div>
                      {/* Title */}
                      <Link
                        to={`/buyList/propertyDetails/${property.id}`}
                        className="text-lg font-bold text-slate-800 dark:text-white hover:text-blue-600 dark:hover:text-violet-400 transition-colors cursor-pointer"
                      >
                        {getLocalizedText(property?.property_name)}
                      </Link>
                    </div>
                    {/* Price */}
                    <div className="text-right sm:text-right">
                      <span className="text-xl font-black text-slate-800 dark:text-white">
                        ৳{' '}
                        {Number(property?.property_price_sale).toLocaleString(
                          'en-IN'
                        )}
                      </span>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-1 text-gray-500 dark:text-slate-400 text-xs mb-5">
                    <IoLocationOutline className="text-gray-400 dark:text-slate-400 flex-shrink-0 w-4 h-4" />
                    <span className="truncate">
                      {getLocalizedText(property?.city)} ,{' '}
                      {getLocalizedText(property?.state)} ,{' '}
                      {getLocalizedText(property?.country)}
                    </span>
                  </div>

                  {/* Features Horizontal Scroll Row */}
                  <div className="flex flex-row gap-3 overflow-x-auto pb-3 pt-1 scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-800 scrollbar-track-transparent">
                    {propertyFeatures.map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-slate-800 rounded-lg border border-gray-100 dark:border-slate-700 flex-shrink-0 w-[140px]"
                      >
                        <div className="text-indigo-500 dark:text-violet-400 text-lg flex-shrink-0">
                          {feat.icon}
                        </div>
                        <div className="min-w-0">
                          <p className="text-[11px] text-gray-400 dark:text-slate-400 font-medium truncate">
                            {feat.label[currentLang]}
                          </p>
                          <p className="text-xs font-semibold text-gray-700 dark:text-slate-200 truncate">
                            {feat.value}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Row: Footer Info */}
                <div className="flex items-center justify-between border-t border-gray-100 dark:border-slate-800 pt-3 mt-4 text-[11px] text-gray-400 dark:text-slate-400 font-medium">
                  <div>
                    {currentLang === 'bn'
                      ? 'তালিকাভুক্তির তারিখ :'
                      : 'Listed on : '}{' '}
                    <span className="text-gray-600 dark:text-slate-300">
                      {property?.property_available_from
                        ? new Date(
                            property.property_available_from
                          ).toLocaleDateString(
                            currentLang === 'bn' ? 'bn-BD' : 'en-US'
                          )
                        : 'N/A'}
                    </span>
                  </div>
                  <div>
                    {currentLang === 'bn' ? 'ক্যাটাগরি :' : 'Category : '}{' '}
                    <span className="text-gray-600 dark:text-slate-200 font-semibold">
                      {getLocalizedText(property?.property_category) || 'N/A'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default BuyList
