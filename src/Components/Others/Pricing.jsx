import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaCheckCircle } from 'react-icons/fa'

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly')
 const { i18n } = useTranslation()
  const currentLang = i18n.language
  const plans = [
    {
      name: {
        en: 'Standard',
        bn: 'স্ট্যান্ডার্ড',
      },

      description: {
        en: 'Manage up to 10 listings with essential features for small teams and businesses.',
        bn: 'ছোট টিম ও ব্যবসার জন্য প্রয়োজনীয় ফিচারসহ সর্বোচ্চ ১০টি লিস্টিং পরিচালনা করুন।',
      },

      price: billingCycle === 'monthly' ? '99' : '999',

      features: [
        {
          en: '10 Listings Per Login',
          bn: 'প্রতি লগইনে ১০টি লিস্টিং',
        },
        {
          en: 'Up to 100 Users',
          bn: 'সর্বোচ্চ ১০০ জন ব্যবহারকারী',
        },
        {
          en: 'Enquiry on Listing',
          bn: 'লিস্টিংয়ে অনুসন্ধান সুবিধা',
        },
        {
          en: '24 Hours Support',
          bn: '২৪ ঘণ্টা সাপোর্ট',
        },
        {
          en: 'Basic Custom Review',
          bn: 'বেসিক কাস্টম রিভিউ',
        },
        {
          en: 'Simple Impact Reporting',
          bn: 'সহজ রিপোর্টিং সুবিধা',
        },
        {
          en: 'Quick Onboarding & Account',
          bn: 'দ্রুত অনবোর্ডিং ও অ্যাকাউন্ট সেটআপ',
        },
        {
          en: 'No API Access',
          bn: 'API অ্যাক্সেস নেই',
        },
        {
          en: 'Basic Transaction Tracking',
          bn: 'বেসিক ট্রানজেকশন ট্র্যাকিং',
        },
        {
          en: 'Dreams Estate Branding',
          bn: 'ড্রিমস এস্টেট ব্র্যান্ডিং',
        },
      ],

      isPopular: false,
    },

    {
      name: {
        en: 'Professional',
        bn: 'প্রফেশনাল',
      },

      description: {
        en: 'Manage up to 50 listings with essential features for medium teams and businesses.',
        bn: 'মাঝারি টিম ও ব্যবসার জন্য প্রয়োজনীয় ফিচারসহ সর্বোচ্চ ৫০টি লিস্টিং পরিচালনা করুন।',
      },

      price: billingCycle === 'monthly' ? '199' : '1999',

      features: [
        {
          en: '50 Listings Per Login',
          bn: 'প্রতি লগইনে ৫০টি লিস্টিং',
        },
        {
          en: '500+ Active Users',
          bn: '৫০০+ সক্রিয় ব্যবহারকারী',
        },
        {
          en: 'Enquiry On Every Listing',
          bn: 'প্রতিটি লিস্টিংয়ে অনুসন্ধান',
        },
        {
          en: 'Priority 24 Hours Support',
          bn: 'অগ্রাধিকার ভিত্তিক ২৪ ঘণ্টা সাপোর্ট',
        },
        {
          en: 'Advanced Custom Review',
          bn: 'অ্যাডভান্সড কাস্টম রিভিউ',
        },
        {
          en: 'Standard Impact Reporting',
          bn: 'স্ট্যান্ডার্ড রিপোর্টিং',
        },
        {
          en: 'Standard API Access',
          bn: 'স্ট্যান্ডার্ড API অ্যাক্সেস',
        },
        {
          en: 'Partial API Access',
          bn: 'আংশিক API অ্যাক্সেস',
        },
        {
          en: 'Partial Custom Branding',
          bn: 'আংশিক কাস্টম ব্র্যান্ডিং',
        },
      ],

      isPopular: true,
    },

    {
      name: {
        en: 'Enterprise',
        bn: 'এন্টারপ্রাইজ',
      },

      description: {
        en: 'Unlimited listings, full API access, 24/7 support, and featured organizations.',
        bn: 'আনলিমিটেড লিস্টিং, পূর্ণ API অ্যাক্সেস, ২৪/৭ সাপোর্ট এবং প্রিমিয়াম প্রতিষ্ঠানের সুবিধা।',
      },

      price: billingCycle === 'monthly' ? '399' : '3999',

      features: [
        {
          en: 'Unlimited Listings Per Login',
          bn: 'প্রতি লগইনে আনলিমিটেড লিস্টিং',
        },
        {
          en: '1000+ Active Users',
          bn: '১০০০+ সক্রিয় ব্যবহারকারী',
        },
        {
          en: 'Enquiry Enabled On Listings',
          bn: 'লিস্টিংয়ে অনুসন্ধান সুবিধা',
        },
        {
          en: 'Dedicated 24 Hours Support',
          bn: 'ডেডিকেটেড ২৪ ঘণ্টা সাপোর্ট',
        },
        {
          en: 'Full Custom Review Tools',
          bn: 'পূর্ণ কাস্টম রিভিউ টুলস',
        },
        {
          en: 'Advanced Impact Reporting',
          bn: 'অ্যাডভান্সড রিপোর্টিং',
        },
        {
          en: 'Personalized Onboarding & Account',
          bn: 'ব্যক্তিগত অনবোর্ডিং ও অ্যাকাউন্ট সেটআপ',
        },
        {
          en: 'Full API Access',
          bn: 'পূর্ণ API অ্যাক্সেস',
        },
        {
          en: 'Full Transaction Tracking',
          bn: 'পূর্ণ ট্রানজেকশন ট্র্যাকিং',
        },
        {
          en: 'White-Label Branding',
          bn: 'হোয়াইট-লেবেল ব্র্যান্ডিং',
        },
      ],

      isPopular: false,
    },
  ]

  return (
    <div className="bg-white dark:bg-slate-950 px-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Toggle Button */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-1 rounded-full flex items-center shadow-md w-full max-w-xs">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`flex-1 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                billingCycle === 'monthly'
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {currentLang === 'bn' ? 'মাসিক' : 'Monthly'}
            </button>

            <button
              onClick={() => setBillingCycle('yearly')}
              className={`flex-1 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                billingCycle === 'yearly'
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {currentLang === 'bn' ? 'বার্ষিক' : 'Yearly'}
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative group bg-white dark:bg-slate-900 rounded-3xl p-8 border transition-all duration-300 hover:-translate-y-2 hover:bg-indigo-600 ${
                plan.isPopular
                  ? 'border-emerald-500 shadow-xl'
                  : 'border-slate-100 dark:border-slate-800 shadow-sm'
              }`}
            >
              {/* Most Popular Badge */}
              {plan.isPopular && (
                <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-pink-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-md">
                  {currentLang === 'bn' ? 'সবচেয়ে জনপ্রিয়' : 'Most Popular'}
                  <div className="absolute -bottom-1 right-2 w-2 h-2 bg-pink-500 rotate-45"></div>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl font-black text-slate-900 dark:text-white group-hover:text-white mb-2 transition-colors duration-300">
                {currentLang === 'bn' ? plan.name.bn : plan.name.en}
              </h3>

              {/* Description */}
              <p className="text-slate-600 dark:text-slate-400 group-hover:text-slate-100 text-sm leading-relaxed mb-6 transition-colors duration-300">
                {currentLang === 'bn'
                  ? plan.description.bn
                  : plan.description.en}
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-black text-slate-900 dark:text-white group-hover:text-white transition-colors duration-300">
                  ${plan.price}
                </span>
                <span className="text-slate-400 group-hover:text-slate-200 font-medium transition-colors duration-300">
                  /{billingCycle}
                </span>
              </div>

              {/* Features */}
              <div className="border-t border-slate-100 dark:border-slate-800 group-hover:border-slate-400/30 pt-8 mb-8 transition-colors duration-300">
                <h4 className="text-sm font-black text-slate-900 dark:text-white group-hover:text-white uppercase tracking-wider mb-6 transition-colors duration-300">
                  {currentLang === 'bn' ? 'মূল বৈশিষ্ট্য' : 'Key Features'}
                </h4>

                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-slate-700 dark:text-slate-400 group-hover:text-white text-[13px] font-medium leading-tight transition-colors duration-300"
                    >
                      <FaCheckCircle className="text-emerald-500 shrink-0 text-[16px]" />
                      {currentLang === 'bn' ? feature.bn : feature.en}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <button className="w-full bg-[#111827] hover:bg-slate-800 group-hover:bg-white group-hover:text-indigo-600 text-white font-bold py-4 rounded-xl transition-all duration-300 active:scale-95">
                {currentLang === 'bn' ? 'আজই মূল্য জানুন' : 'Get a Quote'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Pricing
