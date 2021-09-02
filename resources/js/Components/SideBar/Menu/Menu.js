import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import MenuButton from "./MenuButton";
export default function Menu() {
    return (
        <div className="pt-8 pl-4">
            <div className="">
                <MenuButton selected={true} href="/inbox" icon="fa fa-download">Inbox</MenuButton>
                
                <div className="pl-8 pd-3">
                    <div className="flex items-center pt-3">
                        <i className="text-yellow-500 far fa-xs fa-circle" />
                        <p className="text-black dark:text-white font-semibold text-sm pl-3">
                            All
                        </p>
                    </div>
                    <div className="flex items-center pt-3">
                        <i className="text-green-500 far fa-xs fa-circle" />
                        <p className="font-semibold text-sm pl-3">Primary</p>
                    </div>
                    <div className="flex items-center pt-3">
                        <i className="text-red-500 far fa-xs fa-circle" />
                        <p className="font-semibold text-sm pl-3">Social</p>
                    </div>
                    <div className="flex items-center pt-3">
                        <i className="text-purple-500 far fa-xs fa-circle" />
                        <p className="font-semibold text-sm pl-3">Promotions</p>
                    </div>
                </div>
            </div>
            <MenuButton href="/sent" icon="far fa-paper-plane" className="py-3">Sent</MenuButton>
            <MenuButton href="/drafts" icon="far fa-file-alt" className="py-3">Drafts</MenuButton>
            <MenuButton href="/starred" icon="far fa-star" className="py-3">Starred</MenuButton>
            <MenuButton href="/chat" icon="far fa-comment-alt" className="py-3">Chat</MenuButton>
            <MenuButton href="/spam" icon="fas fa-biohazard" className="py-3">Spam</MenuButton>
            <MenuButton href="/deleted" icon="far fa-trash-alt" className="py-3">Deleted</MenuButton>
        </div>
    );
}
