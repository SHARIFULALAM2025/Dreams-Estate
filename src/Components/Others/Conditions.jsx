import React, { useContext } from 'react'
import { AuthContext } from '../Authentication/AuthContext'
import { useTranslation } from 'react-i18next'
const Conditions = () => {
  const { theme } = useContext(AuthContext)
  const { i18n } = useTranslation()
  const currentLang = i18n.language
  const content = {
    en: {
      title: 'Terms & Conditions',
      subtitle: 'Please read these terms carefully before using our services.',

      introduction: 'Introduction',
      introText:
        'Welcome to Dreams Estate. By accessing or using our platform—whether via web, mobile, or any other interface—you acknowledge that you have read, understood, and agree to be bound by these terms and conditions.',

      acceptance: 'Acceptance of Terms',
      acceptanceText:
        'By accessing or using the estate property, you agree to comply with and be bound by these Terms and Conditions.',

      booking: 'Booking and Payment',
      bookingList: [
        'Reservations must be confirmed with a signed agreement and a non-refundable deposit.',
        'The balance must be paid in full before the event or stay.',
        'Payment methods accepted: bank transfer, credit card, PayPal.',
      ],

      property: 'Use of Property',
      propertyList: [
        'The estate is to be used for private events only.',
        'Maximum occupancy rules apply.',
        'No commercial activity without prior written approval.',
      ],

      rules: 'Rules and Conduct',
      rulesList: [
        'No smoking inside the buildings.',
        'No pets allowed unless permission is granted.',
        'The client is responsible for guest conduct and damages.',
      ],

      cancellation: 'Cancellations and Refunds',
      cancelText:
        'Cancellations before reservation date may receive a refund excluding deposits.',

      force: 'Force Majeure',
      forceText:
        'The estate shall not be liable for events beyond reasonable control.',

      law: 'Governing Law',
      lawText: 'These terms are governed according to the laws of London.',

      print: 'Download or Print Terms',
    },

    bn: {
      title: 'শর্তাবলী',
      subtitle:
        'আমাদের সেবা ব্যবহারের আগে অনুগ্রহ করে এই শর্তগুলো ভালোভাবে পড়ুন।',

      introduction: 'ভূমিকা',
      introText:
        'Dreams Estate-এ স্বাগতম। আমাদের প্ল্যাটফর্ম ব্যবহার করার মাধ্যমে আপনি এই শর্তাবলী মেনে নিচ্ছেন।',

      acceptance: 'শর্ত গ্রহণ',
      acceptanceText:
        'এই প্রপার্টি ব্যবহার করার মাধ্যমে আপনি শর্তাবলী মেনে চলতে সম্মত হচ্ছেন।',

      booking: 'বুকিং ও পেমেন্ট',
      bookingList: [
        'বুকিং নিশ্চিত করতে একটি চুক্তি ও অগ্রিম জমা প্রয়োজন।',
        'ইভেন্ট বা অবস্থানের আগে সম্পূর্ণ অর্থ পরিশোধ করতে হবে।',
        'ব্যাংক ট্রান্সফার, কার্ড ও PayPal গ্রহণযোগ্য।',
      ],

      property: 'প্রপার্টির ব্যবহার',
      propertyList: [
        'শুধুমাত্র ব্যক্তিগত ইভেন্টের জন্য ব্যবহার করা যাবে।',
        'সর্বোচ্চ অতিথি সীমা প্রযোজ্য।',
        'অনুমতি ছাড়া বাণিজ্যিক কার্যক্রম নিষিদ্ধ।',
      ],

      rules: 'নিয়ম ও আচরণ',
      rulesList: [
        'ভবনের ভিতরে ধূমপান নিষিদ্ধ।',
        'অনুমতি ছাড়া পোষা প্রাণী আনা যাবে না।',
        'অতিথিদের আচরণ ও ক্ষতির জন্য ক্লায়েন্ট দায়ী।',
      ],

      cancellation: 'বাতিল ও রিফান্ড',
      cancelText:
        'রিজার্ভেশনের আগে বাতিল করলে কিছু ক্ষেত্রে রিফান্ড পাওয়া যেতে পারে।',

      force: 'বিশেষ পরিস্থিতি',
      forceText:
        'প্রাকৃতিক দুর্যোগ বা নিয়ন্ত্রণের বাইরে কোনো ঘটনার জন্য কর্তৃপক্ষ দায়ী নয়।',

      law: 'প্রযোজ্য আইন',
      lawText: 'এই শর্তাবলী লন্ডনের আইন অনুযায়ী পরিচালিত হবে।',

      print: 'ডাউনলোড বা প্রিন্ট করুন',
    },
  }
const text = content[currentLang] || content.en
  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === 'dark'
          ? 'bg-slate-950 text-slate-300'
          : 'bg-slate-50 text-slate-600'
      }`}
    >
      <div
        className={`shadow-sm border transition-all p-6 md:p-10 ${
          theme === 'dark'
            ? 'bg-slate-900 border-slate-800'
            : 'bg-white border-slate-100'
        }`}
      >
        <header className="mb-10 text-center md:text-left">
          <h1
            className={`text-3xl md:text-4xl font-extrabold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}
          >
            {text.title}
          </h1>

          <p className="text-sm opacity-75">{text.subtitle}</p>

          <div className="h-1 w-24 bg-blue-500 mt-4 rounded-full mx-auto md:mx-0"></div>
        </header>

        <div className="space-y-8">
          {/* Introduction */}
          <section>
            <h2
              className={`text-xl font-bold mb-3 ${
                theme === 'dark' ? 'text-white' : 'text-slate-800'
              }`}
            >
              {text.introduction}
            </h2>

            <p className="leading-relaxed">{text.introText}</p>
          </section>

          {/* Acceptance */}
          <section>
            <h2
              className={`text-xl font-bold mb-3 ${
                theme === 'dark' ? 'text-white' : 'text-slate-800'
              }`}
            >
              {text.acceptance}
            </h2>

            <p>{text.acceptanceText}</p>
          </section>

          {/* Booking */}
          <section>
            <h2
              className={`text-xl font-bold mb-3 ${
                theme === 'dark' ? 'text-white' : 'text-slate-800'
              }`}
            >
              {text.booking}
            </h2>

            <ul className="list-disc pl-5 space-y-2 marker:text-blue-500">
              {text.bookingList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Property */}
          <section>
            <h2
              className={`text-xl font-bold mb-3 ${
                theme === 'dark' ? 'text-white' : 'text-slate-800'
              }`}
            >
              {text.property}
            </h2>

            <ul className="list-disc pl-5 space-y-2 marker:text-blue-500">
              {text.propertyList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Rules */}
          <section
            className={`p-5 rounded-xl border ${
              theme === 'dark'
                ? 'bg-slate-800/40 border-slate-700'
                : 'bg-blue-50/50 border-blue-100'
            }`}
          >
            <h2
              className={`text-xl font-bold mb-3 ${
                theme === 'dark' ? 'text-white' : 'text-slate-800'
              }`}
            >
              {text.rules}
            </h2>

            <ul className="space-y-2">
              {text.rulesList.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Cancellation */}
          <section>
            <h2
              className={`text-xl font-bold mb-3 ${
                theme === 'dark' ? 'text-white' : 'text-slate-800'
              }`}
            >
              {text.cancellation}
            </h2>

            <p>{text.cancelText}</p>
          </section>

          {/* Force */}
          <section>
            <h2
              className={`text-xl font-bold mb-3 ${
                theme === 'dark' ? 'text-white' : 'text-slate-800'
              }`}
            >
              {text.force}
            </h2>

            <p>{text.forceText}</p>
          </section>

          {/* Law */}
          <section>
            <h2
              className={`text-xl font-bold mb-3 ${
                theme === 'dark' ? 'text-white' : 'text-slate-800'
              }`}
            >
              {text.law}
            </h2>

            <p>{text.lawText}</p>
          </section>
        </div>

        <footer className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
          <button
            onClick={() => window.print()}
            className="text-sm font-medium text-blue-500 hover:text-blue-600 underline"
          >
            {text.print}
          </button>
        </footer>
      </div>
    </div>
  )
}

export default Conditions
