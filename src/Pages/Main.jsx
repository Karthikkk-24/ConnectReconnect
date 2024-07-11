import { useEffect } from 'react';

export default function Main() {
    useEffect(() => {
        checkLogin();
    }, []);

    function checkLogin() {
        if (!sessionStorage.getItem('token')) {
            window.location.href = '/login';
        }
    }

    return <div></div>;
}
