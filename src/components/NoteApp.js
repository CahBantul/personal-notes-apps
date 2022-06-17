import React, { Component } from 'react';
import { getInitialData } from '../utils';

export default class NoteApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };
  }
  render() {
    return <div>NoteApp</div>;
  }
}
