"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { buttonVariants } from './ui/button';
import { AlicorpLogo } from './alicorp-logo';

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/login', label: 'Login' },
    { href: '/register', label: 'Registro' },
    { href: '/vulnerable-fetch', label: 'Fetch Vulnerable' },
    { href: '/vulnerable-xss', label: 'Demo XSS' },
  ];

  return (
    <header className="bg-card border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <AlicorpLogo className="h-10" />
            <span className="font-bold text-lg font-headline hidden sm:inline-block">VulDemo</span>
          </Link>

          <nav className="flex items-center gap-1 sm:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  buttonVariants({ variant: 'ghost', size: 'sm' }),
                  'text-xs sm:text-sm',
                  pathname === link.href
                    ? 'bg-accent text-accent-foreground'
                    : 'text-muted-foreground'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
