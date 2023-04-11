import './App.scss';
import HomePage from './pages/HomePage';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
