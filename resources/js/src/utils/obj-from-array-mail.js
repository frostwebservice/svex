export const objFromArrayMail = (arr, key = 'key_id') =>
  arr.reduce((accumulator, current) => {
    accumulator[current[key]] = current;
    return accumulator;
  }, {});
