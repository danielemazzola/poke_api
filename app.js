const random = Math.floor(Math.random() * 150) + 1
const span = document.createElement('span')
const body = document.querySelector('body')
span.setAttribute('class', 'loader')

const api = async () => {
  body.appendChild(span)
  const getPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}`)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      const title = document.createElement('h1')
      const randomNumber = document.createElement('p')
      const img = document.querySelector('.random-image')
      img.setAttribute('src', data.sprites.other.dream_world.front_default)
      img.setAttribute('alt', data.name)
      img.setAttribute('loading', 'lazy')
      title.textContent = data.name
      randomNumber.textContent = `Numero: ${random}`
      span.remove()
      body.appendChild(title)
      body.appendChild(randomNumber)
    })
    .catch((error) => {
      span.remove()
      console.log(error)
    })
}
api()
