function getUnionOfTwoArrays (arr1, arr2) {
  let array = []
  for (let i = 0; i < arr1.length; i += 1) {
    if (array.indexOf(arr1[i]) === -1) {
      array.push(arr1[i])
    }
    if (array.indexOf(arr2[i]) === -1) {
      array.push(arr2[i])
    }
  }
  return array
}


export default getUnionOfTwoArrays
