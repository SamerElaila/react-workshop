import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Image = props => <img className="img" src={props.url} />;

Image.propTypes = {
  url: PropTypes.string
};

export default Image;
