import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CategoryPage from './pages/CategoryPage';
import Header from './components/Header';
import SortFilter from './components/SortFilter';

function App() {
  return (
    <Router>
      <Header />
      <div style={{ display: 'flex', justifyContent: 'end', margin: '20px 0' }}>
        <SortFilter />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/category/:category" element={<CategoryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
