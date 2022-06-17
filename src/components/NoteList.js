import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, onDelete, onArchive }) {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <NoteItem
          {...note}
          onArchive={onArchive}
          onDelete={onDelete}
          key={note.id}
        />
      ))}
    </div>
  );
}

export default NoteList;
