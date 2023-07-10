import { Container, Header, Icon } from './components'
import { library } from '@fortawesome/fontawesome-svg-core'
import * as Icons from '@fortawesome/free-solid-svg-icons'

// Add all icons to library so they can be used dynamically
const iconList = Object.keys(Icons)
  .filter((key) => key !== 'fas' && key !== 'prefix')
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  .map((icon) => Icons[icon])
library.add(...iconList)

const App = () => {
  return (
    <>
      <Header />
      <Container>
      </Container>
    </>
  )
}

export default App