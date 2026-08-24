import React from 'react';

const FluidBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Ambient gradient background */}
      <div className="absolute inset-0 ambient-bg" />
      
      {/* Subtle dot grid overlay */}
      <div className="absolute inset-0 dot-grid" />
      
      {/* Soft teal glow — top right */}
      <div 
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.04]"
        style={{ background: 'radial-gradient(circle, #0F9D8A 0%, transparent 70%)' }}
        aria-hidden
      />
      
      {/* Soft teal glow — bottom left */}
      <div 
        className="absolute -bottom-48 -left-48 w-[600px] h-[600px] rounded-full opacity-[0.03]"
        style={{ background: 'radial-gradient(circle, #14B8A6 0%, transparent 70%)' }}
        aria-hidden
      />
      
      {/* Very subtle yellow accent — center right */}
      <div 
        className="absolute top-1/2 -right-24 w-[300px] h-[300px] rounded-full opacity-[0.02]"
        style={{ background: 'radial-gradient(circle, #FBBF24 0%, transparent 70%)' }}
        aria-hidden
      />
    </div>
  );
};

export default FluidBackground;
