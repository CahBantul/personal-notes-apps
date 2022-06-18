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
  onPublishHandler = (id) => {
    const selectedNote = this.state.notes.filter((note) => note.id === id);
    const unselectNote = this.state.notes.filter((note) => note.id !== id);

    unselectNote.push({
      id,
      body: selectedNote[0].body,
      title: selectedNote[0].title,
      createdAt: selectedNote[0].createdAt,
      archived: false,
    });

    this.setState({ notes: unselectNote });
  };

  onDeleteHandler = (id) => {
    const unselectNote = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes: unselectNote });
  };

  onAddNoteHandler = ({ title, body }) => {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: new Date(),
          },
        ],
      };
    });
  };

  render() {
    const notes = this.state.notes;
    const activeNote = notes.filter((note) => note.archived === false);
    const archivedNote = notes.filter((note) => note.archived === true);
    return (
      <>
        <NoteAppHeader />
        <div className="note-app__body">
          <NoteInput addNote={this.onAddNoteHandler} />
          <NoteList
            notes={activeNote}
            itemTitle="Catatan Aktif"
            buttonTitle="Arsipkan"
            onArchive={this.onArchivedHandler}
            onDelete={this.onDeleteHandler}
          />
          <NoteList
            notes={archivedNote}
            itemTitle="Arsip"
            buttonTitle="Pindahkan"
            onDelete={this.onDeleteHandler}
            onArchive={this.onPublishHandler}
          />
        </div>
      </>
    );
  }
}
