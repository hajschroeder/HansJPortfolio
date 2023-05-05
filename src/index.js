import { createRef } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, NavLink } from 'react-router-dom'
import  App from './App'
import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'
import './index.css'

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
  { path: '/projects', name: 'Projects', element: <Projects />, nodeRef: createRef()}
]

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: routes.map((route) => ({
      index: route.path === '/',
      path: route.path === '/' ? undefined : route.path,
      element: route.element,
    })),
  },
])

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<RouterProvider router={router} />)

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// import './index.css';
// import App from './App';
// import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';

// const router = createBrowserRouter([
//   { element: <App />,
// },
// ])

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter router={router}>
//     <App />
//   </BrowserRouter>
// );

