import { useEffect, useState } from 'react';

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
            <div className={`w-96 h-auto p-10 flex flex-col items-center justify-center shadow-md border-2 ${screenMode === 'dark' ? 'border-white' : 'border-primary'}  rounded-3xl gap-4`}>
                <h1 className={`text-3xl font-bold ${screenMode === 'dark' ? 'text-white' : 'text-secondary'}`}>Login</h1>
                <div className="w-full h-auto flex flex-col items-start justify-start gap-2">
                    <label htmlFor="email" className={`text-sm font-semibold ${screenMode === 'dark' ? 'text-white' : 'text-secondary'}`}>
                        Email
                    </label>
                    <input
                        type="text"
                        className="w-full pl-3 h-12 rounded-lg border-2 border-slate-100"
                        placeholder="Enter your Email ID"
                    />
                </div>
                <div className="w-full h-auto flex flex-col items-start justify-start gap-2">
                    <label htmlFor="password" className={`text-sm font-semibold ${screenMode === 'dark' ? 'text-white' : 'text-secondary'}`}>
                        Password
                    </label>
                    <input
                        type="password"
                        className="w-full pl-3 h-12 rounded-lg border-2 border-slate-100"
                        placeholder="Enter your password"
                    />
                </div>
                <button className="w-auto h-auto flex items-center justify-center bg-primary rounded-lg px-5 py-3 font-semibold uppercase hover:scale-110 transition-all">
                    Log In
                </button>
            </div>
        </div>
    );
}
