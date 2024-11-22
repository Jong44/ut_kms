import { useEffect, useState } from "react";
import AllTab from "../components/pages/resultpage/tab/AllTab";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router";

const Result = () => {
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
      <section>
        <div className="flex px-72 max-md:px-10">
          {tabMenu.map((menu, index) => (
            <div className={`px-4 py-1 font-medium ${tabIndex === index ? 'border-b-4 border-primary' : ''}`} key={index}>
              <p className={`text-sm cursor-pointer ${tabIndex === index ? 'text-primary' : 'text-[#bfbfbf]'}`} onClick={() => handleTabClick(index)}>{menu}</p>
            </div>
          ))}
        </div>
        <hr className="border-b-1 border-[#bfbfbf]" />
      </section>
      <section className="w-[55rem] pl-72 py-4 max-md:px-10 max-md:w-auto">
        {tabIndex === 0 && <AllTab  data={sortedData} loading={loading}/>}
        {tabIndex === 1 && <p>Tab Gambar</p>}
        {tabIndex === 2 && <p>Tab Video</p>}
        {tabIndex === 3 && <p>Tab Berita</p>}
      </section>
    </main>
  )
}

export default Result