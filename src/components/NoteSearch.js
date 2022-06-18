import React from 'react';

class NoteSearch extends React.Component {
  onSearchChangeHandler = (event) => {
    this.props.onSearch(event.target.value);
  };

  render() {
    return (
      <input
        placeholder="Cari Catatan..."
        onChange={this.onSearchChangeHandler}
      />
    );
  }
}

export default NoteSearch;
