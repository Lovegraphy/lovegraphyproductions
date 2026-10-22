import { StrictMode, useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const INSTA_URL = 'https://www.instagram.com/lovegraphyproductions/';
const LAV_INSTA_URL = 'https://www.instagram.com/heyy._lavv';
const FB_URL = 'https://www.facebook.com/';
const WA_URL = 'tel:+918275001572';

const reels = [
  {
    num: '001',
    title: 'One Minute Cinema',
    meta: 'Short film / Documentary',
    img: 'https://images.pexels.com/photos/13812458/pexels-photo-13812458.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Silhouetted cameraman filming by candlelight on an atmospheric set',
  },
  {
    num: '002',
    title: 'Ad Films & Campaigns',
    meta: 'Commercial / Brand',
    img: 'https://images.pexels.com/photos/4123586/pexels-photo-4123586.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Film crew member adjusting a camera setup under neon lighting',
  },
  {
    num: '003',
    title: 'Pre-wedding Stories',
    meta: 'Couples / Lifestyle',
    img: 'https://images.pexels.com/photos/39925063/pexels-photo-39925063.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Silhouette of a wedding couple embracing during a golden sunset',
  },
  {
    num: '004',
    title: 'Behind the Lens',
    meta: 'Production / BTS',
    img: 'https://images.pexels.com/photos/3411420/pexels-photo-3411420.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Professional cameraman working on a film set with lighting equipment',
  },
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
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

function ReelCard({ reel, offset }) {
  const ref = useReveal();
  return (
    <article
      className={`reel-card reveal-card ${offset ? 'reel-card--offset' : ''}`}
      ref={ref}
    >
      <div className="reel-frame">
        <img src={reel.img} alt={reel.alt} loading="lazy" />
        <span className="reel-num">{reel.num}</span>
        <span className="reel-play" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="22" height="22">
            <path d="M8 5v14l11-7z" fill="currentColor" />
          </svg>
        </span>
      </div>
      <div className="reel-meta">
        <h3>{reel.title}</h3>
        <p>{reel.meta}</p>
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

function ArrowUpRight() {
  return <span className="arrow" aria-hidden="true">↗</span>;
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M14 9h3l.5-3H14V4.5c0-.9.3-1.5 1.6-1.5H17V.2C16.7.1 15.8 0 14.7 0 12.3 0 11 1.4 11 3.9V6H8v3h3v9h3V9z" />
    </svg>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div id="top" className="site-shell">
      <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
        <Logo />
        <nav className={`main-nav ${menuOpen ? 'main-nav--open' : ''}`} aria-label="Main navigation">
          <a href="#reels" onClick={closeMenu}>Reels</a>
          <a href="#craft" onClick={closeMenu}>The Craft</a>
          <a href="#maker" onClick={closeMenu}>The Maker</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
        <a className="header-cta" href={INSTA_URL} target="_blank" rel="noreferrer">
          Enquire <ArrowUpRight />
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
        <section className="hero">
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-frame" aria-hidden="true">
            <span className="hf-corner hf-tl" />
            <span className="hf-corner hf-tr" />
            <span className="hf-corner hf-bl" />
            <span className="hf-corner hf-br" />
          </div>
          <div className="hero-hud" aria-hidden="true">
            <span className="hud-rec"><i className="rec-dot" /> REC</span>
            <span className="hud-fps">24 fps</span>
          </div>

          <div className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-line" />
              Creative production house · Worldwide
            </p>
            <h1 className="hero-title">
              Shot through<br />
              <em>feeling.</em>
            </h1>
            <p className="hero-sub">
              We chase light, chase moments, chase the in-between. Every frame is
              composed, every cut earned — films made the way stories deserve to
              be told.
            </p>
            <div className="hero-actions">
              <a href="#reels" className="btn btn--primary">
                View the reel <ArrowUpRight />
              </a>
              <a href="#contact" className="btn btn--ghost">
                Start a project
              </a>
            </div>
          </div>

          <a href="#craft" className="scroll-cue" aria-label="Scroll to explore">
            <span>Scroll</span>
            <i />
          </a>
        </section>

        <section className="craft" id="craft">
          <div className="craft-label"><span>01</span> / The craft</div>
          <h2 className="craft-headline">
            We don't just film.<br />
            <em>We compose with light.</em>
          </h2>
          <div className="craft-body">
            <p>
              A story hides in every glance, every silence, every shadow. We find
              it — frame it — and let it breathe. From the first storyboard to
              the final color grade, every decision serves the feeling.
            </p>
            <div className="craft-stats">
              <div className="stat"><strong>07</strong><span>Years<br />shooting</span></div>
              <div className="stat"><strong>120+</strong><span>Films<br />delivered</span></div>
              <div className="stat"><strong>∞</strong><span>Worldwide<br />reach</span></div>
            </div>
          </div>
        </section>

        <section className="reels" id="reels">
          <div className="reels-head">
            <p className="section-label">02 / Selected reels</p>
            <h2>The <em>footage.</em></h2>
          </div>
          <div className="reels-grid">
            {reels.map((r, i) => (
              <ReelCard key={r.num} reel={r} offset={i % 2 === 1} />
            ))}
          </div>
        </section>

        <section className="maker" id="maker">
          <div className="maker-photo">
            <img
              src="/images/IMG_20260224_163452_913.webp"
              alt="Lavkumar Prajapati, CEO and founder of Lovegraphy Productions"
            />
          </div>
          <div className="maker-copy">
            <p className="section-label">03 / The maker</p>
            <h2>Meet <em>Lavkumar.</em></h2>
            <p>
              CEO & Founder. A shooting artist with seven years of turning
              fleeting moments into lasting stories. He sees the frame before
              the camera rolls.
            </p>
            <a href="#contact" className="text-link text-link--light">
              Get to know us <ArrowUpRight />
            </a>
          </div>
        </section>

        <section className="contact" id="contact">
          <p className="section-label">04 / Start a conversation</p>
          <h2>Have a story<br /><em>in mind?</em></h2>
          <p className="contact-lead">
            Tell us about the moment you want to capture. We'll bring the lens,
            the light, and the vision.
          </p>
          <div className="contact-links">
            <a className="contact-link" href={INSTA_URL} target="_blank" rel="noreferrer">
              @lovegraphyproductions <ArrowUpRight />
            </a>
            <a className="contact-link contact-link--muted" href={WA_URL}>
              WhatsApp: +91 82750 01572
            </a>
          </div>
          <p className="availability">
            Available worldwide <span>•</span> Let's make something unforgettable.
          </p>
        </section>
      </main>

      <footer>
        <Logo />
        <div className="footer-links">
          <a href={INSTA_URL} target="_blank" rel="noreferrer" className="social-link">
            <InstagramIcon /> Instagram
          </a>
          <a href={FB_URL} target="_blank" rel="noreferrer" className="social-link">
            <FacebookIcon /> Facebook
          </a>
          <a href={LAV_INSTA_URL} target="_blank" rel="noreferrer" className="social-link">
            <InstagramIcon /> Lavkumar
          </a>
          <a href="https://www.lovegraphymedia.in" target="_blank" rel="noreferrer">
            Lovegraphy Media
          </a>
        </div>
        <p>© 2025 Lovegraphy Productions</p>
      </footer>

      {/* Sticky enquiry button — always visible */}
      <a
        className="sticky-enquiry"
        href={INSTA_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Enquire on Instagram"
      >
        <InstagramIcon />
        <span>Enquire on Instagram</span>
      </a>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
