function searchAndCount (arr, searchValue) {
  let result = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === searchValue) {
      result += 1;
    }
  }
  return result;
}

export default searchAndCount
