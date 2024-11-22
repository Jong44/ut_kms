
import CardTag from "../../../CardTag"
import MainContent from "../content/MainContent"

interface AllTabProps { 
  data: any,
  loading: boolean
}

const AllTab: React.FC<AllTabProps> = ({ data, loading }) => {
  const dataTag = [
    "Dosen",
    "Mahasiswa",
    "Mata Kuliah",
    "Kelas",
  ]
  return (
    <>
      <div className="flex gap-3 cursor-pointer">
        {dataTag.map((tag, index) => (
          <CardTag key={index} tag={tag} />
        ))}
      </div>
      <div className="flex flex-col gap-5 mt-5">
        {loading && <p>Loading...</p>}
        {data && data.map((item: any, index: number) => (
          <MainContent
            key={index}
            title={item.nama ?? "No Title"}
            content="Vice Rector I – Dr. Mohamad Yunus, S.S., M.A.. Education. Dr. from Indonesia Education University. M.A. from Ohio State University, Ohio."
            url="http://www.google.com > dosen"
            path={`/detail/dosen/${item.id}`}
          />
        ))}
      </div>
    </>
  )
}

export default AllTab