'use client';

export const dynamic = 'force-dynamic';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { properties } from '@/data/properties';
import PropertyCard from '@/components/PropertyCard';

export default function PropertiesClient() {
  const searchParams = useSearchParams();
  const [location, setLocation] = useState(searchParams.get('location') || '');
  const [type, setType] = useState(searchParams.get('type') || '');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [beds, setBeds] = useState('');
  const [filtered, setFiltered] = useState(properties);

  useEffect(() => {
    let result = properties;

    if (location) {
      result = result.filter(p =>
        p.location.toLowerCase().includes(location.toLowerCase())
      );
    }
    if (type) {
      result = result.filter(p => p.type === type);
    }
    if (minPrice) {
      result = result.filter(p => p.price >= parseInt(minPrice));
    }
    if (maxPrice) {
      result = result.filter(p => p.price <= parseInt(maxPrice));
    }
    if (beds) {
      result = result.filter(p => p.beds >= parseInt(beds));
    }

    setFiltered(result);
  }, [location, type, minPrice, maxPrice, beds]);

  const clearFilters = () => {
    setLocation('');
    setType('');
    setMinPrice('');
    setMaxPrice('');
    setBeds('');
  };

  const inputStyle = {
    width: '100%',
    padding: '10px 14px',
    borderRadius: '10px',
    border: '1px solid #e2e8f0',
    fontSize: '14px',
    color: '#1e293b',
    backgroundColor: '#f8fafc',
    outline: 'none',
    boxSizing: 'border-box' as const,
  };

  const labelStyle = {
    fontSize: '13px',
    fontWeight: '600' as const,
    color: '#475569',
    marginBottom: '6px',
    display: 'block',
  };

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh' }}>

      {/* Page Header */}
      <div style={{
        background: 'linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%)',
        padding: '60px 24px',
        textAlign: 'center',
      }}>
        <h1 style={{ fontSize: '40px', fontWeight: '800', color: '#ffffff', marginBottom: '12px' }}>
          Browse Properties
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '17px' }}>
          Find your perfect home from our extensive listings
        </p>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 24px' }}>
        <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start', flexWrap: 'wrap' }}>

          {/* Sidebar Filters */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            padding: '28px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
            width: '260px',
            flexShrink: 0,
            position: 'sticky',
            top: '90px',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h3 style={{ fontWeight: '700', fontSize: '17px', color: '#1e293b' }}>Filters</h3>
              <button onClick={clearFilters} style={{
                background: 'none', border: 'none',
                color: '#2563eb', fontSize: '13px',
                fontWeight: '600', cursor: 'pointer',
              }}>
                Clear All
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={labelStyle}>Location</label>
                <input
                  type="text"
                  placeholder="City or state..."
                  value={location}
                  onChange={e => setLocation(e.target.value)}
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>Property Type</label>
                <select value={type} onChange={e => setType(e.target.value)} style={inputStyle}>
                  <option value="">All Types</option>
                  <option value="House">House</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Villa">Villa</option>
                  <option value="Penthouse">Penthouse</option>
                  <option value="Townhouse">Townhouse</option>
                </select>
              </div>

              <div>
                <label style={labelStyle}>Min Price ($)</label>
                <input
                  type="number"
                  placeholder="e.g. 200000"
                  value={minPrice}
                  onChange={e => setMinPrice(e.target.value)}
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>Max Price ($)</label>
                <input
                  type="number"
                  placeholder="e.g. 1000000"
                  value={maxPrice}
                  onChange={e => setMaxPrice(e.target.value)}
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>Min Bedrooms</label>
                <select value={beds} onChange={e => setBeds(e.target.value)} style={inputStyle}>
                  <option value="">Any</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{
              display: 'flex', justifyContent: 'space-between',
              alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '12px',
            }}>
              <p style={{ color: '#64748b', fontSize: '15px' }}>
                Showing <strong style={{ color: '#1e293b' }}>{filtered.length}</strong> properties
              </p>
            </div>

            {filtered.length > 0 ? (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '24px',
              }}>
                {filtered.map(property => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            ) : (
              <div style={{
                textAlign: 'center', padding: '80px 24px',
                backgroundColor: '#ffffff', borderRadius: '16px',
              }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>🏚️</div>
                <h3 style={{ fontWeight: '700', fontSize: '20px', color: '#1e293b', marginBottom: '8px' }}>
                  No properties found
                </h3>
                <p style={{ color: '#64748b' }}>Try adjusting your filters to see more results.</p>
                <button onClick={clearFilters} style={{
                  marginTop: '20px',
                  backgroundColor: '#2563eb', color: 'white',
                  border: 'none', padding: '12px 28px',
                  borderRadius: '10px', fontSize: '15px',
                  fontWeight: '600', cursor: 'pointer',
                }}>
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}