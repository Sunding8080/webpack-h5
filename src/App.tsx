import React, { Suspense, lazy } from 'react'
import PageRoutes from './router'
import { RecoilRoot } from 'recoil'

const App = () => {
  return (
    <RecoilRoot>
      <Suspense fallback={<div>loading....</div>}>
        <PageRoutes></PageRoutes>
      </Suspense>
    </RecoilRoot>
  )
}

export default App
