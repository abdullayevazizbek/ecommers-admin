import { AtributePage, BannerPage, BrandPage, CategoriyPage, Dashboard, ProductPage } from "../components/index";

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
