import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Footer from './components/Footer'
// import CongratulationsPage from './components/CongratulationsPage'

function App() {
    return (
        <div className="App bg-dark text-white py-5">
            <HashRouter>
                {/* <Header /> */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route
                        path="/congratulations"
                        element={<CongratulationsPage />}
                    /> */}
                </Routes>
                <Footer />
            </HashRouter>
        </div>
    )
}

export default App
