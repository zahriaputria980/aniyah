'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle, 
  Award,
  Users,
  TrendingUp,
  Package,
  Star,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const products = [
    {
      name: "Beras Premium ANIYAH",
      description: "Kualitas terbaik dengan butiran pilihan yang sempurna",
      features: ["Tanpa pestisida", "Aromatik", "Tekstur pulen"],
      badge: "Premium"
    },
    {
      name: "Beras Organik ANIYAH",
      description: "Ditanam secara alami tanpa bahan kimia",
      features: ["100% Organik", "Sertifikasi halal", "Nutrisi tinggi"],
      badge: "Organik"
    },
    {
      name: "Beras Kualitas Ekonomis",
      description: "Harga terjangkau dengan kualitas terjamin",
      features: ["Harga bersaing", "Kualitas baik", "Stok melimpah"],
      badge: "Best Value"
    }
  ];

  const benefits = [
    {
      icon: <Award className="w-8 h-8 text-amber-600" />,
      title: "Kualitas Terjamin",
      description: "Produksi dengan standar kualitas tertinggi"
    },
    {
      icon: <Users className="w-8 h-8 text-amber-600" />,
      title: "Pelayanan Terpercaya",
      description: "Tim profesional siap melayani kebutuhan Anda"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-amber-600" />,
      title: "Harga Kompetitif",
      description: "Harga terbaik dengan kualitas premium"
    },
    {
      icon: <Package className="w-8 h-8 text-amber-600" />,
      title: "Pengemasan Aman",
      description: "Kemasan higienis dan aman untuk konsumsi"
    }
  ];

  const testimonials = [
    {
      name: "PT. Sukses Makmur",
      role: "Distributor",
      content: "ANIYAH adalah mitra bisnis terpercaya kami. Kualitas beras selalu konsisten dan pengiriman tepat waktu.",
      rating: 5
    },
    {
      name: "Bapak Ahmad",
      role: "Pemilik Restoran",
      content: "Beras dari ANIYAH selalu menjadi pilihan utama untuk restoran kami. Kualitasnya tidak pernah mengecewakan.",
      rating: 5
    },
    {
      name: "Ibu Siti",
      role: "Pemilik Warung",
      content: "Harga bersaing dan kualitas bagus. Pelanggan saya sangat puas dengan beras ANIYAH.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
                <img src="/logo.png" alt="ANIYAH Logo" className="w-10 h-10 rounded-lg" />
                <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
                  ANIYAH
                </span>
              </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-amber-600 transition-colors">Beranda</a>
              <a href="#products" className="text-gray-700 hover:text-amber-600 transition-colors">Produk</a>
              <a href="#about" className="text-gray-700 hover:text-amber-600 transition-colors">Tentang</a>
              <a href="#contact" className="text-gray-700 hover:text-amber-600 transition-colors">Kontak</a>
              <Button className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800">
                Hubungi Kami
              </Button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-amber-600">Beranda</a>
              <a href="#products" className="block px-3 py-2 text-gray-700 hover:text-amber-600">Produk</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-amber-600">Tentang</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-amber-600">Kontak</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200 w-fit">
                  🌾 Produsen Beras Terpercaya Sejak 2020
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  <span className="bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
                    ANIYAH
                  </span>
                  <br />
                  Kualitas Terbaik untuk Setiap Rumah Tangga
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Menyediakan beras pilihan dengan kualitas premium, 
                  ditanam dengan penuh perhatian dan diproses secara higienis 
                  untuk menjamin kesehatan keluarga Anda.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-8 py-3">
                  <Phone className="w-5 h-5 mr-2" />
                  Pesan Sekarang
                </Button>
                <Button size="lg" variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-3">
                  Lihat Produk
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">500+</div>
                  <div className="text-sm text-gray-600">Pelanggan Setia</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">10+</div>
                  <div className="text-sm text-gray-600">Tipe Produk</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">99%</div>
                  <div className="text-sm text-gray-600">Kepuasan</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <div className="bg-white rounded-2xl shadow-2xl p-8">
                  <div className="aspect-square bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <img src="/logo.png" alt="ANIYAH Logo" className="w-24 h-24 rounded-full mx-auto" />
                      <div className="text-2xl font-bold text-amber-800">ANIYAH</div>
                      <div className="text-amber-600">Beras Berkualitas, Harga Terjangkau</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-4 right-4 w-72 h-72 bg-amber-200 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute bottom-4 left-4 w-72 h-72 bg-amber-300 rounded-full opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Produk Unggulan Kami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pilihan beras terbaik dengan berbagai kualitas untuk memenuhi kebutuhan Anda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border-amber-100">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                      <Badge className="bg-amber-100 text-amber-800">{product.badge}</Badge>
                    </div>
                    <p className="text-gray-600">{product.description}</p>
                    <div className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800">
                      Lihat Detail
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-br from-amber-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Mengapa Memilih ANIYAH?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Komitmen kami untuk memberikan yang terbaik bagi pelanggan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="flex justify-center">{benefit.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Apa Kata Pelanggan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kepuasan pelanggan adalah prioritas utama kami
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-amber-600 to-amber-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-white">Hubungi Kami</h2>
            <p className="text-xl text-amber-100 max-w-3xl mx-auto">
              Siap melayani kebutuhan beras berkualitas untuk Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Informasi Kontak</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-amber-600" />
                      <div>
                        <div className="font-semibold text-gray-900">Alamat</div>
                        <div className="text-gray-600">
                          KP TENGGILIS, Desa/Kelurahan Lambangsari, Kec. Tambun Selatan,
                          Kab. Bekasi, Provinsi Jawa Barat, 17510
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-amber-600" />
                      <div>
                        <div className="font-semibold text-gray-900">Telepon</div>
                        <div className="text-gray-600">082312044648</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-amber-600" />
                      <div>
                        <div className="font-semibold text-gray-900">Email</div>
                        <div className="text-gray-600">info@aniyah.com</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-amber-600" />
                      <div>
                        <div className="font-semibold text-gray-900">Jam Operasional</div>
                        <div className="text-gray-600">Senin - Sabtu: 08:00 - 17:00</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Kirim Pesan</h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="Masukkan nama Anda"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nomor Telepon
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="Masukkan nomor telepon"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Pesan
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="Tuliskan pesan Anda"
                      ></textarea>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800">
                      Kirim Pesan
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">A</span>
                </div>
                <span className="text-xl font-bold">ANIYAH</span>
              </div>
              <p className="text-gray-400">
                Produsen beras terpercaya dengan kualitas premium untuk setiap rumah tangga Indonesia.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-lg">Quick Links</h4>
              <div className="space-y-2">
                <a href="#home" className="block text-gray-400 hover:text-amber-400 transition-colors">Beranda</a>
                <a href="#products" className="block text-gray-400 hover:text-amber-400 transition-colors">Produk</a>
                <a href="#about" className="block text-gray-400 hover:text-amber-400 transition-colors">Tentang Kami</a>
                <a href="#contact" className="block text-gray-400 hover:text-amber-400 transition-colors">Kontak</a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-lg">Legal</h4>
              <div className="space-y-2">
                <a href="/privacy" className="block text-gray-400 hover:text-amber-400 transition-colors">Privacy Policy</a>
                <a href="/terms" className="block text-gray-400 hover:text-amber-400 transition-colors">Terms & Conditions</a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-lg">Kontak</h4>
              <div className="space-y-2 text-gray-400">
                <div>📍 Bekasi, Jawa Barat</div>
                <div>📞 082312044648</div>
                <div>✉️ info@aniyah.com</div>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-gray-800" />

          <div className="text-center text-gray-400">
            <p>&copy; 2024 ANIYAH. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}