import React, { useState } from 'react';
import '../app.css';

interface PostFormProps {
  addPost: (post: { name: string; text: string }) => void;
}

const PostForm: React.FC<PostFormProps> = ({ addPost }) => {  
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;
    addPost({ name, text });
    setName('');
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <textarea placeholder="Type your message here" value={text} onChange={(e) => setText(e.target.value)} required />
      <button type="submit">Post</button>
    </form>
  );
};

export default PostForm;
