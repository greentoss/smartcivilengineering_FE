import React from 'react';
import { Link } from "react-router-dom";

const Login: React.FC = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-700 via-gray-200 to-white">
            <div className="container py-5 h-full">
                <div className="flex justify-center items-center h-full">
                    <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
                        <div className="rounded-lg bg-[#343a40] p-8 text-center shadow-lg">
                            <div className="mb-5 mt-4">
                                <h2 className="text-2xl font-bold mb-4 text-white uppercase">Login</h2>
                                <p className="text-white mb-5">Please enter your email and password!</p>

                                <div className="mb-4">
                                    <input 
                                        type="email" 
                                        id="typeEmailX"
                                        className="w-full p-3 bg-transparent border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-300 text-lg text-white"
                                        placeholder="Email"
                                    />
                                </div>

                                <div className="mb-4">
                                    <input 
                                        type="password" 
                                        id="typePasswordX"
                                        className="w-full p-3 bg-transparent border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-300 text-lg text-white"
                                        placeholder="Password"
                                    />
                                </div>

                                <p className="text-sm mb-5">
                                    <a href="#" className="text-gray-300 hover:underline">Forgot password?</a>
                                </p>

                                <button className="bg-transparent border border-white text-white font-bold py-2 px-4 rounded-full hover:bg-white hover:text-gray-800 transition-colors" type="submit">Login</button>

                                <div className="flex justify-center items-center text-center mt-4 pt-1 space-x-3">
                                    <a href="#" className="text-white"><i className="fab fa-facebook-f fa-lg" /></a>
                                    <a href="#" className="text-white"><i className="fab fa-google fa-lg" /></a>
                                </div>
                            </div>

                            <div>
                                <p className="mb-0 text-white">Don't have an account? <Link to='/register'><span className="text-gray-300 font-bold hover:underline">Sign Up</span></Link></p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;