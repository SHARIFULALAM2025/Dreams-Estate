import { IoIosArrowDown } from 'react-icons/io'

export const navData = [
  {
    id: 1,
    path: '/',
    Name: 'Home',
  },
  {
    id: 2,
    path: '#',
    Name: 'Listing',
    icon: <IoIosArrowDown />,
    hasDropdown: true,
    subLink: [
      {
        id: 21,
        Name: 'Buy Property',
        path: '#',
        icon: <IoIosArrowDown />,
        hasNested: true,
        nestedLink: [
          { id: 211, Name: 'Buy Grid', path: '/Buy' },
          { id: 212, Name: 'Buy List', path: '/List' },
          { id: 213, Name: 'Buy Grid with sidebar', path: '/GridSidebar' },
          { id: 214, Name: 'Buy List with sidebar', path: '/ListSidebar' },
        ],
      },
      {
        id: 22,
        Name: 'Rent Property',
        path: '#',
        icon: <IoIosArrowDown />,
        hasNested: true,
        nestedLink: [
          { id: 221, Name: 'Rent Grid', path: '/Rent' },
          { id: 222, Name: 'Rent List', path: '/RentList' },
          { id: 223, Name: 'Rent Grid with sidebar', path: '/RentGridSidebar' },
          { id: 224, Name: 'Rent List with sidebar', path: '/RentListSidebar' },
        ],
      },
    ],
  },
  {
    id: 3,
    path: '#',
    Name: 'Our Team',
    icon: <IoIosArrowDown />,
    hasDropdown: true,
    subLink: [
      {
        id: 32,
        Name: 'All Agent',
        path: '#',
        icon: <IoIosArrowDown />,
        hasNested: true,
        nestedLink: [
          { id: 321, Name: 'Agent Grid', path: '/Buy' },
          { id: 322, Name: 'Agent List', path: '/List' },
          { id: 323, Name: 'Agent Grid with sidebar', path: '/GridSidebar' },
          { id: 324, Name: 'Agent List with sidebar', path: '/ListSidebar' },
        ],
      },
      {
        id: 33,
        Name: 'All Agency',
        path: '#',
        icon: <IoIosArrowDown />,
        hasNested: true,
        nestedLink: [
          { id: 331, Name: 'Agency Grid', path: '/Rent' },
          { id: 332, Name: 'Agency List', path: '/RentList' },
          {
            id: 333,
            Name: 'Agency Grid with sidebar',
            path: '/RentGridSidebar',
          },
          {
            id: 334,
            Name: 'Agency List with sidebar',
            path: '/RentListSidebar',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    Name: 'Blog',
    path: '#',
    icon: <IoIosArrowDown />,
    hasDropdown: true,
    subLink: [
      { id: 431, Name: 'Blog Grid', path: '/BlogGrid' },
      { id: 432, Name: 'Blog List', path: '/BlogList' },
    ],
  },
  {
    id: 5,
    Name: 'Others',
    path: '#',
    icon: <IoIosArrowDown />,
    hasDropdown: true,
    subLink: [
      { id: 541, Name: 'About Us', path: '/About' },
      { id: 542, Name: 'Gallery', path: '/gallery' },
      { id: 543, Name: 'Contact Us', path: '/Contact' },
      { id: 544, Name: 'Testimonial', path: '/Testimonial' },
      { id: 545, Name: 'FAQ', path: '/Faq' },
      { id: 546, Name: 'Pricing', path: '/Pricing' },
      { id: 547, Name: 'Terms & Conditions', path: '/Conditions' },
      { id: 548, Name: 'Privacy Policy', path: '/Policy' },
      { id: 549, Name: 'Our Team', path: '/team' },
    ],
  },
]
