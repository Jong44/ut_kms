import CardFolder from "../components/CardFolder"
import SearchBar from "../components/SearchBar"


const Home = () => {
  return (
    <main className="px-44 py-40 max-md:px-20 max-sm:px-10">
      <h1 className="text-primary font-bold text-4xl text-center mb-6 max-sm:text-3xl">UT Search Engine</h1>
      <div className="px-32 max-md:px-0">
        <SearchBar />
      </div>
      <div className="flex mt-12 text-sm gap-2">
         <p className="font-medium">Tersimpan</p>
         <a href="" className="text-primary">Tampilkan lainnya</a>
      </div>
      <div className="grid grid-cols-4 gap-5 mt-6 max-md:grid-cols-2">
        {...Array(4).fill(0).map((_, index) => (
          <CardFolder key={index} title={`Folder ${index}`} />
        ))}
      </div>
    </main>
  )
}

export default Home