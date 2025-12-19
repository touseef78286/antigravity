import React from 'react';
import Antigravity from './Antigravity';
import { antigravityPresets } from './antigravityPresets';

const App = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'radial-gradient(circle at top, #0f172a 0, #020617 55%, #000 100%)',
        color: '#e5e7eb',
        padding: '32px 16px',
        boxSizing: 'border-box',
      }}
    >
      <h1
        style={{
          fontSize: '32px',
          fontWeight: 700,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          textAlign: 'center',
        }}
      >
        Antigravity Presets
      </h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          width: '100%',
          maxWidth: 1100,
        }}
      >
        <PresetCard title="Subtle Background" label="subtle" />
        <PresetCard title="Hero / Flashy" label="hero" />
        <PresetCard title="Neon Tech" label="neon" />
        <PresetCard title="Minimal" label="minimal" />
        <PresetCard title="Crazy / Party" label="crazy" />
        <PresetCard title="Loader Style" label="loader" />
      </div>
    </div>
  );
};

const PresetCard = ({ title, label }) => {
  return (
    <div
      style={{
        borderRadius: 16,
        padding: 16,
        background:
          'linear-gradient(135deg, rgba(148, 163, 184, 0.12), rgba(30, 64, 175, 0.35))',
        border: '1px solid rgba(148, 163, 184, 0.3)',
        boxShadow: '0 18px 60px rgba(15, 23, 42, 0.9)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2
          style={{
            fontSize: 16,
            fontWeight: 600,
          }}
        >
          {title}
        </h2>
        <code
          style={{
            fontSize: 11,
            padding: '4px 8px',
            borderRadius: 999,
            background: 'rgba(15, 23, 42, 0.85)',
            border: '1px solid rgba(30, 64, 175, 0.7)',
            color: '#bfdbfe',
          }}
        >
          antigravityPresets.{label}
        </code>
      </div>

      <div
        style={{
          width: '100%',
          height: 200,
          position: 'relative',
          borderRadius: 12,
          overflow: 'hidden',
          background:
            'radial-gradient(circle at 20% 0%, rgba(196, 181, 253, 0.26), transparent 55%), radial-gradient(circle at 80% 120%, rgba(56, 189, 248, 0.3), transparent 55%)',
        }}
      >
        <Antigravity {...antigravityPresets[label]} />
      </div>
    </div>
  );
};

export default App;


