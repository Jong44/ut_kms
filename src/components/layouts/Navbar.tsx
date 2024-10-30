



import FileIcons from "../../assets/icons/FileIcons"
import { UTLogo } from "../../assets/images"
import CircleProfile from "../CircleProfile"
import { useEffect, useState } from "react"
import SearchBar from "../SearchBar"


const Navbar = () => {
  const [query, setQuery] = useState<string>('')

  useEffect(() => {
    const location = window.location.pathname;
    if (location.includes('result')) {
      const query = location.split('/')[2] || ''
      setQuery(query)
    }
  }, [])

  return (
    <nav className="px-16 py-7 flex justify-between items-center max-sm:px-10">
      <div className="flex items-center gap-5 w-[55rem] max-md:flex-col max-md:w-full">
        <div className="flex items-center gap-5 max-md:justify-between max-md:w-full">
          <a href="/">
            <img src={UTLogo} alt="Universitas Terbuka" className="" />
          </a>
          <div className="hidden max-md:flex items-center gap-5">
            <FileIcons color="#BFBFBF" width={30} height={25} />
            <CircleProfile
              width="40px"
              height="40px"
              src="https://via.placeholder.com/150"
            />
          </div>
        </div>
        {window.location.pathname.includes('result') && <SearchBar searchValue={query} isActive />}
      </div>
      <div className="flex items-center gap-5 max-md:hidden">
        <FileIcons color="#BFBFBF" width={30} height={25} />
        <CircleProfile
          width="40px"
          height="40px"
          src="https://via.placeholder.com/150"
        />
      </div>
    </nav>
  )
}

export default Navbar