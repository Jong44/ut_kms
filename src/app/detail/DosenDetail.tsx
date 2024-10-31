import { useState } from "react"
import CircleProfile from "../../components/CircleProfile"
import { useNavigate, useParams } from "react-router"
import TableData from "../../components/TableData"

const DosenDetail = () => {
    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()
    const menuTabs = [
        "Publikasi",
        "Penelitian",
        "Pengabdian",
    ]

    const headerPerwalian = [
        { label: "NIM", width: "10%" },
        { label: "Nama" },
    ]

    const headerBimbingan = [
        { label: "NIM", width: "10%" },
        { label: "Nama" },
    ]

    const headerTuton = [
        { label: "Kode", width: "20%" },
        { label: "Mata Kuliah" },
        { label: "SKS", textAlign: "text-right" },
    ]

    const headerTTM = [
        { label: "Kode", width: "20%" },
        { label: "Mata Kuliah" },
        { label: "SKS", textAlign: "text-right" },
    ]

    const [indexTab, setIndexTab] = useState<number>(0)

    const handleTab = (index: number) => {
        setIndexTab(index)
    }

    const handlePushDetailMataKuliah = (idMataKuliah: string) => {
        navigate(`/detail/dosen/${id}/mata-kuliah/${idMataKuliah}`)
    }

    return (
        <main className="px-20 pb-20 max-md:px-10 max-md:w-auto max-sm:px-5">
            <section className="flex items-center">
                <CircleProfile
                    width="100px"
                    height="100px"
                    src="https://via.placeholder.com/150" />
                <div className="ml-5 text-sm text-[#595959]">
                    <h3 className="text-xl text-[#000]">Nama Dosen</h3>
                    <p>Universitas Terbuka</p>
                    <p>80231356 - dosen@gmail.com</p>
                </div>
            </section>
            <section className=" mt-10 flex justify-between max-md:flex-col max-md:gap-10">
                <div className="shadow-[0px_2px_16px_0px_#d3d3d3] rounded-2xl w-[57%] max-md:w-auto">
                    <div className="bg-[#F5F5F5] rounded-t-2xl flex">
                        {menuTabs.map((menu, index) => (
                            <h3 className={` font-medium p-4 mx-2 cursor-pointer max-sm:text-sm ${indexTab === index ? 'border-primary border-b-2 text-primary' : 'text-[#000]'}"`} key={index} onClick={() => handleTab(index)}>{menu}</h3>
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
                </div>
                <div className="w-[40%] max-md:w-auto">
                    <TableData
                        title="Perwalian"
                        placeholderSearch="Cari mahasiswa"
                        headerData={headerPerwalian}
                        bodyData=
                        {
                            [
                                {
                                    onClick: () => navigate(`/detail/mahasiswa/1`),
                                    data: [
                                        { data: "A1231231" },
                                        { data: "Aprlian Tanjung", isBold: true },
                                    ]
                                },
                            ]
                        }
                    />
                    <div className="mt-10">
                        <TableData
                            title="Bimbingan Skripsi"
                            placeholderSearch="Cari mahasiswa"
                            headerData={headerBimbingan}
                            bodyData=
                            {
                                [
                                    {
                                        onClick: () => navigate(`/detail/mahasiswa/1`),
                                        data: [
                                            { data: "A1231231" },
                                            { data: "Aprlian Tanjung", isBold: true },
                                        ]
                                    },
                                ]
                            }
                        />
                    </div>
                </div>
            </section>
            <section className="mt-10">
                <div className="w-[57%] max-md:w-auto">
                    <TableData
                        title="Tutorial Online"
                        placeholderSearch="Cari mata kuliah"
                        headerData={headerTuton}
                        bodyData=
                        {
                            [
                                {
                                    onClick: () => handlePushDetailMataKuliah("1"),
                                    data: [
                                        { data: "123456" },
                                        { data: "Mata Kuliah 1" },
                                        { data: "3", textAlign: "text-right" },
                                    ]
                                },
                                {
                                    onClick: () => handlePushDetailMataKuliah("2"),
                                    data: [
                                        { data: "123457" },
                                        { data: "Mata Kuliah 2" },
                                        { data: "3", textAlign: "text-right" },
                                    ]
                                },
                                {
                                    onClick: () => handlePushDetailMataKuliah("3"),
                                    data: [
                                        { data: "123458" },
                                        { data: "Mata Kuliah 3" },
                                        { data: "3", textAlign: "text-right" },
                                    ]
                                },
                            ]
                        }
                    />
                    <div className="mt-10">
                        <TableData
                            title="Tutorial Tatap Muka"
                            placeholderSearch="Cari mata kuliah"
                            headerData={headerTTM}
                            bodyData=
                            {
                                [
                                    {
                                        onClick: () => handlePushDetailMataKuliah("1"),
                                        data: [
                                            { data: "123456" },
                                            { data: "Mata Kuliah 1" },
                                            { data: "3", textAlign: "text-right" },
                                        ]
                                    },
                                    {
                                        onClick: () => handlePushDetailMataKuliah("2"),
                                        data: [
                                            { data: "123457" },
                                            { data: "Mata Kuliah 2" },
                                            { data: "3", textAlign: "text-right" },
                                        ]
                                    },
                                    {
                                        onClick: () => handlePushDetailMataKuliah("3"),
                                        data: [
                                            { data: "123458" },
                                            { data: "Mata Kuliah 3" },
                                            { data: "3", textAlign: "text-right" },
                                        ]
                                    },
                                ]
                            }
                        />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default DosenDetail