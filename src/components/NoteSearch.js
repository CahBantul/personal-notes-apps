import React from 'react';

export default function NoteSearch({ onSearchEventHandler }) {
  return (
    <input placeholder="Cari Catatan..." onChange={onSearchEventHandler} />
  );
}
