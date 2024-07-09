// Code your solutions in this file
let spy

beforeEach(() => {
  spy = sinon.spy(console, 'log')
})

afterEach(() => {
  spy.restore()
})

const writeCards = (arr, surprise) => {
  let messages = []
  arr.forEach((user_name) => {
    messages.unshift(
      `Thank you, ${user_name}, for the wonderful ${surprise} gift!`
    )
  })
  return messages
}

const countDown = (number) => {
  while (number >= 0) {
    console.log(number)
    number--
  }
}
