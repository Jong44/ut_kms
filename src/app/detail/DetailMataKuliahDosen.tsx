import { useEffect, useState } from "react";
import {
  CheckIcons,
  ChevronDownIcons,
} from "../../assets/icons";
import SectionWeekMatkul from "../../components/pages/matkulpage/SectionWeekMatkul";
import useFetch from "../../hooks/useFetch";
import Skeleton from "react-loading-skeleton";

const DetailMataKuliahDosen = () => {
  const { data } = useFetch<any>('/dosen/aktivitas-perkuliahan-tuton')
  let result = data ? data[0] : null;
  useEffect(() => {
    if (data) {
      result = data[0];
      console.log(data[0]);
    }
  }, [data]);
  const [indexTab, setIndexTab] = useState(0);
  const handleTab = (index: number) => {
    setIndexTab(index);
  };

  return (
    <main className="px-44 py-10 max-md:px-10">
      <section>
        <h4 className="text-2xl">{result ? result?.mata_kuliah[0].nama_matkul : <Skeleton width={200} height={20} />}</h4>
        <p className="text-[#595959]">{result ? result?.nama : <Skeleton width={100} height={20} />}</p>
        <p className="text-[#595959]">ISIP3131 - 2 SKS</p>
      </section>
      <section className="mt-10">
        <div className="flex items-center gap-10 border-[#bfbfbf] border w-max px-4 py-3 rounded-lg">
          <p className="text-[#595959] font-medium">
            Kelompok 5 (Senin, 08.30 WIB)
          </p>
          <img src={ChevronDownIcons} alt="chevron-down" className="w-4 h-2" />
        </div>
      </section>
      <section className="mt-10">
        <div className="bg-[#F5F5F5] flex rounded-t-md">
          <p
            className={`text-sm p-4 cursor-pointer font-semibold ${indexTab == 0 ? "text-primary border-b-2" : "text-[#595959]"
              }`}
            onClick={() => handleTab(0)}
          >
            Nilai
          </p>
          <p
            className={`text-sm p-4 cursor-pointer font-semibold ${indexTab == 1 ? "text-primary border-b-2" : "text-[#595959]"
              }`}
            onClick={() => handleTab(1)}
          >
            Absensi
          </p>
        </div>
        <table className="w-full">
          <thead className=" text-primary text-left">
            <tr>
              <th className="py-3 px-5 w-[10%] max-md:w-auto">NIM</th>
              <th className="py-3 px-5 w-[60%] max-md:w-auto">Nama</th>
              {indexTab == 0 ? (
                <>
                  <th className="py-3 px-5 text-right">TA</th>
                  <th className="py-3 px-5 text-right">UAS</th>
                  <th className="py-3 px-5 text-right">UTS</th>
                </>
              ) : (
                <>
                  <td className="py-3 px-5 text-right">1</td>
                  <td className="py-3 px-5 text-right">2</td>
                  <td className="py-3 px-5 text-right">3</td>
                  <td className="py-3 px-5 text-right">4</td>
                  <td className="py-3 px-5 text-right">5</td>
                  <td className="py-3 px-5 text-right">6</td>
                  <td className="py-3 px-5 text-right">7</td>
                </>
              )}
            </tr>
          </thead>
          <tbody>
            {indexTab == 0
              ? new Array(3).fill(0).map((_, index) => (
                <tr
                  className="text-sm border-b border-[#bfbfbf] hover:bg-[#F5F5F5] cursor-pointer"
                  key={index}
                >
                  <td className="py-3 px-5">A1231231</td>
                  <td className="py-3 px-5 w-[60%]">Aprlian Tanjung</td>
                  <td className="py-3 px-5 text-right">80</td>
                  <td className="py-3 px-5 text-right">80</td>
                  <td className="py-3 px-5 text-right">80</td>
                </tr>
              ))
              : new Array(3).fill(0).map((_, index) => (
                <tr
                  className="text-sm border-b border-[#bfbfbf] hover:bg-[#F5F5F5] cursor-pointer"
                  key={index}
                >
                  <td className="py-3 px-5">A1231231</td>
                  <td className="py-3 px-5 w-[60%]">Aprlian Tanjung</td>
                  {new Array(7).fill(0).map((_, index) => (
                    <td className="py-3 px-5 text-right" key={index}>
                      <img src={CheckIcons} alt="check-primary" className="w-6 h-6 m-auto" />
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </section>
      <section className="mt-10 flex flex-col gap-5">
        {result ? (
          result?.mata_kuliah.map((matkul: any, ) => (
            matkul.kelompok.map ((kelompok: any, ) => (
             kelompok.minggu.map((minggu: any, mingguIndex: number) => (
              <SectionWeekMatkul
                key={mingguIndex}
                minggu={minggu}
                bahan_ajar={minggu.bahan_ajar}
                penugasan={minggu.penugasan}
              />
             ))
            ))
          ))
        ) : (
          <Skeleton height={100} />
        )
        }

      </section>
    </main>
  );
};

export default DetailMataKuliahDosen;
