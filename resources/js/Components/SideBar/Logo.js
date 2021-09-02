import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";

export default function Logo({ className }) {
    return (
        <div className="pt-2 pb-2">
            <InertiaLink className="flex items-center" href="/">
                {/* <ApplicationLogo className="block h-9 w-auto text-gray-500" /> */}
                <img className="h-16" src="/png/postcard_white.png" />
                <div className="invisible md:visible p-2 text-blue-500 font-bold text-lg">
                    Postcard
                </div>
            </InertiaLink>
        </div>
    );
}
