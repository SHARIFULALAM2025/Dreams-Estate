import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import {
  FaBed, FaBath, FaCar, FaRegCompass, FaBuilding, FaTv, FaWind,
  FaDumbbell, FaShieldHalved, FaUsers, FaLightbulb,
  FaFileArrowDown, FaRegEye, FaChevronDown, FaChevronUp, FaStar,
  FaRegThumbsUp, FaRegHeart,
  FaCalendarDays,
} from 'react-icons/fa6';
import { MdOutlineBalcony, MdOutlineWaterDrop, MdOutlineKitchen } from 'react-icons/md';
import { FaCheckCircle, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP, FaRegComments, FaRegFrown, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
const PropertyDetails = () => {
  const { propertyId } = useParams();
  const { i18n } = useTranslation();
  const currentLang = i18n.language; // Ready for conditional RTL layouts or language-specific rendering
   const {
     data: property,
     isLoading,
     isError,
     error,
   } = useQuery({
     queryKey: ['propertyDetails', propertyId],
     queryFn: async () => {
       const { data } = await axios.get(
         `${import.meta.env.VITE_Backend_url}/api/property/${propertyId}`
       )
       return data
     },
     enabled: !!propertyId,
     staleTime: 1000 * 60 * 10,
   })
  //
  console.log(property)

    const [activeTab, setActiveTab] = useState('request')
    const [selectedDay, setSelectedDay] = useState(0)

    const daysData = [
      { d: 'Mon', n: '21' },
      { d: 'Tue', n: '22' },
      { d: 'Wed', n: '23' },
      { d: 'Thu', n: '24' },
      { d: 'Fri', n: '25' },
    ]

  const [activeFaq, setActiveFaq] = useState(null);

  // Structural feature specifications
 const propertyFeatures = [
   {
     icon: <FaBed />,
     label: {
       en: 'Bedrooms',
       bn: 'বেডরুম',
     },
     value: `${property?.data?.property_bedrooms}`,
   },
   {
     icon: <FaBath />,
     label: {
       en: 'Bathrooms',
       bn: 'বাথরুম',
     },
     value: `${property?.data?.property_bathrooms}`,
   },
   {
     icon: <FaCar />,
     label: {
       en: 'Parking',
       bn: 'পার্কিং',
     },
     value: `${property?.data?.property_parking}`,
   },
   {
     icon: <MdOutlineBalcony className="text-xl" />,
     label: {
       en: 'Balcony',
       bn: 'বারান্দা',
     },
     value: `${property?.data?.property_balcony}`,
   },
   {
     icon: <FaBuilding />,
     label: {
       en: 'Floor',
       bn: 'তলা',
     },
     value: `${property?.data?.property_floor}`,
   },
   {
     icon: <FaFileArrowDown />,
     label: {
       en: 'Wardrobe',
       bn: 'ওয়ারড্রোব',
     },
     value: `${property?.data?.property_wardrobe}`,
   },
   {
     icon: <FaTv />,
     label: {
       en: 'TV',
       bn: 'টিভি',
     },
     value: `${property?.data?.property_tv}`,
   },
   {
     icon: <MdOutlineWaterDrop className="text-xl" />,
     label: {
       en: 'Water Purifier',
       bn: 'পানির পিউরিফায়ার',
     },
     value: `${property?.data?.property_water_purifier}`,
   },
   {
     icon: <MdOutlineKitchen className="text-xl" />,
     label: {
       en: 'Microwave',
       bn: 'মাইক্রোওয়েভ',
     },
     value: `${property?.data?.property_microwave}`,
   },
   {
     icon: <FaWind />,
     label: {
       en: 'AC',
       bn: 'এসি',
     },
     value: `${property?.data?.property_ac}`,
   },
   {
     icon: <FaBuilding />,
     label: {
       en: 'Fridge',
       bn: 'ফ্রিজ',
     },
     value: `${property?.data?.property_fridge}`,
   },
   {
     icon: <FaRegCompass />,
     label: {
       en: 'Curtains',
       bn: 'পর্দা',
     },
     value: `${property?.data?.property_available_curtains}`,
   },
 ]


  const faqs = [
    {
      q: {
        en: 'Does offer free cancellation for a full refund?',
        bn: 'সম্পূর্ণ রিফান্ডসহ বিনামূল্যে বুকিং বাতিলের সুবিধা আছে কি?',
      },
      a: {
        en: 'Cancellation terms are dependent on seasonal baseline matrixes and initial contractual deposits.',
        bn: 'বুকিং বাতিলের শর্তাবলী মৌসুমী ভিত্তি এবং প্রাথমিক চুক্তির জমার ওপর নির্ভরশীল।',
      },
    },
    {
      q: {
        en: 'Is there a pool?',
        bn: 'এখানে কি সুইমিং পুল আছে?',
      },
      a: {
        en: 'Yes, access to a fully maintained community swimming pool is included.',
        bn: 'হ্যাঁ, সম্পূর্ণ রক্ষণাবেক্ষণকৃত একটি কমিউনিটি সুইমিং পুল ব্যবহারের সুবিধা এর অন্তর্ভুক্ত রয়েছে।',
      },
    },
    {
      q: {
        en: 'Are pets allowed?',
        bn: 'গৃহপালিত পশু-পাখি (Pets) রাখার অনুমতি আছে কি?',
      },
      a: {
        en: 'Standard domestic pets under 25lbs are explicitly permitted.',
        bn: '২৫ পাউন্ডের কম ওজনের সাধারণ গৃহপালিত পশু রাখার স্পষ্ট অনুমতি রয়েছে।',
      },
    },
    {
      q: {
        en: 'Is airport shuttle service offered?',
        bn: 'এয়ারপোর্ট শাটল (যাতায়াত) সার্ভিস দেওয়া হয় কি?',
      },
      a: {
        en: 'Private logistical shuttles can be arranged via the concierge desk.',
        bn: 'কনসিয়ার্জ ডেস্কের (Concierge desk) মাধ্যমে ব্যক্তিগত শাটল সার্ভিসের ব্যবস্থা করা যেতে পারে।',
      },
    },
    {
      q: {
        en: 'What are the check-in and check-out times?',
        bn: 'চেক-ইন এবং চেক-আউটের সময় কখন?',
      },
      a: {
        en: 'Standard check-in begins at 14:00, check-out concludes by 11:00.',
        bn: 'সাধারণত চেক-ইন দুপুর ২:০০ টা (১৪:০০) থেকে শুরু হয় এবং চেক-আউট সকাল ১১:০০ টার মধ্যে সম্পন্ন করতে হয়।',
      },
    },
  ]

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 font-sans antialiased">
      {/* Hidden debugging or analytical track tag */}
      <span className="hidden">
        Viewing Dynamic Asset Reference: {propertyId}
      </span>

      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* PRIMARY VIEWPORT: Analytics & Structural Layout Data */}
        <div className="lg:col-span-2 space-y-6">
          {/* Media Presentation Display */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            <div className="relative mb-3 h-[400px] bg-gray-200 rounded-lg overflow-hidden">
              <img
                src={property?.data?.attachment[0]}
                alt="Property Asset Visualizer"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                  🔥 Trending
                </span>
                <span className="bg-orange-500 text-white text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                  ⭐ Featured
                </span>
              </div>
              <div className="absolute top-4 right-4 bg-black/60 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm">
                Total Views: 45
              </div>
            </div>

            {/* Gallery Track Carousel Matrix */}
            <div className="grid grid-cols-5 gap-2">
              {property?.data?.attachment?.map((item, index) => (
                <div
                  key={index}
                  className="h-20 bg-gray-100 rounded-md overflow-hidden border border-gray-200 hover:border-indigo-500 transition cursor-pointer"
                >
                  <img
                    src={item}
                    alt="Interior Segment View"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Asset Narrative Specification */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold border-b pb-3 mb-4 text-gray-900">
              Description
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              {property?.data?.description[currentLang]}
            </p>
            <button className="text-indigo-600 text-xs font-semibold mt-2 hover:underline">
              Read More ▾
            </button>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            {/* Section Heading */}
            <h3 className="text-sm font-bold border-b pb-2.5 mb-4 text-gray-900">
              Video
            </h3>

            {/* Video Player Container */}
            <div className="w-full aspect-video rounded-lg overflow-hidden relative group bg-gray-900 shadow-inner border border-gray-200/60">
              {(() => {
                const rawLink = property?.data?.video_link
                let embedLink = ''

                if (rawLink) {
                  // যদি লিঙ্কটি অলরেডি embed করা থাকে তবে সেটাই থাকবে, নতুবা কনভার্ট হবে
                  if (rawLink.includes('embed/')) {
                    embedLink = rawLink
                  } else {
                    // regular watch link অথবা short link (youtu.be) থেকে ID বের করার নিয়ম
                    const regExp =
                      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
                    const match = rawLink.match(regExp)

                    if (match && match[2].length === 11) {
                      embedLink = `https://www.youtube.com/embed/${match[2]}`
                    }
                  }
                }

                return embedLink ? (
                  <iframe
                    src={embedLink} // <--- এখানে পরিবর্তিত এম্বেড লিঙ্কটি বসবে
                    title="FPV Real Estate - Indoor Drone Through Beautiful Home w/ VIEWS!"
                    className="w-full h-full absolute inset-0 border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    কোণো বৈধ ভিডিও লিঙ্ক পাওয়া যায়নি
                  </div>
                )
              })()}
            </div>
          </div>

          {/* Property Features Component Grid */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold border-b pb-3 mb-4 text-gray-900">
              {currentLang === 'bn'
                ? 'সম্পত্তির বৈশিষ্ট্য'
                : 'Property Features'}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {propertyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100"
                >
                  <div className="text-indigo-500 text-lg">{feat.icon}</div>
                  <div>
                    <p className="text-[11px] text-gray-400 font-medium">
                      {feat.label[currentLang]}
                    </p>
                    <p className="text-xs font-semibold text-gray-700">
                      {feat.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Structural Overview Meta Summary */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold border-b pb-3 mb-4 text-gray-900">
              {currentLang === 'bn' ? 'প্রপার্টি সম্পর্কে' : 'About Property'}
            </h2>
            <ul className="space-y-2.5 text-xs text-gray-600">
              <li className="flex items-center gap-2">
                ✔️{' '}
                {currentLang === 'bn'
                  ? 'প্রথম তলা - অ্যাটাচড বাথরুমসহ ২টি বড় বেডরুম।'
                  : 'First floor - 2 large bedrooms with attached bathrooms.'}
              </li>
              <li className="flex items-center gap-2">
                ✔️{' '}
                {currentLang === 'bn'
                  ? 'প্রশস্ত এবং সুসজ্জিত রান্নাঘর।'
                  : 'Spacious and well-equipped kitchen.'}
              </li>
              <li className="flex items-center gap-2">
                ✔️{' '}
                {currentLang === 'bn'
                  ? 'বারান্দাসহ মনোরম লিভিং রুম।'
                  : 'Inviting living room with balcony.'}
              </li>
              <li className="flex items-center gap-2">
                ✔️{' '}
                {currentLang === 'bn'
                  ? 'মনোমুগ্ধকর দৃশ্যসহ ছাদ/টেরেস।'
                  : 'Terrace with breathtaking views.'}
              </li>
              <li className="flex items-center gap-2">
                ✔️{' '}
                {currentLang === 'bn'
                  ? 'স্বতন্ত্র বিদ্যুৎ এবং পানি সংযোগ।'
                  : 'Independent electric and water connections.'}
              </li>
            </ul>
          </div>

          {/* Amenities Architecture Mapping */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold border-b pb-3 mb-4 text-gray-900">
              Amenities
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {property?.data?.amenities.map((item) => (
                <span className="text-xs font-medium text-gray-700">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Asset Blueprints / Documents Module */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold border-b pb-3 mb-4 text-gray-900">
              Floor Plan
            </h2>
            <div className="space-y-2">
              {['Balcony Plan', 'Front Hall', 'Kitchen'].map((plan, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border border-gray-100"
                >
                  <span className="text-xs font-semibold text-gray-700">
                    {plan}
                  </span>
                  <div className="flex gap-4 text-gray-400">
                    <button className="hover:text-indigo-600 text-xs flex items-center gap-1">
                      <FaFileArrowDown /> Download
                    </button>
                    <button className="hover:text-indigo-600 text-xs flex items-center gap-1">
                      <FaRegEye /> View
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dynamic Accordion Matrix */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold border-b pb-3 mb-4 text-gray-900">
              {currentLang === 'bn'
                ? 'প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী ?'
                : 'Frequently Asked Questions'}
            </h2>
            <div className="space-y-2">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="border border-gray-200/80 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className="w-full flex justify-between items-center p-4 text-left bg-white font-medium text-xs text-gray-800 hover:bg-gray-50 transition"
                  >
                    <span>{faq.q[currentLang]}</span>
                    {activeFaq === idx ? (
                      <FaChevronUp className="text-gray-400" />
                    ) : (
                      <FaChevronDown className="text-gray-400" />
                    )}
                  </button>
                  {activeFaq === idx && (
                    <div className="p-4 bg-gray-50 text-xs text-gray-600 border-t border-gray-100 leading-relaxed">
                      {faq.a[currentLang]}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Sentiment Evaluation & Analytical Aggregate Data */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex justify-between items-center border-b pb-4 mb-6">
              <h2 className="text-xl font-bold text-gray-900">Reviews (45)</h2>
              <button className="bg-indigo-600 text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
                Write a Review
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center bg-indigo-50/40 p-6 rounded-xl border border-indigo-100/50 mb-6">
              <div className="text-center md:border-r border-indigo-100 py-2">
                <p className="text-4xl font-extrabold text-indigo-900">
                  4.9{' '}
                  <span className="text-xs font-medium text-gray-400">
                    / 5.0
                  </span>
                </p>
                <div className="flex justify-center my-1 text-orange-400 gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-sm" />
                  ))}
                </div>
                <p className="text-[10px] text-gray-400 font-medium">
                  Based on 2,459 Reviews
                </p>
              </div>
              <div className="md:col-span-2 space-y-1.5 text-[11px] text-gray-600">
                {[
                  { star: '5 Star', width: 'w-4/5', count: '247' },
                  { star: '4 Star', width: 'w-3/5', count: '145' },
                  { star: '3 Star', width: 'w-1/4', count: '600' },
                  { star: '2 Star', width: 'w-1/12', count: '560' },
                  { star: '1 Star', width: 'w-1/6', count: '400' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="w-12 font-medium">{item.star}</span>
                    <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                      <div
                        className={`bg-amber-400 h-full ${item.width}`}
                      ></div>
                    </div>
                    <span className="w-8 text-right text-gray-400">
                      {item.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Individual Guest Sentiment Logs */}
            <div className="space-y-6">
              {[
                {
                  name: 'Joseph Massey',
                  title: 'Unforgettable Stay!',
                  comment:
                    'This hotel exceeded my expectations! The pool, spa, and dining options were top-notch.',
                },
                {
                  name: 'Jeffrey Jones',
                  title: 'Excellent service!',
                  comment:
                    'The location was perfect for exploring the city, and the views from our room were breathtaking.',
                },
              ].map((rev, idx) => (
                <div
                  key={idx}
                  className="border-b last:border-none pb-6 last:pb-0"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex gap-3 items-center">
                      <div className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-600 text-xs">
                        {rev.name[0]}
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-gray-900">
                          {rev.name}
                        </h4>
                        <p className="text-[10px] text-gray-400">
                          2 days ago •{' '}
                          <span className="text-amber-500 font-medium">
                            ★★★★★
                          </span>{' '}
                          <span className="text-gray-700 font-semibold ml-1">
                            {rev.title}
                          </span>
                        </p>
                      </div>
                    </div>
                    <button className="text-xs text-gray-400 hover:text-indigo-600 flex items-center gap-1">
                      Reply
                    </button>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed mb-3">
                    {rev.comment}
                  </p>
                  <div className="flex gap-4 text-[11px] text-gray-400 font-medium">
                    <button className="flex items-center gap-1 hover:text-indigo-600">
                      <FaRegThumbsUp /> 21
                    </button>
                    <button className="flex items-center gap-1 hover:text-indigo-600">
                      <FaRegFrown /> 50
                    </button>
                    <button className="flex items-center gap-1 hover:text-indigo-600">
                      <FaRegHeart /> 45
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SIDEBAR CONSOLE: Form Processing & Agent Parameters */}
        <div className="space-y-6">
          {/* Dynamic Scheduling & Conversion Terminal Module */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            {/* Toggle Tabs */}
            <div className="flex bg-gray-50 p-1 rounded-lg mb-4 border border-gray-100">
              <button
                type="button"
                onClick={() => setActiveTab('request')}
                className={`flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-bold rounded-md transition-all ${
                  activeTab === 'request'
                    ? 'bg-[#00c5a3] text-white shadow-sm'
                    : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                <FaEnvelope className="text-xs" />{' '}
                {currentLang === 'bn' ? 'তথ্য অনুরোধ করুন' : 'Request Info'}
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('schedule')}
                className={`flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-bold rounded-md transition-all ${
                  activeTab === 'schedule'
                    ? 'bg-[#00c5a3] text-white shadow-sm'
                    : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                <FaCalendarDays className="text-xs" />
                {currentLang === 'bn'
                  ? 'পরিদর্শনের সময়সূচী নির্ধারণ করুন'
                  : ' Schedule a Visit'}
              </button>
            </div>

            {/* Assigned Agent Profile */}
            <div className="flex items-center gap-3 mb-4 p-3 bg-gray-50/60 rounded-lg border border-gray-100/50">
              <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden shrink-0">
                <img
                  src={property?.data?.profileUrl}
                  alt="Assigned Agent"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-900">
                  {property?.data?.post_name}
                </h4>
                <p className="text-[10px] text-gray-400 font-medium">
                  {currentLang === 'bn' ? 'কোম্পানির এজেন্ট' : 'Company Agent'}
                </p>
              </div>
            </div>

            {/* CRM Input Form */}
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              {/* Conditionally Render: Schedule a Visit Fields */}
              {activeTab === 'schedule' && (
                <div className="animate-fadeIn duration-200 space-y-3">
                  {/* Day Selector */}
                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 mb-1.5 uppercase tracking-wider">
                      {currentLang === 'bn'
                        ? 'দিন নির্বাচন করুন'
                        : 'Select Day'}
                    </label>
                    <div className="grid grid-cols-5 gap-1.5 text-center">
                      {daysData.map((day, i) => (
                        <div
                          key={i}
                          onClick={() => setSelectedDay(i)}
                          className={`p-2 rounded-lg border cursor-pointer transition-all ${
                            selectedDay === i
                              ? 'border-[#00c5a3] bg-[#e6faf6] text-[#00c5a3]'
                              : 'border-gray-200/80 bg-white hover:border-gray-300'
                          }`}
                        >
                          <p
                            className={`text-[9px] uppercase font-semibold ${selectedDay === i ? 'text-[#00c5a3]' : 'text-gray-400'}`}
                          >
                            {day.d}
                          </p>
                          <p className="text-xs font-bold">{day.n}</p>
                          <p
                            className={`text-[8px] ${selectedDay === i ? 'text-[#00c5a3]/80' : 'text-gray-400'}`}
                          >
                            Feb
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Time Input */}
                  <div>
                    <label className="block text-[10px] font-semibold text-gray-400 mb-1">
                      {currentLang === 'bn'
                        ? 'সময় নির্বাচন করুন'
                        : ' Select Time'}
                    </label>
                    <input
                      type="text"
                      defaultValue="08:00 AM"
                      className="w-full border border-gray-200 rounded-lg p-2.5 text-xs bg-gray-50/30 focus:border-[#00c5a3] focus:bg-white outline-none transition"
                    />
                  </div>
                </div>
              )}

              {/* Core Fields (Always Visible for both Tabs) */}
              <div>
                <label className="block text-[10px] font-semibold text-gray-400 mb-1">
                  {currentLang === 'bn' ? 'নাম' : 'Name'}
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-200 rounded-lg p-2.5 text-xs bg-gray-50/30 focus:border-[#00c5a3] focus:bg-white outline-none transition"
                />
              </div>
              <div>
                <label className="block text-[10px] font-semibold text-gray-400 mb-1">
                  {currentLang === 'bn' ? 'ইমেল' : 'Email'}
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-200 rounded-lg p-2.5 text-xs bg-gray-50/30 focus:border-[#00c5a3] focus:bg-white outline-none transition"
                />
              </div>
              <div>
                <label className="block text-[10px] font-semibold text-gray-400 mb-1">
                  {currentLang === 'bn' ? 'ফোন' : 'Phone'}
                </label>
                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  className="w-full border border-gray-200 rounded-lg p-2.5 text-xs bg-gray-50/30 focus:border-[#00c5a3] focus:bg-white outline-none transition"
                />
              </div>
              <div>
                <label className="block text-[10px] font-semibold text-gray-400 mb-1">
                  {currentLang === 'bn' ? 'বর্ণনা' : 'Description'}
                </label>
                <textarea
                  rows="3"
                  placeholder="Enter your message or description"
                  className="w-full border border-gray-200 rounded-lg p-2.5 text-xs bg-gray-50/30 focus:border-[#00c5a3] focus:bg-white outline-none resize-none transition"
                ></textarea>
              </div>

              <button className="w-full bg-slate-900 text-white font-bold text-xs py-3 rounded-lg hover:bg-slate-800 transition tracking-wide shadow-sm mt-1">
                {currentLang === 'bn' ? 'জমা দিন' : 'Submit'}
              </button>
            </form>
          </div>

          {/* Listing Owner Details Module */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <h3 className="text-xs font-bold border-b pb-3 mb-3 text-gray-900">
              {currentLang === 'bn'
                ? 'তালিকার মালিকের বিবরণ'
                : 'Listing Owner Details'}
            </h3>
            <div className="flex gap-3 items-center mb-4">
              <div className="w-11 h-11 bg-gray-200 rounded-full overflow-hidden shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80"
                  alt="Asset Principal Entity"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-900">John Carter</h4>
                <div className="flex items-center gap-1 text-[11px] text-amber-500">
                  ★ 5.0{' '}
                  <span className="text-gray-400 font-normal">
                    (12 Reviews)
                  </span>
                </div>
              </div>
            </div>

            <div className="text-[11px] space-y-2 border-t pt-3 text-gray-600 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-400">
                  {currentLang === 'bn' ? 'ফোন' : 'Phone'}:
                </span>{' '}
                <span className="font-semibold text-gray-800">
                  +1 12545 45548
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">
                  {currentLang === 'bn' ? 'ইমেল' : 'Email'}:
                </span>{' '}
                <span className="font-semibold text-indigo-600">
                  dreams@state.com
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">
                  {currentLang === 'bn' ? 'তালিকার সংখ্যা' : ' No of Listings'}:
                </span>{' '}
                <span className="font-semibold text-gray-800">05</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">
                  {currentLang === 'bn'
                    ? 'বুকিংয়ের সংখ্যা'
                    : '    No of Bookings'}
                  :
                </span>{' '}
                <span className="font-semibold text-gray-800">225</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">
                  {currentLang === 'bn' ? 'সদস্য' : 'Member on'}:
                </span>{' '}
                <span className="font-semibold text-gray-800">15 Jan 2014</span>
              </div>
              <div className="flex justify-between items-center pt-1">
                <span className="text-gray-400">
                  {currentLang === 'bn' ? 'যাচাইকরণ' : 'Verification'}:
                </span>{' '}
                <span className="bg-[#00c5a3]/10 text-[#00c5a3] text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1">
                  <FaCheckCircle className="text-[9px]" />
                  {currentLang === 'bn' ? 'যাচাইকৃত' : 'Verified'}
                </span>
              </div>
            </div>

            {/* Action Connect Buttons */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href="https://wa.me/11254545548"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 bg-[#00c5a3] text-white text-xs font-bold py-2.5 rounded-lg hover:bg-[#00b091] transition shadow-sm"
              >
                <FaWhatsapp className="text-sm" />
                {currentLang === 'bn' ? 'হোয়াটসঅ্যাপ' : ' Whatsapp'}
              </a>
              <button
                type="button"
                className="flex items-center justify-center gap-1.5 bg-slate-900 text-white text-xs font-bold py-2.5 rounded-lg hover:bg-slate-800 transition shadow-sm"
              >
                <FaRegComments className="text-sm" />{' '}
                {currentLang === 'bn' ? 'চ্যাট করুন' : ' Chat Now'}
              </button>
            </div>
          </div>

          {/* Share Property Module */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <h3 className="text-sm font-bold border-b pb-2.5 mb-3 text-gray-900">
              {currentLang === 'bn' ? 'শেয়ার সম্পত্তি' : ' Share Property'}
            </h3>
            <div className="flex items-center gap-2 pt-1">
              <button className="w-8 h-8 rounded-full bg-[#3b5998] text-white flex items-center justify-center hover:opacity-90 transition text-xs">
                <FaFacebookF />
              </button>
              <button className="w-8 h-8 rounded-full bg-[#c13584] text-white flex items-center justify-center hover:opacity-90 transition text-xs">
                <FaInstagram />
              </button>
              <button className="w-8 h-8 rounded-full bg-[#0077b5] text-white flex items-center justify-center hover:opacity-90 transition text-xs">
                <FaLinkedinIn />
              </button>
              <button className="w-8 h-8 rounded-full bg-[#1da1f2] text-white flex items-center justify-center hover:opacity-90 transition text-xs">
                <FaTwitter />
              </button>
              <button className="w-8 h-8 rounded-full bg-[#bd081c] text-white flex items-center justify-center hover:opacity-90 transition text-xs">
                <FaPinterestP />
              </button>
              <button className="w-8 h-8 rounded-full bg-[#0084ff] text-white flex items-center justify-center hover:opacity-90 transition text-xs">
                <FaEnvelope />
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <h3 className="text-sm font-bold border-b pb-2.5 mb-4 text-gray-900">
              {currentLang === 'bn'
                ? 'বন্ধকী ক্যালকুলেটর'
                : 'Mortgage Calculator'}
            </h3>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-[11px] font-semibold text-gray-700 mb-1">
                  {currentLang === 'bn' ? 'মোট পরিমাণ ($)' : 'Total Amount ($)'}
                </label>
                <input
                  type="text"
                  placeholder={
                    currentLang === 'bn'
                      ? 'আপনার মোট পরিমাণ'
                      : 'Your Total Amount'
                  }
                  className="w-full border border-gray-200 bg-gray-50/50 rounded-lg p-2 text-xs outline-none focus:border-[#00c5a3] transition"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-gray-700 mb-1">
                  {currentLang === 'bn'
                    ? 'ডাউন পেমেন্ট ($)'
                    : 'Down Payment ($)'}
                </label>
                <input
                  type="text"
                  placeholder={
                    currentLang === 'bn'
                      ? 'আপনার ডাউন পেমেন্ট'
                      : 'Your Down Payment'
                  }
                  className="w-full border border-gray-200 bg-gray-50/50 rounded-lg p-2 text-xs outline-none focus:border-[#00c5a3] transition"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-gray-700 mb-1">
                  {currentLang === 'bn'
                    ? 'ঋণের মেয়াদ (বছর)'
                    : 'Loan Terms (Years)'}
                </label>
                <input
                  type="text"
                  placeholder={
                    currentLang === 'bn'
                      ? 'আপনার ঋণের মেয়াদ'
                      : 'Your Loan Terms'
                  }
                  className="w-full border border-gray-200 bg-gray-50/50 rounded-lg p-2 text-xs outline-none focus:border-[#00c5a3] transition"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-gray-700 mb-1">
                  {currentLang === 'bn' ? 'সুদের হার (%)' : 'Interest Rate (%)'}
                </label>
                <input
                  type="text"
                  placeholder={
                    currentLang === 'bn'
                      ? 'আপনার সুদের হার'
                      : 'Your Interest Rate'
                  }
                  className="w-full border border-gray-200 bg-gray-50/50 rounded-lg p-2 text-xs outline-none focus:border-[#00c5a3] transition"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-gray-700 mb-1">
                  {currentLang === 'bn' ? 'সর্বনিম্ন স্কয়ার ফিট' : 'Min Sqft'}
                </label>
                <input
                  type="text"
                  placeholder={
                    currentLang === 'bn'
                      ? 'সর্বনিম্ন স্কয়ার ফিট লিখুন'
                      : 'Enter Min Sqft'
                  }
                  className="w-full border border-gray-200 bg-gray-50/50 rounded-lg p-2 text-xs outline-none focus:border-[#00c5a3] transition"
                />
              </div>
            </form>
          </div>

          {/* Geographical GIS Location Display Panel */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <div className="h-40 bg-gray-100 rounded-lg overflow-hidden relative border border-gray-200 mb-4">
              <iframe
                title="Property Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.895738096285!2d90.3908883!3d23.7511111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ1JTA0LjAiTiA5MMKwMjMnMjcuMiJF!5e0!3m2!1sbn!2sbd!4v1652697600000!5m2!1sbn!2sbd"
                className="w-full h-full border-0 dark:invert-[90%] dark:hue-rotate-180"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            <h4 className="text-[10px] font-bold text-gray-800 mb-2 uppercase tracking-wide">
              {currentLang === 'bn'
                ? 'আশেপাশের ল্যান্ডমার্ক এবং দর্শনীয় স্থান'
                : 'Nearby Landmarks & Visits'}
            </h4>
            <ul className="text-xs space-y-1.5 text-gray-600">
              <li className="flex items-center gap-1.5">
                🗽{' '}
                {currentLang === 'bn'
                  ? 'স্ট্যাচু অব লিবার্টির কাছাকাছি'
                  : 'Near By Statue of Liberty'}
              </li>
              <li className="flex items-center gap-1.5">
                🏛️{' '}
                {currentLang === 'bn'
                  ? 'দ্য মেট্রোপলিটন মিউজিয়াম অব আর্ট'
                  : 'The Metropolitan Museum of Art'}
              </li>
              <li className="flex items-center gap-1.5">
                🌲{' '}
                {currentLang === 'bn'
                  ? 'ইয়েলোস্টোন ন্যাশনাল পার্ক'
                  : 'Yellowstone National Park'}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
};

export default PropertyDetails;