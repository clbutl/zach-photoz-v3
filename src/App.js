import { HashRouter as Router } from 'react-router-dom';
import './App.css';
import AnimatedRoutes from './components/AnimatedRoutes';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className='app-div'>
      <Router>
        {/* Header Element Always Being on Page No Matter Route */}
        <Header/>
        <div>
          <ScrollToTop/>
          <AnimatedRoutes/>
        </div>
      </Router>
    </div>
  );
}

export default App;
