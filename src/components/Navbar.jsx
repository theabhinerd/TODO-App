import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-zinc-800 text-white px-6 py-2 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">Welcome Todo App</h1>
                <div className="space-x-4">
                    <a href="#" className="hover:text-gray-300">Home</a>
                    <a href="#" className="hover:text-gray-300">About</a>
                    <a href="#" className="hover:text-gray-300">Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
