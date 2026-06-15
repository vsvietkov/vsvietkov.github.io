/* ============================================================================
   Renderer — reads the global PORTFOLIO (from data.js) and builds the page.
   You normally won't need to edit this; all content lives in data.js.
   ========================================================================== */
(function () {
  const D = PORTFOLIO;

  /* ---- helpers ----------------------------------------------------------- */
  const esc = (s) => String(s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

  const set = (id, html) => { const n = document.getElementById(id); if (n) n.innerHTML = html; };

  // Tech name -> brand logo (Simple Icons CDN) or empty string.
  function icon(name) {
    const slug = D.iconMap[name];
    if (!slug) return '';
    return `<img src="https://cdn.simpleicons.org/${slug}" width="14" height="14" alt="">`;
  }

  const chip = (name) => `<span class="chip">${icon(name)}${esc(name)}</span>`;
  const chips = (arr) => (arr || []).map(chip).join('');

  const initials = (s) => s.trim().split(/\s+/).filter(Boolean).slice(0, 2)
    .map((w) => w[0]).join('').toUpperCase();

  // Elapsed time from a 'YYYY' or 'YYYY-MM' start date, e.g. "5 years".
  function elapsed(since) {
    const m = String(since).match(/^(\d{4})(?:-(\d{1,2}))?/);
    if (!m) return String(since);
    const start = new Date(+m[1], (m[2] ? +m[2] : 1) - 1, 1);
    const years = (Date.now() - start.getTime()) / (365.25 * 24 * 3600 * 1000);
    const whole = Math.floor(years);
    if (whole < 1) {
      const months = Math.max(0, Math.floor(years * 12));
      return months <= 1 ? '< 1 year' : months + ' months';
    }
    return whole === 1 ? '1 year' : whole + ' years';
  }

  const aiInline = (on) => on ? `<span class="ai-badge ai-badge--inline">AI first</span>` : '';
  const aiCorner = (on) => on ? `<span class="ai-badge ai-badge--corner">AI first</span>` : '';

  const thumbImage = (src, alt) => {
    const useContain = /\.(svg|webp)$/i.test(src);
    return `<img class="thumb-img${useContain ? ' thumb-img--contain' : ''}" src="${esc(src)}" alt="${esc(alt)}" loading="lazy">`;
  };

  // Commercial thumbnail: real image > NDA placeholder > initials placeholder.
  function commercialThumb(item) {
    if (item.image) {
      return `<div class="thumb thumb--image">${thumbImage(item.image, item.title)}</div>`;
    }
    if (item.nda !== false) {
      return `<div class="thumb thumb--nda">
        <div class="thumb-hatch"></div>
        <div class="thumb-nda-label">
          <span class="icon">lock</span>
          <span class="tag">NDA</span>
        </div>
      </div>`;
    }
    return `<div class="thumb thumb--initials">
        <span class="thumb-initials">${esc(initials(item.title))}</span>
      </div>`;
  }

  function statusBadge(status) {
    if (status === 'in-progress') {
      return `<div class="badge-progress">
        <span class="badge-progress-dot"></span>
        <span class="badge-progress-text">In progress</span>
      </div>`;
    }
    if (status === 'upcoming') {
      return `<div class="badge-upcoming">
        <span class="icon">schedule</span>
        <span class="badge-upcoming-text">Upcoming</span>
      </div>`;
    }
    return '';
  }

  const AVAILABILITY = {
    'Available for full-time': { color: '#16A34A', shadow: 'rgba(22,163,74,.2)' },
    'Available for freelance': { color: '#D97706', shadow: 'rgba(217,119,6,.2)' },
    'Not available':           { color: '#DC2626', shadow: 'rgba(220,38,38,.2)' },
  };

  /* ---- identity ---------------------------------------------------------- */
  set('brand-badge', esc(D.initials || initials(D.name)));
  set('brand-handle', esc(D.handle));
  set('rail-role', esc(D.role));
  set('rail-name', esc(D.name));

  const photo = document.getElementById('photo');
  photo.src = D.photo;
  photo.alt = D.name;
  photo.onerror = () => {
    const ph = document.createElement('div');
    ph.className = 'photo photo--empty';
    ph.textContent = 'Drop your photo';
    photo.replaceWith(ph);
  };

  document.getElementById('link-github').href = D.github;
  document.getElementById('link-linkedin').href = D.linkedin;
  document.getElementById('link-resume').href = D.resume;

  /* ---- meta -------------------------------------------------------------- */
  set('meta', D.meta.map((m) => `<div>
    <div class="meta-label">${esc(m.label)}</div>
    <div class="meta-value">${esc(m.since ? elapsed(m.since) : m.value)}</div>
  </div>`).join(''));

  /* ---- nav (with grouped cluster) ---------------------------------------- */
  function navLink(s, idx) {
    const num = String(idx + 1).padStart(2, '0');
    const cls = s.grouped ? 'nav-num nav-num--accent' : 'nav-num';
    return `<a class="nav-link" href="#${s.id}"><span class="${cls}">${num}</span> ${esc(s.label)}</a>`;
  }
  let navHtml = '';
  for (let i = 0; i < D.sections.length;) {
    if (D.sections[i].grouped) {
      let group = '';
      while (i < D.sections.length && D.sections[i].grouped) { group += navLink(D.sections[i], i); i++; }
      navHtml += `<div class="nav-group">${group}</div>`;
    } else {
      navHtml += navLink(D.sections[i], i); i++;
    }
  }
  set('nav', navHtml);

  /* ---- availability ------------------------------------------------------ */
  const avail = AVAILABILITY[D.availability] || AVAILABILITY['Available for freelance'];
  const dot = document.getElementById('avail-dot');
  dot.style.background = avail.color;
  dot.style.boxShadow = `0 0 0 3px ${avail.shadow}`;
  set('avail-text', esc(D.availability));

  /* ---- skills ------------------------------------------------------------ */
  set('skills-list', D.skills.map((g, i) =>
    (i > 0 ? `<div class="divider"></div>` : '') +
    `<div class="skill-row">
      <div class="skill-group">${esc(g.group)}</div>
      <div class="skill-chips">${chips(g.items)}</div>
    </div>`
  ).join(''));

  /* ---- commercial -------------------------------------------------------- */
  set('commercial-list', D.commercial.map((item) => `
    <div class="card project">
      ${commercialThumb(item)}
      <div class="project-body">
        <div class="project-titlerow">
          <h3 class="project-title">${esc(item.title)}</h3>
          ${aiInline(item.aiFirst)}
        </div>
        <p class="project-desc">${esc(item.desc)}</p>
        <div class="chip-row">${chips(item.tags)}</div>
      </div>
    </div>`).join(''));

  /* ---- personal ---------------------------------------------------------- */
  set('personal-list', D.personal.map((item) => {
    const dim = item.status === 'upcoming' ? ' project--dim' : '';
    const overlay = item.status === 'upcoming' ? `<div class="card-overlay"></div>` : '';
    return `
    <div class="card project${dim}">
      ${aiCorner(item.aiFirst)}
      ${overlay}
      <div class="thumb thumb--initials">
        <span class="thumb-initials">${esc(initials(item.title))}</span>
        ${statusBadge(item.status)}
      </div>
      <div class="project-body">
        <h3 class="project-title project-title--mb">${esc(item.title)}</h3>
        <p class="project-desc">${esc(item.desc)}</p>
        <div class="chip-row">${chips(item.tags)}</div>
      </div>
    </div>`;
  }).join(''));

  /* ---- open source ------------------------------------------------------- */
  set('open-source-list', D.openSource.map((repo) => `
    <a class="card repo" href="${esc(repo.link)}" target="_blank" rel="noopener">
      <div class="repo-head">
        <span class="repo-name">${esc(repo.name)}</span>
        <span class="repo-arrow">↗</span>
      </div>
      <p class="repo-desc">${esc(repo.desc)}</p>
      <div class="chip-row">${chips(repo.tags)}</div>
    </a>`).join(''));

  /* ---- experience -------------------------------------------------------- */
  set('experience-list', D.experience.map((job, i) =>
    (i > 0 ? `<div class="divider"></div>` : '') +
    `<div class="exp-row">
      <div class="exp-period">${esc(job.period)}</div>
      <div class="exp-body">
        <div class="exp-role">${esc(job.role)}</div>
        <div class="exp-company">${job.companyUrl
          ? `<a class="exp-company-link" href="${esc(job.companyUrl)}" target="_blank" rel="noopener">${esc(job.company)}<span class="icon">open_in_new</span></a>`
          : esc(job.company)}</div>
        <p class="exp-desc">${esc(job.desc)}</p>
      </div>
    </div>`).join(''));

  /* ---- contact + footer -------------------------------------------------- */
  set('contact-heading', esc(D.contact.heading));
  set('contact-blurb', esc(D.contact.blurb));
  const btn = document.getElementById('contact-btn');
  btn.href = 'mailto:' + D.email;
  btn.textContent = D.email;

  set('footer-copy', `© ${new Date().getFullYear()} ${esc(D.name.split(/\s+/)[0])}`);
  set('footer-location', esc(D.location));
})();
