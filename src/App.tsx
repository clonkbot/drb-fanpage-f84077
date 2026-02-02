import { useState, useEffect } from 'react';
import './App.css';

function GlitchText({ text, className = '' }: { text: string; className?: string }) {
  return (
    <span className={`glitch-text ${className}`} data-text={text}>
      {text}
    </span>
  );
}

function StatBox({ label, value, delay }: { label: string; value: string; delay: number }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`stat-box ${visible ? 'visible' : ''}`}>
      <div className="stat-label">{label}</div>
      <div className="stat-value">{value}</div>
      <div className="stat-underline"></div>
    </div>
  );
}

function App() {
  const [loaded, setLoaded] = useState(false);
  const [cursorBlink, setCursorBlink] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
    const blinkInterval = setInterval(() => {
      setCursorBlink(prev => !prev);
    }, 530);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div className={`app ${loaded ? 'loaded' : ''}`}>
      {/* Scanlines overlay */}
      <div className="scanlines"></div>

      {/* Noise texture */}
      <div className="noise"></div>

      {/* Grid background */}
      <div className="grid-bg"></div>

      <main className="container">
        {/* Terminal header */}
        <header className="terminal-header">
          <div className="terminal-dots">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <div className="terminal-title">drb_protocol_v1.0.exe</div>
          <div className="terminal-status">
            <span className="status-indicator"></span>
            LIVE
          </div>
        </header>

        {/* Hero section */}
        <section className="hero">
          <div className="hero-badge">
            <span className="badge-pulse"></span>
            GROK_ORIGIN::BASE_CHAIN
          </div>

          <h1 className="hero-title">
            <GlitchText text="$DRB" className="token-symbol" />
          </h1>

          <p className="hero-subtitle">
            <span className="typing-effect">
              DebtReliefBot
              <span className={`cursor ${cursorBlink ? '' : 'hidden'}`}>_</span>
            </span>
          </p>

          <div className="ascii-art">
{`    ╔══════════════════════════════════════╗
    ║  ▄▄▄▄  ▄▄▄▄  ▄▄▄▄   FIRST TOKEN    ║
    ║  █  █  █▄▄▀  █▄▄█   FROM GROK      ║
    ║  █▄▄█  █  █  █▄▄█   ON BASE        ║
    ╚══════════════════════════════════════╝`}
          </div>
        </section>

        {/* Stats grid */}
        <section className="stats-section">
          <div className="stats-header">
            <span className="bracket">[</span>
            PROTOCOL_METRICS
            <span className="bracket">]</span>
          </div>

          <div className="stats-grid">
            <StatBox label="ATH_MARKET_CAP" value="$38M" delay={200} />
            <StatBox label="HOLDER_COUNT" value="123K+" delay={400} />
            <StatBox label="GENESIS_DATE" value="MAR.2025" delay={600} />
            <StatBox label="CHAIN" value="BASE" delay={800} />
          </div>
        </section>

        {/* Story section */}
        <section className="story-section">
          <div className="story-header">
            <span className="prompt">&gt;</span> origin_story.log
          </div>
          <div className="story-content">
            <p className="story-line">
              <span className="line-number">01</span>
              <span className="comment">// GENESIS BLOCK</span>
            </p>
            <p className="story-line">
              <span className="line-number">02</span>
              Born from a <span className="highlight-cyan">Grok prompt</span> in March 2025
            </p>
            <p className="story-line">
              <span className="line-number">03</span>
              Deployed via <span className="highlight-magenta">Bankr/Clanker</span>
            </p>
            <p className="story-line">
              <span className="line-number">04</span>
              Peaked at <span className="highlight-green">$38M market cap</span>
            </p>
            <p className="story-line">
              <span className="line-number">05</span>
              Now backed by <span className="highlight-cyan">123K+ diamond hands</span>
            </p>
            <p className="story-line">
              <span className="line-number">06</span>
              <span className="comment">// The revolution is automated</span>
            </p>
          </div>
        </section>

        {/* Links section */}
        <section className="links-section">
          <div className="links-header">
            <span className="prompt">&gt;</span> access_points.exe
          </div>

          <div className="links-grid">
            <a
              href="https://t.co/XpZp8oEinx"
              target="_blank"
              rel="noopener noreferrer"
              className="link-card"
            >
              <div className="link-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>
              <div className="link-content">
                <span className="link-label">TWITTER/X</span>
                <span className="link-action">CONNECT &gt;</span>
              </div>
              <div className="link-glitch"></div>
            </a>

            <a
              href="https://t.co/1jHrDVTeev"
              target="_blank"
              rel="noopener noreferrer"
              className="link-card"
            >
              <div className="link-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <div className="link-content">
                <span className="link-label">WEBSITE</span>
                <span className="link-action">EXPLORE &gt;</span>
              </div>
              <div className="link-glitch"></div>
            </a>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <div className="cta-decoration">
            {'<'.repeat(10)} TRANSMISSION {'>'}</div>
          <p className="cta-text">
            The debt will be relieved. The bot has spoken.
          </p>
          <div className="cta-decoration">
            {'<'.repeat(10)} END_SIGNAL {'>'.repeat(10)}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <span>Requested by @mrnobody4565</span>
        <span className="footer-separator">·</span>
        <span>Built by @clonkbot</span>
      </footer>
    </div>
  );
}

export default App;
