(function () {
  var body = document.body;
  var toggle = document.querySelector('.toggle');
  var stored = localStorage.getItem('jGuerraLightMode');

  if (stored === 'TRUE') {
    body.classList.add('lightmode');
  } else if (stored === 'FALSE') {
    body.classList.remove('lightmode');
  }

  if (!toggle) {
    return;
  }

  toggle.addEventListener('click', function (e) {
    e.preventDefault();
    var isLight = body.classList.toggle('lightmode');
    localStorage.setItem('jGuerraLightMode', isLight ? 'TRUE' : 'FALSE');
  });
})();

(function () {
  var toggle = document.getElementById('testimonials-toggle');
  var more = document.getElementById('testimonials-more');

  if (!toggle || !more) {
    return;
  }

  toggle.addEventListener('click', function () {
    var isOpen = toggle.getAttribute('aria-expanded') === 'true';

    if (isOpen) {
      more.classList.remove('is-visible');
      more.hidden = true;
      toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = 'View more feedback ↓';
    } else {
      more.hidden = false;
      requestAnimationFrame(function () {
        more.classList.add('is-visible');
      });
      toggle.setAttribute('aria-expanded', 'true');
      toggle.textContent = 'Show less ↑';
    }
  });
})();
