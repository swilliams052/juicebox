import React, { useState, useEffect } from "react";

const Bookmarks = () => {
    const [bookmarks, setBookmarks] = useState([])
    useEffect(() => {
    const getBookmarks = async () => {
        const bookmarkResponse = await fetch('http://localhost:3000/api/bookmarks/');
        const bookmarkData = await bookmarkResponse.json();
        setBookmarks(bookmarkData)
    }
    getBookmarks()
    });

    return (
        <>
            {/* <div>
                {bookmarks.map((bookmark, i) => {
                    return (
                        <div key={i}>
                            <h1>{bookmark.title}</h1>
                            <h2></h2>
                            <h2></h2>
                        </div>
                    )
                })}
            </div> */}

        </>
    )
};


export default Bookmarks