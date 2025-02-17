document.getElementById('snake-zoom').addEventListener('change', (evt) => {
  const newPercent = `${evt.target.value}%`;
  document.body.style.zoom = newPercent;
})
