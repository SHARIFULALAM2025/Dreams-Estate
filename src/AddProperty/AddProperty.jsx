import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { countryData } from './Data'
import { useTranslation } from 'react-i18next'
import { uploadImage } from '../Components/ReusableFunction/UploadImage'
const AddProperty = () => {


  const { i18n } = useTranslation()
  const currentLang = i18n.language


  const [selectedCountry, setSelectedCountry] = useState('')
  const [selectedState, setSelectedState] = useState('')
  const [selectedCity, setSelectedCity] = useState('')

  const amenitiesList = [
    { key: 'air_conditioning', defaultChecked: true },
    { key: 'tv_cable', defaultChecked: false },
    { key: 'refrigerator', defaultChecked: true },
    { key: 'lawn', defaultChecked: true },
    { key: 'dryer', defaultChecked: false },
    { key: 'wifi', defaultChecked: false },
    { key: 'swimming_pool', defaultChecked: false },
    { key: 'outdoor_shower', defaultChecked: true },
    { key: 'laundry', defaultChecked: false },
    { key: 'barbeque', defaultChecked: false },
    { key: 'washer', defaultChecked: false },
    { key: 'microwave', defaultChecked: false },
    { key: 'gym', defaultChecked: true },
    { key: 'window_coverings', defaultChecked: false },
    { key: 'wide_open_spaces', defaultChecked: true },
    { key: 'parks', defaultChecked: false },
    { key: 'rooftop_gardens', defaultChecked: true },
    { key: 'billiards_table', defaultChecked: false },
    { key: 'clubhouse', defaultChecked: true },
    { key: 'spa', defaultChecked: false },
    { key: 'valet_trash', defaultChecked: false },
    { key: 'sporting_facilities', defaultChecked: true },
  ]
  const amenitiesMap = {
    air_conditioning: {
      en: 'Air Conditioning',
      bn: 'এয়ার কন্ডিশনার',
    },
    tv_cable: {
      en: 'TV Cable',
      bn: 'টিভি কেবল',
    },
    refrigerator: {
      en: 'Refrigerator',
      bn: 'ফ্রিজ',
    },
    lawn: {
      en: 'Lawn',
      bn: 'লন',
    },
    dryer: {
      en: 'Dryer',
      bn: 'ড্রায়ার',
    },
    wifi: {
      en: 'WiFi',
      bn: 'ওয়াইফাই',
    },
    swimming_pool: {
      en: 'Swimming Pool',
      bn: 'সুইমিং পুল',
    },
    outdoor_shower: {
      en: 'Outdoor Shower',
      bn: 'আউটডোর শাওয়ার',
    },
    laundry: {
      en: 'Laundry',
      bn: 'লন্ড্রি',
    },
    barbeque: {
      en: 'Barbeque',
      bn: 'বারবিকিউ',
    },
    washer: {
      en: 'Washer',
      bn: 'ওয়াশার',
    },
    microwave: {
      en: 'Microwave',
      bn: 'মাইক্রোওয়েভ',
    },
    gym: {
      en: 'Gym',
      bn: 'জিম',
    },
    window_coverings: {
      en: 'Window Coverings',
      bn: 'পর্দা',
    },
    wide_open_spaces: {
      en: 'Wide Open Spaces',
      bn: 'খোলা জায়গা',
    },
    parks: {
      en: 'Parks',
      bn: 'পার্ক',
    },
    rooftop_gardens: {
      en: 'Rooftop Gardens',
      bn: 'ছাদ বাগান',
    },
    billiards_table: {
      en: 'Billiards Table',
      bn: 'বিলিয়ার্ড টেবিল',
    },
    clubhouse: {
      en: 'Clubhouse',
      bn: 'ক্লাবহাউস',
    },
    spa: {
      en: 'Spa',
      bn: 'স্পা',
    },
    valet_trash: {
      en: 'Valet Trash',
      bn: 'ভ্যালেট ট্র্যাশ',
    },
    sporting_facilities: {
      en: 'Sporting Facilities',
      bn: 'খেলার সুবিধা',
    },
  }
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      amenities: amenitiesList
        .filter((item) => item.defaultChecked)
        .map((item) => item.label),
    },
  })



  // Find selected country object
  const selectedCountryData = countryData.find(
    (c) => c.countryId === selectedCountry
  )

  const availableStates = selectedCountryData?.states || []

  // Find selected state object
  const selectedStateData = availableStates.find(
    (s) => s.stateId === selectedState
  )

  const availableCities = selectedStateData?.upazilas || []

  // Country Change
  const handleCountryChange = (e) => {
    const value = e.target.value

    setSelectedCountry(value)
    setSelectedState('')
    setSelectedCity('')

    setValue('country', value)
    setValue('state', '')
    setValue('city', '')
  }

  // State Change
  const handleStateChange = (e) => {
    const value = e.target.value

    setSelectedState(value)
    setSelectedCity('')

    setValue('state', value)
    setValue('city', '')
  }

  // City Change
  const handleCityChange = (e) => {
    const value = e.target.value

    setSelectedCity(value)
    setValue('city', value)
  }


  const [activeTab, setActiveTab] = useState('Property Information')

  const tabs = [
    'Property Information',
    'Property Details',
    'Amenities',
    'Documents',
    'Gallery',
    'Videos',
    'Description',

    'Location',
  ]







