import React from "react";
import Players from "./players";
export default function Connect(){
    return (
        <div className="container mx-auto mt-8 overflow-y-auto h-96">
            <h1 className="text-3xl font-bold mb-4">Connect</h1>
            <p className="text-lg font-bold mb-4">Connect with other sports enthusiasts and find the perfect partner to play with.</p>
            <p className="text-lg font-bold mb-4">You can also find sports events happening in your area.</p>
            <Players/>
        </div>
    );
}