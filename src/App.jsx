import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Explore from './components/Explore';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Updates from './components/Updates';
function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/explore" element={<Explore />} />
                    <Route path="/updates" element={<Updates />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
