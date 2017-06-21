import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import IdeaList from './IdeaList';
import IdeaInput from './IdeaInput';

class IdeasContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <IdeaInput />
        </div>
        <div>
          <IdeaList ideas={this.props.ideas} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ideas: state.ideas
  };
}

export default connect(mapStateToProps)(IdeasContainer);
