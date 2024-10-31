
// /dosen/penelitian-pengabdian
interface Pengabdian {
    judul: string;
    tahun: number;
  }
  
  interface Publikasi {
    judul: string;
    jurnal: string;
    tahun: number;
  }
  
  interface Penelitian {
    judul: string;
    tahun: number;
  }
  
export interface PenelitianPengabdian {
    id: number;
    nama: string;
    nip: string;
    pengabdian: Pengabdian[];
    publikasi: Publikasi[];
    penelitian: Penelitian[];
  }

//   /dosen/perwalian

export interface MahasiswaPerwalian {
    id: number;
    nama: string;
    nim: string;
  }
  
export interface DosenPerwalian {
    id: number;
    nama: string;
    nip: string;
    perwalian: MahasiswaPerwalian[];
  }


  interface DosenResponse {
    id: number;                          // Unique ID of the advisor
    nama: string;                        // Advisor's name
    nip: string;                         // Advisor's NIP
    bimbingan_skripsi: BimbinganEntry[]; // Thesis supervision records
    bimbingan_kp: BimbinganEntry[];      // Internship supervision records
}

export interface BimbinganEntry {
    mahasiswa: Mahasiswa;                // Student information
    log: SupervisionLog[];               // Supervision logs for the student
}

interface Mahasiswa {
    id: number;                          // Unique ID of the student
    nama: string;                        // Student's name
    nim: string;                         // Student's NIM
}

interface SupervisionLog {
    catatan: string;                     // Note for the supervision session
    tanggal: string;                     // Date of the supervision session
}

export type DosenResponseArray = DosenResponse[];


// aktivitas tuton

interface Mahasiswa {
    id: number;
    nama: string;
    nim: string;
  }
  
  interface Nilai {
    mahasiswa: Mahasiswa;
    nilai_tugas_akhir: number;
    nilai_uts: number;
    nilai_uas: number;
  }
  
  interface Absensi {
    tanggal: string;
    status: "Hadir" | "Tidak Hadir";
  }
  
  interface Jadwal {
    id: number;
    hari: string;
    jam_mulai: string;
    jam_selesai: string;
    mahasiswa: {
      id: number;
      nama: string;
      nim: string;
      absensi: Absensi[];
    }[];
  }
  
  interface BahanAjar {
    nama_bahan: string;
    tipe: string;
  }
  
  interface PengisianTugas {
    mahasiswa: Mahasiswa;
    jawaban: string;
    nilai: number;
    tanggal_pengumpulan: string;
  }
  
  interface Penugasan {
    id: number;
    nama_tugas: string;
    deskripsi: string;
    tenggat: string;
    pengisian: PengisianTugas[];
  }
  
  interface Minggu {
    minggu: number;
    bahan_ajar: BahanAjar[];
    penugasan: Penugasan;
  }
  
  interface Kelompok {
    id: number;
    nama_kelompok: string;
    nilai: Nilai[];
    jadwal: Jadwal[];
    minggu: Minggu[];
  }
  
  interface MataKuliah {
    id: number;
    nama_matkul: string;
    sks: number;
    kelompok: Kelompok[];
  }
  
  interface Dosen {
    id: number;
    nama: string;
    nip: string;
    mata_kuliah: MataKuliah[];
  }
  
