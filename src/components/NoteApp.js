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
  render() {
    return (
      <>
        <NoteAppHeader />
        <div className="note-app__body">
          <NoteInput />
          <NoteList notes={this.state.notes} />
        </div>
      </>
    );
  }
}
