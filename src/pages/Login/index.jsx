import React, {useRef, useState} from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Login = () => {
    let passwordField = useRef();
    let [showPass, setShowPass] = useState(false);
    
    /* Run the command npm install react-icons to install the library in your project folder. */

    // Function to show/hide password
    const viewPassword = () => {
        if (passwordField.current.type === "password") {
            passwordField.current.type = "text";
            setShowPass(true);
        } else {
            passwordField.current.type = "password";
            setShowPass(false);
        }
    };

    // Function to validate email and password
    const handleSubmit = (e) => {
        e.preventDefault();
        let email = e.target.email.value
        let password = e.target.password.value

        fetch("http://127.0.0.1:5173/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        .then(res => res.json())
        .then((data) => {
            if (data.accesToken) {
                alert("Login success")
                return <Redirect to="/home" />
            } else {
                console.log("Login failed")
            }
        })
    }

    return (
        <div className="bg-white py-32 flex flex-row justify-center items-center">
            <form onSubmit={handleSubmit} className="shadow-lg flex flex-col space-y-4 bg-white px-8 py-12 w-1/3">
                <h1 className="text-center font-bold text-2xl">Welcome Back</h1>
                <p className="text-center tracking-wide"> Enter your credentials to access your account </p>
                <br />
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="email"> Email </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Email"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="password"> Password </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Password"
                        ref={passwordField}
                    /> 
                    {showPass ? (
                        <FiEye className="eyeIcon" onClick={viewPassword}/>
                    ) : (
                        <FiEyeOff className="eyeIcon" onClick={viewPassword}/>
                    )}
                 </div>
                 
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">Log in</button>
                <br />
                <div className="text-center"> Don't have account yet? 
                    <a href="/register" className="text-blue-500"> Sign Up </a>
                </div>
                <a href="/register" className="text-center text-blue-600">Forgot Your Password</a>
            </form>
        </div>
    );
};

export default Login;