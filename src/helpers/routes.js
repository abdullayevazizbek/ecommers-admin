// import { AtributePage, BannerPage, BrandPage, CategoriyPage, Dashboard, ProductPage } from "../components/index";
import Dashboard from '../components/Dashboard'
import AtributePage from '../components/AtributePage'
import BannerPage from '../components/BannerPage'
import BrandPage from '../components/BrandPage'
import CategoriyPage from '../components/CategoriyPage'
import ProductPage from '../components/ProductPage'
import { LoginPage } from '../components'

export const routes = [
    {
        id: 1,
        path: '/',
        component: <Dashboard />,
    },
    {
        id: 2,
        path: '/products',
        component: <ProductPage />,
    },
    {
        id: 3,
        path: '/categoriya',
        component: < CategoriyPage />,
    },
    {
        id: 4,
        path: '/banner',
        component: <BannerPage />,
    },
    {
        id: 5,
        path: '/brend',
        component: <BrandPage />,
    },
    {
        id: 6,
        path: '/attribute',
        component: <AtributePage />,
    },
]

export const Loginroutes = [
    {
        id: 7,
        path: '/Login',
        component: <LoginPage />,
    }
]