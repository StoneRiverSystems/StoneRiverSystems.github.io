// Gig Desk case study: types out the terminal replay, fills the score bars and fades sections in on scroll.
// No libraries. With reduced motion, everything shows at once.
(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function fillBars() {
    document.querySelectorAll('.fill[data-w]').forEach(function (el) { el.style.width = el.getAttribute('data-w') + '%'; });
  }

  function showAll() {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
    fillBars();
  }

  if (reduce || !('IntersectionObserver' in window)) { showAll(); return; }

  // Reveal on scroll; the chart fills its bars when it comes into view.
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      e.target.classList.add('in');
      if (e.target.id === 'chart') setTimeout(fillBars, 200);
      io.unobserve(e.target);
    });
  }, { threshold: 0.2 });
  document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });

  // Terminal replay: reveal the existing lines one by one (content stays in the HTML for screen readers and no-JS).
  var pre = document.getElementById('replay');
  if (!pre) return;
  var lines = pre.innerHTML.split('\n');
  var cursor = '<span class="cursor" aria-hidden="true"></span>';
  var i = 0;
  pre.setAttribute('aria-busy', 'true');
  pre.innerHTML = cursor;
  function next() {
    if (i >= lines.length) { pre.innerHTML = lines.join('\n'); pre.removeAttribute('aria-busy'); return; }
    i += 1;
    pre.innerHTML = lines.slice(0, i).join('\n') + (i < lines.length ? '\n' + cursor : '');
    var line = lines[i - 1];
    var wait = i <= 3 ? 260 : (line.indexOf('verdict-stamp') > -1 ? 0 : (line.trim() === '' ? 380 : 520));
    if (line.indexOf('[supervisor]') > -1) wait = 900;   // a beat before the verdict lands
    setTimeout(next, wait);
  }
  setTimeout(next, 500);
})();
