import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'unfonts.css'
import './style/reset.css'
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './components/index.ts'
import { BricksPage, FAQPage, HomePage, MinifigsPage, OtherProductsPage, PageNotFound, PlatesPage, PrivacyPolicyPage, ReturnPolicyPage, ShippingPage, SitemapPage, TermsAndConditionsPage, TrackingPage } from './pages'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path='home' element={<Navigate to='/' replace={true} />} />
            <Route path='FAQ' element={<FAQPage />} />
            <Route path='return-policy' element={<ReturnPolicyPage />} />
            <Route path='shipping' element={<ShippingPage />} />
            <Route path='tracking' element={<TrackingPage />} />
            <Route path='terms-and-conditions' element={<TermsAndConditionsPage />} />
            <Route path='privacy-policy' element={<PrivacyPolicyPage />} />
            <Route path='sitemap' element={<SitemapPage />} />
          </Route>
          <Route path='bricks' element={<DefaultLayout />}>
            <Route index element={<BricksPage />} />
          </Route>
          <Route path='plates' element={<DefaultLayout />}>
            <Route index element={<PlatesPage />} />
          </Route>
          <Route path='minifigs' element={<DefaultLayout />}>
            <Route index element={<MinifigsPage />} />
          </Route>
          <Route path='other-products' element={<DefaultLayout />}>
            <Route index element={<OtherProductsPage />} />
          </Route>
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
