import React from 'react'
import { useRentAndSellPageData } from '../../Hook/RentAndSellData'
import { useTranslation } from 'react-i18next'

import {
  FaBed,
  FaBath,
  FaRegHeart,
  FaMapMarkerAlt,
  FaStar,
} from 'react-icons/fa'
import { MdOutlineGridView } from 'react-icons/md'

const properties = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
    title: 'Serenity Condo Suite',
    location: '17, Grove Towers, New York, USA',
    price: '$21000',
    featured: true,
    isNew: true,
    rating: 5.0,
    reviews: 20,
    bedroom: 4,
    bath: 4,
    sqft: 350,
    listedOn: '16 Jan 2023',
    category: 'Apartment',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
    title: 'Loyal Apartment',
    location: '25, Willow Crest Apartment, USA',
    price: '$1940',
    featured: true,
    rating: 4.6,
    reviews: 36,
    bedroom: 2,
    bath: 2,
    sqft: 350,
    listedOn: '02 May 2025',
    category: 'Apartment',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994',
    title: 'Grand Villa House',
    location: '10, Oak Ridge Villa, USA',
    price: '$1370',
    featured: true,
    rating: 4.9,
    reviews: 25,
    bedroom: 4,
    bath: 3,
    sqft: 520,
    listedOn: '28 Apr 2025',
    category: 'Villa',
    avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1448630360428-65456885c650',
    title: 'Palm Cove Bungalows',
    location: '42, Pine Residency, Miami, USA',
    price: '$1370',
    rating: 4.8,
    reviews: 26,
    bedroom: 5,
    bath: 3,
    sqft: 700,
    listedOn: '16 Mar 2025',
    category: 'Bungalow',
    avatar: 'https://randomuser.me/api/portraits/men/41.jpg',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
    title: 'Blue Horizon Villa',
    location: '76, Golden Oaks, Dallas, USA',
    price: '$2000',
    rating: 4.9,
    reviews: 19,
    bedroom: 2,
    bath: 1,
    sqft: 400,
    listedOn: '08 Mar 2025',
    category: 'Villa',
    avatar: 'https://randomuser.me/api/portraits/women/56.jpg',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
    title: 'Wanderlust Lodge',
    location: '91, Birch Residences, Boston, USA',
    price: '$1950',
    rating: 4.7,
    reviews: 45,
    bedroom: 3,
    bath: 2,
    sqft: 550,
    listedOn: '25 Feb 2025',
    category: 'Lodge',
    avatar: 'https://randomuser.me/api/portraits/men/52.jpg',
  },
]

const RentAndHome = () => {
   const { i18n } = useTranslation()

   const currentLang = i18n.language

   const { data: rentAndSell, isLoading, isError } = useRentAndSellPageData()
   const allData=rentAndSell?.data || []
  return (
    <section className="bg-gray-50 py-10">
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
                    src={property.profileUrl}
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

                  <span className="font-medium text-gray-700">
                    4.5
                  </span>

                  <span>(4.5 Reviews)</span>
                </div>

                {/* Title */}
                <h2 className="mb-2 text-xl font-bold text-gray-900 transition group-hover:text-violet-600">
                  {property?.property_name?.[currentLang]}
                </h2>

                {/* Location */}
                <div className="mb-5 flex items-center gap-2 text-sm text-gray-500">
                  <FaMapMarkerAlt className="text-violet-500" />
                  <span>
                    {property.city[currentLang]} ,{property.state[currentLang]}{' '}
                    ,{property.country[currentLang]}
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
                    <span>{property.property_sqft} Sq Ft</span>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between border-t pt-4 text-sm text-gray-500">
                  <p>
                    <span className="font-semibold text-gray-800">
                      Listed on :
                    </span>{' '}
                    {new Date(
                      property.property_available_from
                    ).toLocaleDateString()}
                  </p>

                  <p>
                    <span className="font-semibold text-gray-800">
                      Category :
                    </span>{' '}
                    {property.property_category[currentLang]}
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

export default RentAndHome
