import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, onDelete, onArchive }) {
  return (
    <>
      <h2>Buat Catatan</h2>
      <div className="notes-list">
        {notes.map((note) => (
          <>
            <NoteItem
              {...note}
              onArchive={onArchive}
              onDelete={onDelete}
              key={note.id}
            />
          </>
        ))}
      </div>
    </>
  );
}

export default NoteList;
