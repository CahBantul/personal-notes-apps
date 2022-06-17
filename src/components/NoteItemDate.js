import React from 'react';
import { showFormattedDate } from '../utils';

function NoteItemDate({ date }) {
  const formattedDate = showFormattedDate(date);
  return <p className="note-item__date">{formattedDate}</p>;
}

export default NoteItemDate;
