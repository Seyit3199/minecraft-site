import React from 'react';
import { ExternalLink, MessageCircle, Users, Server } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="glass text-white border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="https://cdn.discordapp.com/avatars/1397206233735364779/8fa75245159d09566b03e042a3cdff3b.png" 
                alt="Software Development" 
                className="w-12 h-12 rounded-lg ring-2 ring-blue-400 pulse-glow float"
              />
              <div>
                <h3 className="text-xl font-bold gradient-text">
                  Software Development
                </h3>
                <p className="text-gray-400">Minecraft Server</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Türkiye'nin en kaliteli Minecraft sunucularından biri. 
              Eşsiz oyun deneyimi ve dostane topluluk için bize katılın!
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-green-500/20 px-3 py-1 rounded-full pulse-glow">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-green-400">Online</span>
              </div>
              <div className="flex items-center space-x-2 bg-blue-500/20 px-3 py-1 rounded-full">
                <Users className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-blue-400">125/200</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 gradient-text">Hızlı Linkler</h4>
            <ul className="space-y-2">
              <li><a href="/market" className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-2">Market</a></li>
              <li><a href="/oyuncular" className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-2">Oyuncular</a></li>
              <li><a href="/duyurular" className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-2">Duyurular</a></li>
              <li><a href="/dashboard" className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-2">Kullanıcı Paneli</a></li>
            </ul>
          </div>

          {/* Server Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 gradient-text">Sunucu Bilgileri</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between glass p-3 rounded-xl card-hover">
                <span className="text-gray-300">IP:</span>
                <button 
                  onClick={() => navigator.clipboard.writeText('play.softwaredevelopment.com')}
                  className="text-blue-400 hover:text-blue-300 transition-all duration-300 font-mono text-sm hover:scale-105"
                >
                  play.softwaredevelopment.com
                </button>
              </div>
              <div className="flex items-center justify-between glass p-3 rounded-xl card-hover">
                <span className="text-gray-300">Versiyon:</span>
                <span className="text-purple-400">1.20.4</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <a 
              href="https://discord.gg/softwaredevelopment" 
              className="flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Discord</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <div className="flex items-center space-x-2 text-gray-400">
              <Server className="w-4 h-4" />
              <span className="text-sm">Son güncelleme: 2025</span>
            </div>
          </div>
          <p className="text-gray-400 text-sm">
            © 2025 Software Development Minecraft Server. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;