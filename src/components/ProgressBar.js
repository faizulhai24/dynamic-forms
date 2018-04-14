import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = (props) => {
  const currentWidth = ((props.current + 1) / props.total) * 100;
  return (
    <div
      style={{
        border: '1px solid #FFF',
        background: '#F1EDED',
        width: '500px',
        margin: '0 auto',
        borderRadius: '5px',
      }}
    >
      <div
        style={{
          background: '#5E9ED6',
          height: '10px',
          width: `${currentWidth}%`,
          borderRadius: '5px',
        }}
      >
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  total: PropTypes.string,
  current: PropTypes.string,
};

export default ProgressBar;

