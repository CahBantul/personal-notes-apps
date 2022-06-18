import React from 'react';
import { getInitialData } from '../utils';
import NoteAppHeader from './NoteAppHeader';
import NoteInput from './NoteInput';
import NoteList from './NoteList';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      publishedNote: getInitialData(),
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

    this.setState({ notes: unselectNote, publishedNote: unselectNote });
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

    this.setState({ notes: unselectNote, publishedNote: unselectNote });
  };

  onDeleteHandler = (id) => {
    const unselectNote = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes: unselectNote, publishedNote: unselectNote });
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
        publishedNote: [
          ...prevState.publishedNote,
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

  onSearchHandler = (title) => {
    if (title.length === 0) {
      return this.setState({ publishedNote: this.state.notes });
    }

    const filteredNotes = this.state.notes.filter((note) => {
      return note.title.toLowerCase().includes(title.toLowerCase());
    });

    this.setState({ publishedNote: filteredNotes });
  };

  render() {
    const activeNote = this.state.publishedNote.filter(
      (note) => note.archived === false
    );
    const archivedNote = this.state.publishedNote.filter(
      (note) => note.archived === true
    );
    return (
      <>
        <NoteAppHeader onSearch={this.onSearchHandler} />
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

export default NoteApp;
