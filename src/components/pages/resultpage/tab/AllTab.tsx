import CardTag from "../../../CardTag"
import MainContent from "../content/MainContent"

const AllTab = () => {
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
        {[1, 2, 3].map((_, index) => (
          <MainContent
            key={index}
            title="Vice Rector I - Dr. Mohamad Yunus, S.S.,M.A."
            content="Vice Rector I – Dr. Mohamad Yunus, S.S., M.A.. Education. Dr. from Indonesia Education University. M.A. from Ohio State University, Ohio."
            url="http://www.google.com > dosen"
            path="/detail/dosen/1"
          />
        ))}
      </div>
    </>
  )
}

export default AllTab