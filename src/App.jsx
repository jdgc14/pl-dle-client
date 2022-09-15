import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Footer from './components/Footer'

function App() {
    return (
        <div className="App bg-dark text-white">
            <HashRouter>
                {/* <Header /> */}
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
                <Footer />
            </HashRouter>
        </div>
    )
}

export default App
