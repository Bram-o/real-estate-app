'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const [search, setSearch] = useState('');
  const [type, setType] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (search) params.set('location', search);
    if (type) params.set('type', type);
    router.push(`/properties?${params.toString()}`);
  };

  return (
    <section style={{
      background: 'linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%)',
      padding: '100px 24px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Background circles for depth */}
      <div style={{
        position: 'absolute', top: '-80px', right: '-80px',
        width: '400px', height: '400px', borderRadius: '50%',
        backgroundColor: 'rgba(255,255,255,0.05)',
      }} />
      <div style={{
        position: 'absolute', bottom: '-100px', left: '-60px',
        width: '300px', height: '300px', borderRadius: '50%',
        backgroundColor: 'rgba(255,255,255,0.05)',
      }} />

      <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <span style={{
          backgroundColor: 'rgba(255,255,255,0.15)',
          color: '#ffffff',
          padding: '6px 16px',
          borderRadius: '999px',
          fontSize: '13px',
          fontWeight: '600',
          letterSpacing: '0.5px',
          display: 'inline-block',
          marginBottom: '24px',
        }}>
          🏡 #1 Real Estate Platform
        </span>

        <h1 style={{
          fontSize: 'clamp(36px, 6vw, 64px)',
          fontWeight: '800',
          color: '#ffffff',
          lineHeight: '1.15',
          marginBottom: '20px',
        }}>
          Find Your Perfect<br />
          <span style={{ color: '#93c5fd' }}>Dream Home</span>
        </h1>

        <p style={{
          fontSize: '18px',
          color: 'rgba(255,255,255,0.8)',
          marginBottom: '40px',
          lineHeight: '1.7',
        }}>
          Browse thousands of properties across the country.<br />
          Buy, sell, or rent — we've got you covered.
        </p>

        {/* Search Box */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          padding: '12px',
          display: 'flex',
          gap: '10px',
          flexWrap: 'wrap',
          boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
        }}>
          <input
            type="text"
            placeholder="🔍  Search by city or state..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSearch()}
            style={{
              flex: 1,
              minWidth: '200px',
              border: 'none',
              outline: 'none',
              fontSize: '15px',
              padding: '10px 14px',
              borderRadius: '10px',
              backgroundColor: '#f8fafc',
              color: '#1e293b',
            }}
          />
          <select
            value={type}
            onChange={e => setType(e.target.value)}
            style={{
              border: 'none',
              outline: 'none',
              fontSize: '15px',
              padding: '10px 14px',
              borderRadius: '10px',
              backgroundColor: '#f8fafc',
              color: '#475569',
              cursor: 'pointer',
              minWidth: '150px',
            }}
          >
            <option value="">All Types</option>
            <option value="House">House</option>
            <option value="Apartment">Apartment</option>
            <option value="Villa">Villa</option>
            <option value="Penthouse">Penthouse</option>
            <option value="Townhouse">Townhouse</option>
          </select>
          <button
            onClick={handleSearch}
            style={{
              backgroundColor: '#2563eb',
              color: '#ffffff',
              border: 'none',
              padding: '12px 28px',
              borderRadius: '10px',
              fontSize: '15px',
              fontWeight: '600',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}
          >
            Search
          </button>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '40px',
          marginTop: '48px',
          flexWrap: 'wrap',
        }}>
          {[
            { number: '12,400+', label: 'Properties Listed' },
            { number: '8,200+', label: 'Happy Clients' },
            { number: '95%', label: 'Satisfaction Rate' },
          ].map(stat => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '28px', fontWeight: '800', color: '#ffffff' }}>{stat.number}</div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', marginTop: '4px' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}