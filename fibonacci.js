const fibonacci = (qty) => {
  const result = [1, 1]

  while(result.length <= qty) {
    let next = result[result.length - 1] + result[result.length - 2]
    result.push(next)
  }

  return result
}

console.log(fibonacci(10))
