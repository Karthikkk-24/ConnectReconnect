import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const PublicRoute = () => {
    useEffect(() => {
        checkLogin();
    }, []);

    function checkLogin() {
        if (localStorage.getItem('token')) {
            // window.location.href = '/dashboard';
        } else {
            localStorage.clear();
            sessionStorage.clear();
            window.location.href = '/login';
        }
    }

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center">
            <div className="w-full h-full flex items-start justify-start">
                <div className="w-96 h-full flex flex-col items-start justify-start">
                    <Sidebar />
                </div>
                <div className="w-full h-full flex flex-col items-start justify-start">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default PublicRoute;
