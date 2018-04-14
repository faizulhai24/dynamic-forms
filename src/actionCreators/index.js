import _ from 'lodash';
import actions from 'constants/actions';

export const updateAnswer = ({ answer, id, isValid }) => ({
  type: actions.UPDATE_ANSWER,
  payload: {
    id,
    answer,
    isValid,
  },
});

export const showNextQuestion = () => ({
  type: actions.SHOW_NEXT_QUESTION,
});

export const showPreviousQuestion = () => ({
  type: actions.SHOW_PREVIOUS_QUESTION,
});
