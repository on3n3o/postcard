import React, { useState } from "react";
import EmailPreviewItem from "./EmailPreviewItem";

export default function EmailList({ emailList }) {
    const [emailListing, setEmailList] = useState(emailList);

    
    return (
        <div className="h-full overflow-y-auto">
            {/* Email items */}
            {emailListing.map((emailPreview) => (
                <EmailPreviewItem
                    key={emailPreview.id}
                    onClick={() => {
                        /** Add here onClick change state selected to true */
                        setEmailList([])
                    }}
                    emailPreview={emailPreview}
                />
            ))}
        </div>
    );
}
