import React, { useState } from 'react';

const emojiCategories = {
  Animals: ['🐶', '🐱', '🐵', '🐰'],
  Food: ['🍕', '🍟', '🍔', '🍩'],
  Sports: ['⚽', '🏀', '🏈', '🎾'],
};

export default function EmojiSelector({ onStart }) {
  const [player1Category, setPlayer1Category] = useState('Animals');
  const [player2Category, setPlayer2Category] = useState('Food');

  function handleStart() {
    if (player1Category === player2Category) {
      alert("Both players can't have the same category!");
      return;
    }
    onStart(player1Category, player2Category);
  }

  return (
    <div className="selector">
      <h2>Select Emoji Categories</h2>

      <div className="category-box">
        <div>
          <h3>Player 1</h3>
          <select value={player1Category} onChange={(e) => setPlayer1Category(e.target.value)}>
            {Object.keys(emojiCategories).map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <div className="preview">
            {emojiCategories[player1Category].map((e, i) => <span key={i}>{e}</span>)}
          </div>
        </div>

        <div>
          <h3>Player 2</h3>
          <select value={player2Category} onChange={(e) => setPlayer2Category(e.target.value)}>
            {Object.keys(emojiCategories).map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <div className="preview">
            {emojiCategories[player2Category].map((e, i) => <span key={i}>{e}</span>)}
          </div>
        </div>
      </div>

      <button onClick={handleStart} className="btn">Start Game</button>
    </div>
  );
}
