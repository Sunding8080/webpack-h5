import React, { lazy } from 'react'
import {
  HashRouter as Router,
  // BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

const Home = lazy(
  () => import(/* webpackChunkName: "page-home" */ '@/pages/home')
)

const NotFound = lazy(
  () => import(/* webpackChunkName: "page-not-found" */ '@/pages/not-found')
)

const Login = lazy(
  () => import(/* webpackChunkName: "page-home" */ '@/pages/login')
)

const PageRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
)

export default PageRoutes
