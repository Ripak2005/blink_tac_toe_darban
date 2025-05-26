import React from 'react';
import './HelpModal.css'; 

export default function HelpModal({ onClose }) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>How to Play 🕹️</h2>
        <ul className="rules-list">
          <li>The game is played on a 3x3 grid.</li>
          <li>Each player selects an emoji category at the start.</li>
          <li>On their turn, a player is given a random emoji from their category.</li>
          <li>Only 3 emojis can be active per player — older emojis vanish (FIFO rule).</li>
          <li>Player cannot place emoji on a vanished emoji’s original spot.</li>
          <li>To win, a player must align 3 of their own emojis (horizontal, vertical, diagonal).</li>
          <li>Game ends immediately when someone wins.</li>
        </ul>
        <button className="btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
