import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Explore from './Pages/Explore';
import Login from './Pages/Login';
import Main from './Pages/Main';
import Register from './Pages/Register';
import Updates from './Pages/Updates';
function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Main />} />
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
