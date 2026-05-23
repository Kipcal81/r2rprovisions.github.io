/* ============================================================
   RIFT TO ROCKIES PROVISIONS — Main Stylesheet
   Brand: Deep Navy #0D2B4E | Teal #1A7A72 | Gold #C9952A | Cream #F5F0E8
   ============================================================ */

@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Crimson+Pro:wght@300;400;600&family=DM+Sans:wght@300;400;500;600&display=swap');

/* ── CSS Variables ───────────────────────────────────────── */
:root {
  --navy:       #0D2B4E;
  --navy-light: #1A4070;
  --teal:       #1A7A72;
  --teal-light: #22958C;
  --gold:       #C9952A;
  --gold-light: #E0AA3D;
  --cream:      #F5F0E8;
  --cream-dark: #EDE5D4;
  --white:      #FFFFFF;
  --text-dark:  #1A1A1A;
  --text-mid:   #4A4A4A;
  --text-light: #7A7A7A;
  --border:     rgba(13,43,78,0.12);

  --font-display: 'Playfair Display', Georgia, serif;
  --font-serif:   'Crimson Pro', Georgia, serif;
  --font-sans:    'DM Sans', system-ui, sans-serif;

  --nav-h:      72px;
  --max-w:      1240px;
  --section-py: clamp(60px, 8vw, 120px);

  --radius-sm:  6px;
  --radius-md:  12px;
  --radius-lg:  20px;

  --shadow-sm:  0 2px 8px rgba(13,43,78,0.08);
  --shadow-md:  0 8px 32px rgba(13,43,78,0.14);
  --shadow-lg:  0 20px 60px rgba(13,43,78,0.20);

  --transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* ── Reset ───────────────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; -webkit-text-size-adjust: 100%; }
body {
  font-family: var(--font-sans);
  font-size: 17px;
  line-height: 1.7;
  color: var(--text-dark);
  background: var(--white);
  overflow-x: hidden;
}
img { max-width: 100%; height: auto; display: block; }
a { color: var(--teal); text-decoration: none; transition: color var(--transition); }
a:hover { color: var(--teal-light); }
ul { list-style: none; }
button { cursor: pointer; font-family: var(--font-sans); border: none; background: none; }

/* ── Typography ─────────────────────────────────────────── */
h1, h2, h3, h4 { font-family: var(--font-display); line-height: 1.2; color: var(--navy); }
h1 { font-size: clamp(2.4rem, 5vw, 4rem); font-weight: 700; }
h2 { font-size: clamp(1.8rem, 3.5vw, 2.8rem); font-weight: 600; }
h3 { font-size: clamp(1.3rem, 2.5vw, 1.8rem); font-weight: 600; }
h4 { font-size: clamp(1.1rem, 1.8vw, 1.3rem); font-weight: 600; }
p { margin-bottom: 1.1em; color: var(--text-mid); }
p:last-child { margin-bottom: 0; }

.serif { font-family: var(--font-serif); }
.label {
  font-family: var(--font-sans);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--gold);
}

/* ── Layout ──────────────────────────────────────────────── */
.container { width: 100%; max-width: var(--max-w); margin: 0 auto; padding: 0 clamp(20px, 4vw, 48px); }
.section { padding: var(--section-py) 0; }
.section--cream { background: var(--cream); }
.section--navy  { background: var(--navy); color: var(--white); }
.section--navy h2, .section--navy h3, .section--navy h4 { color: var(--white); }
.section--navy p { color: rgba(255,255,255,0.8); }

