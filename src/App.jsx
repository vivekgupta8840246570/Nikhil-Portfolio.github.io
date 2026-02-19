import { Toaster } from "@/components/ui/toaster"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NetworkBackground from '@/components/portfolio/NetworkBackground';

function App() {
    return (
        <Router>
            <NetworkBackground />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Toaster />
        </Router>
    )
}

export default App
