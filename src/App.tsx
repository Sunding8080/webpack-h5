import React, { Suspense, lazy } from 'react'
import PageRoutes from './router'
import { useRoutes } from 'react-router-dom'

const Home = lazy(
  () => import(/* webpackChunkName: "page-home" */ '@/pages/home')
)

const NotFound = lazy(
  () => import(/* webpackChunkName: "page-not-found" */ '@/pages/not-found')
)

const Login = lazy(
  () => import(/* webpackChunkName: "page-home" */ '@/pages/login')
)

const App = () => {
  return (
    <Suspense fallback={<div></div>}>
      <PageRoutes></PageRoutes>
    </Suspense>
  )
}

export default App