/* ── NAV ─────────────────────────────────────────────────── */
.nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
  height: var(--nav-h);
  background: var(--navy);
  border-bottom: 2px solid var(--gold);
  display: flex; align-items: center;
  transition: box-shadow var(--transition);
}
.nav.scrolled { box-shadow: 0 4px 24px rgba(0,0,0,0.25); }
.nav__inner {
  width: 100%; max-width: var(--max-w);
  margin: 0 auto; padding: 0 clamp(20px, 4vw, 48px);
  display: flex; align-items: center; justify-content: space-between;
}
.nav__logo {
  display: flex; align-items: center; gap: 10px;
  text-decoration: none;
}
.nav__logo-mark {
  width: 44px; height: 44px;
  flex-shrink: 0;
}
.nav__logo-text {
  display: flex; flex-direction: column; line-height: 1;
}
.nav__logo-name {
  font-family: var(--font-display);
  font-size: 1rem; font-weight: 700;
  color: var(--white); letter-spacing: 0.02em;
}
.nav__logo-sub {
  font-size: 0.6rem; letter-spacing: 0.12em;
  text-transform: uppercase; color: var(--gold);
  margin-top: 2px;
}
.nav__links {
  display: flex; align-items: center; gap: 0;
}
.nav__link {
  display: block; padding: 8px 14px;
  font-size: 0.82rem; font-weight: 500; letter-spacing: 0.04em;
  color: rgba(255,255,255,0.82);
  text-decoration: none;
  position: relative;
  transition: color var(--transition);
}
.nav__link::after {
  content: ''; position: absolute; bottom: 2px; left: 14px; right: 14px;
  height: 2px; background: var(--teal);
  transform: scaleX(0); transition: transform var(--transition);
}
.nav__link:hover { color: var(--white); }
.nav__link:hover::after { transform: scaleX(1); }
.nav__link.active { color: var(--white); }
.nav__link.active::after { transform: scaleX(1); }

.nav__cta {
  margin-left: 16px;
  padding: 10px 22px;
  background: var(--gold);
  color: var(--navy) !important;
  font-size: 0.78rem; font-weight: 700;
  letter-spacing: 0.08em; text-transform: uppercase;
  border-radius: var(--radius-sm);
  transition: background var(--transition), transform var(--transition);
  text-decoration: none;
}
.nav__cta:hover { background: var(--gold-light); transform: translateY(-1px); color: var(--navy) !important; }

/* Hamburger */
.nav__hamburger {
  display: none; flex-direction: column; gap: 5px;
  width: 30px; padding: 4px; background: none; border: none;
}
.nav__hamburger span {
  display: block; height: 2px;
  background: var(--white); border-radius: 2px;
  transition: transform var(--transition), opacity var(--transition);
}
.nav__hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.nav__hamburger.open span:nth-child(2) { opacity: 0; }
.nav__hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* Mobile menu */
.nav__mobile {
  display: none; position: fixed;
  top: var(--nav-h); left: 0; right: 0; bottom: 0;
  background: var(--navy); z-index: 999;
  flex-direction: column; align-items: center; justify-content: center;
  gap: 8px;
}
.nav__mobile.open { display: flex; }
.nav__mobile .nav__link {
  font-size: 1.4rem; font-family: var(--font-display);
  color: rgba(255,255,255,0.9); padding: 12px 24px;
}
.nav__mobile .nav__link::after { display: none; }
.nav__mobile .nav__cta { margin: 16px 0 0; font-size: 0.9rem; padding: 14px 36px; }

/* ── BUTTONS ─────────────────────────────────────────────── */
.btn {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 14px 32px;
  font-family: var(--font-sans);
  font-size: 0.78rem; font-weight: 700;
  letter-spacing: 0.1em; text-transform: uppercase;
  border-radius: var(--radius-sm);
  transition: all var(--transition);
  text-decoration: none; cursor: pointer; border: none;
}
.btn--primary {
  background: var(--teal); color: var(--white);
}
.btn--primary:hover { background: var(--teal-light); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(26,122,114,0.35); color: var(--white); }
.btn--gold {
  background: var(--gold); color: var(--navy);
}
.btn--gold:hover { background: var(--gold-light); transform: translateY(-2px); color: var(--navy); }
.btn--outline {
  background: transparent; color: var(--gold);
  border: 2px solid var(--gold);
}
.btn--outline:hover { background: var(--gold); color: var(--navy); }
.btn--outline-white {
  background: transparent; color: var(--white);
  border: 2px solid rgba(255,255,255,0.5);
}
.btn--outline-white:hover { background: rgba(255,255,255,0.12); color: var(--white); }

