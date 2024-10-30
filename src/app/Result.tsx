import { useState } from "react";
import AllTab from "../components/pages/resultpage/tab/AllTab";

const Result = () => {
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
        {tabIndex === 0 && <AllTab />}
        {tabIndex === 1 && <p>Tab Gambar</p>}
        {tabIndex === 2 && <p>Tab Video</p>}
        {tabIndex === 3 && <p>Tab Berita</p>}
      </section>
    </main>
  )
}

export default Result