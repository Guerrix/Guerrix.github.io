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