/* ── HERO ────────────────────────────────────────────────── */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex; align-items: center;
  padding-top: var(--nav-h);
  overflow: hidden;
  background: var(--navy);
}
.hero__bg {
  position: absolute; inset: 0;
  background: 
    linear-gradient(135deg, rgba(13,43,78,0.92) 0%, rgba(13,43,78,0.6) 50%, rgba(26,122,114,0.4) 100%),
    url('https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1600&q=80') center/cover no-repeat;
}
.hero__bg::after {
  content: '';
  position: absolute; inset: 0;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Ccircle cx='30' cy='30' r='1' fill='rgba(201,149,42,0.08)'/%3E%3C/svg%3E");
}
.hero__content {
  position: relative; z-index: 2;
  max-width: 720px;
}
.hero__label {
  display: inline-block;
  margin-bottom: 20px;
  color: var(--gold);
  font-size: 0.72rem; font-weight: 600;
  letter-spacing: 0.18em; text-transform: uppercase;
}
.hero__label::before {
  content: '';
  display: inline-block; width: 30px; height: 1px;
  background: var(--gold); vertical-align: middle; margin-right: 10px;
}
.hero h1 {
  color: var(--white);
  font-size: clamp(2.6rem, 5.5vw, 4.4rem);
  line-height: 1.1;
  margin-bottom: 24px;
}
.hero h1 em {
  font-style: italic; color: var(--gold);
}
.hero__sub {
  font-family: var(--font-serif);
  font-size: clamp(1.05rem, 1.8vw, 1.25rem);
  color: rgba(255,255,255,0.82);
  margin-bottom: 40px;
  max-width: 540px;
  line-height: 1.65;
}
.hero__actions { display: flex; gap: 16px; flex-wrap: wrap; }
.hero__scroll {
  position: absolute; bottom: 32px; left: 50%; transform: translateX(-50%);
  display: flex; flex-direction: column; align-items: center; gap: 8px;
  color: rgba(255,255,255,0.5); font-size: 0.68rem; letter-spacing: 0.1em; text-transform: uppercase;
  animation: bounce 2s ease-in-out infinite;
}
.hero__scroll svg { width: 20px; opacity: 0.5; }
@keyframes bounce {
  0%,100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(8px); }
}

/* ── DIFFERENTIATOR STRIP ───────────────────────────────── */
.diff-strip {
  background: var(--navy);
  padding: 0;
}
.diff-strip__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.diff-card {
  padding: 36px 28px;
  border-right: 1px solid rgba(255,255,255,0.08);
  transition: background var(--transition);
}
.diff-card:last-child { border-right: none; }
.diff-card:hover { background: rgba(255,255,255,0.04); }
.diff-card__icon {
  width: 48px; height: 48px;
  margin-bottom: 16px;
  color: var(--gold);
}
.diff-card__stat {
  font-family: var(--font-display);
  font-size: 2rem; font-weight: 700;
  color: var(--gold);
  line-height: 1;
  margin-bottom: 8px;
}
.diff-card__title {
  font-size: 0.82rem; font-weight: 600;
  color: var(--white); letter-spacing: 0.04em;
  margin-bottom: 8px;
  text-transform: uppercase;
}
.diff-card__desc {
  font-size: 0.82rem; color: rgba(255,255,255,0.6);
  line-height: 1.5; margin-bottom: 0;
}

/* ── ORIGIN SPLIT ───────────────────────────────────────── */
.origin { background: var(--cream); }
.origin__grid {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 0; min-height: 560px;
}
.origin__image {
  position: relative; overflow: hidden;
  min-height: 400px;
}
.origin__image img {
  width: 100%; height: 100%; object-fit: cover;
  transition: transform 0.8s ease;
}
.origin__image:hover img { transform: scale(1.04); }
.origin__image::after {
  content: '';
  position: absolute; inset: 0;
  background: linear-gradient(to right, transparent 70%, var(--cream) 100%);
}
.origin__content {
  display: flex; flex-direction: column; justify-content: center;
  padding: clamp(40px, 6vw, 80px);
}
.origin__content h2 { margin-bottom: 20px; }
.origin__content p { font-family: var(--font-serif); font-size: 1.1rem; }
.origin__content .btn { margin-top: 24px; align-self: flex-start; }

