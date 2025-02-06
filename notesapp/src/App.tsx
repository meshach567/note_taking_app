import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <form action="" className="note-form">
        <input type="text" placeholder="Add a note..." required />
        <textarea name="" id="" placeholder="Content" rows={10} />
        <button type="submit">Add Note</button>
      </form>
      <div className="notes-grid">
        <div className="note-item">
          <div className="notes-header">
            <button type="button">x</button>
          </div>
          <h2>Note Title</h2>
          <p>Note content</p>
        </div>
      </div>
    </div>
  );
}

export default App;
