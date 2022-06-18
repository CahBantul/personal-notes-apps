import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, onDelete, onArchive, itemTitle, buttonTitle }) {
  return (
    <>
      <h2>{itemTitle}</h2>
      <div className="notes-list">
        {notes.map((note) => (
          <NoteItem
            id={note.id}
            onDelete={onDelete}
            key={note.id}
            {...note}
            onArchive={onArchive}
            buttonTitle={buttonTitle}
          />
        ))}
      </div>
    </>
  );
}

export default NoteList;
