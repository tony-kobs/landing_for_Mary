const ua = navigator.userAgent;

const isTikTok = /musical_ly|BytedanceWebview|trill_/i.test(ua);

if (isTikTok) {
  document.getElementById('webviewBanner').style.display = 'flex';
}

document.getElementById('webviewClose').addEventListener('click', () => {
  document.getElementById('webviewBanner').style.display = 'none';
});
