import { helper } from '@ember/component/helper';

export default helper(function and(params) {
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i]) {
      if (typeof arguments[i] == 'object' && arguments[i].length == 0) {
        return false;
      }
      continue;
    }
    return false;
  }
  return true;
});
