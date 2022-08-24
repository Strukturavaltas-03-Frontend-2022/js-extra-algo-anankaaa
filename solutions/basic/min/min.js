function getTheSmallestElement (arr) {
  let minValue = arr[0]
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] < minValue) {
      minValue = arr[i]
    }
  }
  return minValue
}

export default getTheSmallestElement
