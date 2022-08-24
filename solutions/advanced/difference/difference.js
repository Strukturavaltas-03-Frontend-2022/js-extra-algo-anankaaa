function getTheDifferenceBetweenTwoArrays (arr1, arr2) {
  const difference = arr1.filter(x => !arr2.includes(x))
  return difference
}

export default getTheDifferenceBetweenTwoArrays
