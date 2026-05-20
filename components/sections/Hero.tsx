'use client';

import { useEffect, useRef, useState } from 'react';
import { IDENTITY, ROTATING_SUBTITLES } from '@/lib/portfolio-data';

export default function Hero() {
  const [currentSubtitle, setCurrentSubtitle] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Typewriter effect
  useEffect(() => {
    const target = ROTATING_SUBTITLES[currentSubtitle];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex <= target.length) {
      timeout = setTimeout(() => {
        setDisplayText(target.slice(0, charIndex));
        setCharIndex((c) => c + 1);
      }, 85);
    } else if (!isDeleting && charIndex > target.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayText(target.slice(0, charIndex));
        setCharIndex((c) => c - 1);
      }, 45);
    } else {
      setIsDeleting(false);
      setCurrentSubtitle((s) => (s + 1) % ROTATING_SUBTITLES.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentSubtitle]);

  // Scroll reveal for hero elements
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = contentRef.current?.querySelectorAll('.reveal') ?? [];
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToWork = () => {
    document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: '0 2rem',
      }}
    >
      {/* Aurora Background */}
      <AuroraBackground />

      {/* Floating Grid Lines */}
      <GridLines />

      {/* Main Content */}
      <div
        ref={contentRef}
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          maxWidth: '900px',
          width: '100%',
          paddingTop: '6rem',
        }}
      >
        {/* Label */}
        <div
          className="reveal section-label"
          style={{ marginBottom: '2rem', display: 'inline-block' }}
        >
          ⬡ Full Stack Developer · Mangalore, India
        </div>

        {/* Hero Name */}
        <h1
          className="reveal reveal-delay-1"
          style={{
            fontFamily: 'var(--font-syne)',
            fontSize: 'clamp(3rem, 9vw, 7rem)',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            lineHeight: 1,
            color: 'var(--text-primary)',
            marginBottom: '1.5rem',
          }}
        >
          {IDENTITY.name.split(' ').map((word, i) => (
            <span
              key={i}
              style={{
                display: 'inline-block',
                marginRight: '0.3em',
                ...(i === 1
                  ? {
                    background:
                      'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-gold) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }
                  : {}),
              }}
            >
              {word}
            </span>
          ))}
        </h1>

        {/* Typewriter Subtitle */}
        <div
          className="reveal reveal-delay-2"
          style={{
            height: '3rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '2rem',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
              color: 'var(--accent-primary)',
              letterSpacing: '0.04em',
              fontWeight: 500,
            }}
          >
            {displayText}
          </span>
          <span className="typewriter-cursor" />
        </div>

        {/* Tagline */}
        <p
          className="reveal reveal-delay-3"
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto 3rem',
            lineHeight: 1.7,
            fontWeight: 400,
          }}
        >
          {IDENTITY.tagline}
        </p>

        {/* CTA */}
        <div
          className="reveal reveal-delay-4"
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <button
            onClick={scrollToWork}
            className="magnetic-btn"
            id="hero-cta-btn"
            style={{
              padding: '0.9rem 2.5rem',
              borderRadius: '100px',
              background: 'var(--accent-primary)',
              color: '#fff',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.9rem',
              fontWeight: 600,
              border: 'none',
              cursor: 'pointer',
              letterSpacing: '0.04em',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              boxShadow: '0 8px 32px var(--glow)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-3px) scale(1.02)';
              (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 16px 48px var(--glow)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = '';
              (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 32px var(--glow)';
            }}
          >
            Explore My Work ↓
          </button>

          <a
            href="https://d3bnt1t6yx1asq.cloudfront.net/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '0.9rem 2.5rem',
              borderRadius: '100px',
              background: 'linear-gradient(135deg, #34D399, #059669)',
              color: '#06130E',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.9rem',
              fontWeight: 700,
              textDecoration: 'none',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              letterSpacing: '0.02em',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: '0 8px 32px rgba(52, 211, 153, 0.22)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-3px) scale(1.02)';
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 16px 48px rgba(52, 211, 153, 0.3)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = '';
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 32px rgba(52, 211, 153, 0.22)';
            }}
          >
            Check out my deployed project →
          </a>

          <a
            href={`mailto:${IDENTITY.email}`}
            style={{
              padding: '0.9rem 2.5rem',
              borderRadius: '100px',
              border: '1px solid var(--border)',
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.9rem',
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              letterSpacing: '0.02em',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--accent-primary)';
              (e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent-primary)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border)';
              (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-secondary)';
            }}
          >
            Get in touch →
          </a>
        </div>

        {/* Social Links Row */}
        <div
          className="reveal reveal-delay-5"
          style={{
            display: 'flex',
            gap: '1.5rem',
            justifyContent: 'center',
            marginTop: '4rem',
          }}
        >
          {[
            { label: 'GitHub', href: IDENTITY.links.github, icon: 'GH' },
            { label: 'LinkedIn', href: IDENTITY.links.linkedin, icon: 'LI' },
            { label: 'LeetCode', href: IDENTITY.links.leetcode, icon: 'LC' },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${s.label}`}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                letterSpacing: '0.1em',
                color: 'var(--text-muted)',
                textDecoration: 'none',
                padding: '0.4rem 0.8rem',
                border: '1px solid var(--border)',
                borderRadius: '6px',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent-primary)';
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--accent-primary)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)';
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border)';
              }}
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <div
          className="reveal"
          style={{
            position: 'absolute',
            bottom: '-6rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              letterSpacing: '0.2em',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
            }}
          >
            scroll
          </span>
          <div
            style={{
              width: '1px',
              height: '48px',
              background: 'linear-gradient(to bottom, var(--accent-primary), transparent)',
              animation: 'float 2s ease-in-out infinite',
            }}
          />
        </div>
      </div>
    </section>
  );
}

/* ── Aurora Background ───────────────────────────────── */
function AuroraBackground() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      {/* Blob 1 */}
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          left: '-10%',
          width: '60vw',
          height: '60vw',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(107,79,187,0.18) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'float 8s ease-in-out infinite',
        }}
      />
      {/* Blob 2 */}
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          right: '-10%',
          width: '50vw',
          height: '50vw',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'float 10s ease-in-out infinite reverse',
        }}
      />
      {/* Blob 3 */}
      <div
        style={{
          position: 'absolute',
          top: '40%',
          left: '40%',
          width: '30vw',
          height: '30vw',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)',
          filter: 'blur(50px)',
          animation: 'float 12s ease-in-out infinite 2s',
        }}
      />
    </div>
  );
}

/* ── Subtle Grid Lines ───────────────────────────────── */
function GridLines() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(var(--border) 1px, transparent 1px),
          linear-gradient(90deg, var(--border) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
        opacity: 0.4,
        maskImage: 'radial-gradient(ellipse at center, transparent 20%, black 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, transparent 20%, black 100%)',
      }}
    />
  );
}
