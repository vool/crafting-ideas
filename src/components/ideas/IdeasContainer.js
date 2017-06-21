import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import IdeaList from './IdeaList';
import IdeaInput from './IdeaInput';
import * as ideasActions from '../../actions/ideasActions';

const ideasStyle = {
  marginTop: '50px'
};

class IdeasContainer extends React.Component {
  constructor(props) {
    super(props);

    this.addIdea = this.addIdea.bind(this);
  }

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
        <div>
          <IdeaInput onIdeaSubmit={this.addIdea} />
        </div>
        <div>
          <IdeaList ideas={this.props.ideas} />
        </div>
      </div>
    );
  }
}

IdeasContainer.propTypes = {
  ideas: PropTypes.array.isRequired,
  addIdea: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return { ideas: state.ideas };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(ideasActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(IdeasContainer);
