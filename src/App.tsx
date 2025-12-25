import { useState } from 'react'; // react hook for states
import './App.css'; // import css file for styling

type Todo = {
  id: number; // unique identifier for each todo
  text: string; // description of the todo
  due?: string; // optional due date
  completed: boolean; // whether the todo is completed
};


function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState('');
  const [due, setDue] = useState('');

  function addTodo(e?: React.FormEvent) {
  e?.preventDefault()
  if (!text.trim()) return
  const newTodo: Todo = { 
    id: Date.now(), 
    text: text.trim(), 
    due: due || undefined, 
    completed: false 
  }
  setTodos((t) => [newTodo, ...t])
  setText('')
  setDue('')
}
  function markDone(id: number) {
  setTodos((t) => t.map((todo) => 
    (todo.id === id ? { ...todo, completed: !todo.completed } : todo)
  ))
}
  function removeTodo(id: number) {
  setTodos((t) => t.filter((todo) => todo.id !== id))
}

  return (
    <div className="App">
      <header className="App-header">
        <h1>UGhhh.... Work To Be Done</h1>
        <form className="todo-form" onSubmit={addTodo} aria-label="Add task">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Task description"
            aria-label="Task description"/>
          <input
            type="date"
            value={due}
            onChange={(e) => setDue(e.target.value)}
            aria-label="Due date"/>
          <button type="submit">Add Task</button>
        </form>
      </header>

      <main className="todo-panel">
        {todos.length === 0 ? (
          <p>No tasks yet! Add one above.</p>
        ) : (
          <ul className="todo-list">
            {todos.map((todo) => (
              <li key={todo.id} className={`todo-item ${todo.completed ? 'done' : ''}`}>
                <label className="todo-main">
                  <input type='checkbox' 
                    checked={todo.completed} 
                    onChange={() => markDone(todo.id)} 
                    aria-label={`Mark task "${todo.text}" as ${todo.completed ? 'incomplete' : 'complete'}`}/>
                  <span className="todo-text">{todo.text}</span>
                  {todo.due && <span className="todo-due"> (Due: {todo.due})</span>}
                </label>
                <button 
                  className="todo-remove" 
                  onClick={() => removeTodo(todo.id)}
                  aria-label={`Remove task "${todo.text}"`}>×</button>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}

export default App;