import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'unfonts.css'
import './style/reset.css'
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './components/index.ts'
import { BricksPage, FAQPage, HomePage, LoginPage, MinifigsPage, OtherProductsPage, PageNotFound, PlatesPage, PrivacyPolicyPage, ReturnPolicyPage, ShippingPage, SitemapPage, TermsAndConditionsPage, TrackingPage } from './pages'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: import.meta.env.VITE_API_URL,
  cache: new InMemoryCache(),
  headers: {
    "Access-Control-Allow-Origin": import.meta.env.VITE_NODE_ENV == 'development' ? import.meta.env.VITE_CORS_DEV_URL! : import.meta.env.VITE_CORS_PRD_URL!,
   },
  credentials: 'include'
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ApolloProvider client={client}>
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route path='/' element={<DefaultLayout />}>
            <Route path='admin/login' element={<LoginPage />} />
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
          </Route>
        </Routes>
      </BrowserRouter>
    </StrictMode>
  </ApolloProvider>
)
