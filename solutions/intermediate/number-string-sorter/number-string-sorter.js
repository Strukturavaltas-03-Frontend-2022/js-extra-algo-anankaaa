function numberAndStringSorter(arr) {
  let num = arr.filter(number => typeof number === 'number')
  let text = arr.filter(text => typeof text === 'string')
  let zip = [];
  num.forEach((element, index) => {
    zip.push(element, text[index])
  });

  console.log(zip);
  return zip
}

export default numberAndStringSorter
