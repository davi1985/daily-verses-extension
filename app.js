const element = document.querySelector('#verse')

;(async () => {
  const response = await fetch(
    'https://www.abibliadigital.com.br/api/verses/nvi/random'
  )

  const data = await response.json()
  const textFormatted = data.text.charAt(0).toUpperCase() + data.text.slice(1)
  let finalText = textFormatted.slice(0, -1)

  finalText = finalText.replace(/[.,]*$/, '.')

  element.innerHTML = `
    <p class="card-text">${textFormatted}</p>
    <footer class="blockquote-footer mt-1">${data.book.name} ${data.chapter}.${data.number}</footer>`
})()
