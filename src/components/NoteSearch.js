import React from 'react';

function NoteSearch({ onSearch }) {
  return (
    <input
      placeholder="Cari Catatan..."
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}

export default NoteSearch;
