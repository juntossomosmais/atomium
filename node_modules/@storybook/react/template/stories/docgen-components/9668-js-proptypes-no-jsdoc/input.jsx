/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const CCTable = (props) => <>{JSON.stringify(props)}</>;
CCTable.propTypes = {
  heads: PropTypes.array.isRequired,
  onAddClick: PropTypes.func,
};

export const component = CCTable;
