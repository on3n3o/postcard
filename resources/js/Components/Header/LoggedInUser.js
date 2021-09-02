import React from "react";

export default function LoggedInUser({ className = "", auth }) {
    return (
        <>
            <div className="pr-10">
                <i className="text-gray-600 far fa-lg fa-bell" />
            </div>
            <div className="flex flex-row items-center items-center justify-end">
                <div className="flex flex-col">
                    <p className="dark:text-white font-semibold">{auth.user.name}</p>
                    <p className="text-xs text-gray-600">ONLINE</p>
                </div>
                <img
                    className="w-14 h-14 rounded-full m-2 p-2"
                    src="https://avatars.githubusercontent.com/u/8138489?v=4"
                />
            </div>
        </>
    );
}
