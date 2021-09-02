import ApplicationLogo from "../Components/ApplicationLogo";
import Dropdown from "../Components/Dropdown";
import NavLink from "../Components/NavLink";
import React, { useState } from "react";
import ResponsiveNavLink from "../Components/ResponsiveNavLink";
import Input from "@/Components/Input";
import Button from "@/Components/Button";
import LoggedInUser from "@/Components/Header/LoggedInUser";
import ComposeButton from "@/Components/SideBar/ComposeButton";
import Logo from "@/Components/SideBar/Logo";
import ChangeTheme from "@/Components/Header/ChangeTheme";
import Menu from "@/Components/SideBar/Menu/Menu";
import Footer from "@/Components/SideBar/Footer";

export default function Authenticated({ auth, header, children, sideContent }) {
    if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen h-screen  dark:bg-gray-900 flex">
            {/* Side Bar Left */}
            <div className="bg-white-200 dark:bg-black text-gray-600 dark:text-gray-400 box-content min-h-screen w-5 md:w-200px min-w-max flex flex-col flex-shrink-0">
                {/* Logo */}
                <Logo />
                {/* Compose button */}
                <ComposeButton onClick={() => {
                    console.log('Show popup with compose email');
                }}/>
                {/* Mailbox cards */}
                <Menu />

                {/* Footer and Licence info */}
                <Footer />
            </div>
            {/* Side bar email list */}
            {sideContent}
            {/* Side bar email details */}
            <div className="bg-white-200 dark:bg-black dark:text-gray-500 box-content min-h-screen w-full">
                {/* Header, bell icon, logged in user info */}
                <div className="h-16 w-full flex items-center justify-end border-b dark:border-gray-800">
                    <ChangeTheme />
                    <LoggedInUser auth={auth} />
                </div>
                <main>{children}</main>
            </div>
        </div>
    );
}
