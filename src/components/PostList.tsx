// PostsList.js
import React from 'react';
import PostItem from './PostItem'

interface Post {
  id: number;
  name: string;
  text: string;
  votes: number;
  replies?: Post[];
}

interface PostListProps {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
  onAddReply: (name: string, text: string, parentId?: number,) => void;
}

const PostList: React.FC<PostListProps> = ({ posts, onAddReply }) => {
  // const handleVote = (id: number, delta: number) => {
  //   setPosts(posts.map(post => 
  //     post.id === id ? { ...post, votes: post.votes + delta } : post
  //   ));
  // };
  
  return (
    <div>
      {posts.map(post => (
        // <PostItem key={post.id} post={post} onVote={handleVote} onAddReply={onAddReply} depth={0}/>
        <PostItem 
          key={post.id} 
          post={post} 
          onAddReply={(name, text) => onAddReply(name, text, post.id)} 
          depth={1} />
     ))}
    </div>
  );
};

export default PostList;
