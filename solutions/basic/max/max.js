function getTheLargestElement(arr) {
  let maxValue = arr[0]
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] > maxValue) {
      maxValue = arr[i]
    }
  }
  return maxValue
}

export default getTheLargestElement
