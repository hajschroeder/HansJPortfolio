import './App.css';
import About from "./components/About/About";
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import Projects from './components/Projects/Projects';
import { Switch, Route, Router, Redirect } from 'react-router-dom'

function App () {
  return (
    <div>
  <Layout />
      <Switch>
        <Route path='/about' exact>
          <About />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/projects' exact>
          <Projects />
        </Route>

      </Switch>
    
  {/* </Layout> */}
  </div>
  );
}

export default App;
