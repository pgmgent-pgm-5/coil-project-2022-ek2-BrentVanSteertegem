import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { Outlet } from 'react-router-dom'

// Add all icons to library so they can be used dynamically
library.add(fas, fab)

const App = () => {
  return (
    <Outlet />
  )
}

export default App