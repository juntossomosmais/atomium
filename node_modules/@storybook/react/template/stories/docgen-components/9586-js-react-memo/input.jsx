import React from 'react';
import PropTypes from 'prop-types';

function Button({ label, onClick }) {
  // eslint-disable-next-line react/button-has-type
  return <button onClick={onClick}>{label}</button>;
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const MemoButton = React.memo(Button);
export const component = MemoButton;
