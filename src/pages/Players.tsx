import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Trophy, Star, Medal, Crown, Search, Filter } from 'lucide-react';

const Players: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('level');

  // Mock player data
  const players = [
    {
      id: 1,
      username: 'ProGamer123',
      level: 45,
      rank: 'MVP',
      kills: 1250,
      deaths: 320,
      playTime: '156h 23m',
      joinDate: '2024-01-15',
      online: true,
      avatar: `https://mc-heads.net/avatar/ProGamer123`
    },
    {
      id: 2,
      username: 'MinecraftMaster',
      level: 42,
      rank: 'VIP',
      kills: 980,
      deaths: 245,
      playTime: '142h 15m',
      joinDate: '2024-01-18',
      online: false,
      avatar: `https://mc-heads.net/avatar/MinecraftMaster`
    },
    {
      id: 3,
      username: 'SkyWarrior',
      level: 38,
      rank: 'Premium',
      kills: 875,
      deaths: 198,
      playTime: '134h 45m',
      joinDate: '2024-01-20',
      online: true,
      avatar: `https://mc-heads.net/avatar/SkyWarrior`
    },
    {
      id: 4,
      username: 'DragonSlayer',
      level: 35,
      rank: 'VIP',
      kills: 720,
      deaths: 156,
      playTime: '98h 30m',
      joinDate: '2024-01-25',
      online: false,
      avatar: `https://mc-heads.net/avatar/DragonSlayer`
    },
    {
      id: 5,
      username: 'CraftingKing',
      level: 33,
      rank: 'Premium',
      kills: 650,
      deaths: 145,
      playTime: '87h 12m',
      joinDate: '2024-02-01',
      online: true,
      avatar: `https://mc-heads.net/avatar/CraftingKing`
    },
    {
      id: 6,
      username: 'BlockBuilder',
      level: 30,
      rank: 'Default',
      kills: 520,
      deaths: 132,
      playTime: '75h 45m',
      joinDate: '2024-02-05',
      online: false,
      avatar: `https://mc-heads.net/avatar/BlockBuilder`
    }
  ];

  const getRankColor = (rank: string) => {
    switch (rank) {
      case 'MVP': return 'text-yellow-400 bg-yellow-400/20';
      case 'VIP': return 'text-green-400 bg-green-400/20';
      case 'Premium': return 'text-blue-400 bg-blue-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getRankIcon = (rank: string) => {
    switch (rank) {
      case 'MVP': return Crown;
      case 'VIP': return Star;
      case 'Premium': return Medal;
      default: return Users;
    }
  };

  const filteredPlayers = players
    .filter(player => 
      player.username.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'level': return b.level - a.level;
        case 'kills': return b.kills - a.kills;
        case 'playTime': return parseInt(b.playTime) - parseInt(a.playTime);
        default: return 0;
      }
    });

  const serverStats = {
    totalPlayers: 2450,
    onlinePlayers: 125,
    topPlayer: 'ProGamer123',
    averageLevel: 28
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
              alt="Players" 
              className="w-16 h-16 rounded-xl ring-4 ring-blue-500/50 opacity-80"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Oyuncular
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Sunucumuzun en iyi oyuncularını keşfedin ve sıralamada yerinizi alın
          </p>
        </motion.div>

        {/* Server Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          <div className="bg-gradient-to-br from-gray-900/80 to-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 text-center">
            <Users className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{serverStats.totalPlayers.toLocaleString()}</div>
            <div className="text-gray-400 text-sm">Toplam Oyuncu</div>
          </div>
          <div className="bg-gradient-to-br from-gray-900/80 to-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 text-center">
            <div className="w-8 h-8 bg-green-500 rounded-full mx-auto mb-2 flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
            </div>
            <div className="text-2xl font-bold text-white">{serverStats.onlinePlayers}</div>
            <div className="text-gray-400 text-sm">Çevrimiçi</div>
          </div>
          <div className="bg-gradient-to-br from-gray-900/80 to-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 text-center">
            <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{serverStats.topPlayer}</div>
            <div className="text-gray-400 text-sm">En İyi Oyuncu</div>
          </div>
          <div className="bg-gradient-to-br from-gray-900/80 to-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 text-center">
            <Star className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{serverStats.averageLevel}</div>
            <div className="text-gray-400 text-sm">Ortalama Level</div>
          </div>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col md:flex-row gap-4 mb-8"
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Oyuncu ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="pl-10 pr-8 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white appearance-none cursor-pointer"
            >
              <option value="level">Seviye</option>
              <option value="kills">Öldürme</option>
              <option value="playTime">Oyun Süresi</option>
            </select>
          </div>
        </motion.div>

        {/* Players List */}
        <div className="space-y-4">
          {filteredPlayers.map((player, index) => {
            const RankIcon = getRankIcon(player.rank);
            return (
              <motion.div
                key={player.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900/80 to-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-6">
                  {/* Rank Number */}
                  <div className="flex-shrink-0 text-center">
                    <div className="text-3xl font-bold text-yellow-400">#{index + 1}</div>
                  </div>

                  {/* Avatar */}
                  <div className="flex-shrink-0 relative">
                    <div className="w-16 h-16 bg-gray-700 rounded-lg overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl">
                        {player.username.charAt(0)}
                      </div>
                    </div>
                    {player.online && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-gray-900 flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      </div>
                    )}
                  </div>

                  {/* Player Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-bold text-white truncate">{player.username}</h3>
                      <div className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-semibold ${getRankColor(player.rank)}`}>
                        <RankIcon className="w-4 h-4" />
                        <span>{player.rank}</span>
                      </div>
                      {player.online ? (
                        <span className="text-green-400 text-sm">Çevrimiçi</span>
                      ) : (
                        <span className="text-gray-500 text-sm">Çevrimdışı</span>
                      )}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <div className="text-gray-400">Seviye</div>
                        <div className="text-white font-semibold">{player.level}</div>
                      </div>
                      <div>
                        <div className="text-gray-400">K/D Oranı</div>
                        <div className="text-white font-semibold">
                          {(player.kills / player.deaths).toFixed(2)}
                        </div>
                      </div>
                      <div>
                        <div className="text-gray-400">Oyun Süresi</div>
                        <div className="text-white font-semibold">{player.playTime}</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Katılma</div>
                        <div className="text-white font-semibold">
                          {new Date(player.joinDate).toLocaleDateString('tr-TR')}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex-shrink-0 flex flex-col space-y-2">
                    <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white text-sm transition-colors">
                      Profil
                    </button>
                    <button className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-lg text-white text-sm transition-colors">
                      Mesaj
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredPlayers.length === 0 && (
          <div className="text-center py-16">
            <Users className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-400 mb-2">Oyuncu bulunamadı</h3>
            <p className="text-gray-500">Arama kriterlerinizi değiştirmeyi deneyin.</p>
          </div>
        )}

        {/* Join Call-to-Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/30 text-center"
        >
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Sen de Sıralamada Yer Al!
          </h2>
          <p className="text-gray-300 mb-6">Sunucumuza katıl ve en iyi oyuncular arasına gir!</p>
          <button 
            onClick={() => navigator.clipboard.writeText('play.softwaredevelopment.com')}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105"
          >
            Sunucuya Katıl
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Players;