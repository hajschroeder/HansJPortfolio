import { createRef, useState, useEffect, Fragment } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { useLocation, useOutlet, NavLink, Route } from 'react-router-dom'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'
import Layout from './components/UI/Layout'
// import NavItems from './components/UI/Layout'

const routes = [
  { path: '/', name: 'Home', element: <Home />, nodeRef: createRef() },
  { path: '/home', name: 'Home', element: <Home />, nodeRef: createRef() },
  { path: '/about', name: 'About', element: <About />, nodeRef: createRef() },
  {
    path: '/contact',
    name: 'Contact',
    element: <Contact />,
    nodeRef: createRef(),
  },
  { path: '/projects', name: 'Projects', element: <Projects />, nodeRef: createRef() }
]



const App = () => {
  const [transition, setTransition] = useState(true)
  const location = useLocation()
  const currentOutlet = useOutlet()
  const { nodeRef } =
    routes.find((route) => route.path === location.pathname) ?? {}

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 960px)");
    setTransition(!mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setTransition(!event.matches);
    }

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <Fragment>
      <Layout>
        {routes.map((route) => (
          <Route
            key={route.path}
            as={NavLink}
            to={route.path}
            className={({ isActive }) => (isActive ? 'active' : undefined)}
            end
          >
            {route.name}
          </Route>
        ))}
      </Layout>
          {transition}
      {/* {transition && ( */}
        <SwitchTransition>
          <CSSTransition
            key={location.pathname}
            nodeRef={nodeRef}
            in={true}
            timeout={300}
            classNames="page"
            unmountOnExit
          >
            {(state) => (
              <div ref={nodeRef} className="page">
                {currentOutlet}
              </div>
            )}
          </CSSTransition>
        </SwitchTransition>
      {/* )} */}


    <div class='footer'>
        <p>site built by hans </p>
    </div>
    </Fragment>

  )
}

export default App;
