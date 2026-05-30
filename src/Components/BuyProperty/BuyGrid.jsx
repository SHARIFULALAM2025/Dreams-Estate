import React from 'react'
import { useBuyPageData } from '../Hook/Buy'
import { useTranslation } from 'react-i18next'
import { MdOutlineGridView } from 'react-icons/md'
import { FaBath, FaBed, FaRegHeart, FaStar } from 'react-icons/fa6'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { Link } from 'react-router'

const BuyGrid = () => {
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

  // ১. এপিআই ডেটা লোড হওয়ার সময়ের সেফটি গার্ড
  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20 bg-white dark:bg-slate-950">
        <p className="text-lg font-semibold text-slate-600 dark:text-slate-400">
          Loading Properties...
        </p>
      </div>
    )
  }

  // ২. এপিআই এরর বা ডেটা না থাকলে সেফটি গার্ড
  if (isError || !allData.length) {
    return (
      <div className="flex justify-center items-center py-20 bg-white dark:bg-slate-950">
        <p className="text-lg font-semibold text-rose-500">
          No properties found or API error!
        </p>
      </div>
    )
  }

  return (
    <section className="bg-white dark:bg-slate-950 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {allData?.map((property) => (
            <div
              key={property.id}
              className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={property?.attachment?.[0]}
                  alt={getLocalizedText(property?.property_name) || 'Property'}
                  className="h-[260px] w-full object-cover transition duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30" />

                {/* Top badges */}
                <div className="absolute left-4 top-4 flex items-center gap-2">
                  {property?.isNew && (
                    <span className="rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
                      New
                    </span>
                  )}

                  {property?.featured && (
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
                    {property?.price}
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
              <div className="p-5">
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
                  to={`/propertyDetails/${property?.id}`}
                  className="mb-2 block text-xl font-bold text-gray-900 transition group-hover:text-violet-600"
                >
                  {getLocalizedText(property?.property_name)}
                </Link>

                {/* Location */}
                <div className="mb-5 flex items-center gap-2 text-sm text-gray-500">
                  <FaMapMarkerAlt className="text-violet-500" />
                  <span>
                    {getLocalizedText(property?.city)} ,{' '}
                    {getLocalizedText(property?.state)} ,{' '}
                    {getLocalizedText(property?.country)}
                  </span>
                </div>

                {/* Info */}
                <div className="mb-5 grid grid-cols-3 gap-2 rounded-lg bg-gray-100 p-3 text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <FaBed className="text-violet-500" />
                    <span>{property?.property_bedrooms} Bedroom</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FaBath className="text-violet-500" />
                    <span>{property?.property_bathrooms} Bath</span>
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
                    {property?.property_available_from
                      ? new Date(
                          property.property_available_from
                        ).toLocaleDateString()
                      : ''}
                  </p>

                  <p>
                    <span className="font-semibold text-gray-800">
                      Category :
                    </span>{' '}
                    {getLocalizedText(property?.property_category)}
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

export default BuyGrid
