import React from 'react';
import PropTypes from 'prop-types';
import { ProgressBar } from 'components';

const Header = (props) => {
  return (
      <div
        className={props.className}
      >
        <h1>{ props.title }</h1>
        <ProgressBar
          total={props.totalQuestions}
          current={props.currentQuestionIndex}
        />
      </div>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  totalQuestions: PropTypes.number,
  currentQuestionIndex: PropTypes.number,
};

export default Header;

