import React from 'react';
import PropTypes from 'prop-types';

class IdeaInput extends React.Component {
  inputStyle = {
    marginTop: '20px',
    padding: '10px',
    borderRadius: '5px'
  };

  static propTypes = {
    onIdeaSubmit: PropTypes.func.isRequired
  };

  state = {
    text: ''
  };

  handleSubmit = e => {
    const text = e.target.value;
    if (e.key === 'Enter') {
      e.preventDefault();
      this.props.onIdeaSubmit(text);
      this.setState({ text: '' });
    }
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <div>
        <input
          style={this.inputStyle}
          type="text"
          placeholder="Bring your idea to life"
          autoFocus="true"
          value={this.state.text}
          onChange={this.handleChange}
          onKeyDown={this.handleSubmit}
        />
      </div>
    );
  }
}

export default IdeaInput;
