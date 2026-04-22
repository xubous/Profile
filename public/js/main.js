/* ===========================
   CURSOR
   =========================== */
(function initCursor() {
  const cursor = document.getElementById('cursor');
  if (!cursor) return;

  let cx = 0, cy = 0, raf = null;

  document.addEventListener('mousemove', e => {
    cx = e.clientX;
    cy = e.clientY;
    if (!raf) {
      raf = requestAnimationFrame(() => {
        cursor.style.transform = `translate(calc(${cx}px - 50%), calc(${cy}px - 50%))`;
        raf = null;
      });
    }
  }, { passive: true });

  const hoverIn  = () => { cursor.style.width = '22px'; cursor.style.height = '22px'; cursor.style.background = '#ffffff'; };
  const hoverOut = () => { cursor.style.width = '10px'; cursor.style.height = '10px'; cursor.style.background = '#4a8fe8'; };

  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', hoverIn,  { passive: true });
    el.addEventListener('mouseleave', hoverOut, { passive: true });
  });
})();

/* ===========================
   TYPEWRITER
   =========================== */
(function initTypewriter() {
  const line1 = document.getElementById('typedLine1');
  const line2 = document.getElementById('typedLine2');
  if (!line1 || !line2) return;

  function typeLine(el, text, onDone) {
    el.innerHTML = '';
    let i = 0;

    function typeNext() {
      if (i < text.length) {
        const prev = el.querySelector('.char.cursor-blink');
        if (prev) prev.classList.remove('cursor-blink');

        const span = document.createElement('span');
        span.className = 'char cursor-blink';
        span.style.animationDelay = '0s';
        span.textContent = text[i];
        el.appendChild(span);
        i++;

        setTimeout(typeNext, 70 + Math.random() * 50);
      } else {
        const prev = el.querySelector('.char.cursor-blink');
        if (prev) prev.classList.remove('cursor-blink');
        if (onDone) setTimeout(onDone, 120);
      }
    }

    typeNext();
  }

  setTimeout(() => {
    typeLine(line1, 'Gabriel', () => typeLine(line2, 'Carvalho.', null));
  }, 600);
})();

/* ===========================
   SKILL BARS
   =========================== */
function animateBars() {
  document.querySelectorAll('.skill-fill').forEach(bar => {
    bar.style.transform = `scaleX(${bar.dataset.w})`;
  });
}

/* ===========================
   INTERSECTION OBSERVER — REVEAL
   =========================== */
(function initReveal() {
  const revealEls = document.querySelectorAll('.reveal');
  const groupEls  = document.querySelectorAll('.reveal-group');
  let barsAnimated = false;

  const isAbove = el => el.getBoundingClientRect().bottom < window.innerHeight * 0.1;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const el = entry.target;

      if (entry.isIntersecting) {
        el.classList.add('show');
        el.classList.remove('hide');

        // Animate skill bars once when #stack enters view
        if (!barsAnimated && el.closest('#stack')) {
          barsAnimated = true;
          setTimeout(animateBars, 200);
        }
      } else {
        if (isAbove(el)) {
          el.classList.add('hide');
          el.classList.remove('show');
        } else {
          el.classList.remove('show', 'hide');
        }
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => observer.observe(el));
  groupEls.forEach(el  => observer.observe(el));
})();