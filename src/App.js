import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Books from './pages/books';
import About from './pages/about';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.comp';

function App() {
  function scrollTop() {
    window.scrollTo(0, 0);
  }
  return (
    <div className='App'>
       <Router>
          <ScrollToTop />
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} preload={scrollTop} />
            <Route path="/books" element={<Books />} preload={scrollTop} />
            <Route path="/about" element={<About />} preload={scrollTop} />
          </Routes>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
