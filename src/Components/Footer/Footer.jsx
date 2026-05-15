import React from 'react'
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
  return (
    <footer className="text-white bg-slate-950   overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Section: Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-10 ">
          {/* Pages Column */}
          <div className="z-10">
            <h3 className="text-white text-xl font-bold mb-2">Pages</h3>
            <div className="w-10 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mb-6"></div>
            <div className="flex flex-col space-y-3">
              {[
                { text: 'Our Team', href: '#' },
                { text: 'Pricing Plans', href: '#' },
                { text: 'Gallery', href: '#' },
                { text: 'Settings', href: '#' },
                { text: 'Profile', href: '#' },
                { text: 'Listings', href: '#' },
              ].map((item) => (
                <a
                  href={item.href}
                  key={item.text}
                  className="text-slate-300 hover:text-emerald-400 hover:underline transition-colors cursor-pointer"
                >
                  {item.text}
                </a>
              ))}
            </div>
          </div>

          {/* Company Column */}
          <div className="z-10">
            <h3 className="text-white text-xl font-bold mb-2">Company</h3>
            <div className="w-10 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mb-6"></div>
            <div className="flex flex-col space-y-3">
              {[
                { text: 'About Us', href: '#' },
                { text: 'Careers', href: '#' },
                { text: 'Blog', href: '#' },
                { text: 'Affiliate Program', href: '#' },
                { text: 'Add Your Listing', href: '#' },
                { text: 'Our Partners', href: '#' },
              ].map((item) => (
                <a
                  href={item.href}
                  key={item.text}
                  className="text-slate-300 hover:underline hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  {item.text}
                </a>
              ))}
            </div>
          </div>

          {/* Destinations Column */}
          <div className="z-10">
            <h3 className="text-white text-xl font-bold mb-2">Destinations</h3>
            <div className="w-10 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mb-6"></div>
            <div className="flex flex-col space-y-3">
              {[
                { text: 'Hawai', href: '#' },
                { text: 'Istanbul', href: '#' },
                { text: 'San Diego', href: '#' },
                { text: 'Belgium', href: '#' },
                { text: 'Newyork', href: '#' },
                { text: 'Los Angeles', href: '#' },
              ].map((item) => (
                <a
                  key={item.text}
                  href={item.href}
                  className="text-slate-300 hover:underline hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  {item.text}
                </a>
              ))}
            </div>
          </div>

          {/* Useful Links Column */}
          <div className="z-10">
            <h3 className="text-white text-xl font-bold mb-2">Useful Links</h3>
            <div className="w-10 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mb-6"></div>

            <div className="flex flex-col space-y-3">
              {[
                { text: 'Legal Notice', href: '#' },
                { text: 'Privacy Policy', href: '#' },
                { text: 'Terms & Conditions', href: '#' },
                { text: 'Support', href: '#' },
                { text: 'Refund Policy', href: '#' },
                { text: 'Contact Us', href: '#' },
              ].map((item) => (
                <a
                  href={item.href}
                  key={item.text}
                  className="text-slate-300 hover:underline hover:text-emerald-400 transition-colors cursor-pointer w-fit"
                >
                  {item.text}
                </a>
              ))}
            </div>
          </div>
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
                  Customer Support
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
                  Drop Us an Email
                </p>
                <p className="text-white font-bold text-sm sm:text-base">
                  dreamsestate@gmail.com
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
                  Toll Free Phone
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
          Copyright © 2026. All Rights Reserved,{' '}
          <span className="text-emerald-400">Dreams Estate</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
