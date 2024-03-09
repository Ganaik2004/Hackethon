import React from "react";
import { Link } from "react-router-dom";
export default function SideBar(){
    return (
        <>
            {/* Sidebar */}
            <div className="flex flex-col h-screen justify-evenly items-center h-100px bg-slate-900  w-24 py-10">
            <span className='text-white font-bold underline '>Connect</span>
                <Link to="/connect" className="text-white hover:text-blue-300">
                    <svg className="h-6 w-6 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                </Link>
                <span className='text-white font-bold underline'>Accessories</span>
                <Link to="/accessories" className="text-white hover:text-blue-300">
                    <svg className="h-6 w-6 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
                <span className='text-white font-bold underline'>Categories</span>
                <Link to="/categories" className="text-white hover:text-blue-300">
                    <svg className="h-6 w-6 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h18M3 6h18M3 18h18" />
                    </svg>
                </Link>
            </div>
        </>
    );
    
}