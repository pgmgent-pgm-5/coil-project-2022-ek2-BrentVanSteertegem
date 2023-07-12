import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'unfonts.css'
import './style/reset.css'
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './components/index.ts'
import { FAQPage, HomePage, PageNotFound, PrivacyPolicyPage, ReturnPolicyPage, ShippingPage, SitemapPage, TermsAndConditionsPage, TrackingPage } from './pages'

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
            <Route path='*' element={<PageNotFound />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
