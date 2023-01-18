import React from "react";

export default function EmailPreviewItem({ emailPreview, onClick }) {
    return (
        <div
            className={
                `h-32 m-4 pt-4 rounded-lg cursor-pointer ` +
                (emailPreview.selected ? `shadow-dark-lg` : `shadow-inner`)
            }
            onClick={onClick}
        >
            <div className="w-full h-16 flex items-center">
                <div className="w-1 h-6 bg-green-500 rounded" />
                <img
                    className="w-14 h-14 rounded-full m-2 p-2"
                    src={emailPreview.sender_avatar}
                />
                <div>
                    <p className="text-white font-bold">
                        {emailPreview.sender}
                    </p>
                    <p className="text-gray-400 font-semibold tracking-tight">
                        {emailPreview.title}
                    </p>
                </div>
            </div>
            <div>
                <p className="text-xs tracking-tighter leading-none pl-4">
                    {emailPreview.text_preview}
                </p>
            </div>
        </div>
    );
}
