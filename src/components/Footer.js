import React from 'react';
import PropTypes from 'prop-types';

const Footer = (props) => {
  const { isPreviousDisabled, isNextDisabled, showPreviousQuestion, showNextQuestion } = props;
  return (
    <div
      className={props.className}
    >
      <button
        className={
          !isPreviousDisabled ?
          'button-large' :
          'button-large button-large--disabled'
        }
        disabled={isPreviousDisabled}
        onClick={showPreviousQuestion}
      >
        Previous
      </button>
      <button
        className={
          !isNextDisabled ?
          'button-large' :
          'button-large button-large--disabled'
        }
        disabled={isNextDisabled}
        onClick={showNextQuestion}
      >
        Next
      </button>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  isPreviousDisabled: PropTypes.bool,
  isNextDisabled: PropTypes.bool,
  showPreviousQuestion: PropTypes.func,
  showNextQuestion: PropTypes.func,
};

export default Footer;

