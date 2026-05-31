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

import AgentDetails from '../Listing/Buy/AgentDetails'
import BlogDetails from '../Blog/BlogDetails'
import AddProperty from '../AddProperty/AddProperty'
import AgencyDetails from '../Listing/Rent/AgencyDetails'
import DashboardLayout from './DashboardLayout'
import ForgetPassword from '../Auth/ForgetPassword'
import BuyProperty from '../BuyProperty/BuyGrid'
import PropertyDetails from '../Pages/Home/PropertyDetails'
import AgentList from '../Listing/AgentList/AgentList'
import AgentSidebar from '../Listing/AgentSidebar/AgentSidebar'
import AgentListSidebar from '../Listing/AgentListSidebar/AgentListSidebar'
import AgentListProfile from '../Listing/AgentListProfile/AgentListProfile'
import AgentProfileListSidebar from '../Listing/AgentProfileListSidebar/AgentProfileListSidebar'
import AgentGridProfile from '../Listing/AgentGridProfile/AgentGridProfile'
import BuyList from '../Listing/BuyList/BuyList'
import BuyGridSidebar from '../Listing/BuyGridSidebar/BuyGridSidebar'
import GridBuyListSidebar from '../Listing/GridBuyListSidebar/GridBuyListSidebar'
import SellGridProperty from '../Listing/SellGridProperty/SellGridProperty'
import SellListProperty from '../Listing/SellListProperty/SellListProperty'
import SellSidebarGrid from '../Listing/SellSidebarGrid/SellSidebarGrid'
import SellListSidebar from '../Listing/SellListSidebar/SellListSidebar'




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
      { path: 'AgentGridProfile', Component: AgentGridProfile },
      { path: 'AgentProfileSidebar', Component: AgentProfileListSidebar },
      { path: 'AgentListProfile', Component: AgentListProfile },
      { path: 'AgencyLSidebar', Component: AgentListSidebar },
      { path: 'AgentSidebar', Component: AgentSidebar },
      { path: 'AgencyList', Component: AgentList },
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
      { path: 'buyProperty', Component: BuyProperty },
      { path: 'buyList', Component: BuyList },
      { path: 'SellSidebarGrid', Component: SellSidebarGrid },
      { path: 'SellListSidebar', Component: SellListSidebar },
      { path: 'SellGrid', Component: SellGridProperty },
      { path: 'SellList', Component: SellListProperty },
      { path: 'buyGridSidebar', Component: BuyGridSidebar },
      { path: 'buyListSidebar', Component: GridBuyListSidebar },
      { path: 'addProperty', Component: AddProperty },
      { path: 'BuyDetails/:agentId', Component: AgentDetails },
      { path: 'BlogDetails/:blogId', Component: BlogDetails },
      { path: 'propertyDetails/:propertyId', Component: PropertyDetails },
      { path: 'propertyDetails/:propertyId', Component: PropertyDetails },
      { path: 'GridPropertyDetails/:propertyId', Component: PropertyDetails },
      {
        path: 'buyList/propertyDetails/:propertyId',
        Component: PropertyDetails,
      },
      {
        path: 'buyProperty/propertyDetails/:propertyId',
        Component: PropertyDetails,
      },
      { path: 'AgencyDetails/:agencyId', Component: AgencyDetails },
    ],
  },
  {
    path: 'auth',
    Component: AuthLayout,
    children: [
      { path: 'login', Component: Login },
      { path: 'register', Component: Register },
      { path: 'resetPassword', Component: ForgetPassword },
    ],
  },
  {
    path: 'dashboard',
    Component: DashboardLayout,
    children: [],
  },
])



