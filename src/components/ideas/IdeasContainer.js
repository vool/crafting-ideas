import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import IdeaList from './IdeaList';
import IdeaInput from './IdeaInput';
import * as ideasActions from '../../actions/ideasActions';

const ideasStyle = {
  position: 'absolute',
  width: '50%',
  top: '100px',
  padding: '20px',
  // background: 'white',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

const inputStyle = {
  width: '50%'
};

const listStyle = {
  width: '50%',
  marginTop: '15px'
};

export class IdeasContainer extends React.Component {
  constructor(props) {
    super(props);

    this.addIdea = this.addIdea.bind(this);
  }

  static propTypes = {
    ideas: PropTypes.array.isRequired,
    addIdea: PropTypes.func.isRequired
  };

  addIdea(ideaText) {
    const idea = {
      value: ideaText,
      owner: {
        name: 'Tyler Anton',
        username: 'tyleranton'
      }
    };

    this.props.addIdea(idea);
  }

  render() {
    return (
      <div style={ideasStyle}>
        <div style={inputStyle}>
          <IdeaInput onIdeaSubmit={this.addIdea} />
        </div>
        <div style={listStyle}>
          <IdeaList ideas={this.props.ideas} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { ideas: state.ideas };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(ideasActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(IdeasContainer);
