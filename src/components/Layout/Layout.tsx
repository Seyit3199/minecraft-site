import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ParticleBackground from '../ParticleBackground';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <ParticleBackground />
      <div className="relative z-10">
        <Header />
        <main className="min-h-[calc(100vh-theme(spacing.16))]">
          {children}
        </main>
        <Footer />
      </div>
      <div 
        className="fixed inset-0 opacity-3 pointer-events-none z-0"
        style={{
          backgroundImage: `url('https://cdn.discordapp.com/avatars/1397206233735364779/8fa75245159d09566b03e042a3cdff3b.png')`,
          backgroundSize: '300px 300px',
          backgroundRepeat: 'repeat',
          backgroundPosition: 'center'
        }}
      />
    </div>
  );
};

export default Layout;