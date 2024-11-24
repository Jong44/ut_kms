import { useState } from "react"
import { ChevronDownIcons, FilePrimaryIcons, PdfIcons } from "../../assets/icons"

const DetailMataKuliahDosen = () => {
  const [indexTab, setIndexTab] = useState(0)
  const handleTab = (index: number) => {
    setIndexTab(index)
  }
  return (
    <main className="px-44 py-10 max-md:px-10">
      <section>
        <h4 className="text-2xl">Sistem Hukum Indonesia</h4>
        <p className="text-[#595959]">Dr. Mohamad Yunus, S.S.,M.A.</p>
        <p className="text-[#595959]">ISIP3131 - 2 SKS</p>
      </section>
      <section className="mt-10">
        <div className="flex items-center gap-10 border-[#bfbfbf] border w-max px-4 py-3 rounded-lg">
          <p className="text-[#595959] font-medium">Kelompok 5 (Senin, 08.30 WIB)</p>
          <img src={ChevronDownIcons} alt="chevron-down" className="w-4 h-2" />
        </div>
      </section>
      <section className="mt-10">
        <div className="bg-[#F5F5F5] flex rounded-t-md">
          <p className={`text-sm p-4 cursor-pointer font-semibold ${indexTab == 0 ? 'text-primary border-b' : 'text-[#595959]'}`} onClick={() => handleTab(0)}>Nilai</p>
          <p className={`text-sm p-4 cursor-pointer font-semibold ${indexTab == 1 ? 'text-primary border-b' : 'text-[#595959]'}`} onClick={() => handleTab(1)}>Absensi</p>
        </div>
        <table className="w-full">
          <thead className=" text-primary text-left">
            <tr>
              <th className="py-3 px-5">NIM</th>
              <th className="py-3 px-5 w-[60%]">Nama</th>
              <th className="py-3 px-5 text-right">TA</th>
              <th className="py-3 px-5 text-right">UAS</th>
              <th className="py-3 px-5 text-right">UTS</th>
            </tr>
          </thead>
          <tbody>
            {(new Array(3)).fill(0).map((_, index) => (
              <tr className="text-sm border-b border-[#bfbfbf] hover:bg-[#F5F5F5] cursor-pointer" key={index}>
                <td className="py-3 px-5">A1231231</td>
                <td className="py-3 px-5 w-[60%]">
                  Aprlian Tanjung
                </td>
                <td className="py-3 px-5 text-right">100</td>
                <td className="py-3 px-5 text-right">100</td>
                <td className="py-3 px-5 text-right">100</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section className="mt-10 flex flex-col gap-5">
        {new Array(3).fill(0).map((_, index) => (
          <div key={index}>
            <div className="py-3 px-5 w-full bg-[#F5F5F5] border-l-8 border-primary rounded-l-lg">
              <p className="font-bold">Minggu {index + 1}</p>
            </div>
            <div className="px-6 py-5">
              <div className="flex gap-4">
                <img src={FilePrimaryIcons} alt="file-primary" className="w-8 h-8" />
                <p className="font-primary text-lg font-semibold">Bahan Ajar</p>
              </div>
              <div className="p-5 flex flex-col gap-5">
                <div className="flex gap-3">
                  <img src={PdfIcons} alt="file-primary" className="w-5 h-5" />
                  <div>
                    <p className="font-primary text-lg font-semibold text-sm">Materi 1</p>
                    <p className="text-[#595959] text-xs">Diunggah: 10/31/2024</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <img src={PdfIcons} alt="file-primary" className="w-5 h-5" />
                  <div>
                    <p className="font-primary text-lg font-semibold text-sm">Materi 1</p>
                    <p className="text-[#595959] text-xs">Diunggah: 10/31/2024</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 mt-2">
                <img src={FilePrimaryIcons} alt="file-primary" className="w-8 h-8" />
                <p className="font-primary text-lg font-semibold">Penugasan</p>
              </div>
              <div className="p-5">
                  <p className="font-medium text-sm">Tugas 1 - HTML</p>
                  <p className="text-[#595959] text-sm">Membuat halaman web sederhana menggunakan HTML</p>
                  <p className="text-[#595959] text-xs underline cursor-pointer mt-3">1 Lampiran</p>
                  <div className="flex items-center gap-10  mt-3">
                  <a href="1/jawaban/1" className="bg-[#F5F5F5] px-4 py-2 rounded-lg text-xs">Lihat Jawaban</a>
                  <p className="text-[#595959] text-xs">Tenggat: 10/31/2024</p>
                  </div>
                </div>

            </div>
          </div>
        ))}
      </section>
    </main>
  )
}

export default DetailMataKuliahDosen