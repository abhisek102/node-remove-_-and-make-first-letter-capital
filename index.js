const arr = ['mission_impossible', 'batman', 'the_boys'];
//function to remove _underscore
const removed_ = (array) => {
  let result = array.map((item) => {
    let replaced = item.replace('_', ' ');
    return replaced.trim();
  });
  return result;
};
//function to make first letter capitalized
const capitalizeArray = (arr) => {
  return arr.map(function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  });
};

const arrRemoved_ = removed_(arr);
const finalresult = capitalizeArray(arrRemoved_);
console.log(finalresult);
