import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './app.css';
import { v4 as uuidv4 } from 'uuid';

import PostForm from './components/PostForm'; 
import PostList from './components/PostList';

interface Post {
  id: number;
  name: string;
  text: string;
  votes: number;
  replies?: Post[];
}

function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  const addReplyToPost = (posts: Post[], postId: number, reply: Post): Post[] => {
    return posts.map(post => {
      if (post.id === postId) {
        const updatedPost = { ...post, replies: [...(post.replies || []), reply] };
        return updatedPost;
      } else if (post.replies) {
        const updatedReplies = addReplyToPost(post.replies, postId, reply);
        return { ...post, replies: updatedReplies };
      }
      return post;
    });
  };

  const addPost = (name: string, text: string, parentId?: number) => {
    const newPost: Post = {
      id: uuidv4(),
      name,
      text,
      votes: 0,
      replies: [],
    };

    if (parentId === undefined) {
      setPosts(prevPosts => [...prevPosts, newPost]);
    } else {
      setPosts(prevPosts => addReplyToPost(prevPosts, parentId, newPost));
    }
  };

  return (
    console.log('posts:', posts),
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React Comment App</h1>
      <h2>Post something below!</h2>

      <div className="card">
        <PostForm addPost={(post) => addPost(post.name, post.text)} />
        <PostList posts={posts} setPosts={setPosts} onAddReply={addPost} />
      </div>
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
