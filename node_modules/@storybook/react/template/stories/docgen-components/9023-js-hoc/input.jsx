/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

// deepscan-disable-next-line
const withStyles = (themeFn) => (Comp) => Comp;

class Alert extends React.Component {
  render() {
    return <>Alert</>;
  }
}
Alert.propTypes = {
  variant: PropTypes.string,
  dismissible: PropTypes.bool,
  icon: PropTypes.elementType,
  classes: PropTypes.object.isRequired,
};
Alert.defaultProps = {
  variant: 'primary',
  dismissible: false,
};

const StyledAlert = withStyles((theme) => ({
  alert: (props) => ({
    backgroundColor: theme.palette[props.variant].main,
  }),
  message: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginRight: theme.spacing(2),
  },
}))(Alert);

export const component = StyledAlert;
