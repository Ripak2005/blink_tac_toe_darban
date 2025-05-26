# 🚀 Blink Tac Toe - Darban.ai Frontend Challenge

A fun twist on classic Tic Tac Toe — now with emojis, vanishing logic, and category-based moves! 🎮


---

## 🔗 Live Demo

👉 [Click to Play Live](https://blink-tac-toe-darban.vercel.app/)

---

## 🧠 Features

- 🔁 Turn-based 2-player mode
- 😎 Random emojis from selected category each turn
- 💨 Vanishing logic (only 3 emojis per player using FIFO)
- 🧠 Smart win-checking logic (emoji match, 3 in a line)
- 🎉 Confetti + 🔊 Sound on win!
- 📱 Responsive for mobile & desktop
- ❓ Built-in Help/Rules section
- 🔁 Restart & Play Again buttons

---

## 🛠 Tech Stack

- **React.js** (via Vite)
- **CSS / Custom Styling**
- `react-confetti` for animations
- `use-sound` for sound effects
- **Deployed with Vercel**

---

## 🧪 Vanishing Logic

- Each player can have **only 3 active emojis** on the board.
- When trying to place a 4th emoji:
  - Their **oldest emoji disappears** automatically (FIFO).
  - That specific cell becomes **empty and reusable**.
  - Players **can't place the new emoji on the vanished cell immediately**.

---

## 🏆 Win Condition

- Player wins by forming 3 emojis **in a row**:
  - Horizontally, vertically, or diagonally.
  - Only their own emojis count.

---

## 📦 How to Run Locally

```bash
git clone https://github.com/Ripak2005/blink-tac-toe.git
cd blink-tac-toe
npm install
npm run dev
