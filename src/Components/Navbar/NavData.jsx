import { IoIosArrowDown } from 'react-icons/io'

export const navData = [
  {
    id: 1,
    path: '/',
    Name: {
      en: 'Home',
      bn: 'হোম',
    },
  },
  {
    id: 2,
    path: '#',
    Name: {
      en: 'Listing',
      bn: 'লিস্টিং',
    },
    icon: <IoIosArrowDown />,
    hasDropdown: true,
    subLink: [
      {
        id: 21,
        Name: {
          en: 'Buy Property',
          bn: 'প্রপার্টি কিনুন',
        },
        path: '#',
        icon: <IoIosArrowDown />,
        hasNested: true,
        nestedLink: [
          {
            id: 211,
            Name: { en: 'Buy Grid', bn: 'বাই গ্রিড' },
            path: '/buyProperty',
          },
          { id: 212, Name: { en: 'Buy List', bn: 'বাই লিস্ট' }, path: '/buyList' },
          {
            id: 213,
            Name: { en: 'Buy Grid with sidebar', bn: 'সাইডবারসহ গ্রিড' },
            path: '/GridSidebar',
          },
          {
            id: 214,
            Name: { en: 'Buy List with sidebar', bn: 'সাইডবারসহ লিস্ট' },
            path: '/ListSidebar',
          },
        ],
      },
      {
        id: 22,
        Name: {
          en: 'Rent Property',
          bn: 'ভাড়া প্রপার্টি',
        },
        path: '#',
        icon: <IoIosArrowDown />,
        hasNested: true,
        nestedLink: [
          {
            id: 221,
            Name: { en: 'Rent Grid', bn: 'ভাড়া গ্রিড' },
            path: '/Rent',
          },
          {
            id: 222,
            Name: { en: 'Rent List', bn: 'ভাড়া লিস্ট' },
            path: '/RentList',
          },
          {
            id: 223,
            Name: { en: 'Rent Grid with sidebar', bn: 'সাইডবারসহ ভাড়া গ্রিড' },
            path: '/RentGridSidebar',
          },
          {
            id: 224,
            Name: { en: 'Rent List with sidebar', bn: 'সাইডবারসহ ভাড়া লিস্ট' },
            path: '/RentListSidebar',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    path: '#',
    Name: {
      en: 'Our Team',
      bn: 'আমাদের টিম',
    },
    icon: <IoIosArrowDown />,
    hasDropdown: true,
    subLink: [
      {
        id: 32,
        Name: {
          en: 'All Agent',
          bn: 'সব এজেন্ট',
        },
        path: '#',
        icon: <IoIosArrowDown />,
        hasNested: true,
        nestedLink: [
          {
            id: 321,
            Name: { en: 'Agent Grid', bn: 'এজেন্ট গ্রিড' },
            path: '/Buy',
          },
          {
            id: 322,
            Name: { en: 'Agent List', bn: 'এজেন্ট লিস্ট' },
            path: '/AgentListProfile',
          },
          {
            id: 323,
            Name: {
              en: 'Agent Grid with sidebar',
              bn: 'সাইডবারসহ এজেন্ট গ্রিড',
            },
            path: '/AgentGridProfile',
          },
          {
            id: 324,
            Name: {
              en: 'Agent List with sidebar',
              bn: 'সাইডবারসহ এজেন্ট লিস্ট',
            },
            path: '/AgentProfileSidebar',
          },
        ],
      },
      {
        id: 33,
        Name: {
          en: 'All Agency',
          bn: 'সব এজেন্সি',
        },
        path: '#',
        icon: <IoIosArrowDown />,
        hasNested: true,
        nestedLink: [
          {
            id: 331,
            Name: { en: 'Agency Grid', bn: 'এজেন্সি গ্রিড' },
            path: '/Rent',
          },
          {
            id: 332,
            Name: { en: 'Agency List', bn: 'এজেন্সি লিস্ট' },
            path: '/AgencyList',
          },
          {
            id: 333,
            Name: {
              en: 'Agency Grid with sidebar',
              bn: 'সাইডবারসহ এজেন্সি গ্রিড',
            },
            path: '/AgentSidebar',
          },
          {
            id: 334,
            Name: {
              en: 'Agency List with sidebar',
              bn: 'সাইডবারসহ এজেন্সি লিস্ট',
            },
            path: '/AgencyLSidebar',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    Name: {
      en: 'Blog',
      bn: 'ব্লগ',
    },
    path: '#',
    icon: <IoIosArrowDown />,
    hasDropdown: true,
    subLink: [
      {
        id: 431,
        Name: { en: 'Blog Grid', bn: 'ব্লগ গ্রিড' },
        path: '/BlogGrid',
      },
      {
        id: 432,
        Name: { en: 'Blog List', bn: 'ব্লগ লিস্ট' },
        path: '/BlogList',
      },
    ],
  },
  {
    id: 5,
    Name: {
      en: 'Others',
      bn: 'অন্যান্য',
    },
    path: '#',
    icon: <IoIosArrowDown />,
    hasDropdown: true,
    subLink: [
      {
        id: 541,
        Name: { en: 'About Us', bn: 'আমাদের সম্পর্কে' },
        path: '/About',
      },
      { id: 542, Name: { en: 'Gallery', bn: 'গ্যালারি' }, path: '/gallery' },
      { id: 543, Name: { en: 'Contact Us', bn: 'যোগাযোগ' }, path: '/Contact' },
      {
        id: 544,
        Name: { en: 'Testimonial', bn: 'মতামত' },
        path: '/Testimonial',
      },
      { id: 545, Name: { en: 'FAQ', bn: 'প্রশ্নোত্তর' }, path: '/Faq' },
      {
        id: 546,
        Name: { en: 'Pricing', bn: 'মূল্য তালিকা' },
        path: '/Pricing',
      },
      {
        id: 547,
        Name: { en: 'Terms & Conditions', bn: 'শর্তাবলী' },
        path: '/Conditions',
      },
      {
        id: 548,
        Name: { en: 'Privacy Policy', bn: 'গোপনীয়তা নীতি' },
        path: '/Policy',
      },
      { id: 549, Name: { en: 'Our Team', bn: 'আমাদের টিম' }, path: '/team' },
    ],
  },
]
