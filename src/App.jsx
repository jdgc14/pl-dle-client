import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
    return (
        <div className="App bg-dark text-white py-5">
            <HashRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
                <Footer />
            </HashRouter>
        </div>
    )
}

export default App
