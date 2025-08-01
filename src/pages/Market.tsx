import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star, Zap, Shield, Crown, Sword, Gem, Gift } from 'lucide-react';

const Market: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tümü', icon: ShoppingCart },
    { id: 'ranks', name: 'Rütbeler', icon: Crown },
    { id: 'items', name: 'Eşyalar', icon: Sword },
    { id: 'cosmetics', name: 'Kozmetik', icon: Star },
    { id: 'special', name: 'Özel', icon: Gem }
  ];

  const products = [
    {
      id: 1,
      name: 'VIP Rütbesi',
      description: 'Özel komutlar, VIP spawn ve daha fazlası!',
      price: 150,
      originalPrice: 200,
      category: 'ranks',
      popular: true,
      features: ['Özel komutlar', 'VIP spawn', 'Özel chat rengi', 'Kit VIP'],
      icon: Crown
    },
    {
      id: 2,
      name: 'MVP Rütbesi',
      description: 'En üst seviye rütbe! Tüm ayrıcalıklar dahil.',
      price: 300,
      originalPrice: 400,
      category: 'ranks',
      popular: false,
      features: ['Tüm VIP özellikleri', 'Fly komutu', 'Özel arena', 'Kit MVP'],
      icon: Crown
    },
    {
      id: 3,
      name: 'Elytra Kanatları',
      description: 'Harika bir uçuş deneyimi için elytra kanatları.',
      price: 75,
      category: 'items',
      popular: false,
      features: ['Dayanıklılık III', 'Mending enchant', 'Unbreaking III'],
      icon: Zap
    },
    {
      id: 4,
      name: 'Netherite Set',
      description: 'Full netherite zırh seti ve araçlar.',
      price: 200,
      category: 'items',
      popular: true,
      features: ['Full Protection IV', 'Unbreaking III', 'Mending'],
      icon: Shield
    },
    {
      id: 5,
      name: 'Rainbow Chat',
      description: 'Mesajlarınızı gökkuşağı renklerinde yazın!',
      price: 50,
      category: 'cosmetics',
      popular: false,
      features: ['Renkli chat', 'Özel efektler', 'Kalıcı'],
      icon: Star
    },
    {
      id: 6,
      name: 'Özel Pet',
      description: 'Size eşlik edecek özel bir pet!',
      price: 100,
      category: 'special',
      popular: false,
      features: ['Özel animasyonlar', 'İsim değiştirilebilir', 'Özel sesler'],
      icon: Gift
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handlePurchase = (productId: number) => {
    // Bu kısım Firebase ile implement edilecek
    alert('Satın alma işlemi için giriş yapmalısınız!');
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
              alt="Market" 
              className="w-16 h-16 rounded-xl ring-4 ring-green-500/50 opacity-80"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            Market
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Oyun deneyiminizi geliştirmek için özel ürünler ve rütbeler
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-gradient-to-br from-gray-900/80 to-slate-800/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 group"
              >
                {/* Popular Badge */}
                {product.popular && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Popüler
                  </div>
                )}

                {/* Product Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-green-500/20 rounded-xl">
                      <Icon className="w-8 h-8 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{product.name}</h3>
                      <p className="text-gray-400 text-sm">{product.description}</p>
                    </div>
                  </div>
                </div>

                {/* Features */}
                {product.features && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Özellikler:</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Price */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-green-400">{product.price} ₺</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">{product.originalPrice} ₺</span>
                    )}
                  </div>
                  {product.originalPrice && (
                    <div className="bg-red-500/20 text-red-400 px-2 py-1 rounded text-xs font-semibold">
                      %{Math.round((1 - product.price / product.originalPrice) * 100)} İndirim
                    </div>
                  )}
                </div>

                {/* Purchase Button */}
                <button
                  onClick={() => handlePurchase(product.id)}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 transform group-hover:scale-[1.02] flex items-center justify-center space-x-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Satın Al</span>
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <ShoppingCart className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-400 mb-2">Bu kategoride ürün bulunamadı</h3>
            <p className="text-gray-500">Lütfen başka bir kategori seçin.</p>
          </div>
        )}

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 bg-gradient-to-r from-blue-600/20 to-green-600/20 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/30"
        >
          <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            Nasıl Satın Alırım?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-400 font-bold">1</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Kayıt Olun</h3>
              <p className="text-gray-400 text-sm">Sitemize üye olun ve giriş yapın</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-400 font-bold">2</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Kredi Yükleyin</h3>
              <p className="text-gray-400 text-sm">Hesabınıza kredi yükleyin</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-400 font-bold">3</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Satın Alın</h3>
              <p className="text-gray-400 text-sm">İstediğiniz ürünü satın alın</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Market;