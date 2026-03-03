'use client';

import Link from 'next/link';

export default function PropertyCard({ property }) {
  return (
    <Link href={`/properties/${property.id}`} style={{ textDecoration: 'none' }}>
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
        transition: 'transform 0.2s, box-shadow 0.2s',
        cursor: 'pointer',
      }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.15)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)';
        }}
      >
        {/* Image */}
        <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
          <img
            src={property.image}
            alt={property.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute', top: '14px', left: '14px',
            backgroundColor: '#2563eb', color: 'white',
            padding: '4px 12px', borderRadius: '999px',
            fontSize: '12px', fontWeight: '600',
          }}>
            {property.type}
          </div>
          {property.featured && (
            <div style={{
              position: 'absolute', top: '14px', right: '14px',
              backgroundColor: '#f59e0b', color: 'white',
              padding: '4px 12px', borderRadius: '999px',
              fontSize: '12px', fontWeight: '600',
            }}>
              ⭐ Featured
            </div>
          )}
        </div>

        {/* Content */}
        <div style={{ padding: '20px' }}>
          <h3 style={{ fontSize: '17px', fontWeight: '700', color: '#1e293b', marginBottom: '6px' }}>
            {property.title}
          </h3>
          <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '14px' }}>
            📍 {property.location}
          </p>

          {/* Stats Row */}
          <div style={{
            display: 'flex', gap: '16px',
            fontSize: '13px', color: '#475569',
            marginBottom: '16px',
            paddingBottom: '16px',
            borderBottom: '1px solid #f1f5f9',
          }}>
            <span>🛏 {property.beds} Beds</span>
            <span>🚿 {property.baths} Baths</span>
            <span>📐 {property.sqft.toLocaleString()} sqft</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '20px', fontWeight: '800', color: '#2563eb' }}>
              Ksh {property.price.toLocaleString()}
            </span>
            <span style={{
              backgroundColor: '#eff6ff', color: '#2563eb',
              padding: '6px 14px', borderRadius: '8px',
              fontSize: '13px', fontWeight: '600',
            }}>
              View Details →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}