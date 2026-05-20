'use client';

import { useEffect, useRef, useState } from 'react';
import { PROJECTS } from '@/lib/portfolio-data';

export default function Work() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeProject, setActiveProject] = useState<number | null>(null);

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
      id="work"
      ref={sectionRef}
      style={{
        padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 5vw, 4rem)',
        maxWidth: '1100px',
        margin: '0 auto',
      }}
    >
      {/* Chapter Label */}
      <div className="reveal section-label" style={{ marginBottom: '1.5rem' }}>
        03 / Work
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
          maxWidth: '700px',
          marginBottom: '1rem',
        }}
      >
        Projects that{' '}
        <span
          style={{
            background: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-gold) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          ship
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
        Not side projects for the sake of it, applications built to solve real problems, designed end-to-end from database schema to user interface.      </p>

      {/* Project Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i}
            isActive={activeProject === i}
            onToggle={() => setActiveProject(activeProject === i ? null : i)}
          />
        ))}
      </div>
    </section>
  );
}

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  impact: string;
  tech: readonly string[];
  highlights: readonly string[];
  color: string;
  accentColor: string;
  icon: string;
  github: string;
  live: string;
}

function ProjectCard({
  project,
  index,
  isActive,
  onToggle,
}: {
  project: Project;
  index: number;
  isActive: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`reveal reveal-delay-${Math.min(index + 2, 5)}`}
      style={{
        borderRadius: '20px',
        border: `1px solid ${isActive ? project.color + '50' : 'var(--border)'}`,
        background: 'var(--bg-card)',
        overflow: 'hidden',
        transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
        boxShadow: isActive ? `0 24px 64px ${project.color}25` : 'none',
      }}
      onMouseEnter={(e) => {
        if (!isActive) {
          (e.currentTarget as HTMLDivElement).style.borderColor = `${project.color}40`;
          (e.currentTarget as HTMLDivElement).style.boxShadow = `0 12px 40px ${project.color}15`;
        }
      }}
      onMouseLeave={(e) => {
        if (!isActive) {
          (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)';
          (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
        }
      }}
    >
      {/* Card Header (always visible) */}
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 'clamp(1rem, 3vw, 2rem)',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '1rem',
          textAlign: 'left',
        }}
        aria-expanded={isActive}
        aria-controls={`project-detail-${project.id}`}
      >
        {/* Icon */}
        <div
          style={{
            flexShrink: 0,
            width: '48px',
            height: '48px',
            borderRadius: '12px',
            background: `${project.color}18`,
            border: `1px solid ${project.color}35`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.3rem',
            transition: 'transform 0.3s ease',
            transform: isActive ? 'scale(1.1)' : 'scale(1)',
            marginTop: '2px',
          }}
        >
          {project.icon}
        </div>

        {/* Title block + mobile tech pills */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              letterSpacing: '0.15em',
              color: project.color,
              marginBottom: '0.3rem',
              textTransform: 'uppercase',
            }}
          >
            Project {String(index + 1).padStart(2, '0')}
          </div>
          <h3
            style={{
              fontFamily: 'var(--font-syne)',
              fontSize: 'clamp(1.15rem, 4vw, 1.8rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: 'var(--text-primary)',
              marginBottom: '0.2rem',
              wordBreak: 'break-word',
            }}
          >
            {project.title}
          </h3>
          <p
            style={{
              fontSize: '0.82rem',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-mono)',
              lineHeight: 1.4,
              marginBottom: '0.6rem',
            }}
          >
            {project.subtitle}
          </p>

          {/* Tech pills — shown on mobile below subtitle */}
          <div
            className="flex md:hidden"
            style={{ gap: '0.4rem', flexWrap: 'wrap' }}
          >
            {project.tech.slice(0, 3).map((t) => (
              <span
                key={t}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.62rem',
                  padding: '0.2rem 0.55rem',
                  borderRadius: '100px',
                  border: `1px solid ${project.color}35`,
                  color: project.color,
                  background: `${project.color}10`,
                  whiteSpace: 'nowrap',
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Tech pills (desktop only, right column) */}
        <div
          className="hidden md:flex"
          style={{ gap: '0.5rem', flexWrap: 'wrap', maxWidth: '260px', alignSelf: 'center' }}
        >
          {project.tech.slice(0, 3).map((t) => (
            <span
              key={t}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                padding: '0.25rem 0.65rem',
                borderRadius: '100px',
                border: `1px solid ${project.color}35`,
                color: project.color,
                background: `${project.color}10`,
                whiteSpace: 'nowrap',
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Toggle Arrow */}
        <div
          style={{
            flexShrink: 0,
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            border: `1px solid ${project.color}40`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: project.color,
            fontSize: '0.9rem',
            transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.35s ease',
            alignSelf: 'flex-start',
            marginTop: '2px',
          }}
          aria-hidden="true"
        >
          ↓
        </div>
      </button>

      {project.live && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            padding: '0 clamp(1rem, 3vw, 2rem) clamp(1rem, 3vw, 1.5rem)',
          }}
        >
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.65rem 1rem',
              borderRadius: '8px',
              background: project.color,
              color: '#06130E',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '0.02em',
              textDecoration: 'none',
              boxShadow: `0 8px 24px ${project.color}30`,
            }}
          >
            Check out my deployed project →
          </a>
        </div>
      )}

      {/* Expanded Detail */}
      <div
        id={`project-detail-${project.id}`}
        style={{
          maxHeight: isActive ? '600px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
        }}
      >
        <div
          style={{
            padding: 'clamp(1.5rem, 3vw, 2rem)',
            paddingTop: 0,
            borderTop: `1px solid ${project.color}20`,
            marginTop: '0',
          }}
        >
          {/* Horizontal accent line */}
          <div
            style={{
              width: '100%',
              height: '1px',
              background: `linear-gradient(90deg, ${project.color}40, transparent)`,
              marginBottom: '1.5rem',
            }}
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
              gap: '1.5rem',
            }}
          >
            {/* Description */}
            <div>
              <p
                style={{
                  fontSize: '1rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.8,
                  marginBottom: '1rem',
                }}
              >
                {project.description}
              </p>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 1rem',
                  borderRadius: '8px',
                  background: `${project.color}12`,
                  border: `1px solid ${project.color}30`,
                }}
              >
                <span style={{ fontSize: '0.85rem' }}>💡</span>
                <span
                  style={{
                    fontSize: '0.8rem',
                    color: project.color,
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 500,
                  }}
                >
                  {project.impact}
                </span>
              </div>
            </div>

            {/* Highlights + All Tech */}
            <div>
              <h4
                style={{
                  fontFamily: 'var(--font-syne)',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: 'var(--text-muted)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '0.75rem',
                }}
              >
                Key Features
              </h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {project.highlights.map((h) => (
                  <li
                    key={h}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.5rem',
                      marginBottom: '0.5rem',
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.5,
                    }}
                  >
                    <span style={{ color: project.color, marginTop: '2px', flexShrink: 0 }}>▸</span>
                    {h}
                  </li>
                ))}
              </ul>

              {/* All Tech Badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '1rem' }}>
                {project.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      padding: '0.25rem 0.65rem',
                      borderRadius: '100px',
                      border: `1px solid ${project.color}35`,
                      color: project.color,
                      background: `${project.color}10`,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
