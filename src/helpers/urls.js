export const domain = 'https://ecommerce.main-gate.appx.uz'
export const APP_VERSION = '/adminka'
export const APP_MODE = '/dev'

// admin routes

export const loginUrl = '/auth/login'
export const refreshUrl = '/auth/refresh' 

// categoryes
export const categoriestListUrl = '/category/list'
export const categoryAddUrl = '/category/add'
export const getcaregoryUpdateUrl =(id) => `/category/edit/${id}`
export const getcaregoryDeleteUrl = (id) => `/category/${id}`
