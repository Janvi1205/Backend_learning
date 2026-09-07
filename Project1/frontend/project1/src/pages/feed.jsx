import React, { useEffect, useState } from "react";

const Feed = () => {
    const [post, setpost] = useState([]);

    const showfeed = async () => {
        const response = await fetch("http://localhost:3000/get-post");

        const data = await response.json();

        setpost(data);
    };

    useEffect(() => {
        showfeed();
    }, []);

    return (
        <div
            style={{
                backgroundColor: "pink",
                minHeight: "100vh",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "20px",
                boxSizing: "border-box"
            }}
        >
            <h1 style={{ color: "black" }}>Feed</h1>

            {post.map((singlePost) => (
                <div
                    style={{
                        backgroundColor: "white",
                        color: "black",
                        marginTop: "20px",
                        width: "100%",
                        maxWidth: "600px",
                        padding: "25px",
                        borderRadius: "15px",
                        boxShadow: "0px 4px 15px rgba(0,0,0,0.1)",
                        boxSizing: "border-box"
                    }}
                >
                    <h2>{singlePost.title}</h2>

                    <p>{singlePost.caption}</p>
                </div>
            ))}
        </div>
    );
};

export default Feed;