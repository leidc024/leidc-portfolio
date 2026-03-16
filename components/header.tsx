'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Moon, Sun } from 'lucide-react';

interface HeaderProps {
  name: string;
  title: string;
  company?: string;
  location: string;
  avatar?: string;
}

export function Header({ name, title, company, location, avatar }: HeaderProps) {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Default to dark mode unless user has explicitly saved a preference.
    const saved = localStorage.getItem('theme');
    const shouldBeDark = saved ? saved === 'dark' : true;
    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
    
    if (newIsDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  if (!mounted) return null;

  return (
    <header>
      <div className="px-6 py-8 flex justify-between items-start">
        <div className="flex items-center gap-4">
          {avatar && (
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-border">
              <Image
                src={avatar}
                alt={name}
                fill
                className="object-cover object-[center_bottom]"
              />
            </div>
          )}
          <div>
            <h1 className="text-xl font-medium text-foreground">{name}</h1>
            <p className="text-sm text-muted-foreground mt-0.5">
              {title}{company && <span className="text-accent"> @ {company}</span>}
            </p>
            <p className="text-sm text-muted-foreground mt-0.5">{location}</p>
          </div>
        </div>
        
        {/* Dark Mode Toggle Switch */}
        <button
          onClick={toggleTheme}
          className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          style={{ backgroundColor: isDark ? '#1e3a5f' : '#e5e7eb' }}
          aria-label="Toggle theme"
        >
          <span
            className={`inline-flex h-5 w-5 transform items-center justify-center rounded-full bg-white shadow-sm transition-transform ${
              isDark ? 'translate-x-5' : 'translate-x-0.5'
            }`}
          >
            {isDark ? (
              <Moon className="h-3 w-3 text-slate-700" />
            ) : (
              <Sun className="h-3 w-3 text-amber-500" />
            )}
          </span>
        </button>
      </div>
    </header>
  );
}
