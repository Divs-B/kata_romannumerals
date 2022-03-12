const NumberAndRomanConversion = input => {
  const romanAndIntegerMap = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  }

  if (Number.isInteger(input)) {
    let numberInput = input
    let romanResult = []

    for (const [key, value] of Object.entries(romanAndIntegerMap)) {
      while (numberInput >= value) {
        numberInput -= value
        romanResult.push(key)
      }
    }

    return romanResult.join('').toString()
  } else {
    let romanInput = input
    let numberResult =
      romanAndIntegerMap[romanInput.charAt(romanInput.length - 1)]

    let index = romanInput.length - 2
    do {
      romanAndIntegerMap[romanInput.charAt(index)] >=
      romanAndIntegerMap[romanInput.charAt(index + 1)]
        ? (numberResult += romanAndIntegerMap[romanInput.charAt(index)])
        : (numberResult -= romanAndIntegerMap[romanInput.charAt(index)])

      index -= 1
    } while (index >= 0)
    return numberResult
  }
}

module.exports = {
  NumberAndRomanConversion
}
