import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        syne:  ['var(--font-syne)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
        mono:  ['var(--font-mono)', 'monospace'],
      },
      colors: {
        'accent-primary': 'var(--accent-primary)',
        'accent-gold':    'var(--accent-gold)',
        'accent-violet':  'var(--accent-violet)',
        'text-primary':   'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted':     'var(--text-muted)',
        'bg-base':        'var(--bg-base)',
        'bg-surface':     'var(--bg-surface)',
        'bg-card':        'var(--bg-card)',
      },
    },
  },
  plugins: [],
};

export default config;
