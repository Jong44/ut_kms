import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import TableData from "../../components/TableData";
import { useNavigate, useParams } from "react-router";

function Bimbingan() {
    const { id } = useParams<{ id: string }>()

    const navigate = useNavigate();
    const headerBimbingan = [
        { label: "NIM", width: "10%" },
        { label: "Nama" },
    ]
    const { data } = useFetch<any>(`/dosen/bimbingan`);
    useEffect(() => {
        if (data) {
            console.log(data[0]);
        }
    }, [data]);

    if (!data) {
        return (
            <TableData
                title="Bimbingan Skripsi"
                placeholderSearch="Cari mahasiswa"
                headerData={headerBimbingan}
                loading={true}
                bodyData=
                {
                    []
                }
            />
        )
    }

    return (
        <div className="mt-10">
            <TableData
                title="Bimbingan Skripsi"
                placeholderSearch="Cari mahasiswa"
                headerData={headerBimbingan}
                bodyData=
                {
                    data[Number(id)!]?.bimbingan_skripsi?.map((item: any) => ({
                        onClick: () => navigate(`/detail/mahasiswa/${item.mahasiswa.id}`),
                        data: [
                            { data: item.mahasiswa.nim },
                            { data: item.mahasiswa.nama, isBold: true },
                        ],
                    })) || []
                }
            />
        </div>
    )
}

export default Bimbingan