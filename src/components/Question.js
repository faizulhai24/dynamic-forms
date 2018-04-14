import React from 'react';
import PropTypes from 'prop-types';

export default class Question extends React.Component {
  static propTypes = {
    question: PropTypes.object,
    className: PropTypes.string,
    updateAnswer: PropTypes.func,
  };
  componentDidMount() {
    this.textareaNode.focus();
  }
  componentDidUpdate(prevProps) {
    const { id, is_required, min_char_length, answer } = this.props.question;
    if (id !== prevProps.question.id) {
      this.props.updateAnswer({
        id,
        answer: answer || '',
        isValid: !is_required || (is_required && (answer || '').length >= min_char_length),
      });
      this.textareaNode.focus();
    }
  }
  onTextareaChange = (e) => {
    const { id, is_required, min_char_length } = this.props.question;
    const answer = e.target.value;
    const isValid = !is_required || (is_required && answer.length >= min_char_length);
    this.props.updateAnswer({
      id,
      answer,
      isValid,
    });
  }
  render() {
    const { className, question } = this.props;
    return (
      <div
        className={className}
      >
        <div
          className={`${className}__prompt`}
        >
          { question.prompt }
        </div>
        <div
          className={`${className}__note`}
        >
          { question.is_required ? (
            <span>Required</span>
          ) : (
            <span>Optional</span>
          )}
        </div>
        <div
          className={`${className}__answer`}
        >
          <textarea
            ref={(node) => { this.textareaNode = node; }}
            placeholder="Type in your answer here.."
            value={question.answer}
            onChange={this.onTextareaChange}
          />
        </div>
      </div>
    );
  }
}
