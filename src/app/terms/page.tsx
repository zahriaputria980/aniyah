'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, FileText, AlertCircle, CheckCircle, Scale } from 'lucide-react';
import Link from 'next/link';

export default function TermsAndConditions() {
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
            <FileText className="w-8 h-8 text-amber-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Syarat & Ketentuan <span className="text-amber-600">ANIYAH</span>
          </h1>
          <p className="text-xl text-gray-600">
            Aturan dan ketentuan penggunaan layanan kami
          </p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <Card className="p-6">
            <CardContent className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <AlertCircle className="w-6 h-6 mr-3 text-amber-600" />
                Penerimaan Syarat dan Ketentuan
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Selamat datang di ANIYAH. Syarat dan Ketentuan ini mengatur penggunaan layanan, 
                website, dan produk yang ditawarkan oleh ANIYAH. Dengan mengakses atau menggunakan 
                layanan kami, Anda setuju untuk terikat oleh syarat dan ketentuan ini.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Jika Anda tidak setuju dengan bagian mana pun dari syarat dan ketentuan ini, 
                Anda tidak boleh menggunakan layanan kami atau mengakses website kami.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="text-amber-800 font-medium">
                  <strong>Penting:</strong> Syarat dan ketentuan ini berlaku mulai tanggal {new Date().toLocaleDateString('id-ID', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Company Information */}
          <Card className="p-6">
            <CardContent className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Informasi Perusahaan</h2>
              <div className="space-y-2 text-gray-700">
                <p><strong>Nama Perusahaan:</strong> ANIYAH</p>
                <p><strong>Alamat:</strong> KP TENGGILIS, Desa/Kelurahan Lambangsari, Kec. Tambun Selatan, Kab. Bekasi, Provinsi Jawa Barat</p>
                <p><strong>Kode Pos:</strong> 17510</p>
                <p><strong>Telepon:</strong> 082312044648</p>
                <p><strong>Email:</strong> info@aniyah.com</p>
                <p><strong>Bidang Usaha:</strong> Industri dan perdagangan beras</p>
              </div>
            </CardContent>
          </Card>

          {/* Products and Services */}
          <Card className="p-6">
            <CardContent className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <CheckCircle className="w-6 h-6 mr-3 text-amber-600" />
                Produk dan Layanan
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Produk yang Ditawarkan</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Beras Premium ANIYAH</li>
                    <li>Beras Organik ANIYAH</li>
                    <li>Beras Kualitas Ekonomis</li>
                    <li>Produk beras lainnya sesuai ketersediaan</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Kualitas Produk</h3>
                  <p className="text-gray-700">
                    Kami berkomitmen untuk menyediakan produk beras berkualitas tinggi yang memenuhi 
                    standar keamanan pangan yang berlaku di Indonesia. Semua produk kami telah melalui 
                    proses quality control yang ketat.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Ketersediaan Produk</h3>
                  <p className="text-gray-700">
                    Ketersediaan produk dapat berubah sewaktu-waktu tergantung pada musim panen dan 
                    kondisi pasar. Kami berhak untuk membatasi jumlah pembelian untuk produk tertentu.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Ordering and Payment */}
          <Card className="p-6">
            <CardContent className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Pemesanan dan Pembayaran</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Proses Pemesanan</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Pemesanan dapat dilakukan melalui telepon, WhatsApp, atau email</li>
                    <li>Konfirmasi pesanan akan dikirimkan melalui WhatsApp atau email</li>
                    <li>Pesanan akan diproses setelah pembayaran dikonfirmasi</li>
                    <li>Waktu pemrosesan pesanan: 1-2 hari kerja</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Metode Pembayaran</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Transfer bank (BCA, Mandiri, BNI, BRI)</li>
                    <li>E-wallet (OVO, GoPay, Dana)</li>
                    <li>Pembayaran tunai (untuk pengambilan langsung)</li>
                    <li>Pembayaran COD (khusus area tertentu)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Harga</h3>
                  <p className="text-gray-700">
                    Harga yang tercantum dapat berubah sewaktu-waktu tanpa pemberitahuan terlebih dahulu. 
                    Harga yang berlaku adalah harga pada saat pemesanan. Kami berhak untuk menyesuaikan 
                    harga karena perubahan biaya bahan baku, inflasi, atau faktor ekonomi lainnya.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Delivery */}
          <Card className="p-6">
            <CardContent className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Pengiriman</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Area Pengiriman</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Bekasi dan sekitarnya: Same day delivery</li>
                    <li>Jakarta: 1-2 hari kerja</li>
                    <li>Luar Jabodetabek: 2-5 hari kerja</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Biaya Pengiriman</h3>
                  <p className="text-gray-700">
                    Biaya pengiriman ditentukan berdasarkan jarak dan berat produk. 
                    Gratis ongkir untuk pembelian minimal Rp 500.000 (area Bekasi saja).
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Resiko Pengiriman</h3>
                  <p className="text-gray-700">
                    Resiko pengiriman beralih kepada pembeli setelah produk diserahkan kepada jasa pengiriman. 
                    Kami akan membantu proses klaim jika terjadi kerusakan atau kehilangan selama pengiriman.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Returns and Refunds */}
          <Card className="p-6">
            <CardContent className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Pengembalian dan Pengembalian Dana</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Kebijakan Pengembalian</h3>
                  <p className="text-gray-700 mb-2">
                    Pengembalian produk dapat dilakukan jika:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Produk rusak saat diterima</li>
                    <li>Produk tidak sesuai dengan pesanan</li>
                    <li>Produk kedaluwarsa</li>
                    <li>Terjadi kontaminasi pada produk</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Prosedur Pengembalian</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Laporkan masalah maksimal 24 jam setelah penerimaan</li>
                    <li>Sertakan foto/video produk yang bermasalah</li>
                    <li>Kami akan melakukan verifikasi dalam 1x24 jam</li>
                    <li>Penggantian atau pengembalian dana akan diproses setelah verifikasi</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Pengecualian</h3>
                  <p className="text-gray-700">
                    Pengembalian tidak berlaku untuk:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Kerusakan yang disebabkan oleh kesalahan penyimpanan pembeli</li>
                    <li>Produk yang sudah dibuka atau dikonsumsi sebagian</li>
                    <li>Keluhan yang dilaporkan setelah 24 jam penerimaan</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card className="p-6">
            <CardContent className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <Scale className="w-6 h-6 mr-3 text-amber-600" />
                Hak Kekayaan Intelektual
              </h2>
              <p className="text-gray-700 mb-4">
                Semua hak kekayaan intelektual terkait dengan website, logo, nama merek, dan konten 
                ANIYAH adalah milik PT ANIYAH atau pemberi lisensi kami. Ini termasuk namun tidak terbatas pada:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Nama merek "ANIYAH"</li>
                <li>Logo dan desain grafis</li>
                <li>Konten website (teks, gambar, video)</li>
                <li>Desain kemasan produk</li>
                <li>Informasi produk dan spesifikasi</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Dilarang keras menggunakan, menyalin, mereproduksi, atau mendistribusikan materi milik ANIYAH 
                tanpa izin tertulis dari kami.
              </p>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card className="p-6">
            <CardContent className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Pembatasan Tanggung Jawab</h2>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Sejauh diizinkan oleh hukum yang berlaku, ANIYAH tidak bertanggung jawab atas:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Kerugian tidak langsung, insidental, atau konsekuensial</li>
                  <li>Kehilangan keuntungan atau peluang bisnis</li>
                  <li>Kerusakan data atau sistem komputer</li>
                  <li>Gangguan layanan karena force majeure</li>
                </ul>
                <p className="text-gray-700">
                  Tanggung jawab maksimal kami terbatas pada nilai pembelian produk yang menjadi sengketa.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Privacy */}
          <Card className="p-6">
            <CardContent className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Privasi</h2>
              <p className="text-gray-700">
                Privasi Anda sangat penting bagi kami. Penggunaan data pribadi Anda diatur dalam 
                Kebijakan Privasi ANIYAH yang terpisah. Dengan menggunakan layanan kami, Anda setuju 
                dengan pengumpulan dan penggunaan data sesuai dengan kebijakan privasi kami.
              </p>
              <p className="text-gray-700">
                Untuk informasi lebih lengkap tentang bagaimana kami melindungi data Anda, 
                silakan baca Kebijakan Privasi kami di halaman terpisah.
              </p>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card className="p-6">
            <CardContent className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Pengakhiran</h2>
              <p className="text-gray-700 mb-4">
                Kami berhak untuk:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Menghentikan atau menangguhkan akses Anda ke layanan kami</li>
                <li>Membatalkan pesanan jika diperlukan</li>
                <li>Memodifikasi atau menghentikan layanan sewaktu-waktu</li>
              </ul>
              <p className="text-gray-700">
                Penghentian akun atau layanan akan dilakukan jika Anda melanggar syarat dan ketentuan ini 
                atau terlibat dalam aktivitas yang merugikan ANIYAH atau pelanggan lain.
              </p>
            </CardContent>
          </Card>

          {/* Governing Law */}
          <Card className="p-6">
            <CardContent className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Hukum yang Berlaku</h2>
              <p className="text-gray-700">
                Syarat dan ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia. 
                Setiap sengketa yang timbul dari atau berhubungan dengan syarat dan ketentuan ini akan 
                diselesaikan melalui negosiasi terlebih dahulu. Jika tidak mencapai kesepakatan, sengketa 
                akan diselesaikan melalui pengadilan yang berwenang di Bekasi, Jawa Barat.
              </p>
            </CardContent>
          </Card>

          {/* Changes to Terms */}
          <Card className="p-6">
            <CardContent className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Perubahan Syarat dan Ketentuan</h2>
              <p className="text-gray-700">
                Kami berhak untuk mengubah syarat dan ketentuan ini sewaktu-waktu. Perubahan akan 
                diberlakukan segera setelah dipublikasikan di website kami. Kami akan memberitahukan 
                perubahan signifikan melalui email atau pemberitahuan di website.
              </p>
              <p className="text-gray-700">
                Penggunaan layanan kami setelah perubahan berarti Anda menerima syarat dan ketentuan yang telah diperbarui.
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="p-6 bg-gradient-to-br from-amber-50 to-white border-amber-200">
            <CardContent className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Hubungi Kami</h2>
              <p className="text-gray-700 mb-4">
                Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> legal@aniyah.com</p>
                <p><strong>Telepon:</strong> 082312044648</p>
                <p><strong>Alamat:</strong> KP TENGGILIS, Desa/Kelurahan Lambangsari, Kec. Tambun Selatan, Kab. Bekasi, Provinsi Jawa Barat, 17510</p>
              </div>
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