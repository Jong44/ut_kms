import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import TableData from "../../components/TableData";
import { useNavigate, useParams } from "react-router";

function Perwalian() {
    const { id } = useParams<{ id: string }>()

    const navigate = useNavigate();
    const headerPerwalian = [
        { label: "NIM", width: "10%" },
        { label: "Nama" },
    ]
    const { data } = useFetch<any>(`/dosen/perwalian`);
    useEffect(() => {
        if (data) {
            console.log(data[0]);
        }
    }, [data]);

    if (!data) {
        return (
            <TableData
                title="Perwalian"
                placeholderSearch="Cari mahasiswa"
                headerData={headerPerwalian}
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
                title="Perwalian"
                placeholderSearch="Cari mahasiswa"
                headerData={headerPerwalian}
                bodyData=
                {
                    data[Number(id)!]?.perwalian?.map((item: any) => ({
                        onClick: () => navigate(`/detail/mahasiswa/${item.mahasiswa.id}`),
                        data: [
                            { data: item.nim },
                            { data: item.nama, isBold: true },
                        ],
                    })) || []
                }
            />
        </div>
    )
}

export default Perwalian