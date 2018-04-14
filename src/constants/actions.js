import { keyMirror } from 'utils/jsUtils';

const actions = keyMirror([
  'UPDATE_ANSWER',
  'SHOW_NEXT_QUESTION',
  'SHOW_PREVIOUS_QUESTION',
]);

export default actions;
