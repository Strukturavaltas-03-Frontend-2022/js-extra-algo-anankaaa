function getCountOfTheEvenElements(arr) {
  let eventCounter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      eventCounter = eventCounter + 1
    }
  }
  return eventCounter
}

export default getCountOfTheEvenElements
