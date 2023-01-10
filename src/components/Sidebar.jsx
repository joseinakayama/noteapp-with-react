import React from "react";
import "./Sidebar.css";

function Sidebar({
  onAddNote,
  notes,
  onDeleteNote,
  setActiveNote,
  activeNote,
}) {
  const sortedNotes = notes.sort((a, b) => b.modDate - a.modDate);
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>ノート</h1>
        <button onClick={onAddNote}>追加</button>
      </div>
      <div className="app-sidebar-notes">
        {sortedNotes.map((note) => {
          return (
            <div
              className={`app-sidebar-note ${
                note.id === activeNote && "active"
              }`}
              key={note.id}
              onClick={() => setActiveNote(note.id)}
            >
              <div className="sider-note-title">
                <strong>{note.title}</strong>
                <button onClick={() => onDeleteNote(note.id)}>削除</button>
              </div>
              <p>{note.content}</p>
              <small>
                {new Date(note.modDate).toLocaleDateString("ja-JP")}
              </small>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
