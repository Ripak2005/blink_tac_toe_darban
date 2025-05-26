# 🚀 Blink Tac Toe – Darban.ai Frontend Challenge

A creative spin on the classic Tic Tac Toe game built with React, enhanced with custom emoji categories, a vanishing rule, and a fun interactive experience. Built for the Darban.ai Frontend Developer Challenge.

---

## 🧰 Tech Stack

- ⚛️ React.js (with Vite bundler)
- 🎨 CSS (custom styling and responsive layout)
- 🔊 use-sound (for win sound effects)
- 🎉 react-confetti (for confetti animation)
- 📦 Deployed on Vercel

---

## 😎 Emoji Categories

Each player chooses one of the following categories before the game starts:

- **Animals**: 🐶 🐱 🐵 🐰
- **Food**: 🍕 🍟 🍔 🍩
- **Sports**: ⚽ 🏀 🏈 🎾

On each turn, a random emoji from the selected category is assigned to the player.

---

## 💨 Vanishing Feature (FIFO Logic)

To keep the board dynamic:

- Players can only have **3 active emojis** on the board at any time.
- When a **4th emoji** is placed:
  - The **oldest emoji disappears** automatically using **FIFO (First In, First Out)** logic.
  - The player **cannot place the new emoji on the vanished spot** immediately.
  - The cell becomes **empty and available** for future moves.

This rule forces strategy and memory, adding a unique twist to classic Tic Tac Toe.

---

## 💡 What I'd Improve With More Time

If I had more time, I would have expanded the game to include the following:


- 🎯 Add highlight animation for the winning combination
- 🎵 Background music toggle + sound effects per move
- 📊 Multi-round scoreboard & match history
- 👥 Online multiplayer with socket.io
- 🧠 Smarter AI bot for single-player mode
- 🌙 Dark mode toggle with themed emoji sets

---

## ✨ Bonus Features / Creative Additions

- 🎉 Confetti animation on win using `react-confetti`
- 🔊 Win sound effect using `use-sound`
- ❓ Help/Rules modal for first-time users
- 📱 Fully responsive layout for mobile and desktop
- 😎 Emoji category selector for both players before game starts
- 💨 Strategic vanishing emojis using FIFO logic
- 🔁 Restart & Play Again functionality for instant replay


## ✅ Summary

This project demonstrates dynamic game logic, user interaction, and playful design — built with clean modular React components and enhanced with animation & sound. Built from scratch with love for the Darban.ai team to enjoy.

> Submitted for: **Frontend Developer Challenge – Darban.ai**  
> Built by: **Ripak Raj** ✨
