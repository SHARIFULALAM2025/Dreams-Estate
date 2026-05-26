import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaHeadset,
  FaEnvelope,
  FaPhoneAlt,
} from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  const { i18n } = useTranslation()
  const currentLang = i18n.language
  const footerData = {
    pages: {
      title: {
        en: 'Pages',
        bn: 'পৃষ্ঠাগুলি',
      },
      links: [
        {
          en: 'Our Team',
          bn: 'আমাদের টিম',
          href: '#',
        },
        {
          en: 'Pricing Plans',
          bn: 'মূল্য পরিকল্পনা',
          href: '#',
        },
        {
          en: 'Gallery',
          bn: 'গ্যালারি',
          href: '#',
        },
        {
          en: 'Settings',
          bn: 'সেটিংস',
          href: '#',
        },
        {
          en: 'Profile',
          bn: 'প্রোফাইল',
          href: '#',
        },
        {
          en: 'Listings',
          bn: 'লিস্টিং',
          href: '#',
        },
      ],
    },

    company: {
      title: {
        en: 'Company',
        bn: 'কোম্পানি',
      },
      links: [
        {
          en: 'About Us',
          bn: 'আমাদের সম্পর্কে',
          href: '#',
        },
        {
          en: 'Careers',
          bn: 'ক্যারিয়ার',
          href: '#',
        },
        {
          en: 'Blog',
          bn: 'ব্লগ',
          href: '#',
        },
        {
          en: 'Affiliate Program',
          bn: 'অ্যাফিলিয়েট প্রোগ্রাম',
          href: '#',
        },
        {
          en: 'Add Your Listing',
          bn: 'আপনার লিস্টিং যোগ করুন',
          href: '#',
        },
        {
          en: 'Our Partners',
          bn: 'আমাদের পার্টনার',
          href: '#',
        },
      ],
    },

    destinations: {
      title: {
        en: 'Destinations',
        bn: 'গন্তব্যসমূহ',
      },
      links: [
        {
          en: 'Hawai',
          bn: 'হাওয়াই',
          href: '#',
        },
        {
          en: 'Istanbul',
          bn: 'ইস্তানবুল',
          href: '#',
        },
        {
          en: 'San Diego',
          bn: 'সান দিয়েগো',
          href: '#',
        },
        {
          en: 'Belgium',
          bn: 'বেলজিয়াম',
          href: '#',
        },
        {
          en: 'New York',
          bn: 'নিউ ইয়র্ক',
          href: '#',
        },
        {
          en: 'Los Angeles',
          bn: 'লস অ্যাঞ্জেলেস',
          href: '#',
        },
      ],
    },

    usefulLinks: {
      title: {
        en: 'Useful Links',
        bn: 'প্রয়োজনীয় লিংক',
      },
      links: [
        {
          en: 'Legal Notice',
          bn: 'আইনি নোটিশ',
          href: '#',
        },
        {
          en: 'Privacy Policy',
          bn: 'গোপনীয়তা নীতি',
          href: '#',
        },
        {
          en: 'Terms & Conditions',
          bn: 'শর্তাবলী',
          href: '#',
        },
        {
          en: 'Support',
          bn: 'সহায়তা',
          href: '#',
        },
        {
          en: 'Refund Policy',
          bn: 'রিফান্ড নীতি',
          href: '#',
        },
        {
          en: 'Contact Us',
          bn: 'যোগাযোগ করুন',
          href: '#',
        },
      ],
    },
  }
  return (
    <footer className="text-white bg-slate-950   overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-10">
          {Object.values(footerData).map((section, index) => (
            <div key={index} className="z-10">
              <h3 className="text-white text-xl font-bold mb-2">
                {section.title[currentLang] || section.title.en}
              </h3>

              <div className="w-10 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mb-6"></div>

              <div className="flex flex-col space-y-3">
                {section.links.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    className="text-slate-300 hover:text-emerald-400 hover:underline transition-colors cursor-pointer w-fit"
                  >
                    {item[currentLang] || item.en}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 right-0 pointer-events-none opacity-20 lg:opacity-40 select-none">
          <img
            src="https://i.ibb.co.com/Nnxm9JQB/Gemini-Generated-Image-nw48qvnw48qvnw48-removebg-preview.png"
            alt="decoration"
            className="h-64 md:h-80 lg:h-[450px] w-auto object-contain translate-x-10 translate-y-10"
          />
        </div>
        {/* Middle Section: Socials & Contact Info */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 z-10 relative">
          {/* Social Media Icons */}
          <div className="flex items-center gap-3">
            {[
              {
                icon: <FaFacebookF />,
                link: 'https://www.facebook.com/profile.php?id=61577170528426',
              },
              { icon: <FaXTwitter />, link: 'https://twitter.com/yourprofile' },
              {
                icon: <FaInstagram />,
                link: 'https://instagram.com/yourprofile',
              },
              {
                icon: <FaLinkedinIn />,
                link: 'https://www.linkedin.com/in/sharifulalam-dev',
              },
              {
                icon: <FaPinterestP />,
                link: 'https://pinterest.com/yourprofile',
              },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-900 hover:bg-emerald-400 hover:text-white transition-all cursor-pointer shadow-lg hover:-translate-y-1"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Contact Channels */}
          <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-6 md:gap-10">
            {/* Customer Support */}
            <a
              href="tel:+15658954598"
              className="flex items-center gap-3 group"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xl shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                <FaHeadset />
              </div>
              <div className="text-center md:text-left">
                <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                  {currentLang === 'bn' ? 'গ্রাহক সহায়তা' : 'Customer Support'}
                </p>
                <p className="text-white font-bold">+1 56589 54598</p>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:dreamsestate@gmail.com"
              className="flex items-center gap-3 group"
            >
              <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xl shadow-lg shadow-indigo-600/20 group-hover:scale-110 transition-transform">
                <FaEnvelope />
              </div>
              <div className="text-center md:text-left">
                <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                  {currentLang === 'bn'
                    ? 'আমাদেরকে একটি ইমেল পাঠান'
                    : ' Drop Us an Email'}
                </p>
                <p className="text-white font-bold text-sm sm:text-base">
                  {currentLang === 'bn'
                    ? 'dreamsestate@gmail.com'
                    : ' dreamsestate@gmail.com'}
                </p>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:180056565458"
              className="flex items-center gap-3 group"
            >
              <div className="w-12 h-12 rounded-full bg-rose-500 flex items-center justify-center text-white text-xl shadow-lg shadow-rose-500/20 group-hover:scale-110 transition-transform">
                <FaPhoneAlt />
              </div>
              <div className="text-center md:text-left">
                <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                  {currentLang === 'bn' ? 'টোল ফ্রি ফোন' : 'Toll Free Phone'}
                </p>
                <p className="text-white font-bold">1800 5656 5458</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section: Copyright */}
      <div className="text-center mt-10 p-5 border-t border-slate-800 px-6">
        <p className="text-sm text-slate-600 font-medium tracking-wide">
          {currentLang === 'bn'
            ? 'কপিরাইট © ২০২৬। সর্বস্বত্ব সংরক্ষিত।'
            : 'Copyright © 2026. All Rights Reserved,'}

          <span className="text-emerald-400">
            {currentLang === 'bn' ? 'স্বপ্ন এস্টেট' : 'Dreams Estate'}
          </span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
