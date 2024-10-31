import { useEffect } from "react";
import useFetch from "../../hooks/useFetch"; // Ensure you have this hook for fetching data
import TableData from "../../components/TableData";
import { useNavigate, useParams } from "react-router";

export default function TutorialOnline() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const headerTuton = [
        { label: "Kode", width: "20%" },
        { label: "Mata Kuliah" },
        { label: "SKS", textAlign: "text-right" },
    ];

    // Fetch data from the new endpoint
    const { data, loading } = useFetch<any>(`/dosen/aktivitas-perkuliahan-tuton`);

    // Optional: Log the first item to check the data structure
    useEffect(() => {
        if (data) {
            console.log("matkul",data[0]);
        }
    }, [data]);

    // Show loading skeletons while fetching data
    if (loading) {
        return (
            <TableData
                title="Tutorial Online"
                placeholderSearch="Cari mata kuliah"
                headerData={headerTuton}
                loading={true}
                bodyData={[]}
            />
        );
    }

    // If no data is returned, handle it
    if (!data || data.length === 0) {
        return (
            <TableData
                title="Tutorial Online"
                placeholderSearch="Cari mata kuliah"
                headerData={headerTuton}
                bodyData={[]}
            />
        );
    }

    return (
        <div className="mt-10">
            <TableData
                title="Tutorial Online"
                placeholderSearch="Cari mata kuliah"
                headerData={headerTuton}
                bodyData={
                    data[Number(id!)]?.mata_kuliah?.map((item: any) => ({
                        onClick: () => navigate(`/detail/dosen/${id}/mata-kuliah/${item.kode}`), // Adjust based on your data structure
                        data: [
                            { data: item.id },
                            { data: item.nama_matkul, isBold: true }, // Adjust based on your data structure
                            { data: item.sks, textAlign: "text-right" },
                        ],
                    }))
                }
            />
        </div>
    );
}
