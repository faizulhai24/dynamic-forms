import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Header, Question, Footer } from 'components';
import {
  updateAnswer,
  showPreviousQuestion,
  showNextQuestion,
} from 'actionCreators';

class AppContainer extends Component {
  static propTypes = {
    title: PropTypes.string,
    questions: PropTypes.array,
    currentQuestionIndex: PropTypes.number,
    updateAnswer: PropTypes.func,
    showPreviousQuestion: PropTypes.func,
    showNextQuestion: PropTypes.func,
  };

  render() {
    const {
      title,
      questions,
      currentQuestionIndex,
    } = this.props;
    const isPreviousDisabled = !(currentQuestionIndex > 0);
    const isNextDisabled = !(currentQuestionIndex < questions.length &&
      (!questions[currentQuestionIndex].is_required || questions[currentQuestionIndex].isValid));

    return (
      <div
        className="app"
      >
        <Header
          className="app__header"
          title={title}
          totalQuestions={questions.length}
          currentQuestionIndex={currentQuestionIndex}
        />
        <Question
          className="app__question"
          question={questions[currentQuestionIndex]}
          updateAnswer={this.props.updateAnswer}
        />
        <Footer
          className="app__footer"
          isPreviousDisabled={isPreviousDisabled}
          isNextDisabled={isNextDisabled}
          showPreviousQuestion={this.props.showPreviousQuestion}
          showNextQuestion={this.props.showNextQuestion}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  title: _.get(state.app, 'data.title', ''),
  questions: _.get(state.app, 'data.questions', []),
  currentQuestionIndex: state.app.currentQuestionIndex,
});

const mapDispatchToProps = {
  updateAnswer,
  showPreviousQuestion,
  showNextQuestion,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppContainer);