/* ── PRODUCT PREVIEW ────────────────────────────────────── */
.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}
.product-card {
  background: var(--white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition), box-shadow var(--transition);
  border: 1px solid var(--border);
}
.product-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-lg); }
.product-card__image {
  height: 220px; overflow: hidden; background: var(--cream-dark);
  position: relative;
}
.product-card__image img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease; }
.product-card:hover .product-card__image img { transform: scale(1.08); }
.product-card__grade {
  position: absolute; top: 14px; right: 14px;
  background: var(--navy); color: var(--gold);
  font-size: 0.65rem; font-weight: 700; letter-spacing: 0.1em;
  text-transform: uppercase; padding: 4px 10px; border-radius: 20px;
}
.product-card__body { padding: 24px; }
.product-card__body h3 { font-size: 1.2rem; margin-bottom: 8px; }
.product-card__flavor {
  font-family: var(--font-serif);
  font-size: 0.95rem; color: var(--text-mid);
  margin-bottom: 12px; font-style: italic;
}
.product-card__tags { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 20px; }
.tag {
  padding: 3px 10px;
  background: var(--cream); color: var(--teal);
  font-size: 0.68rem; font-weight: 600; letter-spacing: 0.06em;
  text-transform: uppercase; border-radius: 20px;
  border: 1px solid rgba(26,122,114,0.2);
}
.product-card__body .btn { width: 100%; justify-content: center; }

/* ── SUSTAINABILITY ──────────────────────────────────────── */
.sustain__grid {
  display: grid; grid-template-columns: 1fr 1fr; gap: 64px;
  align-items: center;
}
.sustain__content h2 { margin-bottom: 20px; }
.sustain__items { margin-top: 28px; display: flex; flex-direction: column; gap: 16px; }
.sustain__item {
  display: flex; align-items: flex-start; gap: 16px;
  padding: 16px 20px;
  background: rgba(255,255,255,0.06);
  border-radius: var(--radius-md);
  border-left: 3px solid var(--teal);
}
.sustain__item-icon { color: var(--gold); flex-shrink: 0; margin-top: 2px; }
.sustain__item-text strong { color: var(--white); display: block; margin-bottom: 4px; font-size: 0.9rem; }
.sustain__item-text span { font-size: 0.85rem; color: rgba(255,255,255,0.65); }
.sustain__visual {
  position: relative;
}
.sustain__stat-grid {
  display: grid; grid-template-columns: 1fr 1fr; gap: 16px;
}
.sustain__stat {
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: var(--radius-md);
  padding: 24px 20px; text-align: center;
}
.sustain__stat-num {
  font-family: var(--font-display);
  font-size: 2.4rem; font-weight: 700; color: var(--gold);
  line-height: 1;
}
.sustain__stat-label {
  font-size: 0.75rem; color: rgba(255,255,255,0.65);
  text-transform: uppercase; letter-spacing: 0.08em;
  margin-top: 8px;
}

/* ── SECTION TITLES ─────────────────────────────────────── */
.section-title { text-align: center; margin-bottom: clamp(40px, 5vw, 72px); }
.section-title .label { display: block; margin-bottom: 12px; }
.section-title h2 { margin-bottom: 16px; }
.section-title p {
  max-width: 560px; margin: 0 auto;
  font-family: var(--font-serif); font-size: 1.1rem; color: var(--text-mid);
}

/* ── PAGE HERO (inner pages) ────────────────────────────── */
.page-hero {
  background: var(--navy);
  padding: calc(var(--nav-h) + 60px) 0 60px;
  position: relative; overflow: hidden;
}
.page-hero::before {
  content: '';
  position: absolute; top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(135deg, rgba(26,122,114,0.15) 0%, transparent 60%);
}
.page-hero::after {
  content: '';
  position: absolute; bottom: 0; left: 0; right: 0;
  height: 3px;
  background: linear-gradient(to right, var(--teal), var(--gold), var(--teal));
}
.page-hero .container { position: relative; z-index: 2; }
.page-hero .label { display: block; margin-bottom: 12px; }
.page-hero h1 { color: var(--white); margin-bottom: 16px; }
.page-hero p { color: rgba(255,255,255,0.75); max-width: 600px; font-family: var(--font-serif); font-size: 1.1rem; }

