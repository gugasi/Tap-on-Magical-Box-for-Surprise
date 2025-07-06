function draw() {
  setInterval(createStars, 30);
  setInterval(starFall, 2000);

  const canvas = document.getElementById("nightSky");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const art = canvas.getContext("2d");

  // glowing moon gradient
  art.beginPath();
  art.arc(240, 160, 60, 0, Math.PI * 2, true);
  const color = art.createRadialGradient(240, 160, 5, 240, 160, 60);
  color.addColorStop(0, '#fffbe8');
  color.addColorStop(0.5, '#cae3ef');
  color.addColorStop(1, '#7aa4b4');
  art.fillStyle = color;
  art.fill();
}

function createStars() {
  const container = document.getElementById('starsSmall');
  const star = document.createElement('div');
  star.style.left = Math.random() * window.innerWidth + 'px';
  star.style.top = Math.random() * window.innerHeight + 'px';
  star.style.width = Math.floor(Math.random() * 2 + 1) + 'px';
  star.style.height = star.style.width;
  star.style.backgroundColor = "white";
  star.style.position = "absolute";
  star.style.zIndex = "-1";
  star.style.borderRadius = "50%";
  star.style.opacity = Math.random().toFixed(1);
  container.appendChild(star);
  setTimeout(() => star.remove(), 60000);
}

function starFall() {
  const container = document.getElementById('fallingStar');
  const fall = document.createElement('div');
  const length = Math.random() * 80 + 100;
  fall.style.width = length + "px";
  fall.style.height = "2px";
  fall.style.position = "absolute";
  fall.style.left = Math.random() * window.innerWidth + 'px';
  fall.style.top = Math.random() * window.innerHeight / 2 + 'px';
  fall.style.backgroundImage = "linear-gradient(to right, white 50%, transparent)";
  fall.style.transform = "rotate(-40deg)";
  fall.style.opacity = 0.8;
  fall.style.animation = "hide 1s linear forwards";
  fall.style.zIndex = "-1";
  container.appendChild(fall);
  setTimeout(() => fall.remove(), 1200);
}
