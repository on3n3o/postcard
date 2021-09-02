import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";

export default function MenuButton({selected = false, href = "/", icon = "", className = "", children }) {
    return (
        <InertiaLink className={`flex items-center ` + className} href={href}>
            <i className={(selected && "text-black dark:text-white ") + ` ` +icon} />
            <p className={(selected && "text-black dark:text-white ") + ` font-semibold text-lg pl-3`}>
                {children}
            </p>
        </InertiaLink>
    );
}
