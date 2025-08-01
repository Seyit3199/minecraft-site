import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, ShoppingCart, Users, Trophy, Zap, Shield, Gamepad2, Star } from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: Gamepad2,
      title: 'Eşsiz Oyun Modu',
      description: 'Özel olarak tasarlanmış oyun modları ve eşsiz deneyimler.'
    },
    {
      icon: Shield,
      title: 'Güvenli Ortam',
      description: 'Anti-cheat sistemleri ve profesyonel moderasyon.'
    },
    {
      icon: Zap,
      title: 'Yüksek Performans',
      description: '24/7 uptime ve düşük ping garantisi.'
    },
    {
      icon: Trophy,
      title: 'Turnuvalar',
      description: 'Düzenli turnuvalar ve ödüllü etkinlikler.'
    }
  ];

  const serverStats = [
    { label: 'Aktif Oyuncu', value: '125', icon: Users },
    { label: 'Toplam Üye', value: '2,450', icon: Star },
    { label: 'Uptime', value: '99.9%', icon: Zap },
    { label: 'Günlük Etkinlik', value: '5+', icon: Trophy }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-8">
              <img 
                src="https://cdn.discordapp.com/avatars/1397206233735364779/8fa75245159d09566b03e042a3cdff3b.png" 
                alt="Software Development" 
                className="w-24 h-24 rounded-2xl ring-4 ring-blue-500/50 shadow-2xl"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Software Development
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Türkiye'nin en kaliteli Minecraft sunucularından birine hoş geldiniz. 
              Eşsiz deneyimler ve dostane topluluk sizi bekliyor!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigator.clipboard.writeText('play.softwaredevelopment.com')}
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Play className="w-6 h-6" />
                <span>Sunucuya Katıl</span>
              </button>
              <Link 
                to="/market"
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <ShoppingCart className="w-6 h-6" />
                <span>Market</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Server Stats */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            Sunucu İstatistikleri
          </motion.h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {serverStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 text-center hover:border-blue-500/50 transition-all duration-300"
                >
                  <Icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            Neden Bizi Seçmelisiniz?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <Icon className="w-12 h-12 text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            Son Duyurular
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900/50 to-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="h-40 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
                  <img 
                    src="https://cdn.discordapp.com/avatars/1397206233735364779/8fa75245159d09566b03e042a3cdff3b.png" 
                    alt="Software Development" 
                    className="w-16 h-16 rounded-lg opacity-50"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Yeni Güncelleme Geldi!
                </h3>
                <p className="text-gray-400 mb-4">
                  Sunucumuzda yepyeni özellikler ve iyileştirmeler sizi bekliyor. Detaylar için...
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">2 gün önce</span>
                  <Link to="/duyurular" className="text-blue-400 hover:text-blue-300 text-sm">
                    Devamını oku →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm p-12 rounded-2xl border border-blue-500/30"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Maceraya Başlamaya Hazır mısın?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Hemen kayıt ol ve sunucumuzun eşsiz dünyasını keşfetmeye başla!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/register"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Hemen Kayıt Ol
              </Link>
              <Link 
                to="/market"
                className="border border-blue-500 hover:bg-blue-500/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
              >
                Market'i İncele
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;