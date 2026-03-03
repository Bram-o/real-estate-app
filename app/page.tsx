import Hero from '@/components/Hero';
import PropertyCard from '@/components/PropertyCard';
import { properties } from '@/data/properties';
import Link from 'next/link';

export default function Home() {
  const featured = properties.filter(p => p.featured);

  return (
    <div>
      <Hero />

      {/* Featured Properties */}
      <section style={{ padding: '80px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{
            color: '#2563eb', fontWeight: '600', fontSize: '14px',
            letterSpacing: '1px', textTransform: 'uppercase',
          }}>
            Hand Picked
          </span>
          <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#1e293b', marginTop: '8px' }}>
            Featured Properties
          </h2>
          <p style={{ color: '#64748b', marginTop: '12px', fontSize: '16px' }}>
            Explore our most sought-after listings this season
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '28px',
        }}>
          {featured.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <Link href="/properties" style={{
            backgroundColor: '#2563eb', color: 'white',
            padding: '14px 36px', borderRadius: '10px',
            textDecoration: 'none', fontWeight: '600', fontSize: '16px',
          }}>
            View All Properties →
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ backgroundColor: '#f1f5f9', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <span style={{
            color: '#2563eb', fontWeight: '600', fontSize: '14px',
            letterSpacing: '1px', textTransform: 'uppercase',
          }}>
            Why Us
          </span>
          <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#1e293b', marginTop: '8px', marginBottom: '48px' }}>
            Why Choose EstateFind?
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: '28px',
          }}>
            {[
              { icon: '🔍', title: 'Smart Search', desc: 'Filter by location, price, type, and more to find exactly what you need.' },
              { icon: '🏆', title: 'Verified Listings', desc: 'Every property is verified by our team so you can browse with confidence.' },
              { icon: '💬', title: 'Expert Agents', desc: 'Our experienced agents are ready to guide you through every step.' },
              { icon: '⚡', title: 'Fast & Easy', desc: 'From search to sale, our streamlined process saves you time and stress.' },
            ].map(item => (
              <div key={item.title} style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                padding: '32px 24px',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>{item.icon}</div>
                <h3 style={{ fontWeight: '700', fontSize: '18px', color: '#1e293b', marginBottom: '10px' }}>{item.title}</h3>
                <p style={{ color: '#64748b', fontSize: '14px', lineHeight: '1.7' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{
        background: 'linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%)',
        padding: '80px 24px',
        textAlign: 'center',
      }}>
        <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#ffffff', marginBottom: '16px' }}>
          Ready to Find Your Dream Home?
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '18px', marginBottom: '36px' }}>
          Join thousands of happy homeowners who found their perfect place with EstateFind.
        </p>
        <Link href="/properties" style={{
          backgroundColor: '#ffffff', color: '#2563eb',
          padding: '16px 40px', borderRadius: '10px',
          textDecoration: 'none', fontWeight: '700', fontSize: '16px',
        }}>
          Browse Properties
        </Link>
      </section>
    </div>
  );
}