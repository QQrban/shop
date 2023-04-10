import './App.scss';
import HomePage from './pages/HomePage';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />

            </Routes>
        </div>
    );
}

export default App;
