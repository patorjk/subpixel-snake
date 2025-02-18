document.getElementById('snake-zoom').addEventListener('change', (evt) => {
  const newPercent = `${evt.target.value}%`;
  document.body.style.zoom = newPercent;
});

document.addEventListener('keydown', (evt) => {
  const setRoute = (id) => {
    const elm = document.getElementById(id);
    if (elm) {
      elm.checked = true;
    }
  };

  if (evt.key === '1') {
    setRoute('ai-route1');
  } else if (evt.key === '2') {
    setRoute('ai-route2');
  } else if (evt.key === '3') {
    setRoute('ai-route3');
  }
});
