document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#button').addEventListener('click', () => {
    document.querySelector('#title').innerHTML = Math.random()
  })
})
