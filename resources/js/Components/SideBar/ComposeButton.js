import React from "react";
import Button from "@/Components/Button";

export default function ComposeButton({ className, onClick }) {
    return (
        <div onClick={onClick} className="pt-8 flex justify-center">
            <div className="dark:bg-black">
                <Button className="bg-blue-500 text-sm font-bold rounded-xl w-10 md:w-full">
                    <i className="underline fa fa-pen pr-3" />
                    <span className="invisible md:visible">Compose</span>
                </Button>
            </div>
        </div>
    );
}
