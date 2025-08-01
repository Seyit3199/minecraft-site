import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Shield, Users, ShoppingCart, Bell, Settings, 
  BarChart3, TrendingUp, DollarSign, UserPlus,
  Eye, Edit, Trash2, Plus, LogOut
} from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    navigate('/admin');
  };

  const tabs = [
    { id: 'overview', name: 'Genel Bakış', icon: BarChart3 },
    { id: 'users', name: 'Kullanıcılar', icon: Users },
    { id: 'products', name: 'Ürünler', icon: ShoppingCart },
    { id: 'announcements', name: 'Duyurular', icon: Bell },
    { id: 'settings', name: 'Site Ayarları', icon: Settings }
  ];

  const stats = {
    totalUsers: 2450,
    activeUsers: 125,
    totalRevenue: 15750,
    totalOrders: 892
  };

  const recentUsers = [
    { id: 1, username: 'ProGamer123', email: 'user@example.com', joinDate: '2025-01-15', status: 'active' },
    { id: 2, username: 'MinecraftFan', email: 'fan@example.com', joinDate: '2025-01-14', status: 'active' },
    { id: 3, username: 'BuilderPro', email: 'builder@example.com', joinDate: '2025-01-13', status: 'inactive' }
  ];

  const recentOrders = [
    { id: 1, user: 'ProGamer123', item: 'VIP Rütbesi', amount: 150, date: '2025-01-15', status: 'completed' },
    { id: 2, user: 'MinecraftFan', item: 'Elytra Wings', amount: 75, date: '2025-01-14', status: 'completed' },
    { id: 3, user: 'BuilderPro', item: 'Premium Rank', amount: 100, date: '2025-01-13', status: 'pending' }
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
                    <Users className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">{stats.totalUsers.toLocaleString()}</div>
                    <div className="text-blue-400 text-sm">Toplam Kullanıcı</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-600/20 to-green-800/20 p-6 rounded-xl border border-green-500/30">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-green-500/20 rounded-lg">
                    <UserPlus className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">{stats.activeUsers}</div>
                    <div className="text-green-400 text-sm">Aktif Kullanıcı</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-600/20 to-yellow-800/20 p-6 rounded-xl border border-yellow-500/30">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-yellow-500/20 rounded-lg">
                    <DollarSign className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">{stats.totalRevenue.toLocaleString()} ₺</div>
                    <div className="text-yellow-400 text-sm">Toplam Gelir</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 p-6 rounded-xl border border-purple-500/30">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-purple-500/20 rounded-lg">
                    <ShoppingCart className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">{stats.totalOrders}</div>
                    <div className="text-purple-400 text-sm">Toplam Sipariş</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-gray-900/80 to-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
                <h3 className="text-xl font-bold text-white mb-4">Son Kullanıcılar</h3>
                <div className="space-y-3">
                  {recentUsers.map((user) => (
                    <div key={user.id} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                      <div>
                        <div className="text-white font-semibold">{user.username}</div>
                        <div className="text-gray-400 text-sm">{user.email}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-gray-300 text-sm">{user.joinDate}</div>
                        <div className={`text-sm ${user.status === 'active' ? 'text-green-400' : 'text-gray-500'}`}>
                          {user.status === 'active' ? 'Aktif' : 'Pasif'}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900/80 to-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
                <h3 className="text-xl font-bold text-white mb-4">Son Siparişler</h3>
                <div className="space-y-3">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                      <div>
                        <div className="text-white font-semibold">{order.item}</div>
                        <div className="text-gray-400 text-sm">{order.user}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-green-400 font-semibold">{order.amount} ₺</div>
                        <div className={`text-sm ${order.status === 'completed' ? 'text-green-400' : 'text-yellow-400'}`}>
                          {order.status === 'completed' ? 'Tamamlandı' : 'Bekliyor'}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'users':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold text-white">Kullanıcı Yönetimi</h3>
              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white flex items-center space-x-2">
                <Plus className="w-4 h-4" />
                <span>Yeni Kullanıcı</span>
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900/80 to-slate-800/80 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-800/50">
                  <tr>
                    <th className="text-left p-4 text-gray-300">Kullanıcı</th>
                    <th className="text-left p-4 text-gray-300">Email</th>
                    <th className="text-left p-4 text-gray-300">Katılma Tarihi</th>
                    <th className="text-left p-4 text-gray-300">Durum</th>
                    <th className="text-left p-4 text-gray-300">İşlemler</th>
                  </tr>
                </thead>
                <tbody>
                  {recentUsers.map((user) => (
                    <tr key={user.id} className="border-t border-gray-700/50 hover:bg-gray-800/30">
                      <td className="p-4 text-white font-semibold">{user.username}</td>
                      <td className="p-4 text-gray-300">{user.email}</td>
                      <td className="p-4 text-gray-300">{user.joinDate}</td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          user.status === 'active' 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-gray-500/20 text-gray-400'
                        }`}>
                          {user.status === 'active' ? 'Aktif' : 'Pasif'}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex space-x-2">
                          <button className="p-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-2 bg-yellow-500/20 text-yellow-400 rounded-lg hover:bg-yellow-500/30">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="p-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'products':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold text-white">Ürün Yönetimi</h3>
              <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-white flex items-center space-x-2">
                <Plus className="w-4 h-4" />
                <span>Yeni Ürün</span>
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'VIP Rütbesi', price: 150, category: 'Rütbe', sales: 245 },
                { name: 'Elytra Wings', price: 75, category: 'Eşya', sales: 189 },
                { name: 'Premium Rank', price: 100, category: 'Rütbe', sales: 156 }
              ].map((product, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-900/80 to-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-lg font-bold text-white">{product.name}</h4>
                      <p className="text-gray-400 text-sm">{product.category}</p>
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-2 bg-yellow-500/20 text-yellow-400 rounded-lg hover:bg-yellow-500/30">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Fiyat:</span>
                      <span className="text-green-400 font-semibold">{product.price} ₺</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Satış:</span>
                      <span className="text-blue-400 font-semibold">{product.sales}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'announcements':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold text-white">Duyuru Yönetimi</h3>
              <button className="bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-lg text-white flex items-center space-x-2">
                <Plus className="w-4 h-4" />
                <span>Yeni Duyuru</span>
              </button>
            </div>
            
            <div className="space-y-4">
              {[
                { title: 'Sunucu Güncelleme v2.5.0', category: 'Güncelleme', date: '2025-01-15', status: 'Yayında' },
                { title: 'PvP Turnuvası', category: 'Etkinlik', date: '2025-01-14', status: 'Taslak' },
                { title: 'Bakım Duyurusu', category: 'Bakım', date: '2025-01-13', status: 'Yayında' }
              ].map((announcement, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-900/80 to-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">{announcement.title}</h4>
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="text-gray-400">Kategori: {announcement.category}</span>
                        <span className="text-gray-400">Tarih: {announcement.date}</span>
                        <span className={`px-3 py-1 rounded-full ${
                          announcement.status === 'Yayında' 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {announcement.status}
                        </span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 bg-yellow-500/20 text-yellow-400 rounded-lg hover:bg-yellow-500/30">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'settings':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">Site Ayarları</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-gray-900/80 to-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
                <h4 className="text-lg font-bold text-white mb-4">Genel Ayarlar</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Site Adı</label>
                    <input
                      type="text"
                      defaultValue="Software Development"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Sunucu IP</label>
                    <input
                      type="text"
                      defaultValue="play.softwaredevelopment.com"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white"
                    />
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white font-semibold">
                    Kaydet
                  </button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900/80 to-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
                <h4 className="text-lg font-bold text-white mb-4">Sunucu Ayarları</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Maksimum Oyuncu</label>
                    <input
                      type="number"
                      defaultValue="200"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Sunucu Versiyonu</label>
                    <select className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white">
                      <option>1.20.4</option>
                      <option>1.20.3</option>
                      <option>1.20.2</option>
                    </select>
                  </div>
                  <button className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg text-white font-semibold">
                    Güncelle
                  </button>
                </div>
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
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center mb-12"
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-red-500/20 rounded-xl">
              <Shield className="w-8 h-8 text-red-400" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Admin Paneli
              </h1>
              <p className="text-gray-400">Software Development Yönetim Paneli</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-white transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Çıkış</span>
          </button>
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
                    ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white'
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

export default AdminDashboard;