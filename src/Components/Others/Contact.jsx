import React, { useContext } from 'react'
import { MdEmail, MdPhoneInTalk, MdLocationOn } from 'react-icons/md'
import { Link } from 'react-router'
import { AuthContext } from '../Authentication/AuthContext'
import { useTranslation } from 'react-i18next'

const Contact = () => {
  const { theme } = useContext(AuthContext);

 const { i18n } = useTranslation()
  const currentLang = i18n.language

  return (
    <div
      className={`min-h-screen py-8 md:py-16 px-4 sm:px-6 md:px-10 transition-colors duration-300
      ${theme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'}`}
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Top Section: Sales & Support */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12">
          <div className="flex flex-col gap-6">
            {/* Sales Card */}
            <div className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 flex-1">
              <h2 className="text-xl md:text-2xl font-bold mb-3 dark:text-white">
                {currentLang === 'bn'
                  ? 'বিক্রয় দলের সদস্যের সাথে কথা বলুন'
                  : ' Talk to Member of Sales Team'}
              </h2>
              <p className="text-slate-500 dark:text-slate-400 mb-4 text-sm md:text-base">
                {currentLang === 'bn'
                  ? 'ব্যক্তিগতকৃত নির্দেশনা,সম্পত্তি বিষয়ক অন্তর্দৃষ্টি, এবং আপনার রিয়েল এস্টেট চাহিদা অনুযায়ী তৈরি সহায়তার জন্য আমাদের বিশেষজ্ঞ বিক্রয় দলের সাথে যোগাযোগ করুন।'
                  : 'Connect with our expert sales team for personalized guidance property insights, and support tailored to your real estate needs.'}
              </p>
              <p className="font-bold dark:text-emerald-400">
                {currentLang === 'bn' ? 'টোল ফ্রি' : 'Toll Free'} : 888 634-5891
              </p>
            </div>

            {/* Support Card */}
            <div className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 flex-1">
              <h2 className="text-xl md:text-2xl font-bold mb-3 dark:text-white">
                {currentLang === 'bn'
                  ? 'পণ্য ও অ্যাকাউন্ট সহায়তা'
                  : 'Product & Account Support'}
              </h2>
              <p className="text-slate-500 dark:text-slate-400 mb-6 text-sm md:text-base">
                {currentLang === 'bn'
                  ? 'আপনার অ্যাকাউন্ট, ফিচার এবং পরিষেবা সংক্রান্ত বিষয়ে বিশেষ সহায়তা পেতে আজই আমাদের বিশেষজ্ঞ প্রোডাক্ট ও অ্যাকাউন্ট সাপোর্ট টিমের সাথে যোগাযোগ করুন।'
                  : ' Get dedicated help with your account, features, and services through our expert Product & Account Support team today.'}
              </p>
              <Link
                to="/Faq"
                className="inline-block bg-slate-900 dark:bg-emerald-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:opacity-90 transition-all text-center"
              >
                {currentLang === 'bn' ? 'প্রশ্নের উত্তর' : 'Go to FAQ'}
              </Link>
            </div>
          </div>

          {/* Image Container */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-64 lg:h-full border dark:border-slate-800">
            <img
              src="https://i.ibb.co.com/KpqJ5mjB/contact-us-img-01.jpg"
              alt="Support"
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all"
            />
          </div>
        </div>

        {/* Middle Section: Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 mb-12">
          {[
            {
              icon: <MdEmail />,
              title: 'Email Address',
              info: 'dream@state.com',
              info2: 'admin@dreamsstate.com',
              color: 'text-emerald-500',
              bg: 'bg-emerald-50 dark:bg-emerald-500/10',
            },
            {
              icon: <MdPhoneInTalk />,
              title: 'Phone Number',
              info: '+81649 48103',
              info2: '+78301 71940',
              color: 'text-blue-500',
              bg: 'bg-blue-50 dark:bg-blue-500/10',
            },
            {
              icon: <MdLocationOn />,
              title: 'Address',
              info: '509 Rosewood Drive, San Francisco,',
              info2: 'California',
              color: 'text-teal-500',
              bg: 'bg-teal-50 dark:bg-teal-500/10',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 p-5 md:p-6 rounded-xl flex items-center gap-4 md:gap-5 border border-slate-100 dark:border-slate-800 shadow-sm"
            >
              <div
                className={`${item.bg} ${item.color} p-3 md:p-4 rounded-full text-xl md:text-2xl shrink-0`}
              >
                {item.icon}
              </div>
              <div className="min-w-0">
                <h4 className="font-bold dark:text-white truncate">
                  {item.title}
                </h4>
                <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 truncate">
                  {item.info}
                </p>
                <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 truncate">
                  {item.info2}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section: Image & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 bg-white dark:bg-slate-900 p-5 md:p-10 rounded-2xl md:rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800">
          <div className="rounded-2xl overflow-hidden hidden lg:block">
            <img
              src="https://i.ibb.co.com/Y78CPpjs/contact-us-img-02.jpg"
              alt="Building"
              className="w-full h-full object-cover grayscale-[10%]"
            />
          </div>

          <div className="w-full">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 dark:text-white">
              Get In Touch
            </h2>
            <form className="space-y-4 md:space-y-5">
              {/* Name Input */}
              <div>
                <label className="block text-sm font-semibold text-slate-600 dark:text-slate-300 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 dark:text-white rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                  placeholder="Enter your name"
                />
              </div>

              {/* Phone & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-600 dark:text-slate-300 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 dark:text-white rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    placeholder="(201) 555-0123"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-600 dark:text-slate-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 dark:text-white rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    placeholder="Email address"
                  />
                </div>
              </div>

              {/* Country & Subject Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-600 dark:text-slate-300 mb-1">
                    Country
                  </label>
                  <select className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 dark:text-white rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-500/20">
                    <option>Select</option>
                    <option>Bangladesh</option>
                    <option>USA</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-600 dark:text-slate-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 dark:text-white rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    placeholder="Subject"
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-semibold text-slate-600 dark:text-slate-300 mb-1">
                  Description
                </label>
                <textarea
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 dark:text-white rounded-lg py-3 px-4 h-32 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  placeholder="Comments"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button className="w-full bg-slate-900 dark:bg-emerald-600 text-white font-bold py-4 rounded-lg hover:opacity-90 shadow-lg transition-all active:scale-[0.98]">
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact