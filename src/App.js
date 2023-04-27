import './App.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Cart from './components/Body/Cart/Cart';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import NewsPage from './pages/NewsPage';
import { getAllProducts } from './services/apiService';
import { setProducts } from './services/stateService';
import ServicesPage from './pages/ServicesPage';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        getAllProducts().then((data) => {
            dispatch(setProducts(data));
        });
    }, [dispatch]);

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/services" element={<ServicesPage />} />
            </Routes>
            <Cart />
            <Footer />
        </div>
    );
}

export default App;
