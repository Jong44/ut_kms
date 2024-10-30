import { useEffect, useRef, useState } from "react"
import { SearchIcons, XIcons } from "../assets/icons"

interface SearchBarProps {
  searchValue?: string
  isActive?: boolean
}

const SearchBar: React.FC<SearchBarProps> = ({ searchValue, isActive }) => {
  const [search, setSearch] = useState<string>('')
  const [isFocus, setIsFocus] = useState<boolean>(false)
  const ref = useRef<HTMLInputElement>(null)
  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsFocus(false)
    }
  };
  useEffect(() => {
    const decode = decodeURIComponent(searchValue || '')
    setSearch(decode)
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchValue])
  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 0) {
      setIsFocus(true)
    } else {
      setIsFocus(false)
    }
    setSearch(e.target.value)
  }
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    window.location.pathname = `/result/${search}`
  }
  const handlePush = (value:string) => {
    window.location.pathname = `/result/${value}`
  }

  return (
    <div className='rounded-full bg-gray-200 px-5 py-1 border flex items-center gap-3 flex-1 text-sm relative'>
      {isActive !== true && <img src={SearchIcons} alt='Search' />}
      <form onSubmit={onSubmit} className="w-full">
        <input type='text' placeholder='Cari Knowlage System' className='w-full max-sm:text-xs py-2' onChange={(onSearch)} value={search} />
      </form>
      {isActive === true && <div className="flex gap-3 items-center">
        <img src={XIcons} alt='Close' width={15} height={15} className="cursor-pointer" onClick={() => setSearch('')} />
        <p className='text-sm text-[#BFBFBF]'>|</p>
        <img src={SearchIcons} alt='Search' width={20} height={20} />
      </div>}
      {isFocus && <div className='absolute bg-white -inset-2 shadow-[0px_2px_16px_0px_#d3d3d3] rounded-2xl h-[17rem]' ref={ref}>
        <div className="flex gap-5 px-4 py-3 border-b border-[#bfbfbf]">
          <form onSubmit={onSubmit} className="w-full">
            <input type='text' placeholder='Cari Knowlage System' className='w-full max-sm:text-xs py-2' onChange={(onSearch)} value={search} />
          </form>
        </div>
        <div className="flex flex-col">
          {(new Array(4)).fill(0).map((_, index) => (
            <div className="px-4 py-3 flex gap-3 items-center cursor-pointer hover:bg-blue-light" key={index} onClick={() => handlePush("Dr. Mohamad Yunus, S.S.,M.A.")}>
              <img src={SearchIcons} alt='Search' />
              <p className='text-sm'>Dr. Mohamad Yunus, S.S.,M.A.</p>
            </div>
          ))}
        </div>
      </div>
      }
    </div>
  )
}

export default SearchBar