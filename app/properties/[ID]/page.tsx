'use client';

import { useParams, useRouter } from 'next/navigation';
import { properties } from '@/data/properties';
import Link from 'next/link';

export default function PropertyDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const property = properties.find(p => p.id === parseInt(id as string));

  if (!property) {
    return (
      <div style={{ textAlign: 'center', padding: '120px 24px' }}>
        <div style={{ fontSize: '64px', marginBottom: '24px' }}>🏚️</div>
        <h1 style={{ fontSize: '32px', fontWeight: '800', color: '#1e293b', marginBottom: '12px' }}>
          Property Not Found
        </h1>
        <p style={{ color: '#64748b', marginBottom: '32px' }}>
          The property you're looking for doesn't exist or has been removed.
        </p>
        <Link href="/properties" style={{
          backgroundColor: '#2563eb', color: 'white',
          padding: '14px 32px', borderRadius: '10px',
          textDecoration: 'none', fontWeight: '600',
        }}>
          Back to Listings
        </Link>
      </div>
    );
  }

  const similarProperties = properties.filter(p => p.type === property.type && p.id !== property.id).slice(0, 3);

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh' }}>

      {/* Hero Image */}
      <div style={{ position: 'relative', height: '480px', overflow: 'hidden' }}>
        <img
          src={property.image}
          alt={property.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6))',
        }} />

        {/* Back Button */}
        <button
          onClick={() => router.back()}
          style={{
            position: 'absolute', top: '24px', left: '24px',
            backgroundColor: 'rgba(255,255,255,0.95)',
            border: 'none', borderRadius: '10px',
            padding: '10px 20px', cursor: 'pointer',
            fontWeight: '600', fontSize: '14px', color: '#1e293b',
            display: 'flex', alignItems: 'center', gap: '6px',
          }}
        >
          ← Back
        </button>

        {/* Badges */}
        <div style={{
          position: 'absolute', top: '24px', right: '24px',
          display: 'flex', gap: '8px',
        }}>
          <span style={{
            backgroundColor: '#2563eb', color: 'white',
            padding: '6px 16px', borderRadius: '999px',
            fontSize: '13px', fontWeight: '600',
          }}>
            {property.type}
          </span>
          {property.featured && (
            <span style={{
              backgroundColor: '#f59e0b', color: 'white',
              padding: '6px 16px', borderRadius: '999px',
              fontSize: '13px', fontWeight: '600',
            }}>
              ⭐ Featured
            </span>
          )}
        </div>

        {/* Title overlay */}
        <div style={{
          position: 'absolute', bottom: '32px', left: '32px', right: '32px',
        }}>
          <h1 style={{
            fontSize: 'clamp(24px, 4vw, 42px)',
            fontWeight: '800', color: '#ffffff',
            marginBottom: '8px',
            textShadow: '0 2px 8px rgba(0,0,0,0.3)',
          }}>
            {property.title}
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '17px' }}>
            📍 {property.location}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 24px' }}>
        <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start', flexWrap: 'wrap' }}>

          {/* Left Column */}
          <div style={{ flex: 1, minWidth: '280px' }}>

            {/* Stats Bar */}
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              padding: '24px',
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              display: 'flex',
              justifyContent: 'space-around',
              flexWrap: 'wrap',
              gap: '16px',
              marginBottom: '24px',
            }}>
              {[
                { icon: '🛏', label: 'Bedrooms', value: property.beds },
                { icon: '🚿', label: 'Bathrooms', value: property.baths },
                { icon: '📐', label: 'Square Feet', value: property.sqft.toLocaleString() },
              ].map(stat => (
                <div key={stat.label} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '28px', marginBottom: '4px' }}>{stat.icon}</div>
                  <div style={{ fontSize: '20px', fontWeight: '700', color: '#1e293b' }}>{stat.value}</div>
                  <div style={{ fontSize: '13px', color: '#64748b' }}>{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Description */}
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              padding: '28px',
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              marginBottom: '24px',
            }}>
              <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#1e293b', marginBottom: '16px' }}>
                About This Property
              </h2>
              <p style={{ color: '#475569', lineHeight: '1.8', fontSize: '15px' }}>
                {property.description}
              </p>
            </div>

            {/* Features */}
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              padding: '28px',
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              marginBottom: '24px',
            }}>
              <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#1e293b', marginBottom: '20px' }}>
                Property Features
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
                gap: '12px',
              }}>
                {[
                  '✅ Air Conditioning',
                  '✅ Parking Space',
                  '✅ High-Speed WiFi',
                  '✅ Security System',
                  '✅ Modern Kitchen',
                  '✅ Laundry Room',
                  '✅ Central Heating',
                  '✅ Storage Space',
                ].map(feature => (
                  <div key={feature} style={{
                    backgroundColor: '#f8fafc',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    fontSize: '14px',
                    color: '#475569',
                    fontWeight: '500',
                  }}>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Card */}
          <div style={{ width: '320px', flexShrink: 0, position: 'sticky', top: '90px' }}>
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              padding: '28px',
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              marginBottom: '16px',
            }}>
              <div style={{ fontSize: '32px', fontWeight: '800', color: '#2563eb', marginBottom: '4px' }}>
                ${property.price.toLocaleString()}
              </div>
              <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '24px' }}>
                Listing price
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px' }}>
                <div style={{
                  width: '52px', height: '52px', borderRadius: '50%',
                  backgroundColor: '#2563eb', color: 'white',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '20px', fontWeight: '700', flexShrink: 0,
                }}>
                  JD
                </div>
                <div>
                  <div style={{ fontWeight: '700', color: '#1e293b', fontSize: '15px' }}>John Doe</div>
                  <div style={{ color: '#64748b', fontSize: '13px' }}>Licensed Real Estate Agent</div>
                  <div style={{ color: '#f59e0b', fontSize: '13px', marginTop: '2px' }}>⭐⭐⭐⭐⭐ 4.9</div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Link href="/contact" style={{
                  backgroundColor: '#2563eb', color: 'white',
                  padding: '14px', borderRadius: '10px',
                  textDecoration: 'none', fontWeight: '600',
                  fontSize: '15px', textAlign: 'center',
                  display: 'block',
                }}>
                  📩 Contact Agent
                </Link>
                <a href="tel:+254712345678" style={{
                  backgroundColor: '#f1f5f9', color: '#1e293b',
                  padding: '14px', borderRadius: '10px',
                  textDecoration: 'none', fontWeight: '600',
                  fontSize: '15px', textAlign: 'center',
                  display: 'block',
                }}>
                  📞 (254) 7123-45678
                </a>
              </div>
            </div>

            {/* Share / Save */}
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              padding: '20px 28px',
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              display: 'flex',
              justifyContent: 'space-around',
            }}>
              <button style={{
                background: 'none', border: 'none',
                color: '#475569', cursor: 'pointer',
                fontSize: '14px', fontWeight: '600',
                display: 'flex', alignItems: 'center', gap: '6px',
              }}>
                🔖 Save
              </button>
              <button style={{
                background: 'none', border: 'none',
                color: '#475569', cursor: 'pointer',
                fontSize: '14px', fontWeight: '600',
                display: 'flex', alignItems: 'center', gap: '6px',
              }}>
                🔗 Share
              </button>
            </div>
          </div>
        </div>

        {/* Similar Properties */}
        {similarProperties.length > 0 && (
          <div style={{ marginTop: '60px' }}>
            <h2 style={{ fontSize: '28px', fontWeight: '800', color: '#1e293b', marginBottom: '28px' }}>
              Similar Properties
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '24px',
            }}>
              {similarProperties.map(p => (
                <Link key={p.id} href={`/properties/${p.id}`} style={{ textDecoration: 'none' }}>
                  <div style={{
                    backgroundColor: '#ffffff', borderRadius: '16px',
                    overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                  }}>
                    <img src={p.image} alt={p.title} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
                    <div style={{ padding: '16px' }}>
                      <h3 style={{ fontWeight: '700', color: '#1e293b', marginBottom: '4px', fontSize: '15px' }}>{p.title}</h3>
                      <p style={{ color: '#64748b', fontSize: '13px', marginBottom: '10px' }}>📍 {p.location}</p>
                      <p style={{ fontWeight: '800', color: '#2563eb', fontSize: '18px' }}>${p.price.toLocaleString()}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}