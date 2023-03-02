import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
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

          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
