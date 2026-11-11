import { StrictMode, useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const INSTA_URL = 'https://www.instagram.com/lovegraphyproductions/';
const LAV_INSTA_URL = 'https://www.instagram.com/heyy._lavv';
const FB_URL = 'https://www.facebook.com/';
const WA_URL = 'https://wa.me/918275001572';

const works = [
  {
    num: '01',
    title: 'One Minute Cinema',
    category: 'Short Film',
    year: '2024',
    img: 'https://images.pexels.com/photos/13812458/pexels-photo-13812458.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Silhouetted cameraman filming by candlelight on an atmospheric set',
  },
  {
    num: '02',
    title: 'Ad Films & Campaigns',
    category: 'Commercial',
    year: '2024',
    img: 'https://images.pexels.com/photos/4123586/pexels-photo-4123586.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Film crew member adjusting a camera setup under neon lighting',
  },
  {
    num: '03',
    title: 'Pre-wedding Stories',
    category: 'Couples',
    year: '2023',
    img: 'https://images.pexels.com/photos/39925063/pexels-photo-39925063.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Silhouette of a wedding couple embracing during a golden sunset',
  },
  {
    num: '04',
    title: 'Behind the Lens',
    category: 'Production',
    year: '2023',
    img: 'https://images.pexels.com/photos/3411420/pexels-photo-3411420.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Professional cameraman working on a film set with lighting equipment',
  },
];

const marqueeWords = [
  'Cinematography', 'Storytelling', 'Color Grading', 'Ad Films',
  'Pre-wedding', 'Documentary', 'One Minute Cinema', 'Production',
  'Direction', 'Editing', 'Sound Design', 'Visual Stories',
];

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight);
      setProgress(Math.min(1, Math.max(0, scrolled)));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return progress;
}

function WorkCard({ work, index }) {
  const ref = useReveal();
  const isEven = index % 2 === 0;
  return (
    <article
      className={`work-card reveal ${isEven ? '' : 'work-card--reverse'}`}
      ref={ref}
    >
      <div className="work-image-wrap">
        <div className="work-perfs" aria-hidden="true">
          <span /><span /><span /><span /><span /><span /><span /><span />
        </div>
        <div className="work-image">
          <img src={work.img} alt={work.alt} loading="lazy" />
        </div>
        <div className="work-perfs work-perfs--bottom" aria-hidden="true">
          <span /><span /><span /><span /><span /><span /><span /><span />
        </div>
        <span className="work-num">{work.num}</span>
      </div>
      <div className="work-info">
        <div className="work-info-top">
          <span className="work-category">{work.category}</span>
          <span className="work-year">{work.year}</span>
        </div>
        <h3>{work.title}</h3>
        <a href={INSTA_URL} target="_blank" rel="noreferrer" className="work-view">
          View reel <span className="work-view-arrow">→</span>
        </a>
      </div>
    </article>
  );
}

