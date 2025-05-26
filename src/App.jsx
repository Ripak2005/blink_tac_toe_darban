import React, { useState } from 'react';
import './App.css';
import EmojiSelector from './components/EmojiSelector';
import HelpModal from './components/HelpModal';
import { checkWinner } from './utils/checkWinner';
import Confetti from 'react-confetti';
import useSound from 'use-sound';
import winSound from './assets/win.mp3';

const initialBoard = Array(9).fill(null);

const emojiCategories = {
  Animals: ['🐶', '🐱', '🐵', '🐰'],
  Food: ['🍕', '🍟', '🍔', '🍩'],
  Sports: ['⚽', '🏀', '🏈', '🎾'],
};

function getRandomEmoji(category) {
  const emojis = emojiCategories[category];
  return emojis[Math.floor(Math.random() * emojis.length)];
}

function App() {
  const [board, setBoard] = useState(initialBoard);
  const [turn, setTurn] = useState('Player 1');
  const [category1, setCategory1] = useState('');
  const [category2, setCategory2] = useState('');
  const [p1Emojis, setP1Emojis] = useState([]);
  const [p2Emojis, setP2Emojis] = useState([]);
  const [winner, setWinner] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [playWinSound] = useSound(winSound);

  function startGame(cat1, cat2) {
    setCategory1(cat1);
    setCategory2(cat2);
    setGameStarted(true);
  }

  function handleClick(index) {
    if (board[index] || winner) return;

    const currentCategory = turn === 'Player 1' ? category1 : category2;
    const emoji = getRandomEmoji(currentCategory);
    const newBoard = [...board];
    newBoard[index] = emoji;

    if (turn === 'Player 1') {
      const updated = [...p1Emojis, { index, emoji }];
      if (updated.length > 3) {
        const old = updated.shift();
        newBoard[old.index] = null;
      }
      setP1Emojis(updated);
    } else {
      const updated = [...p2Emojis, { index, emoji }];
      if (updated.length > 3) {
        const old = updated.shift();
        newBoard[old.index] = null;
      }
      setP2Emojis(updated);
    }

    setBoard(newBoard);

    if (checkWinner(newBoard)) {
      setWinner(turn);
      setShowConfetti(true);
      playWinSound();
    } else {
      setTurn(turn === 'Player 1' ? 'Player 2' : 'Player 1');
    }
  }

  function handleReset() {
    setBoard(initialBoard);
    setTurn('Player 1');
    setP1Emojis([]);
    setP2Emojis([]);
    setWinner(null);
    setGameStarted(false);
    setShowConfetti(false);
  }

  if (!gameStarted) {
    return <EmojiSelector onStart={startGame} />;
  }

  return (
    <div className="container">
      {showConfetti && <Confetti />}

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Blink Tac Toe</h1>
        <button onClick={() => setShowHelp(true)} className="btn">❓ Help</button>
      </div>

      {showHelp && <HelpModal onClose={() => setShowHelp(false)} />}
      {winner ? <h2>🎉 {winner} Wins!</h2> : <p>Turn: {turn}</p>}

      <div className="grid">
        {board.map((cell, idx) => (
          <div key={idx} className="cell" onClick={() => handleClick(idx)}>
            {cell}
          </div>
        ))}
      </div>

      <button onClick={handleReset} className="btn">{winner ? 'Play Again' : 'Restart'}</button>
    </div>
  );
}

export default App;
