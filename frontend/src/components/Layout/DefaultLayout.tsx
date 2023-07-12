import { Outlet } from 'react-router-dom'
import { Header } from '../Header'
import { AppContainer } from '../Container'
import { Footer } from '../Footer'

export const DefaultLayout = () => {
  return (
    <>
      <Header />
      <main>
        <AppContainer>
            <Outlet />
        </AppContainer>
      </main>
      <Footer />
    </>
  )
}