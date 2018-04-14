import _ from 'lodash';

export function keyMirror(keys) {
  return keys.reduce((result, key) => ({ ...result, [key]: key }), {});
}
