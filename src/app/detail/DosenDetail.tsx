import { useEffect, useState } from "react";
import CircleProfile from "../../components/CircleProfile";
import { Penelitian, PenelitianPengabdian, Pengabdian, Publikasi } from "../../api/res";
import useFetch from "../../hooks/useFetch";
import Perwalian from "./Perwalian";
import TutorialOnline from "./TutorialOnline";
import TutorialTatapMuka from "./TutorialTatapMuka";
import Bimbingan from "./Bimbingan";
import { useParams } from "react-router-dom";
import Skeleton from 'react-loading-skeleton'; // Import the Skeleton component
import 'react-loading-skeleton/dist/skeleton.css'; // Import the default styles

const DosenDetail = () => {
    const { id } = useParams<{ id: string }>();
    const { data, loading } = useFetch<PenelitianPengabdian[]>(`/dosen/penelitian-pengabdian`);
  

    useEffect(() => {
        if (data) {
            console.log(data)
        }
    }, [data]);

    const menuTabs = ["Publikasi", "Penelitian", "Pengabdian"];
    const [indexTab, setIndexTab] = useState<number>(0);

    const handleTab = (index: number) => {
        setIndexTab(index);
    };

    return (
        <main className="px-20 pb-20 max-md:px-10 max-md:w-auto max-sm:px-5">
            <section className="flex items-center">
                <CircleProfile
                    width="100px"
                    height="100px"
                    src="https://via.placeholder.com/150" />
                <div className="ml-5 text-sm text-[#595959]">
                    {!data ? (
                        <>
                            <Skeleton height={24} width={200} className="mb-2" />
                            <Skeleton height={20} width={150} className="mb-2" />
                            <Skeleton height={20} width={120} />
                        </>
                    ) : (
                        <>
                            <h3 className="text-xl text-[#000]">{data[Number(id)]?.nama}</h3>
                            <p>Universitas Terbuka</p>
                            <p>{data[Number(id)]?.nip} - dosen@gmail.com</p>
                        </>
                    )}
                </div>
            </section>

            <section className="mt-10 flex justify-between max-md:flex-col max-md:gap-10">
                <div className="shadow-[0px_2px_16px_0px_#d3d3d3] rounded-2xl w-[57%] max-md:w-auto">
                    <div className="bg-[#F5F5F5] rounded-t-2xl flex">
                        {menuTabs.map((menu, index) => (
                            <h3
                                className={`font-medium p-4 mx-2 cursor-pointer max-sm:text-sm ${indexTab === index ? 'border-primary border-b-2 text-primary' : 'text-[#000]'}`}
                                key={index}
                                onClick={() => handleTab(index)}
                            >
                                {menu}
                            </h3>
                        ))}
                    </div>

                    {/* Conditional Rendering based on active tab */}
                    {indexTab === 0 && (
                        <div>
                            {!data ? (
                                Array(3).fill(0).map((_, index) => (
                                    <div className="py-5 mx-5 border-b border-[#bfbfbf]" key={index}>
                                        <Skeleton height={24} width={300} className="mb-2" />
                                        <Skeleton height={20} width={250} />
                                    </div>
                                ))
                            ) : (
                                data[Number(id)].publikasi?.map((pub, index) => (
                                    <div className="py-5 mx-5 border-b border-[#bfbfbf]" key={index}>
                                        <h3 className="text-primary text-ellipsis mb-1 cursor-pointer hover:underline">{pub.judul}</h3>
                                        <p className="text-sm text-[#595959]">M. Yunus, Y Ernik</p>
                                        <p className="text-sm text-[#595959]">{pub.jurnal}</p>
                                        <p className="text-sm text-[#595959]">{pub.tahun}</p>
                                    </div>
                                ))
                            )}
                            <div className="flex justify-center items-center py-5 text-sm text-[#595959]">
                                <p>Artikel 1 - 3</p>
                                <button className="mx-5 bg-white border-[#595959] border px-3 py-1 rounded-md">Lebih Banyak</button>
                            </div>
                        </div>
                    )}

                    {indexTab === 1 && (
                        <div>
                            {!data ? (
                                Array(3).fill(0).map((_, index) => (
                                    <div className="py-5 mx-5 border-b border-[#bfbfbf]" key={index}>
                                        <Skeleton height={24} width={300} className="mb-2" />
                                        <Skeleton height={20} width={250} />
                                    </div>
                                ))
                            ) : (
                                data[Number(id)].penelitian.map((pen, index) => (
                                    <div className="py-5 mx-5 border-b border-[#bfbfbf]" key={index}>
                                        <h3 className="text-primary text-ellipsis mb-1 cursor-pointer hover:underline">{pen.judul}</h3>
                                        <p className="text-sm text-[#595959]">{pen.tahun}</p>
                                    </div>
                                ))
                            )}
                        </div>
                    )}

                    {indexTab === 2 && (
                        <div>
                            {!data ? (
                                Array(3).fill(0).map((_, index) => (
                                    <div className="py-5 mx-5 border-b border-[#bfbfbf]" key={index}>
                                        <Skeleton height={24} width={300} className="mb-2" />
                                        <Skeleton height={20} width={250} />
                                    </div>
                                ))
                            ) : (
                                data[Number(id)].pengabdian.map((peng, index) => (
                                    <div className="py-5 mx-5 border-b border-[#bfbfbf]" key={index}>
                                        <h3 className="text-primary text-ellipsis mb-1 cursor-pointer hover:underline">{peng.judul}</h3>
                                        <p className="text-sm text-[#595959]">{peng.tahun}</p>
                                    </div>
                                ))
                            )}
                        </div>
                    )}
                </div>

                {/* Perwalian */}
                <div className="w-[40%] max-md:w-auto">
                    <Perwalian />
                    <Bimbingan />
                </div>
            </section>

            <section className="mt-10">
                <div className="w-[57%] max-md:w-auto">
                    <TutorialOnline />
                    <div className="mt-10">
                        <TutorialTatapMuka />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default DosenDetail;
