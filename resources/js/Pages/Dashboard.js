import Button from '@/Components/Button';
import Authenticated from '@/Layouts/Authenticated';
import React from 'react';
import Input from "@/Components/Input";

export default function Dashboard(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            // header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
            sideContent={
                <div className="bg-white-200 dark:bg-gray-900 dark:text-gray-500 box-content min-h-screen w-400px flex flex-col flex-shrink-0">
                {/* Search bar */}
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
                {/* Search options - select, refresh, other */}
                <div className="h-16 flex items-center px-4">
                    <div className="pr-8">
                        <i className="far fa-lg fa-check-square" />
                    </div>
                    <div className="pr-8">
                        <i className="fas fa-lg fa-redo" />
                    </div>
                    <div className="pr-8">
                        <i className="fas fa-lg fa-ellipsis-v" />
                    </div>
                </div>
                {/* Email list */}
                <div className="h-full overflow-y-auto">
                    {/* Email items */}
                    <div className="h-32 m-4 pt-4 rounded-lg shadow-dark-lg">
                        <div className="w-full h-16 flex items-center">
                            <div className="w-1 h-6 bg-green-500 rounded" />
                            <img
                                className="w-14 h-14 rounded-full m-2 p-2"
                                src="https://avatars.githubusercontent.com/u/8138489?v=4"
                            />
                            <div>
                                <p className="text-white font-bold">
                                    Marcin Maciejewski
                                </p>
                                <p className="text-gray-400 font-semibold tracking-tight">
                                    Design iteration for project X
                                </p>
                            </div>
                        </div>
                        <div>
                            <p className="text-xs tracking-tighter leading-none pl-4">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Morbi non convallis arcu, in
                                varius odio. Nunc fermentum dolor ut vestibulum
                                ultricies.
                            </p>
                        </div>
                    </div>
                    <div className="h-32 m-4 pt-4 rounded-lg shadow-inner">
                        <div className="w-full h-16 flex items-center">
                            <div className="w-1 h-6 bg-red-500 rounded" />
                            <img
                                className="w-14 h-14 rounded-full m-2 p-2"
                                src="https://avatars.githubusercontent.com/u/8138489?v=4"
                            />
                            <div>
                                <p className="text-white font-bold">
                                    Marcin Maciejewski
                                </p>
                                <p className="text-gray-400 font-semibold tracking-tight">
                                    Design iteration for project X
                                </p>
                            </div>
                        </div>
                        <div>
                            <p className="text-xs tracking-tighter leading-none pl-4">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Morbi non convallis arcu, in
                                varius odio. Nunc fermentum dolor ut vestibulum
                                ultricies.
                            </p>
                        </div>
                    </div>
                    <div className="h-32 m-4 pt-4 rounded-lg shadow-dark-lg">

                    </div>
                    <div className="h-32 m-4 pt-4 rounded-lg shadow-inner">
                        <div className="w-full h-16 flex items-center">
                            <div className="w-1 h-6 bg-purple-500 rounded" />
                            <img
                                className="w-14 h-14 rounded-full m-2 p-2"
                                src="https://avatars.githubusercontent.com/u/8138489?v=4"
                            />
                            <div>
                                <p className="text-white font-bold">
                                    Marcin Maciejewski
                                </p>
                                <p className="text-gray-400 font-semibold tracking-tight">
                                    Design iteration for project X
                                </p>
                            </div>
                        </div>
                        <div>
                            <p className="text-xs tracking-tighter leading-none pl-4">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Morbi non convallis arcu, in
                                varius odio. Nunc fermentum dolor ut vestibulum
                                ultricies.
                            </p>
                        </div>
                    </div>
                    <div className="h-32 m-4 pt-4 rounded-lg shadow-inner">
                        <div className="w-full h-16 flex items-center">
                            <div className="w-1 h-6 bg-green-500 rounded" />
                            <img
                                className="w-14 h-14 rounded-full m-2 p-2"
                                src="https://avatars.githubusercontent.com/u/8138489?v=4"
                            />
                            <div>
                                <p className="text-white font-bold">
                                    Marcin Maciejewski
                                </p>
                                <p className="text-gray-400 font-semibold tracking-tight">
                                    Design iteration for project X
                                </p>
                            </div>
                        </div>
                        <div>
                            <p className="text-xs tracking-tighter leading-none pl-4">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Morbi non convallis arcu, in
                                varius odio. Nunc fermentum dolor ut vestibulum
                                ultricies.
                            </p>
                        </div>
                    </div>
                    <div className="h-32 m-4 pt-4 rounded-lg shadow-inner">
                        <div className="w-full h-16 flex items-center">
                            <div className="w-1 h-6 bg-green-500 rounded" />
                            <img
                                className="w-14 h-14 rounded-full m-2 p-2"
                                src="https://avatars.githubusercontent.com/u/8138489?v=4"
                            />
                            <div>
                                <p className="text-white font-bold">
                                    Marcin Maciejewski
                                </p>
                                <p className="text-gray-400 font-semibold tracking-tight">
                                    Design iteration for project X
                                </p>
                            </div>
                        </div>
                        <div>
                            <p className="text-xs tracking-tighter leading-none pl-4">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Morbi non convallis arcu, in
                                varius odio. Nunc fermentum dolor ut vestibulum
                                ultricies.
                            </p>
                        </div>
                    </div>
                    <div className="h-32 m-4 pt-4 rounded-lg shadow-inner">
                        <div className="w-full h-16 flex items-center">
                            <div className="w-1 h-6 bg-green-500 rounded" />
                            <img
                                className="w-14 h-14 rounded-full m-2 p-2"
                                src="https://avatars.githubusercontent.com/u/8138489?v=4"
                            />
                            <div>
                                <p className="text-white font-bold">
                                    Marcin Maciejewski
                                </p>
                                <p className="text-gray-400 font-semibold tracking-tight">
                                    Design iteration for project X
                                </p>
                            </div>
                        </div>
                        <div>
                            <p className="text-xs tracking-tighter leading-none pl-4">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Morbi non convallis arcu, in
                                varius odio. Nunc fermentum dolor ut vestibulum
                                ultricies.
                            </p>
                        </div>
                    </div>
                    <div className="h-32 m-4 pt-4 rounded-lg shadow-inner">
                        <div className="w-full h-16 flex items-center">
                            <div className="w-1 h-6 bg-green-500 rounded" />
                            <img
                                className="w-14 h-14 rounded-full m-2 p-2"
                                src="https://avatars.githubusercontent.com/u/8138489?v=4"
                            />
                            <div>
                                <p className="text-white font-bold">
                                    Marcin Maciejewski
                                </p>
                                <p className="text-gray-400 font-semibold tracking-tight">
                                    Design iteration for project X
                                </p>
                            </div>
                        </div>
                        <div>
                            <p className="text-xs tracking-tighter leading-none pl-4">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Morbi non convallis arcu, in
                                varius odio. Nunc fermentum dolor ut vestibulum
                                ultricies.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            }
        >
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">You're logged in!</div>
                    </div>
                </div>
            </div>

            {/* <div className="dark:bg-black w-12">
                <Button className="dark:bg-blue-500 p-10 font-thin">
                    <i className="fa fa-pen pr-2" />
                    Compose
                </Button>
            </div> */}
        </Authenticated>
    );
}
