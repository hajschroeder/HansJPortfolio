// import React, { useState, createRef } from 'react';
// import './Dropdown.css';
// import { Link as NavLink } from 'react-router-dom';
// import Home from '../Home/Home';
// import Contact from '../Contact/Contact';
// import About from '../About/About';
// import Projects from '../Projects/Projects';
// // import NavItems from './NavItems'

// const routes = [
//   { path: '/', name: 'Home', element: <Home />, nodeRef: createRef() },
//   { path: '/home', name: 'Home', element: <Home />, nodeRef: createRef() },
//   { path: '/about', name: 'About', element: <About />, nodeRef: createRef() },
//   {
//     path: '/contact',
//     name: 'Contact',
//     element: <Contact />,
//     nodeRef: createRef(),
//   },
//   { path: '/projects', name: 'Projects', element: <Projects />, nodeRef: createRef()}
// ]


// function Dropdown() {
//   const [click, setClick] = useState(false);

//   const handleClick = () => setClick(!click);

//   return (
//     <>
//       <ul
//         onClick={handleClick}
//         className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
//       >
//         {routes.map((item, index) => {
//           return (
//             <li key={index}>
//               <NavLink
//                 className={item.name}
//                 to={item.path}
//                 onClick={() => setClick(false)}
//               >
//                 {item.title}
//               </NavLink>
//             </li>
//           );
//         })}
//       </ul>
//     </>
//   );
// }

// export default Dropdown;
