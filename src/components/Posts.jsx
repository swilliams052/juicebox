import React, { useState, useEffect } from "react";

const Posts = () => {
  const [bookmarks, setBookmarks] = useState([]);
  
  const bookmarkPost = async (postId) => {
    const token = window.localStorage.getItem("token");
    const response = await fetch("http://localhost:3000/api/bookmarks", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        postId,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      setBookmarks(data);
    } else {
      console.error("Error bookmarking post");
    }
  };

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const postResponse = await fetch("http://localhost:3000/api/posts");
      const postData = await postResponse.json();
      setPosts(postData.posts);
    };
    getPosts();
  }, []);

  return (
    <>
      <div>
        {posts.map((post, i) => (
          <div className="post-divs" key={i}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <button onClick={() => bookmarkPost(post.id)}>Bookmark</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Posts;
