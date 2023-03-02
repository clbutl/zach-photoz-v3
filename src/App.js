import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <div>
          <Routes>

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
