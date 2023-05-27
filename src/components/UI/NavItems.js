import { createRef } from 'react'
import Home from '../Home/Home'
import About from '../About/About'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
const NavItems = [
  { path: '/', name: 'Home', element: <Home />, nodeRef: createRef() },
  { path: '/home', name: 'Home', element: <Home />, nodeRef: createRef() },
  { path: '/about', name: 'About', element: <About />, nodeRef: createRef() },
  {
    path: '/contact',
    name: 'Contact',
    element: <Contact />,
    nodeRef: createRef(),
  },
  { path: '/projects', name: 'Projects', element: <Projects />, nodeRef: createRef()}
]

export default NavItems