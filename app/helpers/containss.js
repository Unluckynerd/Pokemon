import { helper } from '@ember/component/helper';

export default helper(function containss([substr = ' ', str]) {
  if(substr == " "){
    return true;
  }
  const string = substr?.toLowerCase();
  return str.includes(string);
});
