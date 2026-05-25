import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "React Basics Clear Karna", completed: false },
    { id: 2, text: "GitHub Par Project Upload Karna", completed: false }
  ]);
  const [inputText, setInputText] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (inputText.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: inputText,
      completed: false
    };

    setTodos([...todos, newTodo]);
    setInputText("");
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  return (
    <div className="app-container">
      <div className="todo-box">
        <h1>My Todo List</h1>
        
        <form onSubmit={handleAddTodo} className="todo-form">
          <input 
            type="text" 
            placeholder="Naya task likhein..." 
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button type="submit">Add Task</button>
        </form>

        <ul className="todo-list">
          {todos.length === 0 ? (
            <p className="empty-message">Sari tension khatam! Koi task nahi hai. 🎉</p>
          ) : (
            todos.map(todo => (
              <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                <span onClick={() => handleToggleComplete(todo.id)}>
                  {todo.text}
                </span>
                <button className="delete-btn" onClick={() => handleDeleteTodo(todo.id)}>✕</button>
              </li>
            ))
          )}
        </ul>

        <div className="todo-footer">
          <p>Total Tasks: {todos.length}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
