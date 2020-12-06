console.log(document.title)
let h1sArr = [...document.querySelectorAll('h1')]
let h2sArr = [...document.querySelectorAll('h2')]

h1sArr.map(item => {
  item.style.background = 'yellow'
})

h2sArr.map(item => {
  item.style.background = '#caf0ca'
})