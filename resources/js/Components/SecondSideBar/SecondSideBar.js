import React from "react";
import EmailList from "./EmailList";
import SearchBar from "./SearchBar";
import SearchOptions from "./SearchOptions";

export default function SecondSideBar() {
    const emailList = [
        {
            id: 1,
            selected: false,
            sender: "Test", 
            sender_avatar: "https://avatars.githubusercontent.com/u/8138489?v=4",
            title: "Design iteration for project X",
            group: "social",
            has_attachments: false,
            received_at: "now",
            text_preview: "Lorem ipsum dolor sit amet, consectetur adipiscing \
                           elit. Morbi non convallis arcu, in varius odio. Nunc \
                           fermentum dolor ut vestibulum ultricies."
        },
        {
            id: 2, 
            selected: true,
            sender: "Marcin Maciejewski", 
            sender_avatar: "https://avatars.githubusercontent.com/u/8138489?v=4",
            title: "Design iteration for project X",
            group: "social",
            has_attachments: false,
            received_at: "now",
            text_preview: "Lorem ipsum dolor sit amet, consectetur adipiscing \
                           elit. Morbi non convallis arcu, in varius odio. Nunc \
                           fermentum dolor ut vestibulum ultricies."
        }
    ];
    return (
        <div className="bg-white-200 dark:bg-gray-900 dark:text-gray-500 box-content min-h-screen w-400px flex flex-col flex-shrink-0">
            <SearchBar />
            <SearchOptions />
            <EmailList emailList={emailList}/>
            
            
        </div>
    );
}
