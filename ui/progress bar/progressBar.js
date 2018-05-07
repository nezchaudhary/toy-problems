const move = () => {
  let bar = document.getElementById("progress-bar");
  let width = 1;

  const frame = () => {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++;
      bar.style.width = width + '%';
      console.log('bar', bar);
      bar.innerText = width + '%';
    }
  }

  let id = setInterval(frame, 100);
}

const button = document.getElementsByClassName('button')[0];
button.addEventListener('click', move);