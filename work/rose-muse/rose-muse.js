document.getElementById('book-form').addEventListener('submit',function(e){e.preventDefault();document.getElementById('demo-msg').textContent='This is a demo, so nothing was sent. On a real site, this request would go straight to the artist.';});
  (function(){var b=document.querySelector('.bubble'),h=document.querySelector('.hero');
    if(!('IntersectionObserver' in window)){b.classList.add('show');return;}
    new IntersectionObserver(function(e){b.classList.toggle('show',!e[0].isIntersecting);},{threshold:.15}).observe(h);})();
