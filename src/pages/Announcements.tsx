import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, Calendar, User, Eye, MessageCircle, Search, Filter, Tag } from 'lucide-react';

const Announcements: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tümü', color: 'gray' },
    { id: 'updates', name: 'Güncellemeler', color: 'blue' },
    { id: 'events', name: 'Etkinlikler', color: 'green' },
    { id: 'maintenance', name: 'Bakım', color: 'yellow' },
    { id: 'rules', name: 'Kurallar', color: 'red' }
  ];

  const announcements = [
    {
      id: 1,
      title: 'Sunucu Güncelleme v2.5.0 Yayınlandı!',
      content: 'Yepyeni özellikler ve iyileştirmelerle dolu büyük güncelleme geldi! Bu güncellemede; yeni PvP arenası, özel etkinlik modları, geliştirilmiş anti-cheat sistemi ve daha birçok yenilik sizi bekliyor.',
      category: 'updates',
      author: 'Admin',
      date: '2025-01-15T10:30:00Z',
      views: 1250,
      comments: 45,
      pinned: true,
      image: 'https://cdn.discordapp.com/avatars/1397206233735364779/8fa75245159d09566b03e042a3cdff3b.png'
    },
    {
      id: 2,
      title: 'Haftalık PvP Turnuvası Başlıyor!',
      content: 'Bu hafta sonu düzenlenen PvP turnuvasına katılın ve muhteşem ödüller kazanın! Birinci olan oyuncu özel rütbe ve 500 kredi kazanacak.',
      category: 'events',
      author: 'Moderator',
      date: '2025-01-14T15:45:00Z',
      views: 892,
      comments: 23,
      pinned: false,
      image: null
    },
    {
      id: 3,
      title: 'Planlı Bakım Duyurusu',
      content: 'Yarın saat 14:00-16:00 arası sunucu performansını artırmak için planlı bakım yapılacaktır. Bu sürede sunucuya erişim sağlanamayacaktır.',
      category: 'maintenance',
      author: 'Admin',
      date: '2025-01-13T09:15:00Z',
      views: 567,
      comments: 12,
      pinned: true,
      image: null
    },
    {
      id: 4,
      title: 'Yeni Spawn Alanı Açıldı!',
      content: 'Oyuncularımız için tasarlanan yepyeni spawn alanı artık aktif! Modern tasarım ve kullanıcı dostu arayüzü ile oyun deneyiminizi iyileştiriyoruz.',
      category: 'updates',
      author: 'Builder',
      date: '2025-01-12T18:20:00Z',
      views: 734,
      comments: 18,
      pinned: false,
      image: null
    },
    {
      id: 5,
      title: 'Kış Etkinliği Başladı!',
      content: 'Kış temalı özel etkinliğimiz başladı! Kar topu savaşları, buzlu parkur yarışları ve özel ödüller sizi bekliyor. Etkinlik 31 Ocak\'a kadar devam edecek.',
      category: 'events',
      author: 'Event Manager',
      date: '2025-01-10T12:00:00Z',
      views: 1100,
      comments: 67,
      pinned: false,
      image: null
    }
  ];

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.id === category);
    switch (cat?.color) {
      case 'blue': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'green': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'yellow': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'red': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const filteredAnnouncements = announcements
    .filter(announcement => 
      announcement.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === 'all' || announcement.category === selectedCategory)
    )
    .sort((a, b) => {
      if (a.pinned && !b.pinned) return -1;
      if (!a.pinned && b.pinned) return 1;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <img 
              src="https://cdn.discordapp.com/avatars/1397206233735364779/8fa75245159d09566b03e042a3cdff3b.png" 
              alt="Announcements" 
              className="w-16 h-16 rounded-xl ring-4 ring-orange-500/50 opacity-80"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            Duyurular
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Sunucu güncellemeleri, etkinlikler ve önemli duyurular
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col lg:flex-row gap-4 mb-8"
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Duyuru ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-orange-600 text-white'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Announcements List */}
        <div className="space-y-6">
          {filteredAnnouncements.map((announcement, index) => (
            <motion.article
              key={announcement.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-gradient-to-br from-gray-900/80 to-slate-800/80 backdrop-blur-sm rounded-2xl border transition-all duration-300 hover:border-orange-500/50 ${
                announcement.pinned 
                  ? 'border-orange-500/50 ring-1 ring-orange-500/20' 
                  : 'border-gray-700/50'
              }`}
            >
              {/* Pinned Badge */}
              {announcement.pinned && (
                <div className="absolute -top-3 left-6 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                  <Bell className="w-4 h-4" />
                  <span>Sabitlenmiş</span>
                </div>
              )}

              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(announcement.category)}`}>
                        <Tag className="w-3 h-3 inline mr-1" />
                        {categories.find(c => c.id === announcement.category)?.name}
                      </span>
                      <div className="flex items-center space-x-2 text-gray-400 text-sm">
                        <User className="w-4 h-4" />
                        <span>{announcement.author}</span>
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2 hover:text-orange-400 transition-colors cursor-pointer">
                      {announcement.title}
                    </h2>
                  </div>
                  {announcement.image && (
                    <div className="flex-shrink-0 ml-4">
                      <img 
                        src={announcement.image} 
                        alt="Announcement" 
                        className="w-16 h-16 rounded-lg object-cover opacity-60"
                      />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="mb-6">
                  <p className="text-gray-300 leading-relaxed">
                    {announcement.content}
                  </p>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between text-sm text-gray-400 pt-4 border-t border-gray-700/50">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(announcement.date)}</span>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{announcement.views.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>{announcement.comments}</span>
                    </div>
                    <button className="text-orange-400 hover:text-orange-300 transition-colors font-semibold">
                      Devamını Oku →
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Empty State */}
        {filteredAnnouncements.length === 0 && (
          <div className="text-center py-16">
            <Bell className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-400 mb-2">Duyuru bulunamadı</h3>
            <p className="text-gray-500">Arama kriterlerinizi değiştirmeyi deneyin.</p>
          </div>
        )}

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 bg-gradient-to-r from-orange-600/20 to-red-600/20 backdrop-blur-sm p-8 rounded-2xl border border-orange-500/30 text-center"
        >
          <Bell className="w-12 h-12 text-orange-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            Duyuruları Kaçırma!
          </h2>
          <p className="text-gray-300 mb-6">
            Discord sunucumuza katılarak tüm duyuruları anında öğren
          </p>
          <a 
            href="https://discord.gg/softwaredevelopment" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 px-8 py-3 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Discord'a Katıl</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Announcements;