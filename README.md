# ParkShare: Aplikasi Berbagi Tempat Parkir Berbasis Smart Contract

## Deskripsi Aplikasi
ParkShare adalah aplikasi berbasis smart contract di Internet Computer yang memungkinkan pengguna berbagi dan mengelola tempat parkir dengan aman dan transparan.

## Fitur Utama
1. **Tambah Tempat Parkir**  
   Menambahkan tempat parkir baru dengan lokasi, pemilik, dan status (tersedia atau terisi).

2. **Lihat Semua Tempat Parkir**  
   Mendapatkan daftar semua tempat parkir yang tersedia di platform.

3. **Perbarui Status Tempat Parkir**  
   Memperbarui status tempat parkir dari "available" ke "occupied" atau sebaliknya.

4. **Hapus Tempat Parkir**  
   Menghapus data tempat parkir tertentu.

## Endpoint API
| Metode | Endpoint            | Deskripsi                          |
|--------|---------------------|-----------------------------------|
| POST   | `/parkspots`        | Menambahkan tempat parkir baru     |
| GET    | `/parkspots`        | Mengambil semua tempat parkir      |
| GET    | `/parkspots/:id`    | Mengambil tempat parkir berdasarkan ID |
| PUT    | `/parkspots/:id`    | Memperbarui status tempat parkir   |
| DELETE | `/parkspots/:id`    | Menghapus tempat parkir            |

## Teknologi yang Digunakan
- **Node.js** dan **Express**: Backend untuk API server.
- **Azle**: Framework untuk mengembangkan canister di Internet Computer (IC).
- **UUID**: Menghasilkan ID unik untuk tempat parkir.
- **StableBTreeMap**: Struktur data persisten untuk menyimpan data.

## Cara Kerja Singkat
1. Pemilik parkir menambahkan tempat parkir melalui API.
2. Setiap tempat parkir memiliki ID unik, lokasi, dan status.
3. Tempat parkir dapat diperbarui statusnya (tersedia atau terisi).
4. Data disimpan secara aman di blockchain menggunakan StableBTreeMap.

## Manfaat Aplikasi
- **Transparansi**: Semua data tercatat di blockchain.
- **Keamanan**: Data aman dan tidak dapat diubah sembarangan.
- **Efisiensi**: Manajemen tempat parkir lebih mudah dan cepat.

---
*ParkShare membantu Anda berbagi tempat parkir dengan aman dan transparan di era digital!*
