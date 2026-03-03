import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#0f172a',
      color: '#94a3b8',
      padding: '60px 24px 30px',
      marginTop: 'auto',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          marginBottom: '48px',
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
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
              <span style={{ fontWeight: '700', fontSize: '20px', color: '#ffffff' }}>EstateFind</span>
            </div>
            <p style={{ lineHeight: '1.7', fontSize: '14px' }}>
              Your trusted partner in finding the perfect home. Browse thousands of listings across the country.
            </p>
          </div>

          <div>
            <h4 style={{ color: '#ffffff', fontWeight: '600', marginBottom: '16px', fontSize: '15px' }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <Link href="/" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px' }}>Home</Link>
              <Link href="/properties" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px' }}>Properties</Link>
              <Link href="/contact" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px' }}>Contact Us</Link>
            </div>
          </div>

          <div>
            <h4 style={{ color: '#ffffff', fontWeight: '600', marginBottom: '16px', fontSize: '15px' }}>Property Types</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['Houses', 'Apartments', 'Villas', 'Penthouses', 'Townhouses'].map(type => (
                <Link key={type} href="/properties" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px' }}>{type}</Link>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ color: '#ffffff', fontWeight: '600', marginBottom: '16px', fontSize: '15px' }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
              <p>📍 123 Realty Ave, New York, NY</p>
              <p>📞 (555) 123-4567</p>
              <p>✉️ hello@estatefind.com</p>
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid #1e293b',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '13px',
        }}>
          <p>© 2025 EstateFind. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '24px' }}>
            <Link href="#" style={{ color: '#94a3b8', textDecoration: 'none' }}>Privacy Policy</Link>
            <Link href="#" style={{ color: '#94a3b8', textDecoration: 'none' }}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}