/* ── CARDS & GENERAL ────────────────────────────────────── */
.card {
  background: var(--white); border-radius: var(--radius-lg);
  padding: 32px; border: 1px solid var(--border);
  box-shadow: var(--shadow-sm);
}
.card--teal-border { border-top: 3px solid var(--teal); }
.card--gold-border { border-top: 3px solid var(--gold); }

/* ── STAT BAR ────────────────────────────────────────────── */
.stat-bar { margin-bottom: 16px; }
.stat-bar__label {
  display: flex; justify-content: space-between;
  font-size: 0.82rem; font-weight: 600; margin-bottom: 6px;
  color: var(--text-dark);
}
.stat-bar__track {
  height: 8px; background: var(--cream-dark); border-radius: 4px; overflow: hidden;
}
.stat-bar__fill {
  height: 100%; border-radius: 4px;
  background: linear-gradient(to right, var(--teal), var(--gold));
  transition: width 1.2s cubic-bezier(0.4, 0, 0.2, 1);
}

/* ── FORM ────────────────────────────────────────────────── */
.form-group { margin-bottom: 20px; }
.form-group label {
  display: block; margin-bottom: 6px;
  font-size: 0.82rem; font-weight: 600;
  color: var(--navy); letter-spacing: 0.02em;
}
.form-group label .req { color: var(--teal); margin-left: 2px; }
.form-group input,
.form-group select,
.form-group textarea {
  width: 100%; padding: 12px 16px;
  border: 1.5px solid var(--border);
  border-radius: var(--radius-sm);
  font-family: var(--font-sans); font-size: 0.95rem;
  color: var(--text-dark); background: var(--white);
  transition: border-color var(--transition), box-shadow var(--transition);
  appearance: none;
}
.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--teal);
  box-shadow: 0 0 0 3px rgba(26,122,114,0.12);
}
.form-group textarea { resize: vertical; min-height: 120px; }
.form-group .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.form-checkbox { display: flex; align-items: flex-start; gap: 12px; }
.form-checkbox input[type="checkbox"] { width: 18px; height: 18px; margin-top: 3px; accent-color: var(--teal); flex-shrink: 0; }
.form-checkbox label { font-size: 0.85rem; font-weight: 400; color: var(--text-mid); }
.form-error { display: none; color: #c0392b; font-size: 0.78rem; margin-top: 4px; }
.form-group.has-error input,
.form-group.has-error select,
.form-group.has-error textarea { border-color: #c0392b; }
.form-group.has-error .form-error { display: block; }
.form-success {
  display: none; padding: 20px 24px;
  background: rgba(26,122,114,0.08); border: 1px solid var(--teal);
  border-radius: var(--radius-md); color: var(--teal);
  font-weight: 600; text-align: center; margin-top: 24px;
}
.form-success.show { display: block; }
.checkboxes-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
.checkbox-item { display: flex; align-items: center; gap: 8px; }
.checkbox-item input { accent-color: var(--teal); width: 16px; height: 16px; }
.checkbox-item label { font-size: 0.85rem; font-weight: 400; color: var(--text-mid); }

/* ── TABLE ───────────────────────────────────────────────── */
.info-table { width: 100%; border-collapse: collapse; }
.info-table th, .info-table td {
  padding: 12px 16px; text-align: left;
  border-bottom: 1px solid var(--border);
  font-size: 0.9rem;
}
.info-table th {
  background: var(--navy); color: var(--white);
  font-weight: 600; font-size: 0.78rem;
  letter-spacing: 0.06em; text-transform: uppercase;
}
.info-table th:first-child { border-radius: var(--radius-sm) 0 0 0; }
.info-table th:last-child { border-radius: 0 var(--radius-sm) 0 0; }
.info-table tr:last-child td { border-bottom: none; }
.info-table tr:nth-child(even) td { background: var(--cream); }
.info-table td:first-child { font-weight: 600; color: var(--navy); }

/* ── SUPPLY CHAIN FLOW ───────────────────────────────────── */
.flow { display: flex; align-items: center; gap: 0; flex-wrap: wrap; margin: 40px 0; }
.flow-step {
  flex: 1; min-width: 120px;
  display: flex; flex-direction: column; align-items: center;
  text-align: center; position: relative; padding: 20px 12px;
}
.flow-step__icon {
  width: 60px; height: 60px;
  background: var(--teal); border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  color: var(--white); margin-bottom: 12px;
  box-shadow: 0 4px 16px rgba(26,122,114,0.3);
  position: relative; z-index: 2;
}
.flow-step__label {
  font-size: 0.78rem; font-weight: 700; color: var(--navy);
  text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 4px;
}
.flow-step__sub { font-size: 0.72rem; color: var(--text-light); }
.flow-arrow {
  color: var(--gold); font-size: 1.4rem; padding: 0 4px; margin-bottom: 32px;
}

/* ── BADGE GRID (certifications) ─────────────────────────── */
.badge-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 20px; margin-top: 32px; }
.badge-item {
  display: flex; flex-direction: column; align-items: center;
  padding: 24px 16px; text-align: center;
  background: var(--cream); border-radius: var(--radius-md);
  border: 2px solid var(--cream-dark);
  transition: border-color var(--transition), transform var(--transition);
}
.badge-item:hover { border-color: var(--teal); transform: translateY(-3px); }
.badge-item__icon {
  width: 56px; height: 56px; margin-bottom: 12px;
  background: var(--navy); border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  color: var(--gold); font-size: 1.5rem;
}
.badge-item__title { font-weight: 700; font-size: 0.85rem; color: var(--navy); margin-bottom: 4px; }
.badge-item__sub { font-size: 0.72rem; color: var(--text-light); }

/* ── CONTACT ─────────────────────────────────────────────── */
.contact-grid { display: grid; grid-template-columns: 1fr 1.4fr; gap: 48px; align-items: start; }
.contact-info__item {
  display: flex; gap: 16px; align-items: flex-start;
  padding: 20px 0; border-bottom: 1px solid var(--border);
}
.contact-info__item:last-child { border-bottom: none; }
.contact-info__icon { color: var(--teal); flex-shrink: 0; margin-top: 2px; }
.contact-info__label { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--gold); margin-bottom: 4px; }
.contact-info__value { font-size: 0.95rem; color: var(--text-dark); }
.map-embed { border-radius: var(--radius-lg); overflow: hidden; border: 3px solid var(--cream-dark); }

