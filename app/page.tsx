export default function PropertiesPage() {
  return <PropertiesWrapper />;
}

import { Suspense } from 'react';
import PropertiesClient from './properties/PropertiesClient';

function PropertiesWrapper() {
  return (
    <Suspense fallback={
      <div style={{ textAlign: 'center', padding: '100px 24px' }}>
        <div style={{ fontSize: '32px', marginBottom: '16px' }}>🔍</div>
        <p style={{ color: '#64748b', fontSize: '16px' }}>Loading properties...</p>
      </div>
    }>
      <PropertiesClient />
    </Suspense>
  );
}