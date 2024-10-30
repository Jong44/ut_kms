import { ChevronDownIcons } from "../../assets/icons"

const DetailMataKuliahDosen = () => {
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
    </main>
  )
}

export default DetailMataKuliahDosen