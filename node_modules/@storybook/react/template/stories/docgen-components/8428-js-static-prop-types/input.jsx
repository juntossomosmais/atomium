/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
export default class Test extends React.Component {
  static propTypes = {
    /**
     * Please work...
     */
    test: PropTypes.string,
  };

  render() {
    return <div>test</div>;
  }
}

export const component = Test;
