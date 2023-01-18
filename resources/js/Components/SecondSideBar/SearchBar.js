import React from "react";
import Input from "@/Components/Input";

export default function SearchBar() {
    return (
        <div className="pt-4 px-4 pb-4">
            <Input
                name="search"
                className="mt-1 block w-full text-gray-500 dark:text-white dark:placeholder-gray-300 dark:bg-gray-900 dark:border-gray-800"
                placeholder="Search"
                icon={
                    <span className="text-gray-800 absolute inset-y-0 left-0 flex items-center pl-2">
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            className="w-6 h-6"
                        >
                            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </span>
                }
            />
        </div>
    );
}
