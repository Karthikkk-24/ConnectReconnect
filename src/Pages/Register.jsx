import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomButton from '../components/CustomButton';
import InputComponent from '../components/InputComponent';

export default function Register() {
    const [screenMode, setScreenMode] = useState(
        () => sessionStorage.getItem('mode') || 'light'
    );

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    const changeState = () => {
        const newMode = screenMode === 'dark' ? 'light' : 'dark';
        setScreenMode(newMode);
        sessionStorage.setItem('mode', newMode);
    };

    const successMessage = (param) => toast.success(param);
    const errorMessage = (param) => toast.error(param);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async(e) => {
        try {
            e.preventDefault();
            const response = await fetch('http://localhost:3000/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            
            if (response.status === 201) {
                console.log(response.data);
                successMessage('User created successfully');
                navigate('/login');
            } else {
                console.log(response.data);
                errorMessage(response.data.message);
            }

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        sessionStorage.setItem('mode', screenMode);
    }, [screenMode]);

    return (
        <div
            className={`h-screen w-screen overflow-hidden flex flex-col items-center justify-center relative ${
                screenMode === 'dark' ? 'bg-secondary' : 'bg-white'
            }`}
        >
            <ToastContainer />
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
                className={`w-96 h-auto p-10 flex flex-col items-center justify-center shadow-md border-2 ${
                    screenMode === 'dark' ? 'border-white' : 'border-secondary'
                }  rounded-3xl gap-4`}
            >
                <h1
                    className={`text-3xl font-bold ${
                        screenMode === 'dark' ? 'text-white' : 'text-secondary'
                    }`}
                >
                    Register
                </h1>
                <InputComponent
                    screenMode={screenMode}
                    label="Username"
                    name="username"
                    type="text"
                    placeholder="Enter your Username"
                    value={formData.username}
                    onChange={handleInputChange}
                />
                <InputComponent
                    screenMode={screenMode}
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter your Email ID"
                    value={formData.email}
                    onChange={handleInputChange}
                />
                <InputComponent
                    screenMode={screenMode}
                    label="Password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                />
                <CustomButton screenMode={screenMode} text="Sign Up" onClick={handleSubmit} />
                <Link to="/login">
                    <p
                        className={`text-sm font-semibold ${
                            screenMode === 'dark'
                                ? 'text-white'
                                : 'text-secondary'
                        }`}
                    >
                        Already have an account? Log In
                    </p>
                </Link>
            </div>
        </div>
    );
}
