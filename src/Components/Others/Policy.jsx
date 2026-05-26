
import React, { useContext } from 'react'
import { AuthContext } from '../Authentication/AuthContext'
import { useTranslation } from 'react-i18next'
const Policy = () => {
  const { theme } = useContext(AuthContext)
  const { i18n } = useTranslation()
  const currentLang = i18n.language

  const content = {
    en: {
      title: 'Privacy Policy',
      updated: 'Last Updated: May 15, 2026',
      intro:
        'At Dreams Estate, we are committed to protecting your privacy. This policy outlines how we handle your information:',

      introduction: 'Introduction',
      introductionText:
        "Dreams Estate operates the Dreams Estate platform and enables users to browse, book, and manage estate properties. We're committed to protecting your privacy and handling your personal information carefully.",

      acceptance: 'Acceptance of Terms',
      acceptanceText:
        'By using the Dreams Estate platform, you acknowledge and agree that you have read and accepted these terms, privacy policy, and guidelines.',

      infoTitle: 'How We Use Your Information',
      infoList: [
        'Provide & Improve Service: To operate and enhance the platform.',
        'Communications: Booking confirmations, updates, and support.',
        'Personalization: Better recommendations and search results.',
        'Payments & Fraud Prevention: Secure payments and fraud detection.',
        'Legal Compliance: To comply with applicable laws.',
      ],

      sharing: 'Sharing Your Information',
      sharingText:
        'We do not sell your personal data. We may share information with:',
      sharingList: [
        'Hosts and Property Managers for booking details.',
        'Service Providers for payment processing and analytics.',
        'Legal Authorities when required by law.',
        'Business Transfers during mergers or sales.',
      ],

      security: 'Data Security',
      securityText:
        'We use encryption, access controls, and secure servers to protect your information. However, internet transmission is never 100% secure.',

      changes: 'Changes to This Policy',
      changesText:
        'We may update this Privacy Policy from time to time and notify users through updated policy pages.',
    },

    bn: {
      title: 'গোপনীয়তা নীতি',
      updated: 'সর্বশেষ আপডেট: ১৫ মে, ২০২৬',
      intro:
        'Dreams Estate-এ আমরা আপনার গোপনীয়তা রক্ষা করতে প্রতিশ্রুতিবদ্ধ। এই নীতিতে আপনার তথ্য কীভাবে পরিচালনা করা হয় তা বর্ণনা করা হয়েছে:',

      introduction: 'ভূমিকা',
      introductionText:
        'Dreams Estate প্ল্যাটফর্ম ব্যবহারকারীদের প্রপার্টি ব্রাউজ, বুক এবং পরিচালনা করতে সহায়তা করে। আমরা আপনার ব্যক্তিগত তথ্য নিরাপদে সংরক্ষণে প্রতিশ্রুতিবদ্ধ।',

      acceptance: 'শর্ত গ্রহণ',
      acceptanceText:
        'Dreams Estate প্ল্যাটফর্ম ব্যবহার করার মাধ্যমে আপনি এই শর্তাবলী, গোপনীয়তা নীতি এবং নির্দেশিকা মেনে নিতে সম্মত হচ্ছেন।',

      infoTitle: 'আমরা কীভাবে আপনার তথ্য ব্যবহার করি',
      infoList: [
        'সেবা প্রদান ও উন্নয়ন: প্ল্যাটফর্ম পরিচালনা ও উন্নত করতে।',
        'যোগাযোগ: বুকিং কনফার্মেশন, আপডেট ও সহায়তা।',
        'ব্যক্তিগতকরণ: উন্নত রেজাল্ট ও সুপারিশ দিতে।',
        'পেমেন্ট ও জালিয়াতি প্রতিরোধ: নিরাপদ পেমেন্ট নিশ্চিত করতে।',
        'আইনি বাধ্যবাধকতা: প্রযোজ্য আইন মেনে চলতে।',
      ],

      sharing: 'তথ্য শেয়ারিং',
      sharingText:
        'আমরা আপনার ব্যক্তিগত তথ্য বিক্রি করি না। তবে কিছু ক্ষেত্রে শেয়ার করতে পারি:',

      sharingList: [
        'বুকিংয়ের জন্য হোস্ট ও প্রপার্টি ম্যানেজারদের সাথে।',
        'পেমেন্ট ও বিশ্লেষণের জন্য সার্ভিস প্রোভাইডারদের সাথে।',
        'আইন অনুযায়ী প্রয়োজন হলে কর্তৃপক্ষের সাথে।',
        'মার্জার বা ব্যবসা বিক্রির ক্ষেত্রে।',
      ],

      security: 'ডাটা নিরাপত্তা',
      securityText:
        'আমরা এনক্রিপশন, অ্যাক্সেস কন্ট্রোল এবং নিরাপদ সার্ভার ব্যবহার করি। তবে ইন্টারনেট সম্পূর্ণ নিরাপদ নয়।',

      changes: 'নীতির পরিবর্তন',
      changesText:
        'আমরা সময়ে সময়ে এই গোপনীয়তা নীতি আপডেট করতে পারি এবং নতুন আপডেট প্রকাশ করব।',
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
        className={`mx-auto shadow-sm border transition-all p-6 md:p-10 ${
          theme === 'dark'
            ? 'bg-slate-900 border-slate-800'
            : 'bg-white border-slate-100'
        }`}
      >
        {/* Header */}
        <header className="mb-10">
          <h1
            className={`text-3xl md:text-4xl font-extrabold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}
          >
            {text.title}
          </h1>

          <p className="text-sm italic opacity-75">{text.updated}</p>

          <div className="h-1 w-20 bg-emerald-500 mt-4 rounded-full"></div>
        </header>

        {/* Content */}
        <div className="space-y-8">
          {/* Intro */}
          <section>
            <p className="leading-relaxed">{text.intro}</p>
          </section>

          {/* Introduction */}
          <section>
            <h2
              className={`text-xl font-bold mb-3 ${
                theme === 'dark' ? 'text-white' : 'text-slate-800'
              }`}
            >
              {text.introduction}
            </h2>

            <p>{text.introductionText}</p>
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

          {/* Info Usage */}
          <section>
            <h2
              className={`text-xl font-bold mb-3 ${
                theme === 'dark' ? 'text-white' : 'text-slate-800'
              }`}
            >
              {text.infoTitle}
            </h2>

            <ul className="list-disc pl-5 space-y-2 marker:text-emerald-500">
              {text.infoList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Sharing */}
          <section>
            <h2
              className={`text-xl font-bold mb-3 ${
                theme === 'dark' ? 'text-white' : 'text-slate-800'
              }`}
            >
              {text.sharing}
            </h2>

            <p className="mb-3">{text.sharingText}</p>

            <ul className="list-disc pl-5 space-y-2 marker:text-emerald-500">
              {text.sharingList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Security */}
          <section
            className={`p-4 rounded-lg ${
              theme === 'dark' ? 'bg-slate-800/50' : 'bg-slate-50'
            }`}
          >
            <h2
              className={`text-xl font-bold mb-3 ${
                theme === 'dark' ? 'text-white' : 'text-slate-800'
              }`}
            >
              {text.security}
            </h2>

            <p>{text.securityText}</p>
          </section>

          {/* Changes */}
          <section>
            <h2
              className={`text-xl font-bold mb-3 ${
                theme === 'dark' ? 'text-white' : 'text-slate-800'
              }`}
            >
              {text.changes}
            </h2>

            <p>{text.changesText}</p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Policy
