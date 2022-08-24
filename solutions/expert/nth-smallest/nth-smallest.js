function getNthSmallestElement (arr, nth) {
  const index = nth - 1
  return arr.sort()[index]
}

export default getNthSmallestElement
