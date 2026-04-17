'use client';

import { useEffect, useRef } from 'react';
import { SKILLS, SKILL_COLORS } from '@/lib/portfolio-data';

const SKILL_ICONS: Record<string, string> = {
  Backend: '⚙️',
  Frontend: '🎨',
  'Database & Tools': '🗄️',
  Concepts: '🧠',
  'Soft Skills': '🤝',
};

export default function Craft() {
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
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    const elements = sectionRef.current?.querySelectorAll('.reveal') ?? [];
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="craft"
      ref={sectionRef}
      style={{
        padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 5vw, 4rem)',
        maxWidth: '1100px',
        margin: '0 auto',
      }}
    >
      {/* Chapter Label */}
      <div className="reveal section-label" style={{ marginBottom: '1.5rem' }}>
        02 / Craft
      </div>

      {/* Heading */}
      <h2
        className="reveal reveal-delay-1"
        style={{
          fontFamily: 'var(--font-syne)',
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: 800,
          letterSpacing: '-0.04em',
          color: 'var(--text-primary)',
          maxWidth: '600px',
          marginBottom: '1rem',
        }}
      >
        The tools of{' '}
        <span
          style={{
            background: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-gold) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          the craft
        </span>
      </h2>

      <div className="accent-divider reveal reveal-delay-1" style={{ marginBottom: '1.5rem' }} />

      <p
        className="reveal reveal-delay-2"
        style={{
          fontSize: '1.05rem',
          color: 'var(--text-secondary)',
          maxWidth: '550px',
          lineHeight: 1.7,
          marginBottom: '4rem',
        }}
      >
        A practical stack focused on backend depth — with enough frontend range to build complete, 
        working applications from end to end.
      </p>

      {/* Skill Groups Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {(Object.keys(SKILLS) as Array<keyof typeof SKILLS>).map((category, i) => {
          const color = SKILL_COLORS[category];
          const icon = SKILL_ICONS[category];
          return (
            <div
              key={category}
              className={`card-glass reveal reveal-delay-${Math.min(i + 2, 5)}`}
              style={{ padding: '1.75rem' }}
            >
              {/* Card Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1.25rem',
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: `${color}20`,
                    border: `1px solid ${color}40`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1rem',
                  }}
                >
                  {icon}
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-syne)',
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {category}
                  </h3>
                  <div
                    style={{
                      width: '24px',
                      height: '2px',
                      background: color,
                      borderRadius: '1px',
                      marginTop: '4px',
                    }}
                  />
                </div>
              </div>

              {/* Skills */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                }}
              >
                {(SKILLS[category] as readonly string[]).map((skill) => (
                  <SkillBadge key={skill} skill={skill} color={color} />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom decorative stat row */}
      <div
        className="reveal"
        style={{
          marginTop: '4rem',
          padding: '2rem',
          borderRadius: '16px',
          border: '1px solid var(--border)',
          background: 'var(--bg-surface)',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2rem',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        {[
          { label: 'Primary Language', value: 'Java', mono: true },
          { label: 'API Framework', value: 'Spring Boot', mono: true },
          { label: 'Frontend', value: 'React.js', mono: true },
          { label: 'Database', value: 'MySQL', mono: true },
        ].map((item) => (
          <div key={item.label} style={{ textAlign: 'center' }}>
            <div
              style={{
                fontFamily: item.mono ? 'var(--font-mono)' : 'var(--font-syne)',
                fontSize: '1.1rem',
                fontWeight: 600,
                color: 'var(--accent-primary)',
                marginBottom: '0.25rem',
              }}
            >
              {item.value}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                letterSpacing: '0.12em',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
              }}
            >
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SkillBadge({ skill, color }: { skill: string; color: string }) {
  return (
    <span
      className="skill-badge"
      style={{
        borderColor: `${color}30`,
        transition: 'all 0.25s ease',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLSpanElement).style.borderColor = color;
        (e.currentTarget as HTMLSpanElement).style.color = color;
        (e.currentTarget as HTMLSpanElement).style.background = `${color}10`;
        (e.currentTarget as HTMLSpanElement).style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLSpanElement).style.borderColor = `${color}30`;
        (e.currentTarget as HTMLSpanElement).style.color = 'var(--text-secondary)';
        (e.currentTarget as HTMLSpanElement).style.background = 'var(--bg-card)';
        (e.currentTarget as HTMLSpanElement).style.transform = '';
      }}
    >
      {skill}
    </span>
  );
}
