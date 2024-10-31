import { useEffect } from "react";
import useFetch from "../../hooks/useFetch"; // Ensure you have this hook implemented
import TableData from "../../components/TableData";
import { useNavigate, useParams } from "react-router";

function TutorialTatapMuka() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const headerTTM = [
        { label: "Kode", width: "20%" },
        { label: "Mata Kuliah" },
        { label: "SKS", textAlign: "text-right" },
    ];

    // Fetch data from the endpoint
    const { data, loading } = useFetch<any>(`/dosen/aktivitas-perkuliahan-ttm`);

    // Log the first item for debugging purposes
    useEffect(() => {
        if (data) {
            console.log("ttm",data[Number(id!)]);
        }
    }, [data]);

    // Show loading skeletons while fetching data
    if (loading) {
        return (
            <TableData
                title="Tutorial Tatap Muka"
                placeholderSearch="Cari mata kuliah"
                headerData={headerTTM}
                loading={true}
                bodyData={[]}
            />
        );
    }

    // If no data is returned, handle it
    if (!data || data.length === 0) {
        return (
            <TableData
                title="Tutorial Tatap Muka"
                placeholderSearch="Cari mata kuliah"
                headerData={headerTTM}
                bodyData={[]}
            />
        );
    }

    return (
        <div className="mt-10">
            <TableData
                title="Tutorial Tatap Muka"
                placeholderSearch="Cari mata kuliah"
                headerData={headerTTM}
                bodyData={
                    data[Number(id!)]?.mata_kuliah?.map((item: any) => ({
                        onClick: () => navigate(`/detail/dosen/${id}/mata-kuliah/${item.kode}`), // Adjust based on your data structure
                        data: [
                            { data: "dummy" },
                            { data: item.nama, isBold: true }, // Adjust based on your data structure
                            { data: "dummy", textAlign: "text-right" },
                        ],
                    }))
                }
            />
        </div>
    );
}

export default TutorialTatapMuka;
