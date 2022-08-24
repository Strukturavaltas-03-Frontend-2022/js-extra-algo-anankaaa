function getNthLargestElement (arr, nth) {
  const index = nth - 1
  return arr.sort((a, b) => b - a)[index]
}

export default getNthLargestElement