/* ── FOOTER ──────────────────────────────────────────────── */
.footer {
  background: var(--navy);
  padding: 64px 0 0;
  color: rgba(255,255,255,0.75);
}
.footer__top {
  display: grid; grid-template-columns: 1.4fr 1fr 1fr 1fr;
  gap: 40px; padding-bottom: 48px;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}
.footer__brand p { font-size: 0.88rem; line-height: 1.7; margin-top: 16px; color: rgba(255,255,255,0.6); }
.footer__logo-text { margin-top: 12px; }
.footer__logo-text .nav__logo-name { font-size: 1.1rem; }
.footer__col h4 { color: var(--white); font-size: 0.78rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 16px; font-family: var(--font-sans); }
.footer__col ul li { margin-bottom: 8px; }
.footer__col ul li a { color: rgba(255,255,255,0.6); font-size: 0.88rem; transition: color var(--transition); }
.footer__col ul li a:hover { color: var(--gold); }
.footer__contact-item { display: flex; gap: 10px; margin-bottom: 12px; font-size: 0.85rem; color: rgba(255,255,255,0.6); }
.footer__contact-item svg { color: var(--gold); flex-shrink: 0; margin-top: 2px; }
.footer__bottom {
  display: flex; align-items: center; justify-content: space-between;
  padding: 20px 0; flex-wrap: wrap; gap: 12px;
}
.footer__copy { font-size: 0.78rem; color: rgba(255,255,255,0.4); }
.footer__legal { display: flex; gap: 20px; }
.footer__legal a { font-size: 0.78rem; color: rgba(255,255,255,0.4); }
.footer__legal a:hover { color: var(--gold); }
.footer__social { display: flex; gap: 12px; }
.footer__social a {
  width: 36px; height: 36px; border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.15);
  display: flex; align-items: center; justify-content: center;
  color: rgba(255,255,255,0.5); transition: all var(--transition);
}
.footer__social a:hover { border-color: var(--gold); color: var(--gold); }

