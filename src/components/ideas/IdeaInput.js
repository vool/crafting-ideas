import React, { PropTypes } from 'react';

const IdeaInput = ({ onIdeaSubmit }) => {
  const _handleKeyPress = e => {
    e.preventDefault();
    if (e.key === 'Enter') onIdeaSubmit(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        defaultValue="Bring your idea to life"
        onKeyPress={_handleKeyPress}
      />
    </div>
  );
};

IdeaInput.propTypes = {
  onIdeaSubmit: PropTypes.func.isRequired
};

export default IdeaInput;