function Logo() {
  return (
    <a className="logo" href="#top" aria-label="Lovegraphy Productions home">
      <span className="logo-asset">
        <img src="/images/file_00000000b9b081f4a507d411eaac17b7.png" alt="" />
      </span>
      <span className="logo-type">
        <strong>LOVEGRAPHY</strong>
        <small>PRODUCTIONS</small>
      </span>
    </a>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.3 5.2 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2a10 10 0 0 0-8.5 15.3L2 22l4.8-1.5A10 10 0 1 0 12 2zm0 18.3c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3a8.3 8.3 0 1 1 7 4.8z"/>
    </svg>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const progress = useScrollProgress();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div id="top" className="site-shell">
      <div className="bg-blobs" aria-hidden="true">
        <span className="blob blob--teal" />
        <span className="blob blob--coral" />
        <span className="blob blob--gold" />
        <span className="blob blob--teal2" />
      </div>
      <div className="grain-overlay" aria-hidden="true" />
      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />

      <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
        <Logo />
        <nav className={`main-nav ${menuOpen ? 'main-nav--open' : ''}`} aria-label="Main navigation">
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#craft" onClick={closeMenu}>Craft</a>
          <a href="#maker" onClick={closeMenu}>Maker</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
        <a className="header-cta" href={INSTA_URL} target="_blank" rel="noreferrer">
          Enquire <span className="arrow">→</span>
        </a>
        <button
          className={`menu-toggle ${menuOpen ? 'menu-toggle--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>
      </header>

      <main>
        {/* === HERO: split editorial layout === */}
        <section className="hero">
          <div className="hero-left">
            <div className="hero-stamp" aria-hidden="true">
              <span>EST.</span>
              <strong>2017</strong>
            </div>
            <p className="hero-eyebrow">
              <span className="dot" /> A creative production house
            </p>
            <h1 className="hero-title">
              Shot through<br />
              <span className="hero-italic">feeling.</span>
            </h1>
            <p className="hero-sub">
              We chase light, chase moments, chase the in-between. Every frame
              composed, every cut earned — stories told the way they deserve
              to be told.
            </p>
            <div className="hero-actions">
              <a href="#work" className="btn btn--primary">
                View the work <span className="arrow">→</span>
              </a>
              <a href="#contact" className="btn btn--ghost">
                Start a project
              </a>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-poster">
              <div className="hero-poster-perfs" aria-hidden="true">
                <span /><span /><span /><span /><span /><span /><span /><span />
              </div>
              <img
                src="https://images.pexels.com/photos/927444/pexels-photo-927444.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Vintage camera lens in dramatic warm lighting"
                loading="eager"
              />
              <div className="hero-poster-perfs hero-poster-perfs--bottom" aria-hidden="true">
                <span /><span /><span /><span /><span /><span /><span /><span />
              </div>
            </div>
            <div className="hero-meta">
              <div className="hero-meta-item">
                <span className="hero-meta-label">Based in</span>
                <span className="hero-meta-value">India · Worldwide</span>
              </div>
              <div className="hero-meta-item">
                <span className="hero-meta-label">Rolling since</span>
                <span className="hero-meta-value">7 years</span>
              </div>
            </div>
          </div>

          <div className="hero-ticker" aria-hidden="true">
            <div className="ticker-track">
              {[...marqueeWords, ...marqueeWords, ...marqueeWords].map((w, i) => (
                <span key={i} className="ticker-word">
                  {w} <i>✦</i>
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* === MARQUEE DIVIDER === */}
        <div className="marquee-bar" aria-hidden="true">
          <div className="marquee-bar-track">
            {[...marqueeWords, ...marqueeWords, ...marqueeWords].map((w, i) => (
              <span key={i}>{w}</span>
            ))}
          </div>
        </div>

        {/* === CRAFT: editorial manifesto === */}
        <section className="craft" id="craft">
          <div className="craft-label">
            <span className="craft-label-num">01</span>
            <span className="craft-label-line" />
            <span>The Craft</span>
          </div>
          <div className="craft-content">
            <h2 className="craft-headline">
              We don't just film.<br />
              <span className="craft-italic">We compose with light.</span>
            </h2>
            <div className="craft-body">
              <p>
                A story hides in every glance, every silence, every shadow. We
                find it — frame it — and let it breathe. From the first
                storyboard to the final color grade, every decision serves the
                feeling.
              </p>
              <div className="craft-stats">
                <div className="stat">
                  <strong>07</strong>
                  <span>Years<br />behind the lens</span>
                </div>
                <div className="stat">
                  <strong>120+</strong>
                  <span>Films<br />delivered</span>
                </div>
                <div className="stat">
                  <strong>∞</strong>
                  <span>Worldwide<br />reach</span>
                </div>
              </div>
            </div>
          </div>
          <div className="craft-quote">
            <blockquote>
              <span className="quote-mark">"</span>
              The camera sees what the heart feels. We just hold it steady.
            </blockquote>
          </div>
        </section>

        {/* === WORK: asymmetric film-strip gallery === */}
        <section className="work" id="work">
          <div className="work-head">
            <div className="work-head-label">
              <span className="work-head-num">02</span>
              <span className="work-head-line" />
              <span>Selected Work</span>
            </div>
            <h2 className="work-head-title">
              The <span className="work-italic">footage.</span>
            </h2>
          </div>
          <div className="work-grid">
            {works.map((w, i) => (
              <WorkCard key={w.num} work={w} index={i} />
            ))}
          </div>
        </section>

        {/* === MAKER: editorial profile === */}
        <section className="maker" id="maker">
          <div className="maker-label">
            <span className="maker-label-num">03</span>
            <span className="maker-label-line" />
            <span>The Maker</span>
          </div>
          <div className="maker-layout">
            <div className="maker-photo-wrap">
              <div className="maker-photo-frame">
                <div className="maker-photo-perfs" aria-hidden="true">
                  <span /><span /><span /><span /><span /><span />
                </div>
                <img
                  src="/images/IMG_20260224_163452_913.webp"
                  alt="Lavkumar Prajapati, CEO and founder of Lovegraphy Productions"
                />
                <div className="maker-photo-perfs maker-photo-perfs--bottom" aria-hidden="true">
                  <span /><span /><span /><span /><span /><span />
                </div>
              </div>
              <div className="maker-photo-stamp">
                <span>CEO &</span>
                <span>FOUNDER</span>
              </div>
            </div>
            <div className="maker-copy">
              <h2>
                Meet<br />
                <span className="maker-italic">Lavkumar.</span>
              </h2>
              <p className="maker-lead">
                Lavkumar Prajapati is an engineer and cybersecurity specialist,
                a content creator, shooting artist, and influencer. He is the
                founder and CEO of Lovegraphy Productions, where he also serves
                as a film producer — and he runs Lovegraphy Media, bringing the
                same creative vision across both brands.
              </p>
              <p>
                With seven years behind the lens, he sees the frame before the
                camera rolls. Every project he touches carries the same
                standard: stories told the way they deserve to be told.
              </p>
              <div className="maker-tags">
                <span>Engineer</span>
                <span>Cybersecurity</span>
                <span>Film Producer</span>
                <span>CEO & Founder</span>
                <span>Shooting Artist</span>
                <span>Influencer</span>
              </div>
              <div className="maker-actions">
                <a href={LAV_INSTA_URL} target="_blank" rel="noreferrer" className="maker-insta">
                  <InstagramIcon /> @heyy._lavv
                </a>
                <a href="#contact" className="text-link">
                  More <span className="arrow">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* === CONTACT: bold CTA === */}
        <section className="contact" id="contact">
          <div className="contact-label">
            <span className="contact-label-num">04</span>
            <span className="contact-label-line" />
            <span>Start a conversation</span>
          </div>
          <h2 className="contact-title">
            Have a story<br />
            <span className="contact-italic">in mind?</span>
          </h2>
          <p className="contact-lead">
            Tell us about the moment you want to capture. We'll bring the lens,
            the light, and the vision.
          </p>
          <div className="contact-links">
            <a className="contact-link" href={INSTA_URL} target="_blank" rel="noreferrer">
              <InstagramIcon />
              <span>@lovegraphyproductions</span>
              <span className="contact-arrow">→</span>
            </a>
            <a className="contact-link contact-link--wa" href={WA_URL} target="_blank" rel="noreferrer">
              <WhatsAppIcon />
              <span>+91 82750 01572</span>
              <span className="contact-arrow">→</span>
            </a>
          </div>
          <p className="availability">
            Available worldwide <span>•</span> Let's make something unforgettable.
          </p>
        </section>
      </main>

      <footer>
        <div className="footer-top">
          <Logo />
          <div className="footer-links">
            <a href={INSTA_URL} target="_blank" rel="noreferrer" className="social-link">
              <InstagramIcon /> Instagram
            </a>
            <a href={FB_URL} target="_blank" rel="noreferrer" className="social-link">
              <span className="social-fb">f</span> Facebook
            </a>
            <a href={WA_URL} target="_blank" rel="noreferrer" className="social-link">
              <WhatsAppIcon /> WhatsApp
            </a>
            <a href="https://www.lovegraphymedia.in" target="_blank" rel="noreferrer" className="social-link">
              Lovegraphy Media
            </a>
          </div>
        </div>
        <div className="association">
          <span className="association-text">In association with</span>
          <a href="https://www.lovegraphymedia.in" target="_blank" rel="noreferrer" className="association-logo">
            <img src="/images/file_00000000d128720ba4b334cd306b2907.png" alt="Lovegraphy Media" />
          </a>
        </div>
        <p className="footer-copy">© 2025 Lovegraphy Productions · Crafted with light</p>
      </footer>

      <a
        className="sticky-enquiry"
        href={WA_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Enquire on WhatsApp"
      >
        <WhatsAppIcon />
        <span>Enquire on WhatsApp</span>
      </a>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
