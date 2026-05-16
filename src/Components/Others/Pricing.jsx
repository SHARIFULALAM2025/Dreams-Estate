import React, { useState } from 'react'
import { FaCheckCircle } from 'react-icons/fa'

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly')

  const plans = [
    {
      name: 'Standard',
      description:
        'Manage up to 10 listings with essential features for small teams and businesses.',
      price: billingCycle === 'monthly' ? '99' : '999',
      features: [
        '10 Listing Per Login',
        'Up to 100 Users',
        'Enquiry on Listing',
        '24 Hrs Support',
        'Basic Custom Review',
        'Simple Impact Reporting',
        'Quick Onboarding & Account',
        'No API Access',
        'Basic Transaction Tracking',
        'Dreams Estate Branding',
      ],
      isPopular: false,
    },
    {
      name: 'Professional',
      description:
        'Manage up to 50 listings with essential features for medium teams and businesses.',
      price: billingCycle === 'monthly' ? '199' : '1999',
      features: [
        '50 Listing Per Login',
        '500+ Active Users',
        'Enquiry On Every Listing',
        'Priority 24 Hrs Support',
        'Advanced Custom Review',
        'Standard Impact Reporting',
        'Standard API Access',
        'Partial API Access',
        'Partial Custom Branding',
      ],
      isPopular: true,
    },
    {
      name: 'Enterprise',
      description:
        'Unlimited listings, full API access, 24/7 support, and featured organizations.',
      price: billingCycle === 'monthly' ? '399' : '3999',
      features: [
        'Unlimited Listings Per Login',
        '1000+ Active Users',
        'Enquiry Enabled On Listings',
        'Dedicated 24 Hrs Support',
        'Full Custom Review Tools',
        'Advanced Impact Reporting',
        'Personalized Onboarding & Account',
        'Full API Access',
        'Full Transaction Tracking',
        'White-Label Branding',
      ],
      isPopular: false,
    },
  ]

  return (
    <div className="bg-slate-50 dark:bg-slate-950 py-20 px-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Toggle Switch */}
        <div className="flex justify-center mb-16">
          <div className="bg-white dark:bg-slate-900 border dark:border-slate-800 p-1 rounded-full flex items-center shadow-sm">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${billingCycle === 'monthly' ? 'bg-emerald-500 text-white shadow-md' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${billingCycle === 'yearly' ? 'bg-emerald-500 text-white shadow-md' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'}`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white dark:bg-slate-900 rounded-3xl p-8 border ${plan.isPopular ? 'border-emerald-500 shadow-xl' : 'border-slate-100 dark:border-slate-800 shadow-sm'} transition-all hover:translate-y-[-5px]`}
            >
              {/* Most Popular Badge */}
              {plan.isPopular && (
                <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-pink-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-md">
                  Most Popular
                  <div className="absolute -bottom-1 right-2 w-2 h-2 bg-pink-500 rotate-45"></div>
                </div>
              )}

              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">
                {plan.name}
              </h3>
              <p className="text-slate-400 dark:text-slate-500 text-sm leading-relaxed mb-6">
                {plan.description}
              </p>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-black text-slate-900 dark:text-white">
                  ${plan.price}
                </span>
                <span className="text-slate-400 font-medium">
                  /{billingCycle}
                </span>
              </div>

              <div className="border-t border-slate-100 dark:border-slate-800 pt-8 mb-8">
                <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider mb-6">
                  Key Features
                </h4>
                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-slate-600 dark:text-slate-400 text-[13px] font-medium leading-tight"
                    >
                      <FaCheckCircle className="text-slate-400 shrink-0 text-[16px]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full bg-[#111827] hover:bg-slate-800 text-white font-bold py-4 rounded-xl transition-all active:scale-95">
                Get a Quote
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Pricing
