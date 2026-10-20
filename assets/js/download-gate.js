// Email-for-download gate for the free tracker.
// OFF until both data-hs-portal and data-hs-form are filled in on #tracker-gate.
// When off, the download link works exactly as before.
// When on: asks for name + email, sends them to our HubSpot form (they land in the
// CRM as a contact), then shows the download. Never blocks the download if HubSpot
// is down: after an error the file is offered anyway.
(function () {
  'use strict';
  var box = document.getElementById('tracker-gate');
  if (!box) return;
  var portal = (box.getAttribute('data-hs-portal') || '').trim();
  var form = (box.getAttribute('data-hs-form') || '').trim();
  if (!/^\d+$/.test(portal) || !/^[0-9a-f-]{36}$/i.test(form)) return; // gate is off

  var link = box.querySelector('a[data-gated-download]');
  var panel = box.querySelector('[data-gate-form]');
  if (!link || !panel) return;
  var f = panel.querySelector('form');
  var msg = panel.querySelector('[data-gate-msg]');
  var file = link.getAttribute('href');

  function reveal(text) {
    panel.hidden = true;
    link.textContent = 'Download the tracker';
    link.setAttribute('href', file);
    link.setAttribute('download', '');
    link.removeAttribute('data-gate-locked');
    var note = document.createElement('p');
    note.style.margin = '0';
    note.textContent = text;
    link.parentNode.insertBefore(note, link);
    link.click();
  }

  link.setAttribute('data-gate-locked', '1');
  link.removeAttribute('download');
  link.setAttribute('href', '#tracker-gate');
  link.addEventListener('click', function (e) {
    if (link.getAttribute('data-gate-locked') !== '1') return;
    e.preventDefault();
    panel.hidden = false;
    var first = f.querySelector('input');
    if (first) first.focus();
  });

  f.addEventListener('submit', function (e) {
    e.preventDefault();
    var email = (f.elements.email.value || '').trim();
    var name = (f.elements.firstname.value || '').trim();
    var company = (f.elements.company.value || '').trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) { msg.textContent = 'Please enter a valid email.'; return; }
    if (f.elements.website && f.elements.website.value) { reveal('Thanks!'); return; } // bot trap
    msg.textContent = 'One moment…';
    var body = {
      fields: [
        { name: 'email', value: email.slice(0, 254) },
        { name: 'firstname', value: name.slice(0, 100) },
        { name: 'company', value: company.slice(0, 150) }
      ],
      context: { pageUri: location.href.split('#')[0], pageName: document.title }
    };
    fetch('https://api.hsforms.com/submissions/v3/integration/submit/' + portal + '/' + form, {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body)
    }).then(function (r) {
      reveal(r.ok ? 'Thanks! Your download is starting.' : 'Your download is starting.');
    }).catch(function () { reveal('Your download is starting.'); });
  });
})();
