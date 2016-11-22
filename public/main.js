const qs = s => document.querySelector(s)
const qsa = s => document.querySelectorAll(s)

const main = () => {
  const hue = qs('input[name=hue]').value
  const saturation = qs('input[name=saturation]').value
  const lightness = qs('input[name=lightness]').value
  const alpha = qs('input[name=alpha]').value
  const hsla = `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`
  qs('h2').textContent = hsla
}

document.addEventListener('DOMContentLoaded', main)