/* ── ABOUT PAGE ──────────────────────────────────────────── */
.team-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 28px; }
.team-card { text-align: center; }
.team-card__photo {
  width: 120px; height: 120px; border-radius: 50%;
  margin: 0 auto 16px; overflow: hidden;
  border: 3px solid var(--gold);
  background: var(--cream-dark);
}
.team-card__photo img { width: 100%; height: 100%; object-fit: cover; }
.team-card h4 { margin-bottom: 4px; }
.team-card .role { font-size: 0.8rem; color: var(--teal); font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; }

/* ── ANIMATIONS ──────────────────────────────────────────── */
.fade-in {
  opacity: 0; transform: translateY(24px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.fade-in.visible { opacity: 1; transform: translateY(0); }
.fade-in-delay-1 { transition-delay: 0.1s; }
.fade-in-delay-2 { transition-delay: 0.2s; }
.fade-in-delay-3 { transition-delay: 0.3s; }

/* ── RESPONSIVE ──────────────────────────────────────────── */
@media (max-width: 1024px) {
  .diff-strip__grid { grid-template-columns: repeat(2, 1fr); }
  .diff-card:nth-child(2) { border-right: none; }
  .origin__grid { grid-template-columns: 1fr; }
  .origin__image { min-height: 300px; }
  .origin__image::after { display: none; }
  .sustain__grid { grid-template-columns: 1fr; gap: 40px; }
  .footer__top { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 768px) {
  .nav__links, .nav__cta { display: none; }
  .nav__hamburger { display: flex; }
  .product-grid { grid-template-columns: 1fr; }
  .diff-strip__grid { grid-template-columns: 1fr 1fr; }
  .contact-grid { grid-template-columns: 1fr; }
  .footer__top { grid-template-columns: 1fr; }
  .flow { flex-direction: column; }
  .flow-arrow { transform: rotate(90deg); margin: 0; }
  .sustain__stat-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 480px) {
  .diff-strip__grid { grid-template-columns: 1fr; }
  .diff-card { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.08); }
  .hero__actions { flex-direction: column; }
  .form-group .form-row { grid-template-columns: 1fr; }
  .checkboxes-grid { grid-template-columns: 1fr; }
}

/* ── UTILITIES ───────────────────────────────────────────── */
.text-center { text-align: center; }
.text-gold { color: var(--gold); }
.text-teal { color: var(--teal); }
.mt-8  { margin-top: 8px; }
.mt-16 { margin-top: 16px; }
.mt-24 { margin-top: 24px; }
.mt-32 { margin-top: 32px; }
.mt-48 { margin-top: 48px; }
.mb-32 { margin-bottom: 32px; }
.gap-16 { gap: 16px; }
.flex { display: flex; }
.flex-wrap { flex-wrap: wrap; }
.align-center { align-items: center; }
.justify-center { justify-content: center; }
.grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; }
.grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
@media (max-width: 768px) {
  .grid-2, .grid-3 { grid-template-columns: 1fr; }
}
.note-box {
  padding: 16px 20px;
  background: rgba(201,149,42,0.08);
  border-left: 3px solid var(--gold);
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  font-size: 0.88rem; color: var(--text-mid);
  margin: 20px 0;
}
.pt-nav { padding-top: calc(var(--nav-h) + 40px); }
