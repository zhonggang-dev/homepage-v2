/* Shared motion layer: data-split headlines, data-reveal (cascading inside data-stagger),
   data-count, data-spot, data-tilt, data-magnetic, data-parallax. */
(function () {
    var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    var fine = matchMedia('(pointer: fine)').matches;

    // Split headlines into words (keeps inner markup like <em>/<b> by walking text nodes)
    document.querySelectorAll('[data-split]').forEach(function (el) {
        var i = 0;
        (function walk(node) {
            Array.prototype.slice.call(node.childNodes).forEach(function (c) {
                if (c.nodeType === 3) {
                    var frag = document.createDocumentFragment();
                    c.textContent.split(/(\s+)/).forEach(function (part) {
                        if (!part) return;
                        if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(part)); return; }
                        var w = document.createElement('span'); w.className = 'w';
                        var s = document.createElement('span'); s.textContent = part; s.style.setProperty('--i', i++);
                        w.appendChild(s); frag.appendChild(w);
                    });
                    c.parentNode.replaceChild(frag, c);
                } else if (c.nodeType === 1 && !c.classList.contains('w')) walk(c);
            });
        })(el);
        requestAnimationFrame(function () { requestAnimationFrame(function () { el.classList.add('is-in'); }); });
    });

    document.querySelectorAll('[data-stagger]').forEach(function (p) {
        Array.prototype.forEach.call(p.querySelectorAll('[data-reveal]'), function (c, i) { c.style.setProperty('--si', i % 8); });
    });

    function countUp(el) {
        var target = parseFloat(el.dataset.count), dec = (el.dataset.count.split('.')[1] || '').length, t0 = null;
        if (reduce) { el.textContent = target.toFixed(dec); return; }
        (function step(ts) {
            if (!t0) t0 = ts;
            var k = Math.max(0, Math.min(1, (ts - t0) / 1400)), e = 1 - Math.pow(1 - k, 4);
            el.textContent = (target * e).toFixed(dec);
            if (k < 1) requestAnimationFrame(step);
        })(performance.now());
    }

    var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) {
            if (!e.isIntersecting) return;
            e.target.classList.add('is-in');
            if (e.target.dataset.count !== undefined) countUp(e.target);
            io.unobserve(e.target);
        });
    }, { rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll('[data-reveal], [data-count]').forEach(function (el) { io.observe(el); });

    if (fine && !reduce) {
        document.querySelectorAll('[data-spot]').forEach(function (el) {
            if (getComputedStyle(el).position === 'static') el.style.position = 'relative';
            el.addEventListener('pointermove', function (e) {
                var r = el.getBoundingClientRect();
                el.style.setProperty('--mx', (e.clientX - r.left) + 'px'); el.style.setProperty('--my', (e.clientY - r.top) + 'px');
            });
        });
        document.querySelectorAll('[data-tilt]').forEach(function (el) {
            var amt = parseFloat(el.dataset.tilt) || 5;
            el.addEventListener('pointermove', function (e) {
                var r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
                el.style.transition = 'transform .1s';
                el.style.transform = 'perspective(900px) rotateX(' + (-y * amt) + 'deg) rotateY(' + (x * amt) + 'deg) translateY(-3px)';
            });
            el.addEventListener('pointerleave', function () { el.style.transition = 'transform .6s cubic-bezier(.2,.75,.15,1)'; el.style.transform = ''; });
        });
        document.querySelectorAll('[data-magnetic]').forEach(function (el) {
            el.addEventListener('pointermove', function (e) {
                var r = el.getBoundingClientRect();
                el.style.transform = 'translate(' + ((e.clientX - r.left - r.width / 2) * .22) + 'px,' + ((e.clientY - r.top - r.height / 2) * .3) + 'px)';
            });
            el.addEventListener('pointerleave', function () { el.style.transform = ''; });
        });
    }

    var px = document.querySelectorAll('[data-parallax]');
    if (px.length && !reduce) {
        var ticking = false;
        addEventListener('scroll', function () {
            if (ticking) return; ticking = true;
            requestAnimationFrame(function () {
                px.forEach(function (el) { el.style.transform = 'translate3d(0,' + (scrollY * parseFloat(el.dataset.parallax)) + 'px,0)'; });
                ticking = false;
            });
        }, { passive: true });
    }

    // header gains its frosted ground as soon as content can pass beneath it
    var header = document.querySelector('.site-header');
    if (header) {
        var sheet = document.querySelector('[data-field-cover]');
        var onScroll = function () {
            header.classList.toggle('is-scrolled', scrollY > 8);
            header.classList.toggle('on-paper', !!sheet && sheet.getBoundingClientRect().top < header.offsetHeight);
        };
        addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    // long-form pages: article chrome (floating TOCs) appears once the paper reaches the reader
    var paper = document.querySelector('[data-field-cover]');
    if (paper) {
        var reading = function () { document.body.classList.toggle('is-reading', paper.getBoundingClientRect().top < innerHeight * .35); };
        addEventListener('scroll', reading, { passive: true });
        addEventListener('resize', reading);
        reading();
    }
})();
