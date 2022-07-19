import { helper } from '@ember/component/helper';

export default helper(function containss([substr = ' ', str]) {
  const string = substr?.toLowerCase();
  return str.includes(string);
});
