import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class IdeaInput extends React.Component {
  static propTypes = {
    createIdea: PropTypes.func.isRequired,
    userId: PropTypes.string.isRequired
  };

  state = {
    name: ''
  };

  Input = styled.input`
    border: none;
    margin: 5%;
    width: 90%;
    padding: 3%;
    border-radius: 5px;
    outline: none;
  `;

  handleSubmit = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.createIdea();
      this.setState({ name: '' });
    }
  };

  createIdea = () => {
    const variables = {
      name: this.state.name,
      userId: this.props.userId
    };

    this.props.createIdea({ variables });
  };

  render() {
    return (
      <this.Input
        placeholder="Brind your idea to life"
        value={this.state.name}
        onChange={e => this.setState({ name: e.target.value })}
        onKeyDown={this.handleSubmit}
      />
    );
  }
}

export default IdeaInput;
