import { useState } from "react"
import CircleProfile from "../../components/CircleProfile"
import { useNavigate, useParams } from "react-router"

const DosenDetail = () => {
    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()
    const menuTabs = [
        "Publikasi",
        "Penelitian",
        "Pengabdian",
    ]

    const [indexTab, setIndexTab] = useState<number>(0)
    const handleTab = (index: number) => {
        setIndexTab(index)
    }
    const handlePushDetailMataKuliah = (idMataKuliah: string) => {
        navigate(`/detail/dosen/${id}/mata-kuliah/${idMataKuliah}`)
    }

    return (
        <main className="px-48 w-[70%] pb-20 max-md:px-10 max-md:w-auto">
            <section className="flex items-center">
                <CircleProfile
                    width="100px"
                    height="100px"
                    src="https://via.placeholder.com/150"/>
                <div className="ml-5 text-sm text-[#595959]">
                    <h3 className="text-xl text-[#000]">Nama Dosen</h3>
                    <p>Universitas Terbuka</p>
                    <p>80231356 - dosen@gmail.com</p>
                </div>
            </section>
            <section className="shadow-[0px_2px_16px_0px_#d3d3d3] mt-10 rounded-2xl">
                <div className="bg-[#F5F5F5] rounded-t-2xl flex">
                    {menuTabs.map((menu, index) => (
                        <h3 className={` font-medium p-4 mx-2 cursor-pointer ${indexTab === index ? 'border-primary border-b-2 text-primary' : 'text-[#000]'}"`} key={index} onClick={() => handleTab(index)}>{menu}</h3>
                    ))}
                </div>
                {(new Array(3)).fill(0).map((_, index) => (
                    <div className="py-5 mx-5 border-b border-[#bfbfbf]" key={index}>
                        <h3 className="text-primary text-ellipsis mb-1 cursor-pointer hover:underline">The Challenges of Open and Distance Learning in Managing Practicums/Practical Courses during the Covid-19 Pandemic: Universitas Terbuka Case Study</h3>
                        <p className="text-sm text-[#595959]">M. Yunus, Y Ernik</p>
                        <p className="text-sm text-[#595959]">ASEAN Journal of Open and Distance Learning, 48-59</p>
                        <p className="text-sm text-[#595959]">Cited by 62</p>
                    </div>
                ))}
                <div className="flex justify-center items-center py-5 text-sm text-[#595959]">
                    <p>Artikel 1 - 3</p>
                    <button className="mx-5 bg-white border-[#595959] border  px-3 py-1 rounded-md">Lebih Banyak</button>
                </div>
            </section>
            <section className="shadow-[0px_2px_16px_0px_#d3d3d3] mt-10 rounded-2xl">
                <div className="bg-primary rounded-t-2xl flex items-center justify-between px-5 py-4">
                    <h3 className=" font-medium text-white">Mata Kuliah</h3>
                    <input type="text" placeholder="Cari Mata Kuliah" className="bg-[#F5F5F5] text-sm px-4 py-2 rounded-xl w-[40%] " />
                </div>
                <div>
                    <table className="w-full">
                        <thead className=" text-primary text-left">
                            <tr>
                                <th className="py-3 px-5 w-[20%]">Kode</th>
                                <th className="py-3 px-5">Mata Kuliah</th>
                                <th className="py-3 px-5 text-right">SKS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(new Array(3)).fill(0).map((_, index) => (
                                <tr className="text-sm border-b border-[#bfbfbf] hover:bg-[#F5F5F5] cursor-pointer" key={index} onClick={() => handlePushDetailMataKuliah('ISIP1312')}>
                                    <td className="py-3 px-5 w-[20%]">ISIP1312</td>
                                    <td className="py-3 px-5 font-semibold">
                                        Sistem Hukum Indonesia
                                    </td>
                                    <td className="py-3 px-5 text-right">2</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="flex justify-center items-center py-5 text-xs text-[#595959]">
                        <div className="flex gap-2">
                            <p>1</p>
                            <p>2</p>
                            <p>3</p>
                            <p>4</p>
                            <p>5</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default DosenDetail