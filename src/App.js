import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Router>
        {/* Header Element Always Being on Page No Matter Route */}
        <Header/>
        <div>
          <Routes>

            {/* Main Home Route */}
            <Route
              element={<Home/>}
              path='/'
            />

            {/* Contact Route */}
            <Route
              element={<Contact/>}
              path='/contact'
            />

          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
