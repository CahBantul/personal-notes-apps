import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, onDelete, onArchive, itemTitle, buttonTitle }) {
  let noteList;

  if (notes.length === 0) {
    noteList = <p className="notes-list__empty-message">Tidak ada catatan</p>;
  } else {
    noteList = (
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
    );
  }
  return (
    <>
      <h2>{itemTitle}</h2>
      {noteList}
    </>
  );
}

export default NoteList;
