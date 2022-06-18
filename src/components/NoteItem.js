import React from 'react';
import NoteItemTitle from './NoteItemTitle';
import NoteItemDate from './NoteItemDate';
import NoteItemBody from './NoteItemBody';
import NoteItemAction from './NoteItemAction';

function NoteItem({ title, id, date, onDelete, onArchive, body, buttonTitle }) {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <NoteItemTitle title={title} />
        <NoteItemDate date={date} />
        <NoteItemBody body={body} />
      </div>
      <NoteItemAction
        id={id}
        onDelete={onDelete}
        onArchive={onArchive}
        buttonTitle={buttonTitle}
      />
    </div>
  );
}

export default NoteItem;
