import { lazy } from 'react'

const route = {
    path: "/category",
    exact: false,
    public: true,
    component: lazy(() => import("."))
}

export default route