import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

import {
  Routes,
  Route,
  Link,
} from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/about'
          element={<About />}
        />
        <Route
          path='/contact'
          element={<Contact />}
        />
      </Routes>
    </div>
  );
}

export default App;