const handelData = async (data) => {
  try {
    // Find country
    const countryObj = countryData.find(
      (country) => country.countryId === selectedCountry
    )

    // Find state
    const stateObj = countryObj?.states?.find(
      (state) => state.stateId === selectedState
    )

    // Find city/upazila
    const cityObj = stateObj?.upazilas?.find((city) => city.id === selectedCity)

    // Upload images
    let uploadedLinks = []

    if (data.attachment && data.attachment.length > 0) {
      for (const file of data.attachment) {
        const url = await uploadImage(file)

        if (url) {
          uploadedLinks.push(url)
        }
      }
    }

    // Final Data
    const finalData = {
      ...data,

      // uploaded image urls
      attachment: uploadedLinks,

      // location data
      country:
        currentLang === 'bn'
          ? countryObj?.countryNameBn
          : countryObj?.countryNameEn,

      state:
        currentLang === 'bn' ? stateObj?.stateNameBn : stateObj?.stateNameEn,

      city: currentLang === 'bn' ? cityObj?.nameBn : cityObj?.nameEn,
    }

    console.log(finalData)

    // API call here
    // await axios.post('/api/property', finalData)
  } catch (error) {
    console.error('Upload failed:', error)
  }
}














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
          <form onSubmit={handleSubmit(handelData)} className="space-y-16">
            {/* SECTION 1: Property Information */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-4 space-y-2">
                <h3 className="text-xl font-black text-slate-900 dark:text-white">
                  {currentLang === 'bn'
                    ? 'সম্পত্তির তথ্য'
                    : ' Property Information'}
                </h3>
                <p className="text-sm text-slate-400 dark:text-white leading-relaxed">
                  {currentLang === 'bn'
                    ? 'আকার, ধরন, মূল্য এবং আরামদায়ক জীবনযাপন বা বুদ্ধিদীপ্ত বিনিয়োগের জন্য উপযুক্ত বিশেষ বৈশিষ্ট্যগুলোর মতো প্রয়োজনীয় বিবরণগুলো জেনে নিন।'
                    : 'Explore essential details like size, type, pricing, and standout features perfect for comfortable living or smart investment.'}
                </p>
              </div>

              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50/30 dark:bg-slate-900/40 p-6 rounded-2xl border border-slate-100/70 dark:border-slate-800/60">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                    {currentLang === 'bn' ? 'সম্পত্তির নাম' : ' Property Name'}
                  </label>
                  <input
                    {...register('propertyName', { required: true })}
                    type="text"
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white"
                  />
                  {errors.propertyName && (
                    <span className="text-red-600">
                      This field is required!
                    </span>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                    {currentLang === 'bn' ? 'সম্পত্তির ধরণ' : 'Property Type'}
                  </label>
                  <select
                    {...register('propertyType', { required: true })}
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white"
                  >
                    <option>
                      {currentLang === 'bn' ? 'নির্বাচন করুন' : 'Select'}
                    </option>
                    <option value={currentLang === 'bn' ? 'কেনা' : 'Buy'}>
                      {currentLang === 'bn' ? 'কেনা' : 'Buy'}
                    </option>
                    <option value="Sell">
                      {currentLang === 'bn' ? 'বিক্রি' : 'Sell'}
                    </option>
                  </select>
                  {errors.propertyType && (
                    <span className="text-red-600">
                      This field is required!
                    </span>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                    {currentLang === 'bn'
                      ? 'সম্পত্তির ক্যাটাগরি'
                      : 'Property Category'}
                  </label>
                  <select
                    {...register('propertyCategory', {
                      required: true,
                    })}
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white"
                  >
                    <option value="">
                      {currentLang === 'bn' ? 'নির্বাচন করুন' : 'Select'}
                    </option>

                    <option value="apartment">
                      {currentLang === 'bn' ? 'অ্যাপার্টমেন্ট' : 'Apartment'}
                    </option>

                    <option value="villa">
                      {currentLang === 'bn' ? 'ভিলা' : 'Villa'}
                    </option>

                    <option value="condo">
                      {currentLang === 'bn' ? 'কন্ডো' : 'Condo'}
                    </option>

                    <option value="residency">
                      {currentLang === 'bn' ? 'রেসিডেন্সি' : 'Residency'}
                    </option>
                  </select>
                  {errors.propertyCategory && (
                    <span className="text-red-600">
                      This field is required!
                    </span>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                    {currentLang === 'bn' ? 'পেমেন্টের ধরন' : 'Currency Type'}
                  </label>

                  <select
                    {...register('propertyCurrency', {
                      required: true,
                    })}
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white"
                  >
                    <option value="">
                      {currentLang === 'bn' ? 'নির্বাচন করুন' : 'Select'}
                    </option>

                    <option value="cash">
                      {currentLang === 'bn' ? 'নগদ' : 'Cash'}
                    </option>

                    <option value="bank_transfer">
                      {currentLang === 'bn'
                        ? 'ব্যাংক ট্রান্সফার'
                        : 'Bank Transfer'}
                    </option>

                    <option value="bkash">bKash</option>
                  </select>

                  {errors.propertyCurrency && (
                    <span className="text-red-600">
                      {currentLang === 'bn'
                        ? 'এই ফিল্ডটি আবশ্যক!'
                        : 'This field is required!'}
                    </span>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                    {currentLang === 'bn' ? 'বিক্রয় মূল্য' : 'Sale Price'}
                  </label>
                  <input
                    {...register('propertyPriceSale', { required: true })}
                    type="text"
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white"
                  />
                  {errors.propertyPrice && (
                    <span className="text-red-600">
                      This field is required!
                    </span>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                    {currentLang === 'bn' ? 'অফার মূল্য' : 'Offer Price'}
                  </label>
                  <input
                    {...register('propertyOfferPrice', { required: true })}
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
                  {currentLang === 'bn'
                    ? 'সম্পত্তির বিস্তারিত'
                    : 'Property Details'}
                </h3>
                <p className="text-sm text-slate-400 dark:text-slate-500 leading-relaxed">
                  {currentLang === 'bn'
                    ? 'এই সম্পত্তির গুণমান, কাঠামো এবং সামগ্রিক নকশা নির্ধারণ করে এমন গুরুত্বপূর্ণ স্থান, আয়তন ও নির্মাণ সামগ্রীর তথ্য দিন।'
                    : `Get key spaces including layout, dimensions, and materials that define this property's quality, structure, and overall design.`}
                </p>
              </div>

              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-50/30 dark:bg-slate-900/40 p-6 rounded-2xl border border-slate-100/70 dark:border-slate-800/60">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                    {currentLang === 'bn' ? 'সম্পত্তির আইডি' : 'Property ID'}
                  </label>
                  <input
                    {...register('propertyPropertyId', { required: true })}
                    type="number"
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                    {currentLang === 'bn'
                      ? 'প্রতি বর্গফুট মূল্য'
                      : 'Price Per Sqft'}
                  </label>
                  <input
                    {...register('propertyPropertyId', { required: true })}
                    type="number"
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                    {currentLang === 'bn' ? 'কাঠামোর ধরন' : 'Structure Type'}
                  </label>
                  <select
                    {...register('propertyStructureType', { required: true })}
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white"
                  >
                    <option value="">
                      {currentLang === 'bn' ? 'নির্বাচন করুন' : 'Select'}
                    </option>

                    <option value="square">
                      {currentLang === 'bn' ? 'বর্গাকার' : 'Square'}
                    </option>

                    <option value="rectangle">
                      {currentLang === 'bn' ? 'আয়তাকার' : 'Rectangle'}
                    </option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                    {currentLang === 'bn'
                      ? 'বেডরুমের সংখ্যা'
                      : 'No of Bedrooms'}
                  </label>
                  <input
                    {...register('propertyBedrooms', { required: true })}
                    type="number"
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                    {currentLang === 'bn'
                      ? 'বাথরুমের সংখ্যা'
                      : 'No of Bathrooms'}
                  </label>
                  <input
                    type="number"
                    {...register('propertyBathrooms', { required: true })}
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                    {currentLang === 'bn' ? 'বর্গফুট' : 'Sqft'}
                  </label>
                  <input
                    type="number"
                    {...register('propertySqft', { required: true })}
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                    {currentLang === 'bn' ? 'পার্কিং' : 'Parking'}
                  </label>
                  <input
                    {...register('propertyParking', { required: true })}
                    type="number"
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                    {currentLang === 'bn' ? 'বারান্দা' : 'Balcony'}
                  </label>
                  <select
                    {...register('propertyBalcony', { required: true })}
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white"
                  >
                    <option value="">
                      {currentLang === 'bn' ? 'নির্বাচন করুন' : 'Select'}
                    </option>

                    <option value="yes">
                      {currentLang === 'bn' ? 'হ্যাঁ' : 'Yes'}
                    </option>

                    <option value="no">
                      {currentLang === 'bn' ? 'না' : 'No'}
                    </option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                    {currentLang === 'bn' ? 'তলা' : 'Floor'}
                  </label>
                  <input
                    {...register('propertyFloor', { required: true })}
                    type="number"
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                    {currentLang === 'bn' ? 'ওয়ার্ডরোব' : 'Wardrobe'}
                  </label>
                  <input
                    {...register('propertyWardrobe', { required: true })}
                    type="number"
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                    {currentLang === 'bn' ? 'টিভি' : 'TV'}
                  </label>
                  <input
                    {...register('propertyTV', { required: true })}
                    type="number"
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                    {currentLang === 'bn' ? 'পানি পরিশোধক' : 'Water Purifier'}
                  </label>
                  <input
                    {...register('propertyWaterPurifier', { required: true })}
                    type="number"
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                    {currentLang === 'bn' ? 'মাইক্রোওয়েভ' : 'Microwave'}
                  </label>
                  <input
                    {...register('propertyMicrowave', { required: true })}
                    type="number"
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                    {currentLang === 'bn' ? 'এয়ার কন্ডিশনার' : 'AC'}
                  </label>
                  <input
                    {...register('propertyAC', { required: true })}
                    type="number"
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                    {currentLang === 'bn' ? 'ফ্রিজ' : 'Fridge'}
                  </label>
                  <input
                    {...register('propertyFridge', { required: true })}
                    type="number"
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                    {currentLang === 'bn' ? 'ওয়ার্ডরোব' : 'Wardrobe'}
                  </label>
                  <input
                    {...register('propertyWardrobe', { required: true })}
                    type="number"
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                    {currentLang === 'bn'
                      ? 'গ্যারেজের আকার (গাড়ি সংখ্যা)'
                      : 'Garage Size'}
                  </label>
                  <input
                    {...register('propertyGarageSize', { required: true })}
                    type="number"
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white"
                  />
                </div>

                {/* Date Input 1 */}
                <div className="relative">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                    {currentLang === 'bn'
                      ? 'কবে থেকে পাওয়া যাবে'
                      : 'Available From'}
                  </label>
                  <div className="relative">
                    <input
                      {...register('propertyAvailableFrom', { required: true })}
                      type="date"
                      placeholder="dd/mm/yyyy"
                      className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                    {currentLang === 'bn' ? 'পর্দা' : 'Curtains'}
                  </label>
                  <select
                    {...register('propertyAvailableCurtains', {
                      required: true,
                    })}
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white"
                  >
                    <option value="">
                      {currentLang === 'bn' ? 'নির্বাচন করুন' : 'Select'}
                    </option>

                    <option value="yes">
                      {currentLang === 'bn' ? 'হ্যাঁ' : 'Yes'}
                    </option>

                    <option value="no">
                      {currentLang === 'bn' ? 'না' : 'No'}
                    </option>
                  </select>
                </div>

                {/* Date Input 2 */}
                <div className="relative md:col-span-2">
                  <div className="max-w-[340px]">
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                      {currentLang === 'bn'
                        ? 'নির্মাণ সাল'
                        : 'Year Constructed'}
                    </label>
                    <div className="relative">
                      <input
                        {...register('propertyYearConstructed', {
                          required: true,
                        })}
                        type="date"
                        placeholder="dd/mm/yyyy"
                        className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 3: Amenities */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-slate-100 dark:border-slate-800 pt-12">
              <div className="lg:col-span-4 space-y-2">
                <h3 className="text-xl font-black text-slate-900 dark:text-white">
                  {currentLang === 'bn' ? 'সুবিধাসমূহ' : 'Amenities'}
                </h3>
                <p className="text-sm text-slate-400 dark:text-slate-500 leading-relaxed">
                  {currentLang === 'bn'
                    ? 'পুল, জিম, পার্কিং, নিরাপত্তা সহ প্রিমিয়াম সুবিধা উপভোগ করুন—যা আধুনিক ও আরামদায়ক দৈনন্দিন জীবনের জন্য ডিজাইন করা।'
                    : 'Enjoy premium features like pool, gym, parking, security, and more—all designed for modern, comfortable everyday living.'}
                </p>
              </div>

              {/* Custom 3-Column Grid for Checkboxes */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-6 p-2">
                {amenitiesList.map((item) => (
                  <label key={item.key} className="dark:text-white text-black ">
                    <input
                      type="checkbox"
                      value={item.key}
                      defaultChecked={item.defaultChecked}
                      {...register('amenities')}
                    />

                    {amenitiesMap[item.key]?.[currentLang]}
                  </label>
                ))}
              </div>
            </div>
            {/* SECTION 4: about */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-slate-100 dark:border-slate-800 pt-12">
              <div className="lg:col-span-4 space-y-2">
                <h3 className="text-xl font-black text-slate-900 dark:text-white">
                  {currentLang === 'bn'
                    ? 'সম্পত্তি সম্পর্কে'
                    : 'About Property'}
                </h3>
                <p className="text-sm text-slate-400 dark:text-slate-500 leading-relaxed">
                  {currentLang === 'bn'
                    ? 'নান্দনিক নকশা ও কার্যকারিতার সমন্বয়ে তৈরি একটি সুন্দর বাড়ি, যা আধুনিক জীবনযাপন এবং শান্তিপূর্ণ দীর্ঘমেয়াদি বসবাসের জন্য আদর্শ।'
                    : 'A beautifully designed home combining style and function, ideal for modern lifestyles and peaceful, long-term living.'}
                </p>
              </div>

              <div className="lg:col-span-8 bg-slate-50/30 dark:bg-slate-900/40 p-6 rounded-2xl border border-slate-100/70 dark:border-slate-800/60">
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                  {currentLang === 'bn'
                    ? 'সম্পত্তি সম্পর্কে'
                    : 'About the Property'}
                </label>
                <textarea
                  {...register('aboutProperty')}
                  placeholder="About Property"
                  rows={5}
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white resize-none"
                ></textarea>
              </div>
            </div>

            {/* SECTION 5: Property Gallery */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-slate-100 dark:border-slate-800 pt-12">
              <div className="lg:col-span-4 space-y-2">
                <h3 className="text-xl font-black text-slate-900 dark:text-white">
                  {currentLang === 'bn'
                    ? 'সম্পত্তির গ্যালারি'
                    : 'Property Gallery'}
                </h3>
                <p className="text-sm text-slate-400 dark:text-slate-500 leading-relaxed">
                  {currentLang === 'bn'
                    ? 'ইন্টেরিয়র ও এক্সটেরিয়রের উচ্চ মানের ছবি দেখুন, যাতে সম্পত্তির নকশা ও পরিবেশের বাস্তব অনুভূতি পাওয়া যায়।'
                    : 'Browse high-resolution images of interiors and exteriors to get a true feel of the design and atmosphere.'}
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
                  {currentLang === 'bn' ? 'ছবি' : 'Photo'}
                </label>
                <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-1.5">
                  <input
                    type="file"
                    multiple
                    {...register('attachment')}
                    className="bg-[#0F172A] hover:bg-slate-800 dark:bg-slate-700 text-white font-bold text-xs px-4 py-2.5 rounded-lg shrink-0 transition-colors"
                  />

                  <span className="text-xs text-slate-400">
                    6 Photos Selected
                  </span>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-400 space-y-1 pl-1">
                  <li>
                    {currentLang === 'bn'
                      ? 'ছবির সর্বোচ্চ আকার ৮ এমবি। ফরম্যাট: jpeg, jpg। মূল ছবিটি প্রথমে দিন।'
                      : 'The maximum photo size is 8 MB. Formats: jpeg, jpg. Put main picture first.'}
                  </li>
                  <li>
                    {currentLang === 'bn'
                      ? 'সর্বোচ্চ ১০টি ছবি আপলোড করা যাবে।'
                      : 'Maximum number of files allowed is 10.'}
                  </li>
                </ul>
                <div className="flex items-center gap-1.5 text-xs text-emerald-500 font-bold pt-1">
                  <span>✓</span>{' '}
                  {currentLang === 'bn'
                    ? 'ছবি সফলভাবে আপলোড হয়েছে'
                    : 'Photos Uploaded Successfully'}
                </div>
              </div>
            </div>

            {/* SECTION 6: Property Video */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-slate-100 dark:border-slate-800 pt-12">
              <div className="lg:col-span-4 space-y-2">
                <h3 className="text-xl font-black text-slate-900 dark:text-white">
                  {currentLang === 'bn' ? 'সম্পত্তির ভিডিও' : 'Property Video'}
                </h3>
                <p className="text-sm text-slate-400 dark:text-slate-500 leading-relaxed">
                  {currentLang === 'bn'
                    ? 'ইমারসিভ প্রপার্টি ভিডিও দেখুন, যা প্রতিটি দিক থেকে স্থান, চলাচলের বিন্যাস, আলো এবং পরিবেশের বাস্তব অভিজ্ঞতা দেয়।'
                    : 'Watch immersive property videos offering a real-time view of space, flow, lighting, and ambiance from every angle.'}
                </p>
              </div>

              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50/30 dark:bg-slate-900/40 p-6 rounded-2xl border border-slate-100/70 dark:border-slate-800/60">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                    {currentLang === 'bn' ? 'ভিডিও এমবেড করুন' : 'Embed Video'}
                  </label>
                  <select
                    {...register('embedVideo', { required: true })}
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white"
                  >
                    <option value="">
                      {currentLang === 'bn' ? 'নির্বাচন করুন' : 'Select'}
                    </option>

                    <option value="youtube">YouTube</option>

                    <option value="vimeo">Vimeo</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                    {currentLang === 'bn' ? 'ভিডিও লিংক' : 'Video Link'}
                  </label>
                  <input
                    {...register('VideoLink')}
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
                  {currentLang === 'bn' ? 'বর্ণনা' : 'Description'}
                </h3>
                <p className="text-sm text-slate-400 dark:text-slate-500 leading-relaxed">
                  {currentLang === 'bn'
                    ? 'স্টাইল ও কার্যকারিতার সমন্বয়ে তৈরি একটি সুন্দর বাড়ি, যা আধুনিক জীবনযাপন এবং শান্তিপূর্ণ দীর্ঘমেয়াদি বসবাসের জন্য আদর্শ।'
                    : 'A beautifully designed home combining style and function, ideal for modern lifestyles and peaceful, long-term living.'}
                </p>
              </div>

              <div className="lg:col-span-8 bg-slate-50/30 dark:bg-slate-900/40 p-6 rounded-2xl border border-slate-100/70 dark:border-slate-800/60">
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                  {currentLang === 'bn'
                    ? 'সম্পত্তির বিবরণ'
                    : 'Property Description'}
                </label>
                <textarea
                  {...register('description')}
                  rows={5}
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white resize-none"
                ></textarea>
              </div>
            </div>

            {/* SECTION 9: Property Location */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-slate-100 dark:border-slate-800 pt-12">
              <div className="lg:col-span-4 space-y-2">
                <h3 className="text-xl font-black text-slate-900 dark:text-white">
                  {currentLang === 'bn'
                    ? 'সম্পত্তির অবস্থান'
                    : 'Property Location'}
                </h3>
                <p className="text-sm text-slate-400 dark:text-slate-500 leading-relaxed">
                  {currentLang === 'bn'
                    ? 'স্কুল, দোকান ও যাতায়াত ব্যবস্থার কাছাকাছি কেন্দ্রীয় স্থানে অবস্থিত—যা দৈনন্দিন সুবিধা এবং দীর্ঘমেয়াদে ভালো সম্পত্তির মূল্য নিশ্চিত করে।'
                    : 'Centrally located near schools, shops, and transport—offering everyday convenience and strong long-term property value.'}
                </p>
              </div>

              <div className="lg:col-span-8 bg-slate-50/30 dark:bg-slate-900/40 p-6 rounded-2xl border border-slate-100/70 dark:border-slate-800/60 space-y-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                    {currentLang === 'bn' ? 'ঠিকানা' : 'Address'}
                  </label>
                  <input
                    {...register('address', { required: true })}
                    type="text"
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white"
                  />
                </div>

                {/* 1. Country Dropdown */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                    {currentLang === 'bn' ? 'দেশ' : 'Country'}
                  </label>
                  <select
                    value={selectedCountry}
                    onChange={handleCountryChange}
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white"
                  >
                    <option value="">
                      {currentLang === 'bn'
                        ? 'দেশ নির্বাচন করুন'
                        : 'Select Country'}
                    </option>
                    {countryData.map((c) => (
                      <option key={c.countryId} value={c.countryId}>
                        {currentLang === 'bn'
                          ? c.countryNameBn
                          : c.countryNameEn}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 2. State / Division Dropdown */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                    {currentLang === 'bn'
                      ? 'রাজ্য / বিভাগ'
                      : 'State / Division'}
                  </label>
                  <select
                    value={selectedState}
                    onChange={handleStateChange}
                    disabled={!selectedCountry}
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white disabled:opacity-50"
                  >
                    <option value="">
                      {currentLang === 'bn'
                        ? 'রাজ্য নির্বাচন করুন'
                        : 'Select State'}
                    </option>
                    {availableStates.map((s) => (
                      <option key={s.stateId} value={s.stateId}>
                        {currentLang === 'bn' ? s.stateNameBn : s.stateNameEn}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 3. City / Upazila Dropdown */}
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                    {currentLang === 'bn' ? 'শহর / উপজেলা' : 'City / Upazila'}
                  </label>
                  <select
                    value={selectedCity}
                    onChange={handleCityChange}
                    disabled={!selectedState}
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white disabled:opacity-50"
                  >
                    <option value="">
                      {currentLang === 'bn'
                        ? 'শহর নির্বাচন করুন'
                        : 'Select City'}
                    </option>

                    {availableCities.map((city) => (
                      <option key={city.id} value={city.id}>
                        {currentLang === 'bn' ? city.nameBn : city.nameEn}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                      {currentLang === 'bn' ? 'প্রতীকী স্থান' : 'Landmark'}
                    </label>
                    <input
                      type="text"
                      className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                      {currentLang === 'bn' ? 'জিপ কোড' : 'Zipcode'}
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
                {currentLang === 'bn' ? 'রিসেট' : 'Reset'}
              </button>
              <button
                type="submit"
                className="px-6 py-3 bg-[#0F172A] dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white font-bold rounded-xl shadow-md transition-all active:scale-95 text-sm"
              >
                {currentLang === 'bn' ? 'প্রপার্টি যোগ করুন' : 'Add Property'}
              </button>
            </div>
          </form>
        </div>
      </div>
    )

}
export default AddProperty
