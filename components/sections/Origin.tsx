'use client';

import { useEffect, useRef } from 'react';
import { TIMELINE, IDENTITY } from '@/lib/portfolio-data';

export default function Origin() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
    );
    const elements = sectionRef.current?.querySelectorAll('.reveal') ?? [];
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="origin"
      ref={sectionRef}
      style={{
        padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 5vw, 4rem)',
        maxWidth: '1100px',
        margin: '0 auto',
      }}
    >
      {/* Chapter Label */}
      <div className="reveal section-label" style={{ marginBottom: '1.5rem' }}>
        01 / Origin
      </div>

      {/* Section Heading */}
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
        Where the story{' '}
        <span
          style={{
            background:
              'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-gold) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          begins
        </span>
      </h2>

      <div className="accent-divider reveal reveal-delay-1" style={{ marginBottom: '3rem' }} />

      {/* Two column layout */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(3rem, 6vw, 6rem)',
          alignItems: 'start',
        }}
      >
        {/* Left — Narrative */}
        <div>
          <p
            className="reveal reveal-delay-2"
            style={{
              fontSize: '1.125rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.8,
              marginBottom: '1.5rem',
            }}
          >
            I am a Software Engineer with a strong pull toward backend systems not just how to write code, but how systems actually work: how data flows across layers, how services talk to each other, and where things break under real conditions.</p>

          <p
            className="reveal reveal-delay-3"
            style={{
              fontSize: '1.125rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.8,
              marginBottom: '1.5rem',
            }}
          >
            My approach is end to end: design the API, structure the backend, model the database, build the frontend and ship something that works in the real world, using Spring Boot, Python, React, and MySQL, with a focus on clean architecture and performance.</p>

          <p
            className="reveal reveal-delay-4"
            style={{
              fontSize: '1.125rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.8,
              marginBottom: '1.5rem',
            }}
          >
           That is backed by a solid grounding in data structures, algorithms, OOP, DBMS, and operating systems the fundamentals that make systems predictable, not just functional. I am now extending into machine learning, exploring concepts like RAG and MCP to build more intelligent, data-driven products.</p>

          <p
            className="reveal reveal-delay-5"
            style={{
              fontSize: '1.125rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.8,
            }}
          >
            I am a Software Product Developer at Sclera VDMS. I have resolved version conflicts merging microservices into a monolithic backend, traced end-to-end data flow across a multi-module product, and am now researching MCP servers to bring LLM capabilities into it. 
          </p>

          {/* Quick stats */}
          <div
            className="reveal reveal-delay-5"
            style={{
              display: 'flex',
              gap: '2rem',
              marginTop: '3rem',
              flexWrap: 'wrap',
            }}
          >
            {[
              { number: '3+', label: 'Projects Built' },
              { number: '4', label: 'Years of Learning' },
              { number: '5+', label: 'Technologies' },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontFamily: 'var(--font-syne)',
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    lineHeight: 1,
                    background:
                      'linear-gradient(135deg, var(--accent-primary), var(--accent-gold))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {stat.number}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    letterSpacing: '0.12em',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    marginTop: '0.25rem',
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Timeline */}
        <div style={{ position: 'relative', paddingLeft: '2rem' }}>
          {/* Vertical line */}
          <div
            className="timeline-line reveal reveal-delay-2"
            style={{
              position: 'absolute',
              left: '6px',
              top: '12px',
              bottom: '12px',
            }}
          />

          {TIMELINE.map((item, i) => (
            <div
              key={item.year}
              className={`reveal reveal-delay-${i + 2}`}
              style={{
                position: 'relative',
                paddingBottom: i < TIMELINE.length - 1 ? '3rem' : 0,
              }}
            >
              {/* Dot */}
              <div
                className="timeline-dot"
                style={{ position: 'absolute', left: '-1.6rem', top: '4px' }}
              />

              {/* Year */}
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.15em',
                  color: 'var(--accent-gold)',
                  marginBottom: '0.4rem',
                }}
              >
                {item.year}
              </div>

              {/* Label */}
              <h3
                style={{
                  fontFamily: 'var(--font-syne)',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '0.5rem',
                }}
              >
                {item.label}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
