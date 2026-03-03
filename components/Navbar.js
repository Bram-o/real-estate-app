'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{
      backgroundColor: '#ffffff',
      boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '70px',
      }}>

        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{
              backgroundColor: '#2563eb',
              color: 'white',
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '800',
              fontSize: '18px',
            }}>E</div>
            <span style={{ fontWeight: '700', fontSize: '20px', color: '#1e293b' }}>
              EstateFind
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }} className="desktop-nav">
          <Link href="/" style={{ textDecoration: 'none', color: '#475569', fontWeight: '500', fontSize: '15px' }}>
            Home
          </Link>
          <Link href="/properties" style={{ textDecoration: 'none', color: '#475569', fontWeight: '500', fontSize: '15px' }}>
            Properties
          </Link>
          <Link href="/contact" style={{ textDecoration: 'none', color: '#475569', fontWeight: '500', fontSize: '15px' }}>
            Contact
          </Link>
          <Link href="/contact" style={{
            backgroundColor: '#2563eb',
            color: 'white',
            padding: '10px 22px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '15px',
          }}>
            List Property
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="hamburger"
          style={{
            display: 'none',
            flexDirection: 'column',
            gap: '5px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px',
          }}
        >
          <span style={{ width: '24px', height: '2px', backgroundColor: '#1e293b', display: 'block' }} />
          <span style={{ width: '24px', height: '2px', backgroundColor: '#1e293b', display: 'block' }} />
          <span style={{ width: '24px', height: '2px', backgroundColor: '#1e293b', display: 'block' }} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          backgroundColor: '#ffffff',
          padding: '16px 24px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          borderTop: '1px solid #e2e8f0',
        }} className="mobile-menu">
          <Link href="/" onClick={() => setMenuOpen(false)} style={{ textDecoration: 'none', color: '#475569', fontWeight: '500' }}>Home</Link>
          <Link href="/properties" onClick={() => setMenuOpen(false)} style={{ textDecoration: 'none', color: '#475569', fontWeight: '500' }}>Properties</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} style={{ textDecoration: 'none', color: '#475569', fontWeight: '500' }}>Contact</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} style={{
            backgroundColor: '#2563eb',
            color: 'white',
            padding: '10px 22px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: '600',
            textAlign: 'center',
          }}>List Property</Link>
        </div>
      )}

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}