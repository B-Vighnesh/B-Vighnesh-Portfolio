'use client';

import { useEffect, useRef } from 'react';
import { VISION_STATEMENT, VISION_PILLARS, EXPERIENCE } from '@/lib/portfolio-data';

export default function Vision() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    const elements = sectionRef.current?.querySelectorAll('.reveal') ?? [];
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="vision"
      ref={sectionRef}
      style={{
        padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 5vw, 4rem)',
        maxWidth: '1100px',
        margin: '0 auto',
      }}
    >
      {/* Experience sub-section */}
      <div className="reveal section-label" style={{ marginBottom: '1.5rem' }}>
        04 / Experience
      </div>

      <h2
        className="reveal reveal-delay-1"
        style={{
          fontFamily: 'var(--font-syne)',
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: 800,
          letterSpacing: '-0.04em',
          color: 'var(--text-primary)',
          maxWidth: '700px',
          marginBottom: '1rem',
        }}
      >
        In the{' '}
        <span
          style={{
            background: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-gold) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          real world
        </span>
      </h2>

      <div className="accent-divider reveal reveal-delay-1" style={{ marginBottom: '3rem' }} />

      {/* Experience Cards */}
      {EXPERIENCE.map((exp, i) => (
        <div
          key={exp.role}
          className={`reveal reveal-delay-${i + 2}`}
          style={{
            padding: 'clamp(1.5rem, 3vw, 2.5rem)',
            borderRadius: '20px',
            border: '1px solid var(--border)',
            background: 'var(--bg-card)',
            marginBottom: '2rem',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Accent bar */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '4px',
              height: '100%',
              background: 'linear-gradient(to bottom, var(--accent-primary), var(--accent-gold))',
              borderRadius: '4px 0 0 4px',
            }}
          />

          <div
            style={{
              paddingLeft: '1rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '2rem',
              alignItems: 'start',
            }}
          >
            {/* Left - Role info */}
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.15em',
                  color: 'var(--accent-gold)',
                  marginBottom: '0.5rem',
                  textTransform: 'uppercase',
                }}
              >
                {exp.type} · {exp.period}
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-syne)',
                  fontSize: '1.4rem',
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  color: 'var(--text-primary)',
                  marginBottom: '0.25rem',
                }}
              >
                {exp.role}
              </h3>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  color: 'var(--accent-primary)',
                  fontWeight: 600,
                }}
              >
                {exp.company}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  marginTop: '0.25rem',
                }}
              >
                📍 {exp.location}
              </div>
            </div>

            {/* Right - Description + highlights */}
            <div>
              <p
                style={{
                  fontSize: '0.95rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  marginBottom: '1rem',
                }}
              >
                {exp.description}
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {exp.highlights.map((h) => (
                  <li
                    key={h}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.5rem',
                      marginBottom: '0.4rem',
                      fontSize: '0.88rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.5,
                    }}
                  >
                    <span style={{ color: 'var(--accent-primary)', marginTop: '2px', flexShrink: 0 }}>▸</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}

      {/* ── Vision Statement ── */}
      <div style={{ marginTop: '6rem' }}>
        <div className="reveal section-label" style={{ marginBottom: '1.5rem' }}>
          05 / Vision
        </div>

        {/* Blockquote */}
        <blockquote
          className="reveal reveal-delay-1"
          style={{
            fontFamily: 'var(--font-syne)',
            fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            color: 'var(--text-primary)',
            lineHeight: 1.2,
            maxWidth: '800px',
            margin: '0 0 3rem',
            position: 'relative',
            paddingLeft: '2rem',
          }}
        >
          <span
            style={{
              position: 'absolute',
              left: 0,
              top: '-0.5rem',
              fontFamily: 'Georgia, serif',
              fontSize: '4rem',
              color: 'var(--accent-primary)',
              opacity: 0.3,
              lineHeight: 1,
            }}
          >
            "
          </span>
          <span
            style={{
              background: 'linear-gradient(135deg, var(--text-primary) 50%, var(--accent-primary) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {VISION_STATEMENT}
          </span>
        </blockquote>

        {/* Vision Pillar Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '1.25rem',
            marginTop: '2rem',
          }}
        >
          {VISION_PILLARS.map((pillar, i) => (
            <div
              key={pillar.title}
              className={`card-glass reveal reveal-delay-${Math.min(i + 2, 5)}`}
              style={{ padding: '1.5rem' }}
            >
              <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{pillar.icon}</div>
              <h4
                style={{
                  fontFamily: 'var(--font-syne)',
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '0.5rem',
                  letterSpacing: '-0.02em',
                }}
              >
                {pillar.title}
              </h4>
              <p
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.65,
                }}
              >
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
