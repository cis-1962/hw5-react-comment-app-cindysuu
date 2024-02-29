import React from 'react';
import ReplyForm from './ReplyForm';
// import PostForm from './PostForm';
import Vote from './Vote';
import '../app.css';

interface Post {
  id: number;
  name: string;
  text: string;
  votes: number;
  // replies?: Post[];
}

interface PostItemProps {
  post: Post;
  depth: number;
  // onAddReply: (id: number, name: string, text: string) => void;
  // onAddReply: (name: string, text: string, parentId?: number) => void; 
}

const PostItem: React.FC<PostItemProps> = ({ post, depth}) => {
  const [replies, setReplies] = React.useState<Post[]>([]);
  const handleReplySubmit = (name: string, text: string) => {
    setReplies([...replies, { id: replies.length + 1, name, text, votes: 0 }]);
  };

  const postItemClass = `post-item ${depth > 0 ? 'reply' : ''}`;
  const style = { marginLeft: `${depth * 20}px` };

  return (
    console.log('depth:', depth),
    // <div className="post-item">
    <div className={postItemClass} style={style}>
      <h3>{post.name}</h3>
      <p>{post.text}</p>
      <Vote></Vote>

      {depth < 3 && <ReplyForm onSubmit={handleReplySubmit} />}
      
      {replies.map(reply => (
        <PostItem 
          key={reply.id} 
          post={reply} 
          depth={depth + 1} 
         />
      ))}
    </div>
  );
};

export default PostItem;
