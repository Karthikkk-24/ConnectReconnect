import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Dashboard';
import Explore from './Pages/Explore';
import Login from './Pages/Login';
import Main from './Pages/Main';
import PublicRoute from './Pages/PublicRoute';
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
                    <Route path="/main" element={<Main />} />
                    <Route path="/" element={<PublicRoute />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
