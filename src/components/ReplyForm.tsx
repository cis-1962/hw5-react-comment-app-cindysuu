import React, { useState } from 'react';

interface ReplyFormProps {
  onSubmit: (name: string, text: string) => void;
  // addPost: (post: { name: string; text: string }) => void;
}

const ReplyForm: React.FC<ReplyFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;
    onSubmit(name, text);
    // addPost({ name, text });
    setName('');
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <textarea placeholder="Type your reply here" value={text} onChange={(e) => setText(e.target.value)} required />
      <button type="submit">Reply</button>
    </form>
    
  );
};

export default ReplyForm;
