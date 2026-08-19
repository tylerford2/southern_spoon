document.addEventListener('DOMContentLoaded', function () {
  var root = document.getElementById('photo-carousel');
  if (!root) return;

  var photos = window.CAROUSEL_PHOTOS || [];
  if (!photos.length) return;

  var AUTOPLAY_MS = 2500;

  var imgEl = document.getElementById('carousel-image');
  var currentEl = document.getElementById('carousel-current');
  var totalEl = document.getElementById('carousel-total');
  var prevBtn = root.querySelector('.carousel-prev');
  var nextBtn = root.querySelector('.carousel-next');
  var playPauseBtn = root.querySelector('.carousel-play-pause');
  var index = 0;
  var timer = null;
  var playing = true;

  function render() {
    var p = photos[index];
    imgEl.src = p.src;
    imgEl.alt = p.alt;
    if (currentEl) currentEl.textContent = index + 1;

    var nextIndex = (index + 1) % photos.length;
    var preload = new Image();
    preload.src = photos[nextIndex].src;
  }

  function go(delta) {
    index = (index + delta + photos.length) % photos.length;
    render();
    if (playing) startAutoplay();
  }

  function startAutoplay() {
    stopAutoplay();
    timer = setInterval(function () { go(1); }, AUTOPLAY_MS);
  }

  function stopAutoplay() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  function setPlaying(next) {
    playing = next;
    if (playPauseBtn) {
      playPauseBtn.setAttribute('aria-label', playing ? 'Pause slideshow' : 'Play slideshow');
      playPauseBtn.innerHTML = playing ? '&#10074;&#10074;' : '&#9654;';
    }
    if (playing) {
      startAutoplay();
    } else {
      stopAutoplay();
    }
  }

  if (prevBtn) prevBtn.addEventListener('click', function () { go(-1); });
  if (nextBtn) nextBtn.addEventListener('click', function () { go(1); });
  if (playPauseBtn) playPauseBtn.addEventListener('click', function () { setPlaying(!playing); });

  document.addEventListener('keydown', function (e) {
    if (!root.getBoundingClientRect || root.getBoundingClientRect().bottom < 0) return;
    if (e.key === 'ArrowLeft') go(-1);
    if (e.key === 'ArrowRight') go(1);
    if (e.key === ' ' && e.target === document.body) {
      e.preventDefault();
      setPlaying(!playing);
    }
  });

  var touchStartX = null;
  root.addEventListener('touchstart', function (e) {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });
  root.addEventListener('touchend', function (e) {
    if (touchStartX === null) return;
    var dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
    touchStartX = null;
  });

  if (totalEl) totalEl.textContent = photos.length;
  render();
  setPlaying(true);
});
