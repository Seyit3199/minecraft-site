import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
      <div 
        className="fixed inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url('https://cdn.discordapp.com/avatars/1397206233735364779/8fa75245159d09566b03e042a3cdff3b.png')`,
          backgroundSize: '200px 200px',
          backgroundRepeat: 'repeat'
        }}
      />
      <div className="relative z-10">
        <Header />
        <main className="min-h-[calc(100vh-theme(spacing.16))]">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;