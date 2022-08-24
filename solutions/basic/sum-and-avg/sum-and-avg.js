export function getSumOfTheElements (arr) {
  return arr.reduce((previousValue, currentValue) => (previousValue + currentValue))
}

export function getAvarageOfTheElements (arr) {
  return getSumOfTheElements(arr) / arr.length
}
