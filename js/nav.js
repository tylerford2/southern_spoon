document.addEventListener('DOMContentLoaded', function () {
  var nav = document.querySelector('nav.main-nav');
  if (!nav) return;

  var toggle = nav.querySelector('.nav-toggle');
  var dropdownItems = nav.querySelectorAll('.has-dropdown');

  function closeAll() {
    nav.setAttribute('data-open', 'false');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
    dropdownItems.forEach(function (item) {
      item.classList.remove('open');
      var btn = item.querySelector('.dropdown-toggle');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    });
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.getAttribute('data-open') === 'true';
      nav.setAttribute('data-open', isOpen ? 'false' : 'true');
      toggle.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
    });
  }

  dropdownItems.forEach(function (item) {
    var btn = item.querySelector('.dropdown-toggle');
    if (!btn) return;
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var isOpen = item.classList.contains('open');
      dropdownItems.forEach(function (other) {
        other.classList.remove('open');
        var otherBtn = other.querySelector('.dropdown-toggle');
        if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  document.addEventListener('click', function (e) {
    if (!nav.contains(e.target)) {
      closeAll();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeAll();
    }
  });
});
