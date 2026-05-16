const ua = navigator.userAgent;

const isTikTok = /musical_ly|BytedanceWebview|trill_/i.test(ua);

if (isTikTok) {
  document.getElementById('webviewBanner').style.display = 'flex';
}

document.getElementById('webviewClose').addEventListener('click', () => {
  document.getElementById('webviewBanner').style.display = 'none';
});

const colors = [
  '#D4849A',
  '#C97D8A',
  '#E8A89C',
  '#C06B7F',
  '#F2C4CE',
  '#B86278',
];

for (let i = 0; i < 28; i++) {
  const p = document.createElement('div');
  p.className = 'petal';

  const size = 12 + Math.random() * 16;
  p.style.left = `${Math.random() * 100}%`;
  p.style.width = `${size}px`;
  p.style.height = `${size * 1.35}px`;
  p.style.background = colors[Math.floor(Math.random() * colors.length)];
  p.style.animationDuration = `${5 + Math.random() * 6}s`;
  p.style.animationDelay = `-${Math.random() * 8}s`;
  p.style.borderRadius = `${50 + Math.random() * 20}% ${40 + Math.random() * 20}% ${60 + Math.random() * 20}% ${30 + Math.random() * 20}% / ${50 + Math.random() * 20}% ${55 + Math.random() * 20}% ${40 + Math.random() * 20}% ${45 + Math.random() * 20}%`;

  document.body.appendChild(p);
}
