import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import InputComponent from '../components/InputComponent';
import CustomButton from '../components/CustomButton';

export default function Login() {
    const [screenMode, setScreenMode] = useState(
        () => sessionStorage.getItem('mode') || 'light'
    );

    const changeState = () => {
        const newMode = screenMode === 'dark' ? 'light' : 'dark';
        setScreenMode(newMode);
        sessionStorage.setItem('mode', newMode);
    };

    useEffect(() => {
        sessionStorage.setItem('mode', screenMode);
    }, [screenMode]);

    return (
        <div
            className={`h-screen w-screen overflow-hidden flex flex-col items-center justify-center relative ${
                screenMode === 'dark' ? 'bg-secondary' : 'bg-white'
            }`}
        >
            <button onClick={changeState} className="absolute top-5 right-5">
                {screenMode === 'dark' ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-sun"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                        <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-moon"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
                    </svg>
                )}
            </button>
            <div
                className={`w-96 h-auto p-10 flex flex-col items-center justify-center shadow-xl border-2 ${
                    screenMode === 'dark' ? 'border-white' : 'border-secondary'
                }  rounded-3xl gap-4`}
            >
                <h1
                    className={`text-3xl font-bold ${
                        screenMode === 'dark' ? 'text-white' : 'text-secondary'
                    }`}
                >
                    Login
                </h1>
                <InputComponent
                    screenMode={screenMode}
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter your Email ID"
                />
                <InputComponent
                    screenMode={screenMode}
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                />
                <CustomButton screenMode={screenMode} text="Log In" />
                <Link to="/register">
                    <p
                        className={`text-sm font-semibold ${
                            screenMode === 'dark'
                                ? 'text-white'
                                : 'text-secondary'
                        }`}
                    >
                        Don&apos;t have an account? Register
                    </p>
                </Link>
            </div>
        </div>
    );
}