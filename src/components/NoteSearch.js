import React from 'react';

function NoteSearch({ onSearchEventHandler }) {
  return (
    <input placeholder="Cari Catatan..." onChange={onSearchEventHandler} />
  );
}

export default NoteSearch;
