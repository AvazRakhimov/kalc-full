// Calculation //
const input1 = document.getElementById('1input')
const input2 = document.getElementById('2input')
const resultDisplay = document.getElementById('result')
let selectedOperator = null
let selectedButton = null

function selectOperator(operator, button) {
  if (selectedButton) { selectedButton.disabled = false }
  selectedOperator = operator
  selectedButton = button
  selectedButton.disabled = true
}

document.querySelectorAll('.sel-main button').forEach((button) => {
  button.addEventListener('click', () => selectOperator(button.textContent, button))
})

function calc() {
  const num1 = parseFloat(input1.value)
  const num2 = parseFloat(input2.value)
  let result

  if (isNaN(num1) || isNaN(num2) || selectedOperator === null) {
    resultDisplay.textContent = 'Please enter valid numbers and select an operator.'
    return
  }

  switch (selectedOperator) {
    case '+':
      result = num1 + num2
      break
    case '-':
      result = num1 - num2
      break
    case '*':
      result = num1 * num2
      break
    case '/':
      if (num2 !== 0) { result = num1 / num2 }
      else {
        resultDisplay.textContent = 'Cannot divide by zero.'
        return
      }
      break
    case '%':
      result = num1 % num2
      break
    default:
      resultDisplay.textContent = 'Invalid operation.'
      return
  }

  resultDisplay.textContent = `Result: ${result}`
}



// Copy //
document.getElementById('result').addEventListener('click', function () {
  const resultText = document.getElementById('result').innerText
  const valueOnly = resultText.replace('Result: ', '').trim()
  navigator.clipboard
    .writeText(valueOnly)
    .then(function () {
      alert('Copied to clipboard!')
    })
    .catch(function (err) {
      console.error('Failed to copy text: ', err)
    })
})