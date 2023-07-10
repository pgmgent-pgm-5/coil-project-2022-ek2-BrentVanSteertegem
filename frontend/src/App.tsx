import { AppContainer, Footer, Header } from './components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

// Add all icons to library so they can be used dynamically
library.add(fas, fab)

const App = () => {
  return (
    <>
      <Header />
      <AppContainer>
      </AppContainer>
      <Footer />
    </>
  )
}

export default App