// components/Background.tsx
import React from 'react';

const Background = () => {
  return (
    <>
      {/* Main Gradient */}
      <div className="absolute inset-0 
        bg-gradient-to-br 
        from-slate-100 
        via-slate-50 
        via-blue-100 
        to-blue-100
        dark:from-zinc-950 
        dark:via-slate-950 
        dark:to-slate-900">
      </div>

      {/* Top overlay for seamless continuity */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/20 dark:from-black/20 pointer-events-none"></div>

      {/* Animated Glows */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-t from-blue-600/20 via-cyan-500/15 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-sky-500/15 via-blue-500/10 to-transparent rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/3 left-1/4 w-[300px] h-[300px] bg-gradient-to-tr from-slate-500/20 via-cyan-500/10 to-transparent rounded-full blur-2xl animate-pulse delay-500"></div>

      {/* Floating accent circles */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-40 right-20 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-40 right-40 w-16 h-16 bg-primary/20 rounded-full blur-lg animate-pulse delay-500"></div>
    </>
  );
};

export default Background;

