function calc() {
  let n1 = parseFloat(document.getElementById('1input').value)
  let n2 = parseFloat(document.getElementById('2input').value)
  let math = document.getElementById('math').value

  let result
  switch (math) {
    case '+':
      result = n1 + n2
      break
    case '-':
      result = n1 - n2
      break
    case '*':
      result = n1 * n2
      break
    case '/':
      result = n1 / n2
      break
    case '%':
      result = n1 % n2
      break
  }

  document.getElementById('result').innerHTML = 'Result: ' + result
}