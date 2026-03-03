'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '10px',
    border: '1px solid #e2e8f0',
    fontSize: '15px',
    color: '#1e293b',
    backgroundColor: '#f8fafc',
    outline: 'none',
    boxSizing: 'border-box' as const,
    fontFamily: 'inherit',
  };

  const labelStyle = {
    fontSize: '14px',
    fontWeight: '600' as const,
    color: '#475569',
    marginBottom: '8px',
    display: 'block',
  };

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh' }}>

      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%)',
        padding: '60px 24px',
        textAlign: 'center',
      }}>
        <h1 style={{ fontSize: '40px', fontWeight: '800', color: '#ffffff', marginBottom: '12px' }}>
          Get In Touch
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '17px' }}>
          Have a question or wanna to list a property? We'd love to hear from you.
        </p>
      </div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '60px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 420px', gap: '40px', alignItems: 'flex-start', flexWrap: 'wrap' as const }}>

          {/* Left — Form */}
          <div style={{
            backgroundColor: '#ffffff', borderRadius: '20px',
            padding: '40px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
          }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: '64px', marginBottom: '20px' }}>✅</div>
                <h2 style={{ fontSize: '26px', fontWeight: '800', color: '#1e293b', marginBottom: '12px' }}>
                  Message Sent!
                </h2>
                <p style={{ color: '#64748b', fontSize: '16px', lineHeight: '1.7', marginBottom: '28px' }}>
                  Thank you for reaching out. One of our agents will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', subject: '', message: '' }); }}
                  style={{
                    backgroundColor: '#2563eb', color: 'white',
                    border: 'none', padding: '12px 28px',
                    borderRadius: '10px', fontSize: '15px',
                    fontWeight: '600', cursor: 'pointer',
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <div>
                <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#1e293b', marginBottom: '8px' }}>
                  Send Us a Message
                </h2>
                <p style={{ color: '#64748b', marginBottom: '32px', fontSize: '15px' }}>
                  Fill out the form below and we'll get back to you shortly.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

                  {/* Name & Email */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label style={labelStyle}>Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  {/* Phone & Subject */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label style={labelStyle}>Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="(254) 7123-45678"
                        value={formData.phone}
                        onChange={handleChange}
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Subject</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        style={inputStyle}
                      >
                        <option value="">Select a subject</option>
                        <option value="buying">Buying a Property</option>
                        <option value="selling">Selling a Property</option>
                        <option value="renting">Renting</option>
                        <option value="listing">List My Property</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label style={labelStyle}>Message *</label>
                    <textarea
                      name="message"
                      placeholder="Tell us how we can help you..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      style={{ ...inputStyle, resize: 'vertical' }}
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    style={{
                      backgroundColor: '#2563eb', color: 'white',
                      border: 'none', padding: '14px',
                      borderRadius: '10px', fontSize: '16px',
                      fontWeight: '700', cursor: 'pointer',
                      width: '100%',
                    }}
                  >
                    Send Message →
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right — Info Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

            {[
              { icon: '📍', title: 'Our Office', lines: ['123 Kaunda Street', 'Nairobi, N 00100'] },
              { icon: '📞', title: 'Phone', lines: ['(254) 7123-45678', 'Mon–Fri, 9am to 6pm'] },
              { icon: '✉️', title: 'Email', lines: ['hello@estatefind.com', 'support@estatefind.com'] },
            ].map(item => (
              <div key={item.title} style={{
                backgroundColor: '#ffffff', borderRadius: '16px',
                padding: '24px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                display: 'flex', gap: '16px', alignItems: 'flex-start',
              }}>
                <div style={{
                  fontSize: '24px', backgroundColor: '#eff6ff',
                  width: '52px', height: '52px', borderRadius: '12px',
                  display: 'flex', alignItems: 'center',
                  justifyContent: 'center', flexShrink: 0,
                }}>
                  {item.icon}
                </div>
                <div>
                  <h4 style={{ fontWeight: '700', color: '#1e293b', marginBottom: '6px', fontSize: '16px' }}>
                    {item.title}
                  </h4>
                  {item.lines.map(line => (
                    <p key={line} style={{ color: '#64748b', fontSize: '14px', lineHeight: '1.7' }}>{line}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Working Hours */}
            <div style={{
              backgroundColor: '#ffffff', borderRadius: '16px',
              padding: '24px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
            }}>
              <h4 style={{ fontWeight: '700', color: '#1e293b', marginBottom: '16px', fontSize: '16px' }}>
                🕐 Working Hours
              </h4>
              {[
                { day: 'Monday – Friday', hours: '9:00 AM – 6:00 PM' },
                { day: 'Saturday', hours: '10:00 AM – 4:00 PM' },
                { day: 'Sunday', hours: 'Closed' },
              ].map(row => (
                <div key={row.day} style={{
                  display: 'flex', justifyContent: 'space-between',
                  fontSize: '14px', paddingBottom: '10px',
                  marginBottom: '10px', borderBottom: '1px solid #f1f5f9',
                }}>
                  <span style={{ color: '#64748b' }}>{row.day}</span>
                  <span style={{ fontWeight: '600', color: '#1e293b' }}>{row.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}