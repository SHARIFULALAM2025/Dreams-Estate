import { createBrowserRouter } from 'react-router'
import MainLayout from './MainLayout'
import Home from '../Pages/Home/Home'
import Buy from '../Listing/Buy/Buy'
import Rent from '../Listing/Rent/Rent'
import AuthLayout from '../Auth/AuthLayout'
import Login from '../Auth/Login'
import Register from '../Auth/Register'
import List from '../Listing/List/List'
import GridSidebar from '../Listing/GridSidebar/GridSidebar'
import ListSidebar from '../Listing/ListSidebar/ListSidebar'
import RentList from '../Listing/RentList/RentList'
import RentGridSidebar from '../Listing/RentGridSidebar/RentGridSidebar'
import RentListSidebar from '../Listing/RentListSidebar/RentListSidebar'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      { path: 'Buy', Component: Buy },
      { path: 'List', Component: List },
      { path: 'GridSidebar', Component: GridSidebar },
      { path: 'ListSidebar', Component: ListSidebar },
      { path: 'Rent', Component: Rent },
      { path: 'RentList', Component: RentList },
      { path: 'RentGridSidebar', Component: RentGridSidebar },
      { path: 'RentListSidebar', Component: RentListSidebar },
    ],
  },
  {
    path: 'auth',
    Component: AuthLayout,
    children: [
      { path: 'login', Component: Login },
      { path: 'register', Component: Register },
    ],
  },
])
