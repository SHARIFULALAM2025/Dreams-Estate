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
          { id: 223, Name: 'Rent Grid with sidebar', path: '/RentGridSidebar' }, // ইউনিক পাথ
          { id: 224, Name: 'Rent List with sidebar', path: '/RentListSidebar' }, // ইউনিক পাথ
        ],
      },
    ],
  },
]
