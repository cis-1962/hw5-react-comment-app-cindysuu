import React, { useState } from 'react';
import '../app.css';

const Vote = () => {
  const [voteCount, setVoteCount] = useState(0);

  return (
    <div className="votes">
      <button onClick={() => setVoteCount(voteCount - 1)}>-</button>
      <span>{voteCount}</span>
      <button onClick={() => setVoteCount(voteCount + 1)}>+</button>
    </div>
  );
};

export default Vote;
