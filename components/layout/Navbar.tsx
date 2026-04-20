'use client';

import { useEffect, useRef, useState } from 'react';
import { NAV_LINKS, IDENTITY } from '@/lib/portfolio-data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const stored = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initial = stored || preferred;
    setTheme(initial);
    document.documentElement.setAttribute('data-theme', initial);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open and compensate for scrollbar width
  // to prevent the fixed navbar from jumping left/right.
  useEffect(() => {
    if (menuOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      if (navRef.current) {
        navRef.current.style.paddingRight = `calc(2rem + ${scrollbarWidth}px)`;
      }
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      if (navRef.current) {
        navRef.current.style.paddingRight = '';
      }
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [menuOpen]);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  };

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        aria-label="Main navigation"
        style={{ width: '100%', boxSizing: 'border-box' }}
      >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-sm font-semibold tracking-widest uppercase"
          style={{
            fontFamily: 'var(--font-mono)',
            color: 'var(--accent-primary)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            letterSpacing: '0.15em',
          }}
          aria-label="Scroll to top"
        >
          BVK
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="nav-link"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.875rem',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                letterSpacing: '0.02em',
                transition: 'color 0.2s ease',
                padding: '0.25rem 0',
              }}
              onMouseEnter={(e) => ((e.target as HTMLButtonElement).style.color = 'var(--accent-primary)')}
              onMouseLeave={(e) => ((e.target as HTMLButtonElement).style.color = 'var(--text-secondary)')}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            style={{
              background: 'none',
              border: '1px solid var(--border)',
              borderRadius: '50%',
              width: '38px',
              height: '38px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--text-secondary)',
              transition: 'all 0.3s ease',
              fontSize: '1rem',
            }}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          {/* Resume Button */}
          <a
            href={IDENTITY.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2"
            style={{
              padding: '0.5rem 1.25rem',
              borderRadius: '100px',
              border: '1px solid var(--accent-primary)',
              color: 'var(--accent-primary)',
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.04em',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              background: 'transparent',
              fontFamily: 'var(--font-mono)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = 'var(--accent-primary)';
              (e.currentTarget as HTMLAnchorElement).style.color = '#fff';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
              (e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent-primary)';
            }}
          >
            Resume ↓
          </a>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle mobile menu"
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: 'block',
                  width: '22px',
                  height: '2px',
                  background: 'var(--text-primary)',
                  borderRadius: '2px',
                  transition: 'transform 0.3s, opacity 0.3s',
                  transform:
                    menuOpen && i === 0
                      ? 'translateY(7px) rotate(45deg)'
                      : menuOpen && i === 2
                      ? 'translateY(-7px) rotate(-45deg)'
                      : menuOpen && i === 1
                      ? 'scaleX(0)'
                      : 'none',
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 99,
          background: 'var(--bg-base)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2rem',
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
        }}
        aria-hidden={!menuOpen}
      >
        {NAV_LINKS.map((link, i) => (
          <button
            key={link.href}
            onClick={() => scrollTo(link.href)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: 'clamp(2rem, 6vw, 3rem)',
              fontFamily: 'var(--font-syne)',
              fontWeight: 700,
              color: 'var(--text-primary)',
              letterSpacing: '-0.04em',
              transition: 'color 0.2s',
              animationDelay: `${i * 0.07}s`,
            }}
            onMouseEnter={(e) => ((e.target as HTMLButtonElement).style.color = 'var(--accent-primary)')}
            onMouseLeave={(e) => ((e.target as HTMLButtonElement).style.color = 'var(--text-primary)')}
          >
            {link.label}
          </button>
        ))}
        <a
          href={IDENTITY.resumePath}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: '0.75rem 2rem',
            borderRadius: '100px',
            border: '2px solid var(--accent-primary)',
            color: 'var(--accent-primary)',
            fontSize: '1rem',
            fontWeight: 600,
            textDecoration: 'none',
            marginTop: '1rem',
          }}
          onClick={() => setMenuOpen(false)}
        >
          Download Resume
        </a>
      </div>
    </>
  );
}
