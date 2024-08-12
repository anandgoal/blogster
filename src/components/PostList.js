import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState(10); // Number of posts initially visible
  const [hasMore, setHasMore] = useState(true); // Flag to check if more posts are available

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts'); // Dummy API
        setPosts(response.data);
        if (response.data.length <= visiblePosts) {
          setHasMore(false); // No more posts if the total is less than or equal to visible posts
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, [visiblePosts]);

  const handleLoadMore = () => {
    setVisiblePosts(prev => prev + 10); // Load 10 more posts
    if (visiblePosts + 10 >= posts.length) {
      setHasMore(false); // Disable "Read More" if no more posts are available
    }
  };


  return (
    <main className="container mt-4">
      <h1>Posts</h1>
      <div className="row">
        
      {posts.slice(0, visiblePosts).map(post => (
             <div class=" col-md-4" >
            <div class="card" key={post.id}>
          
            <div class="card-body">
              <h5 class="card-title">{post.title}</h5>
              <p class="card-text">{post.body}</p>
              {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
          </div>
        ))}
      </div>
      {hasMore && (
        <button className="btn btn-primary mt-3" onClick={handleLoadMore}>
          Read More
        </button>
      )}
    </main>
  );
};

export default PostList;
