import { useEffect, useState } from "react";
import AllTab from "../components/pages/resultpage/tab/AllTab";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router";

const  Result = () => {
  const { query } = useParams<{ query: string }>();
  const tabMenu = [
    "Semua",
    "Gambar",
    "Video",
    "Berita",
  ];
  const [tabIndex, setTabIndex] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setTabIndex(index);
  }

   const { data, loading } = useFetch<any>(`/dosen/aktivitas-perkuliahan-tuton`);
   const [sortedData, setSortedData] = useState<any>(data);

   useEffect(() => {
       if (data) {
            // mengurutkan data berdasarkan nama dimana nama yang mengandung query akan diletakkan di atas
            const sorted = data.sort((a: any, b: any) => {
                const aName = a.nama.toLowerCase();
                const bName = b.nama.toLowerCase();
                const queryLower = query?.toLowerCase();
                if (aName.includes(queryLower) && !bName.includes(queryLower)) {
                    return -1;
                } else if (!aName.includes(queryLower) && bName.includes(queryLower)) {
                    return 1;
                } else {
                    return 0;
                }
            });
            setSortedData(sorted);
            console.log(sorted);
        }
    }, [data, query]);


  return (
    <main>
      
    </main>
  )
}

export default Result