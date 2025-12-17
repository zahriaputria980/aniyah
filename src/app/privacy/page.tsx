'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Shield, Eye, Lock, Database } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicy() {
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
            
            <Link href="/">
              <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Kembali ke Beranda
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
            <Shield className="w-8 h-8 text-amber-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Kebijakan Privasi <span className="text-amber-600">ANIYAH</span>
          </h1>
          <p className="text-xl text-gray-600">
            Perlindungan data dan privasi Anda adalah prioritas kami
          </p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <Card className="p-6">
            <CardContent className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <Eye className="w-6 h-6 mr-3 text-amber-600" />
                Pendahuluan
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Selamat datang di ANIYAH. Kami sangat menghargai privasi Anda dan berkomitmen untuk melindungi 
                data pribadi yang Anda percayakan kepada kami. Kebijakan Privasi ini menjelaskan bagaimana kami 
                mengumpulkan, menggunakan, melindungi, dan membagikan informasi pribadi Anda ketika Anda menggunakan 
                layanan kami.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Dengan menggunakan layanan ANIYAH, Anda setuju dengan praktik-praktik yang dijelaskan dalam 
                kebijakan ini. Jika Anda tidak setuju dengan praktik kami, mohon jangan gunakan layanan kami.
              </p>
            </CardContent>
          </Card>

          {/* Data Collection */}
          <Card className="p-6">
            <CardContent className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <Database className="w-6 h-6 mr-3 text-amber-600" />
                Informasi yang Kami Kumpulkan
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Informasi Pribadi</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Nama lengkap</li>
                    <li>Nomor telepon</li>
                    <li>Alamat email</li>
                    <li>Alamat pengiriman</li>
                    <li>Informasi pembayaran</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Informasi Penggunaan</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Riwayat pembelian</li>
                    <li>Preferensi produk</li>
                    <li>Data lokasi (jika diizinkan)</li>
                    <li>Informasi perangkat dan browser</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Usage */}
          <Card className="p-6">
            <CardContent className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <Lock className="w-6 h-6 mr-3 text-amber-600" />
                Penggunaan Informasi
              </h2>
              <p className="text-gray-700 mb-4">
                Kami menggunakan informasi yang dikumpulkan untuk:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Memproses dan menyelesaikan transaksi pembelian</li>
                <li>Memberikan layanan pelanggan yang lebih baik</li>
                <li>Mengirimkan informasi produk dan promosi yang relevan</li>
                <li>Meningkatkan kualitas produk dan layanan kami</li>
                <li>Memproses pengembalian dan garansi</li>
                <li>Menjalankan program loyalitas pelanggan</li>
                <li>Mematuhi kewajiban hukum dan peraturan</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Protection */}
          <Card className="p-6">
            <CardContent className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <Shield className="w-6 h-6 mr-3 text-amber-600" />
                Keamanan Data
              </h2>
              <p className="text-gray-700 mb-4">
                ANIYAH berkomitmen untuk melindungi keamanan data pribadi Anda dengan:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Enkripsi data saat transmisi dan penyimpanan</li>
                <li>Akses terbatas ke informasi pribadi</li>
                <li>Sistem keamanan berlapis untuk melindungi dari akses tidak sah</li>
                <li>Audit keamanan berkala</li>
                <li>Pelatihan staf tentang perlindungan data</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Namun, perlu diingat bahwa tidak ada metode transmisi internet atau penyimpanan elektronik 
                yang 100% aman. Kami tidak dapat menjamin keamanan absolut data Anda.
              </p>
            </CardContent>
          </Card>

          {/* Data Sharing */}
          <Card className="p-6">
            <CardContent className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Pembagian Informasi</h2>
              <p className="text-gray-700 mb-4">
                Kami tidak menjual, menyewakan, atau membagikan informasi pribadi Anda dengan pihak ketiga, 
                kecuali dalam kondisi berikut:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Dengan persetujuan eksplisit dari Anda</li>
                <li>Untuk memproses pembayaran (mitra pembayaran terpercaya)</li>
                <li>Untuk pengiriman produk (jasa kurir)</li>
                <li>Untuk mematuhi hukum atau perintah pengadilan</li>
                <li>Untuk melindungi hak, properti, atau keselamatan ANIYAH atau pelanggan kami</li>
              </ul>
            </CardContent>
          </Card>

          {/* User Rights */}
          <Card className="p-6">
            <CardContent className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Hak Anda sebagai Pengguna</h2>
              <p className="text-gray-700 mb-4">
                Sebagai pengguna, Anda memiliki hak untuk:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Mengakses dan memperbarui informasi pribadi Anda</li>
                <li>Minta penghapusan data pribadi Anda</li>
                <li>Menolak pemasaran langsung dari kami</li>
                <li>Membatasi penggunaan data pribadi Anda</li>
                <li>Meminta salinan data pribadi yang kami simpan</li>
                <li>Mengelola preferensi cookie</li>
              </ul>
            </CardContent>
          </Card>

          {/* Cookies */}
          <Card className="p-6">
            <CardContent className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Kebijakan Cookie</h2>
              <p className="text-gray-700 mb-4">
                Kami menggunakan cookie untuk meningkatkan pengalaman pengguna Anda:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Cookie esensial untuk fungsi dasar website</li>
                <li>Cookie analitis untuk memahami penggunaan website</li>
                <li>Cookie pemasaran untuk menampilkan konten relevan</li>
                <li>Cookie preferensi untuk mengingat pengaturan Anda</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Anda dapat mengelola preferensi cookie melalui pengaturan browser Anda.
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="p-6 bg-gradient-to-br from-amber-50 to-white border-amber-200">
            <CardContent className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Hubungi Kami</h2>
              <p className="text-gray-700 mb-4">
                Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau perlindungan data di ANIYAH, 
                silakan hubungi kami:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> privacy@aniyah.com</p>
                <p><strong>Telepon:</strong> 082312044648</p>
                <p><strong>Alamat:</strong> KP TENGGILIS, Desa/Kelurahan Lambangsari, Kec. Tambun Selatan, Kab. Bekasi, Provinsi Jawa Barat, 17510</p>
              </div>
            </CardContent>
          </Card>

          {/* Update Info */}
          <Card className="p-6">
            <CardContent className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Pembaruan Kebijakan</h2>
              <p className="text-gray-700">
                Kebijakan Privasi ini dapat diperbarui dari waktu ke waktu untuk mencerminkan perubahan 
                dalam praktik kami atau perubahan hukum yang berlaku. Kami akan memberitahukan Anda 
                tentang perubahan signifikan melalui email atau pemberitahuan di website kami.
              </p>
              <p className="text-gray-700">
                Versi terakhir dari kebijakan ini diperbarui pada: {new Date().toLocaleDateString('id-ID', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 mt-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img src="/logo.png" alt="ANIYAH Logo" className="w-8 h-8 rounded-lg" />
            <span className="text-xl font-bold">ANIYAH</span>
          </div>
          <p className="text-gray-400">
            &copy; 2024 ANIYAH. All rights reserved. | Produsen Beras Terpercaya
          </p>
        </div>
      </footer>
    </div>
  );
}