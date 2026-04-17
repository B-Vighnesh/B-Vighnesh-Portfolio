'use client';

import { useEffect, useRef } from 'react';

interface SectionWrapperProps {
  id: string;
  bgVar: string;
  children: React.ReactNode;
}

/**
 * Wraps each section in a container that smoothly transitions
 * the background color based on the CSS custom property for that section.
 */
export default function SectionWrapper({ id, bgVar, children }: SectionWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Apply the section background using the CSS var
    if (ref.current) {
      ref.current.style.backgroundColor = `var(${bgVar})`;
    }
  }, [bgVar]);

  return (
    <div
      id={id}
      ref={ref}
      style={{
        backgroundColor: `var(${bgVar})`,
        transition: 'background-color 0.6s ease',
        width: '100%',
      }}
    >
      {children}
    </div>
  );
}
