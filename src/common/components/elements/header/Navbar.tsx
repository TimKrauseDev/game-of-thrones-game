'use client';
import SvgMenuBar from "@common/components/ui/svgs/SvgMenuBar";
import SvgMenuClose from "@common/components/ui/svgs/SvgMenuClose";
import Link from "next/link";
import React, { useState } from "react";
import NavbarItem from "./NavbarItem";

function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-slate-700">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <Link
                        className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white"
                        href="/"
                    >
                        Game of Thrones - The Game
                    </Link>
                    <button
                        className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        {navbarOpen ? <SvgMenuClose /> : <SvgMenuBar />}
                    </button>
                </div>
                <div
                    className={
                        "lg:flex flex-grow items-center" +
                        (navbarOpen ? " flex" : " hidden")
                    }
                >
                    <ul className="flex space-y-4 lg:space-y-0 lg:space-x-4 flex-col lg:flex-row list-none lg:ml-auto">
                        <NavbarItem name="Help" />
                        <NavbarItem name="Previous Winners" />
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
