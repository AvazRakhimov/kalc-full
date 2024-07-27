// Calculation //
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

// Copy //
document.getElementById('result').addEventListener('click', function () {
  const resultText = document.getElementById('result').innerText
  navigator.clipboard
    .writeText(resultText)
    .then(function () {
      alert('Result copied to clipboard!')
    })
    .catch(function (err) {
      console.error('Failed to copy text: ', err)
    })
})