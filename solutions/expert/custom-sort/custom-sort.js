function customSort (arr) {
  let stringArray = arr.filter((el) => typeof el !== 'number')
  let numberArray = arr.filter((el) => typeof el === 'number')

  const len = numberArray.length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1; j++) {
      if (numberArray[j] > numberArray[j + 1]) {
        let temp = numberArray[j]
        numberArray[j] = numberArray[j + 1]
        numberArray[j + 1] = temp
      }
    }
  }
  return numberArray.concat(stringArray)
}

export default customSort
