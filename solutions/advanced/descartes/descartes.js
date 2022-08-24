function getCartesianProductBetweenTwoArrays (arr1, arr2) {
  const cartesian = arr1.map(x => arr2.map(y => y * x));
  return cartesian.flat()
}

export default getCartesianProductBetweenTwoArrays
