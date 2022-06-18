import React from 'react';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi state
    this.state = {
      title: '',
      body: '',
    };
  }

  onTitleChangeHandler = (event) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        title: event.target.value,
      };
    });
  };

  onBodyChangeHandler = (event) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        body: event.target.value,
      };
    });
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState({ title: '', body: '' });
  };

  render() {
    return (
      <div className="note-input">
        <h2>Buat Catatan</h2>
        <form onSubmit={this.onSubmitHandler}>
          <input
            type="text"
            placeholder="tuliskan judul disini..."
            onChange={this.onTitleChangeHandler}
            value={this.state.title}
          />
          <textarea
            cols="30"
            rows="10"
            onChange={this.onBodyChangeHandler}
            placeholder="Tuliskan catatan disini..."
            value={this.state.body}
          ></textarea>
          <button type="submit">Buat</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
