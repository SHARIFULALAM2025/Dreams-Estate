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
import ErrorPage404 from '../Error/ErrorPage404'
import BlogList from '../Blog/BlogList'
import BlogGrid from '../Blog/BlogGrid'
import About from '../Others/About/About'
import Policy from '../Others/Policy'
import Contact from '../Others/Contact'
import Faq from '../Others/Faq'
import Pricing from '../Others/Pricing'
import Testimonial from '../Others/Testimonial'
import Conditions from '../Others/Conditions'
import Gallery from '../Others/Gallery/Gallery'
import Team from '../Others/Team/Team'
import AddProperty from '../../AddProperty/AddProperty'
import AgentDetails from '../Listing/Buy/AgentDetails'




export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    ErrorBoundary: ErrorPage404,
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
      { path: 'BlogGrid', Component: BlogGrid },
      { path: 'BlogList', Component: BlogList },
      { path: 'About', Component: About },
      { path: 'Faq', Component: Faq },
      { path: 'Contact', Component: Contact },
      { path: 'Policy', Component: Policy },
      { path: 'Pricing', Component: Pricing },
      { path: 'Testimonial', Component: Testimonial },
      { path: 'Conditions', Component: Conditions },
      { path: 'gallery', Component: Gallery },
      { path: 'team', Component: Team },
      { path: 'addProperty', Component: AddProperty },
      { path: 'BuyDetails/:agentId', Component: AgentDetails },
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
