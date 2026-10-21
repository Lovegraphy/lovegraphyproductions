import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const work = [
  {
    number: '01',
    title: 'One Minute Cinema',
    tag: 'Stories, distilled',
    image: 'https://images.pexels.com/photos/33372525/pexels-photo-33372525.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Couple sharing a cinematic moment by a pool at night',
  },
  {
    number: '02',
    title: 'Ad Films & Campaigns',
    tag: 'Ideas in motion',
    image: 'https://images.pexels.com/photos/23384400/pexels-photo-23384400.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Cameraman capturing footage in a moody setting',
  },
  {
    number: '03',
    title: 'Next Gen Pre-weds',
    tag: 'Love, your way',
    image: 'https://images.pexels.com/photos/38823745/pexels-photo-38823745.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Elegant couple portrait under warm lantern light',
  },
];

function ArrowUpRight() {
  return <span className="arrow" aria-hidden="true">↗</span>;
}

function Logo({ dark = false }) {
  return (
    <a className={`logo ${dark ? 'logo--dark' : ''}`} href="#top" aria-label="Lovegraphy Productions home">
      <span className="logo-asset"><img src="/images/file_00000000b9b081f4a507d411eaac17b7.png" alt="" /></span>
      <span className="logo-type"><strong>LOVEGRAPHY</strong><small>PRODUCTIONS</small></span>
    </a>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div id="top" className="site-shell">
      <div className="letterbox-top" aria-hidden="true" />
      <div className="letterbox-bottom" aria-hidden="true" />

      <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
        <Logo />
        <nav className={`main-nav ${menuOpen ? 'main-nav--open' : ''}`} aria-label="Main navigation">
          <a href="#work" onClick={closeMenu}>Our work</a>
          <a href="#about" onClick={closeMenu}>About us</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
        <a className="header-cta" href="https://www.instagram.com/lovegraphyproductions/" target="_blank" rel="noreferrer">Let&apos;s talk <ArrowUpRight /></a>
        <button className={`menu-toggle ${menuOpen ? 'menu-toggle--open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}><span /><span /></button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow reveal">Creative production house <span>•</span> worldwide</p>
            <h1 className="reveal reveal-delay-1">Stories that<br /><i>stay with you.</i></h1>
            <p className="hero-intro reveal reveal-delay-2">We turn real moments and brave ideas into films you can feel. From one-minute cinema to full-scale campaigns, we make every frame matter.</p>
            <a href="#work" className="text-link reveal reveal-delay-3">Explore our work <ArrowUpRight /></a>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="hero-orbit hero-orbit--one" />
            <div className="hero-orbit hero-orbit--two" />
            <div className="hero-glow" />
            <div className="hero-stamp"><span>LOVE</span><strong>∞</strong><span>GRAPHY</span></div>
            <div className="viewfinder"><span className="viewfinder-corner viewfinder-corner--tl" /><span className="viewfinder-corner viewfinder-corner--tr" /><span className="viewfinder-corner viewfinder-corner--bl" /><span className="viewfinder-corner viewfinder-corner--br" /><span className="viewfinder-crosshair" /><span className="rec-badge"><i /> REC 07:24:19</span></div>
            <div className="lens-detail"><span>24</span><b>mm</b></div>
            <p className="hero-art-note">Frames made<br />to be felt.</p>
          </div>
          <div className="scroll-cue"><span>Scroll to explore</span><i /></div>
        </section>

        <section className="statement" id="about">
          <p className="section-label">01 / The feeling</p>
          <div className="statement-content">
            <h2>Not just a production.<br /><em>A point of view.</em></h2>
            <div className="statement-side"><p>There is a story hiding in every glance, every pause, every little in-between. We find it, shape it, and give it a life of its own.</p><a className="circle-link" href="#contact" aria-label="Go to contact section"><ArrowUpRight /></a></div>
          </div>
        </section>

        <section className="work-section" id="work">
          <div className="section-heading"><div><p className="section-label">02 / What we do</p><h2>Made for <em>meaning.</em></h2></div><p className="heading-note">Selected disciplines<br />of our craft</p></div>
          <div className="work-grid">
            {work.map((item) => <article className="work-card" key={item.number}><div className="work-image"><img src={item.image} alt={item.alt} loading="lazy" /><span className="work-number">{item.number}</span><span className="work-arrow"><ArrowUpRight /></span><span className="work-tag-top">{item.tag}</span></div><div className="work-meta"><h3>{item.title}</h3><p>{item.tag}</p></div></article>)}
          </div>
        </section>

        <div className="reel-divider" aria-hidden="true"><span>★</span> End of reel <span>★</span></div>

        <section className="about-band" id="about-band">
          <div className="about-photo"><img src="/images/IMG_20260224_163452_913.webp" alt="Lavkumar Prajapati, CEO and founder of Lovegraphy Productions" /></div>
          <div className="about-mark" aria-hidden="true">L<span>◒</span></div>
          <div className="about-copy"><p className="section-label">03 / The maker</p><h2>Meet <em>Lavkumar.</em></h2><p>CEO & Founder. Content and shooting artist with 7 years of turning fleeting moments into lasting stories.</p><a href="#contact" className="text-link text-link--light">Get to know us <ArrowUpRight /></a></div>
          <div className="about-years"><strong>07</strong><span>years of<br />making</span></div>
        </section>

        <section className="contact" id="contact">
          <p className="section-label">04 / Start a conversation</p>
          <h2>Have a story<br /><em>in mind?</em></h2>
          <a className="contact-link" href="https://www.instagram.com/lovegraphyproductions/" target="_blank" rel="noreferrer">@lovegraphyproductions <ArrowUpRight /></a>
          <a className="contact-link contact-link--muted" href="tel:+918275001572">WhatsApp: +91 82750 01572</a>
          <p className="availability">Available worldwide <span>•</span> Let&apos;s make something unforgettable.</p>
        </section>
      </main>

      <footer><Logo dark /><div className="footer-links"><a href="https://www.instagram.com/lovegraphyproductions/" target="_blank" rel="noreferrer">Instagram</a><a href="https://www.lovegraphymedia.in" target="_blank" rel="noreferrer">Lovegraphy Media</a></div><p>© 2025 Lovegraphy Productions</p></footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>);
