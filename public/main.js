const qs = s => document.querySelector(s)
const qsa = s => document.querySelectorAll(s)

const update = () => {
  const hue = qs('input[name=hue]').value
  const saturation = qs('input[name=saturation]').value
  const lightness = qs('input[name=lightness]').value
  const alpha = qs('input[name=alpha]').value
  const hsla = `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`
  qs('h2').textContent = hsla
  qs('.picker figure').style.backgroundColor = hsla
}

const randomize = () => {
  qs('input[name=hue]').value = Math.round(Math.random() * 360)
  qs('input[name=saturation]').value = Math.round(Math.random() * 100)
  qs('input[name=lightness]').value = Math.round(Math.random() * 100)
  qs('input[name=alpha]').value = 1
  update()
}

const save = () => {
  const hue = qs('input[name=hue]').value
  const saturation = qs('input[name=saturation]').value
  const lightness = qs('input[name=lightness]').value
  const alpha = qs('input[name=alpha]').value
  const hsla = `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`
  const li = document.createElement('li')
  const figure = document.createElement('figure')
  figure.style.backgroundColor = hsla
  li.appendChild(figure)
  qs('ul.library').appendChild(li)
}

const main = () => {
  const inputs = qsa('.picker input')
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', update)
  }
  qs('.actions .random').addEventListener('click', randomize)
  qs('.actions .save').addEventListener('click', save)
  update()
}

document.addEventListener('DOMContentLoaded', main)
