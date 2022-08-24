function getSectionOfTwoArrays (arr1, arr2) {
  const arrCommon = arr1.filter(value => arr2.includes(value))
  return arrCommon
}

export default getSectionOfTwoArrays
