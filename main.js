window.addEventListener('DOMContentLoaded', function () {
  // 背景画像のURLを取得
  const bg = document.querySelector('.bg');
  const style = getComputedStyle(bg);
  const urlMatch = style.backgroundImage.match(/url\(["']?(.+?)["']?\)/);
  if (!urlMatch) {
    document.getElementById('loading-overlay').style.opacity = 0;
    setTimeout(() => {
      document.getElementById('loading-overlay').style.display = 'none';
    }, 800);
    return;
  }
  const img = new Image();
  img.src = urlMatch[1];
  img.onload = function () {
    document.getElementById('loading-overlay').style.opacity = 0;
    setTimeout(() => {
      document.getElementById('loading-overlay').style.display = 'none';
    }, 800);
  };
});