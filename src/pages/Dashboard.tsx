import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { User, CreditCard, ShoppingBag, Settings, Trophy, Star, Clock, Gift } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { currentUser } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock user data
  const userData = {
    username: 'ProGamer123',
    email: currentUser?.email || 'demo@example.com',
    balance: 250,
    level: 32,
    rank: 'VIP',
    joinDate: '2024-01-15',
    playtime: '45h 30m',
    purchases: [
      { id: 1, item: 'VIP Rütbesi', price: 150, date: '2024-01-20', status: 'completed' },
      { id: 2, item: 'Elytra Kanatları', price: 75, date: '2024-01-18', status: 'completed' },
      { id: 3, item: 'Rainbow Chat', price: 50, date: '2024-01-16', status: 'completed' }
    ],
    achievements: [
      { id: 1, name: 'İlk Adım', description: 'Sunucuya ilk kez katıldın', unlocked: true },
      { id: 2, name: 'Alışveriş Meraklısı', description: 'İlk satın alımını yaptın', unlocked: true },
      { id: 3, name: 'Sadık Oyuncu', description: '7 gün üst üste giriş yaptın', unlocked: false }
    ]
  };

  const tabs = [
    { id: 'overview', name: 'Genel Bakış', icon: User },
    { id: 'purchases', name: 'Satın Alımlar', icon: ShoppingBag },
    { id: 'wallet', name: 'Cüzdan', icon: CreditCard },
    { id: 'achievements', name: 'Başarımlar', icon: Trophy },
    { id: 'settings', name: 'Ayarlar', icon: Settings }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 p-6 rounded-xl border border-blue-500/30">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <Star className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">{userData.level}</div>
                    <div className="text-blue-400 text-sm">Seviye</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-600/20 to-green-800/20 p-6 rounded-xl border border-green-500/30">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-green-500/20 rounded-lg">
                    <CreditCard className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">{userData.balance} ₺</div>
                    <div className="text-green-400 text-sm">Bakiye</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 p-6 rounded-xl border border-purple-500/30">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-purple-500/20 rounded-lg">
                    <Trophy className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">{userData.rank}</div>
                    <div className="text-purple-400 text-sm">Rütbe</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-orange-600/20 to-orange-800/20 p-6 rounded-xl border border-orange-500/30">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-orange-500/20 rounded-lg">
                    <Clock className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">{userData.playtime}</div>
                    <div className="text-orange-400 text-sm">Oyun Süresi</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-gradient-to-br from-gray-900/80 to-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
              <h3 className="text-xl font-bold text-white mb-4">Son Aktiviteler</h3>
              <div className="space-y-3">
                {userData.purchases.slice(0, 3).map((purchase) => (
                  <div key={purchase.id} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-green-500/20 rounded-lg">
                        <ShoppingBag className="w-4 h-4 text-green-400" />
                      </div>
                      <div>
                        <div className="text-white font-semibold">{purchase.item}</div>
                        <div className="text-gray-400 text-sm">{purchase.date}</div>
                      </div>
                    </div>
                    <div className="text-green-400 font-semibold">{purchase.price} ₺</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'purchases':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Satın Alım Geçmişi</h3>
            {userData.purchases.map((purchase) => (
              <div key={purchase.id} className="bg-gradient-to-br from-gray-900/80 to-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-500/20 rounded-lg">
                      <ShoppingBag className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">{purchase.item}</h4>
                      <p className="text-gray-400">{purchase.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-green-400">{purchase.price} ₺</div>
                    <div className="text-green-400 text-sm">Tamamlandı</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'wallet':
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-900/80 to-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
              <h3 className="text-xl font-bold text-white mb-4">Cüzdan Bakiyesi</h3>
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-green-400 mb-2">{userData.balance} ₺</div>
                <p className="text-gray-400">Mevcut Bakiye</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg text-white font-semibold transition-colors">
                  +50 ₺ Yükle
                </button>
                <button className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg text-white font-semibold transition-colors">
                  +100 ₺ Yükle
                </button>
                <button className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg text-white font-semibold transition-colors">
                  +200 ₺ Yükle
                </button>
              </div>
            </div>
          </div>
        );

      case 'achievements':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Başarımlar</h3>
            {userData.achievements.map((achievement) => (
              <div key={achievement.id} className={`bg-gradient-to-br from-gray-900/80 to-slate-800/80 backdrop-blur-sm p-6 rounded-xl border transition-all ${
                achievement.unlocked 
                  ? 'border-yellow-500/50 ring-1 ring-yellow-500/20' 
                  : 'border-gray-700/50'
              }`}>
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg ${
                    achievement.unlocked 
                      ? 'bg-yellow-500/20' 
                      : 'bg-gray-500/20'
                  }`}>
                    <Trophy className={`w-6 h-6 ${
                      achievement.unlocked 
                        ? 'text-yellow-400' 
                        : 'text-gray-400'
                    }`} />
                  </div>
                  <div>
                    <h4 className={`text-lg font-semibold ${
                      achievement.unlocked 
                        ? 'text-white' 
                        : 'text-gray-400'
                    }`}>
                      {achievement.name}
                    </h4>
                    <p className="text-gray-400">{achievement.description}</p>
                  </div>
                  {achievement.unlocked && (
                    <div className="ml-auto">
                      <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-semibold">
                        Kazanıldı
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        );

      case 'settings':
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-900/80 to-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
              <h3 className="text-xl font-bold text-white mb-4">Profil Ayarları</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Kullanıcı Adı
                  </label>
                  <input
                    type="text"
                    value={userData.username}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white"
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={userData.email}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white"
                    readOnly
                  />
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white font-semibold transition-colors">
                  Profili Güncelle
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <img 
              src="https://cdn.discordapp.com/avatars/1397206233735364779/8fa75245159d09566b03e042a3cdff3b.png" 
              alt="Dashboard" 
              className="w-16 h-16 rounded-xl ring-4 ring-blue-500/50 opacity-80"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Kullanıcı Paneli
          </h1>
          <p className="text-xl text-gray-300">
            Hoş geldin, <span className="text-blue-400 font-semibold">{userData.username}</span>!
          </p>
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {renderTabContent()}
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;