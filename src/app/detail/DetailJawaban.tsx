import React from 'react'
import { FilePrimaryIcons, PdfIcons } from '../../assets/icons'

const DetailJawaban = () => {
    return (
        <main className="px-44 py-10 max-md:px-10">
            <section>
                <h4 className="text-2xl">Sistem Hukum Indonesia</h4>
                <p className="text-[#595959]">Dr. Mohamad Yunus, S.S.,M.A.</p>
                <p className="text-[#595959]">ISIP3131 - 2 SKS</p>
            </section>
            <section className="mt-10 flex flex-col gap-5">
                <div className="">

                    <div className="flex gap-4 mt-2">
                        <img src={FilePrimaryIcons} alt="file-primary" className="w-8 h-8" />
                        <p className="font-primary text-lg font-semibold">Penugasan</p>
                    </div>
                    <div className="p-5">
                        <p className="font-medium text-sm">Tugas 1 - HTML</p>
                        <p className="text-[#595959] text-sm">Membuat halaman web sederhana menggunakan HTML</p>
                        <p className="text-[#595959] text-xs underline cursor-pointer mt-3">1 Lampiran</p>
                    </div>

                </div>
            </section>
            <section className="mt-10">
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
        </main>
    )
}

export default DetailJawaban