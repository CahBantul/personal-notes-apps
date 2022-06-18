import React, { Component } from 'react';
import { getInitialData } from '../utils';
import NoteAppHeader from './NoteAppHeader';
import NoteInput from './NoteInput';
import NoteList from './NoteList';

export default class NoteApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };
  }

  onArchivedHandler = (id) => {
    const selectedNote = this.state.notes.filter((note) => note.id === id);
    const unselectNote = this.state.notes.filter((note) => note.id !== id);

    unselectNote.push({
      id,
      body: selectedNote[0].body,
      title: selectedNote[0].title,
      createdAt: selectedNote[0].createdAt,
      archived: true,
    });

    this.setState({ notes: unselectNote });
  };

  render() {
    const notes = this.state.notes;
    const activeNote = notes.filter((note) => note.archived === false);
    const archivedNote = notes.filter((note) => note.archived === true);
    return (
      <>
        <NoteAppHeader />
        <div className="note-app__body">
          <NoteInput />
          <NoteList
            notes={activeNote}
            itemTitle="Catatan Aktif"
            buttonTitle="Arsipkan"
            onArchive={this.onArchivedHandler}
          />
          <NoteList
            notes={archivedNote}
            itemTitle="Arsip"
            buttonTitle="Pindahkan"
          />
        </div>
      </>
    );
  }
}
