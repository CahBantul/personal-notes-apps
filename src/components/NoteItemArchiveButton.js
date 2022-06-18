import React from 'react';

function NoteItemArchiveButton({ id, onArchive, buttonTitle }) {
  return (
    <button className="note-item__archive-button" onClick={() => onArchive(id)}>
      {buttonTitle}
    </button>
  );
}

export default NoteItemArchiveButton;
