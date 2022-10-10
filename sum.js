function sum() {
  let result = 0
  const argumentsValues = Object.values(arguments)
  
  argumentsValues.forEach(arg => typeof arg === 'number' ? result += arg: false)

  return result
}

const largeSum = sum(10, 23, 11, 555, 12 ,512, 1212 ,413, 'asa', true, 'wellington')

console.log(largeSum)


