import React from 'react';
import { NavLink } from 'react-router-dom';
import auth from '../Pages/Users/firebase.init';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

const Navigation = () => {

    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };

    const subManu = <>
        <NavLink to='/'>< li><a>Home</a></li></NavLink>
        <NavLink to='/about'>< li><a>About</a></li></NavLink>
        <NavLink to='/addevent'>< li><a>AddEvent</a></li></NavLink>
        <NavLink to='/myevents'>< li><a>MyEvent</a></li></NavLink>
        <NavLink to='/volenterlist'>< li><a>Volenter List</a></li></NavLink>
        <NavLink to='/volenters'>< li><a>Volenters</a></li></NavLink>

    </>
    return (
        <div>
            <div class="navbar bg-base-100">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {subManu}
                        </ul>
                    </div>
                    <a class="btn btn-ghost normal-case text-xl">Sports Event</a>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        {subManu}
                    </ul>
                </div>
                <div class="navbar-end">
                    {
                        user ? <NavLink to='/'><button class="btn" onClick={logout}>Log out</button></NavLink> :
                            <NavLink to='/login'><button class="btn">Login</button></NavLink>

                    }
                </div>
            </div>
        </div>
    );
};

export default Navigation;