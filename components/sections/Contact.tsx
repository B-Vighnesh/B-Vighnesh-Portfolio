'use client';

import { useEffect, useRef } from 'react';
import { IDENTITY, CONTACT_CTA } from '@/lib/portfolio-data';

const CONTACT_LINKS = [
  {
    label: 'Email',
    value: IDENTITY.email,
    href: `mailto:${IDENTITY.email}`,
    icon: '✉️',
    description: 'Drop a message anytime',
  },
  {
    label: 'GitHub',
    value: 'B-Vighnesh',
    href: IDENTITY.links.github,
    icon: '🐙',
    description: 'Browse my repositories',
  },
  {
    label: 'LinkedIn',
    value: 'b-vighnesh-kumar',
    href: IDENTITY.links.linkedin,
    icon: '💼',
    description: 'Connect professionally',
  },
  {
    label: 'LeetCode',
    value: 'B_Vighnesh_Kumar',
    href: IDENTITY.links.leetcode,
    icon: '⚡',
    description: 'See my problem solving',
  },
] as const;

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    const elements = sectionRef.current?.querySelectorAll('.reveal') ?? [];
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 5vw, 4rem)',
        maxWidth: '1100px',
        margin: '0 auto',
      }}
    >
      {/* Chapter Label */}
      <div className="reveal section-label" style={{ marginBottom: '1.5rem' }}>
        06 / Contact
      </div>

      {/* CTA heading */}
      <h2
        className="reveal reveal-delay-1"
        style={{
          fontFamily: 'var(--font-syne)',
          fontSize: 'clamp(2.5rem, 6vw, 5rem)',
          fontWeight: 800,
          letterSpacing: '-0.04em',
          color: 'var(--text-primary)',
          lineHeight: 1.05,
          maxWidth: '800px',
          marginBottom: '1.5rem',
        }}
      >
        {CONTACT_CTA.split(' ').map((word, i) =>
          word === 'impactful.' ? (
            <span
              key={i}
              style={{
                background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-gold))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {word}{' '}
            </span>
          ) : (
            <span key={i}>{word} </span>
          )
        )}
      </h2>

      <div className="accent-divider reveal reveal-delay-1" style={{ marginBottom: '2rem' }} />

      <p
        className="reveal reveal-delay-2"
        style={{
          fontSize: '1.05rem',
          color: 'var(--text-secondary)',
          maxWidth: '520px',
          lineHeight: 1.7,
          marginBottom: '3.5rem',
        }}
      >
        Whether you&apos;re looking for a backend developer, want to collaborate on a project, 
        or just want to say hello — I&apos;m always open to a conversation.
      </p>

      {/* Stats row */}
      <div
        className="reveal reveal-delay-2"
        style={{
          display: 'flex',
          gap: '1px',
          marginBottom: '4rem',
          borderRadius: '16px',
          overflow: 'hidden',
          border: '1px solid var(--border)',
        }}
      >
        {[
          { label: 'Location', value: 'Karnataka, India' },
          { label: 'Phone', value: IDENTITY.phone },
          { label: 'Status', value: 'Open to Opportunities' },
        ].map((item, i) => (
          <div
            key={item.label}
            style={{
              flex: 1,
              padding: '1.25rem 1.5rem',
              background: 'var(--bg-card)',
              borderRight: i < 2 ? '1px solid var(--border)' : 'none',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                letterSpacing: '0.15em',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                marginBottom: '0.4rem',
              }}
            >
              {item.label}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-syne)',
                fontSize: '0.9rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
              }}
            >
              {item.value}
            </div>
          </div>
        ))}
      </div>

      {/* Contact Links Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: '1rem',
          marginBottom: '3rem',
        }}
      >
        {CONTACT_LINKS.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            target={link.label !== 'Email' ? '_blank' : undefined}
            rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
            className={`contact-link reveal reveal-delay-${Math.min(i + 2, 5)}`}
            aria-label={`${link.label}: ${link.value}`}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.1rem',
                flexShrink: 0,
                transition: 'border-color 0.3s',
              }}
            >
              {link.icon}
            </div>
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.12em',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  marginBottom: '0.2rem',
                }}
              >
                {link.label}
              </div>
              <div
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color: 'var(--text-primary)',
                }}
              >
                {link.value}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: 'var(--text-muted)',
                  marginTop: '0.1rem',
                }}
              >
                {link.description}
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Download Resume CTA */}
      <div
        className="reveal"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          alignItems: 'center',
        }}
      >
        <ResumeButton href={IDENTITY.resumePath} />

        <a
          href={`mailto:${IDENTITY.email}`}
          style={{
            padding: '1rem 2.5rem',
            borderRadius: '100px',
            border: '1px solid var(--border)',
            color: 'var(--text-secondary)',
            fontSize: '0.9rem',
            fontWeight: 500,
            textDecoration: 'none',
            fontFamily: 'var(--font-mono)',
            letterSpacing: '0.04em',
            transition: 'all 0.3s ease',
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
          Send an email →
        </a>
      </div>

      {/* Footer */}
      <div
        className="reveal"
        style={{
          marginTop: '6rem',
          paddingTop: '2rem',
          borderTop: '1px solid var(--border)',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
            letterSpacing: '0.08em',
          }}
        >
          © {new Date().getFullYear()} B Vighnesh Kumar · Designed & Built with intent
        </span>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
            letterSpacing: '0.06em',
          }}
        >
          Karnataka, India
        </span>
      </div>
    </section>
  );
}

function ResumeButton({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      id="contact-resume-btn"
      aria-label="Download resume PDF"
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.75rem',
        padding: '1rem 2.5rem',
        borderRadius: '100px',
        background: 'var(--accent-primary)',
        color: '#fff',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.9rem',
        fontWeight: 600,
        letterSpacing: '0.04em',
        textDecoration: 'none',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        boxShadow: '0 8px 32px var(--glow)',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-3px) scale(1.02)';
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 16px 48px var(--glow)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.transform = '';
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 32px var(--glow)';
      }}
    >
      {/* Ping ring animation */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '100px',
          border: '2px solid var(--accent-primary)',
          animation: 'ping-ring 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        }}
      />
      {/* Download icon */}
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M8 12L3 7h3V2h4v5h3L8 12z" />
        <rect x="2" y="13" width="12" height="1.5" rx="0.75" />
      </svg>
      Download Resume
    </a>
  );
}
