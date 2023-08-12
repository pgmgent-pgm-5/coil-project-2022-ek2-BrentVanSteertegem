import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

// Add all icons to library so they can be used dynamically
library.add(fas, fab)

const App = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
}, [location])

  return (
    <Outlet />
  )
}

export default App