import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'unfonts.css'
import './style/reset.css'
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import { Dashboard, DefaultLayout } from './components/index.ts'
import { FAQPage, HomePage, LoginPage, ProductsPage, PageNotFound, PrivacyPolicyPage, ReturnPolicyPage, ShippingPage, SitemapPage, TermsAndConditionsPage, TrackingPage, ProductPage, CartPage, SearchPage } from './pages'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { ContextProvider } from './ContextProvider.tsx'

const client = new ApolloClient({
  uri: import.meta.env.VITE_API_URL,
  cache: new InMemoryCache(),
  headers: {
    "Access-Control-Allow-Origin": import.meta.env.VITE_NODE_ENV == 'development' ? import.meta.env.VITE_CORS_DEV_URL! : import.meta.env.VITE_CORS_PRD_URL!,
   },
  credentials: 'include'
})

const accessToken = JSON.parse(localStorage.getItem('accessToken') || '{}')
const accessTokenIsValid = accessToken?.createdAt && Date.now() - accessToken.createdAt < 3600000

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ApolloProvider client={client}>
    <ContextProvider>
      <StrictMode>
        <BrowserRouter>
          <Routes>
            <Route element={<App />}>
              <Route path='dashboard'>
                {
                  accessTokenIsValid &&
                    <Route index element={<Dashboard />} />
                }
                <Route path='login' element={<DefaultLayout />}>
                  <Route index element={<LoginPage />} />
                </Route>
                <Route path='*' element={<DefaultLayout />}>
                  <Route index element={<PageNotFound />} />
                </Route>
              </Route>
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
                <Route path='cart' element={<CartPage />} />
                <Route path='search/:search' element={<SearchPage />} />
                <Route path='*' element={<PageNotFound />} />
              </Route>
              <Route path='bricks' element={<DefaultLayout />}>
                <Route index element={<ProductsPage />} />
                <Route path=':item' element={<ProductPage />} /> {/* TODO: Add 404 when invalid (sub)category is set in url */}
              </Route>
              <Route path='plates' element={<DefaultLayout />}>
                <Route index element={<ProductsPage />} />
                <Route path=':item' element={<ProductPage />} />
              </Route>
              <Route path='minifigs' element={<DefaultLayout />}>
                <Route index element={<ProductsPage />} />
                <Route path=':item' element={<ProductPage />} />
              </Route>
              <Route path='other-products' element={<DefaultLayout />}>
                <Route index element={<ProductsPage />} />
                <Route path=':item' element={<ProductPage />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </StrictMode>
    </ContextProvider>
  </ApolloProvider>
)
