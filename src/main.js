const isWebView = /TikTok|Instagram|FBAN|FBAV/i.test(navigator.userAgent);
if (isWebView) {
  document.getElementById('webviewBanner').style.display = 'flex';
}
document.getElementById('webviewClose').addEventListener('click', () => {
  document.getElementById('webviewBanner').style.display = 'none';
});
