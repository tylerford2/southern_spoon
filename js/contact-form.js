document.querySelectorAll('.contact-form').forEach(function (form) {
  form.addEventListener('submit', function () {
    var btn = form.querySelector('button[type="submit"]');
    if (btn) {
      btn.disabled = true;
      btn.textContent = 'Sending…';
    }
  });
});

(function () {
  var params = new URLSearchParams(window.location.search);
  if (params.get('sent') !== 'true') return;

  var form = document.querySelector('.contact-form');
  var thanks = document.querySelector('.form-thanks');
  if (form) form.style.display = 'none';
  if (thanks) thanks.classList.add('visible');

  if (window.history && window.history.replaceState) {
    var url = new URL(window.location.href);
    url.searchParams.delete('sent');
    window.history.replaceState({}, document.title, url.pathname + url.hash + url.search);
  }
})();
