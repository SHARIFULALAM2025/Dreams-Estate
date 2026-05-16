import React from 'react'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
} from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

/**
 *
 *





https://ibb.co.com/6chRvWSC
 */

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'SHARIFUL ALAM',
      role: 'CEO',
      img: 'https://i.ibb.co.com/8gw9c3H1/profile-pic.png',
    },
    {
      id: 2,
      name: 'Carol Currie',
      role: 'Marketing Head',
      img: 'https://i.ibb.co.com/FbZTfjb8/user-01.jpg',
    },
    {
      id: 3,
      name: 'Daniel Moreno',
      role: 'Marketing Head',
      img: 'https://i.ibb.co.com/MxhjQfXY/user-02.webp',
    },
    {
      id: 4,
      name: 'Linda Martin',
      role: 'Developer',
      img: 'https://i.ibb.co.com/XfH9sFVM/user-04.webp',
    },
    {
      id: 5,
      name: 'Bonnie Scott',
      role: 'CEO',
      img: 'https://i.ibb.co.com/NgbWDmbk/user-03.webp',
    },
    {
      id: 6,
      name: 'Jacquelin Maldonado',
      role: 'Marketing Head',
      img: 'https://i.ibb.co.com/xSFgPN1h/user-05.jpg',
    },
    {
      id: 7,
      name: 'Peggy Smith',
      role: 'Marketing Head',
      img: 'https://i.ibb.co.com/W47pqs3P/user-07.jpg',
    },
    {
      id: 8,
      name: 'Mary Oliver',
      role: 'Developer',
      img: 'https://i.ibb.co.com/RTd3sHNx/user-13.webp',
    },
  ]

  const socialLinks = [
    { icon: <FaXTwitter />, link: '#' },
    { icon: <FaFacebookF />, link: '#' },
    { icon: <FaInstagram />, link: '#' },
    { icon: <FaLinkedinIn />, link: '#' },
    { icon: <FaPinterestP />, link: '#' },
  ]

  return (
    <section className="bg-slate-50 dark:bg-slate-950 py-20 px-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header (Optional but recommended) */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
            Meet Our <span className="text-emerald-500">Experts</span>
          </h2>
          <div className="w-20 h-1.5 bg-emerald-500 mx-auto rounded-full"></div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 group text-center"
            >
              {/* Profile Image */}
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 bg-emerald-500 rounded-full scale-0 group-hover:scale-110 transition-transform duration-500 opacity-20"></div>
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full rounded-full object-cover border-4 border-slate-50 dark:border-slate-800 shadow-inner"
                />
              </div>

              {/* Name & Role */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-emerald-500 transition-colors">
                  {member.name}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">
                  {member.role}
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex justify-center items-center gap-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-300 hover:bg-slate-900 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-white transition-all duration-300 text-sm shadow-sm"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
