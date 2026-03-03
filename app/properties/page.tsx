'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { properties } from '@/data/properties';
import PropertyCard from '@/components/PropertyCard';

export default function PropertiesPage() {
  const searchParams = useSearchParams();

  const [location, setLocation] = useState(searchParams.get('location') || '');
  const [type, setType] = useState(searchParams.get('type') || '');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [beds, setBeds] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [filtered, setFiltered] = useState(properties);

  useEffect(() => {
    let result = [...properties];

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

    if (sortBy === 'price-asc') result.sort((a, b) => a.price - b.price);
    else if (sortBy === 'price-desc') result.sort((a, b) => b.price - a.price);
    else if (sortBy === 'sqft') result.sort((a, b) => b.sqft - a.sqft);

    setFiltered(result);
  }, [location, type, minPrice, maxPrice, beds, sortBy]);

  const clearFilters = () => {
    setLocation('');
    setType('');
    setMinPrice('');
    setMaxPrice('');
    setBeds('');
    setSortBy('default');
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
    display: 'block',
    fontSize: '13px',
    fontWeight: '600' as const,
    color: '#475569',
    marginBottom: '6px',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.5px',
  };

  return (
    <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '48px 24px' }}>

      {/* Page Header */}
      <div style={{ marginBottom: '36px' }}>
        <h1 style={{ fontSize: '36px', fontWeight: '800', color: '#1e293b' }}>
          All Properties
        </h1>
        <p style={{ color: '#64748b', marginTop: '8px', fontSize: '16px' }}>
          Showing {filtered.length} of {properties.length} properties
        </p>
      </div>

      <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start', flexWrap: 'wrap' }}>

        {/* Sidebar Filters */}
        <div style={{
          width: '280px',
          minWidth: '260px',
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          padding: '28px',
          boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
          position: 'sticky',
          top: '90px',
          flex: '0 0 auto',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h2 style={{ fontSize: '18px', fontWeight: '700', color: '#1e293b' }}>Filters</h2>
            <button onClick={clearFilters} style={{
              background: 'none', border: 'none',
              color: '#2563eb', fontSize: '13px',
              fontWeight: '600', cursor: 'pointer',
            }}>
              Clear All
            </button>
          </div>

          {/* Location */}
          <div style={{ marginBottom: '20px' }}>
            <label style={labelStyle}>Location</label>
            <input
              type="text"
              placeholder="City or state..."
              value={location}
              onChange={e => setLocation(e.target.value)}
              style={inputStyle}
            />
          </div>

          {/* Property Type */}
          <div style={{ marginBottom: '20px' }}>
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

          {/* Min Price */}
          <div style={{ marginBottom: '20px' }}>
            <label style={labelStyle}>Min Price</label>
            <input
              type="number"
              placeholder="$ Min"
              value={minPrice}
              onChange={e => setMinPrice(e.target.value)}
              style={inputStyle}
            />
          </div>

          {/* Max Price */}
          <div style={{ marginBottom: '20px' }}>
            <label style={labelStyle}>Max Price</label>
            <input
              type="number"
              placeholder="$ Max"
              value={maxPrice}
              onChange={e => setMaxPrice(e.target.value)}
              style={inputStyle}
            />
          </div>

          {/* Bedrooms */}
          <div style={{ marginBottom: '24px' }}>
            <label style={labelStyle}>Min Bedrooms</label>
            <select value={beds} onChange={e => setBeds(e.target.value)} style={inputStyle}>
              <option value="">Any</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
            </select>
          </div>

          {/* Active filters summary */}
          {(location || type || minPrice || maxPrice || beds) && (
            <div style={{
              backgroundColor: '#eff6ff',
              borderRadius: '10px',
              padding: '12px 16px',
              fontSize: '13px',
              color: '#2563eb',
              fontWeight: '500',
            }}>
              🔍 {filtered.length} result{filtered.length !== 1 ? 's' : ''} found
            </div>
          )}
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, minWidth: 0 }}>

          {/* Sort Bar */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '24px',
            flexWrap: 'wrap',
            gap: '12px',
          }}>
            <p style={{ color: '#64748b', fontSize: '14px' }}>
              <strong style={{ color: '#1e293b' }}>{filtered.length}</strong> properties found
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <label style={{ fontSize: '14px', color: '#475569', fontWeight: '500' }}>Sort by:</label>
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                style={{
                  padding: '8px 14px',
                  borderRadius: '8px',
                  border: '1px solid #e2e8f0',
                  fontSize: '14px',
                  color: '#1e293b',
                  backgroundColor: '#ffffff',
                  outline: 'none',
                  cursor: 'pointer',
                }}
              >
                <option value="default">Default</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="sqft">Largest First</option>
              </select>
            </div>
          </div>

          {/* Property Grid */}
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
              textAlign: 'center',
              padding: '80px 24px',
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
            }}>
              <div style={{ fontSize: '56px', marginBottom: '16px' }}>🏚</div>
              <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#1e293b', marginBottom: '10px' }}>
                No Properties Found
              </h3>
              <p style={{ color: '#64748b', marginBottom: '24px' }}>
                Try adjusting your filters to see more results.
              </p>
              <button onClick={clearFilters} style={{
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
  );
}