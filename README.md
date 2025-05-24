# To-Do-List
This is a simple and functional To-Do List web application built with plain JavaScript. It allows users to add, complete, delete, and clear completed tasks. Tasks are saved in the browser's local storage, so they persist even after refreshing the page.
All comments in the code are added for learning purposes as part of my self-taught software engineering journey.

# A simple JavaScript-driven To‑Do List that lets you:
- Add tasks
- Save tasks to Local Storage
- Mark tasks as completed
- Delete individual tasks
- Clear all completed tasks
- Efficient performance using Event Delegation

## How to Use
1. Type a task in the input field.
2. Click Add New Task.
3. Click a task to mark it completed.
4. Click Delete next to a task to remove it.

# Key Concepts:

- Event Delegation: Instead of attaching event listeners to every task item individually, a single listener on the `<ul>` handles checkbox and delete button clicks.
- Local Storage: Tasks are stored using `localStorage`, so they're retained between sessions.
- DOM Manipulation: Elements like `<li>`, `<input>`, `<button>`, and `<span>` are created and managed dynamically using JavaScript.
