import _ from 'lodash';
import actions from 'constants/actions';

const initialState = {
  data: {
    title: 'This is a title for the form Header',
    questions: [
      {
        id: 2447,
        question_type: 'TextQuestion',
        prompt: 'What is your first answer?',
        is_required: false,
        min_char_length: 15,
      },
      {
        id: 2448,
        question_type: 'TextQuestion',
        prompt: 'What is your second answer?',
        is_required: true,
        min_char_length: 100,
      },
      {
        id: 2500,
        question_type: 'TextQuestion',
        prompt: 'What is your third answer?',
        is_required: true,
        min_char_length: 1,
      },
    ],
  },
  currentQuestionIndex: 0,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case actions.UPDATE_ANSWER: {
      const { id, answer, isValid } = action.payload;
      const updatedQuestions = _.cloneDeep(state.data.questions);
      const indexToUpdate = _.findIndex(updatedQuestions, ['id', id]);

      updatedQuestions[indexToUpdate].answer = answer;
      updatedQuestions[indexToUpdate].isValid = isValid;

      return {
        ...state,
        data: {
          ...state.data,
          questions: updatedQuestions,
        },
      };
    }
    case actions.SHOW_NEXT_QUESTION: {
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
      };
    }
    case actions.SHOW_PREVIOUS_QUESTION: {
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex - 1,
      };
    }
    default: {
      return initialState;
    }
  }
}

