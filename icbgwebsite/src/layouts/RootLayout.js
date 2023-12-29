import React from "react";
import { NavLink, Outlet } from "react-router-dom";


function RootLayout() {
    return (
        <div className="root-layout">
            <header>
                <nav className="navbar">
                    <h1>ICBG</h1>
                        <div className="links">
                        
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='about'>About</NavLink>
                        <NavLink to='newsevents'>News and Events</NavLink>
                        </div>
                </nav>
            </header>

            <main className="content">
                <Outlet />
            </main>

        </div>
    );
}

export default RootLayout;