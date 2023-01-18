import React from "react";

export default function SearchOptions() {
    return (
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
    );
}
