// "What's included" opens and closes on every service card together, so the cards stay even.
(function () {
  var all = Array.prototype.slice.call(document.querySelectorAll('.svc-grid details.scope'));
  var syncing = false;
  all.forEach(function (d) {
    d.addEventListener('toggle', function () {
      if (syncing) return;
      syncing = true;
      all.forEach(function (o) { if (o !== d) o.open = d.open; });
      syncing = false;
    });
  });
})();
