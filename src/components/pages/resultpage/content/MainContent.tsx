
interface MainContentProps {
  title: string,
  content: string,
  url: string,
  path: string
}

const MainContent: React.FC<MainContentProps> = ({ title, content, url, path }) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <p className="text-sm text-[#595959] font-medium">{url}</p>
      <a href={path}>
        <h4 className="text-xl text-primary cursor-pointer hover:underline">{title}</h4>
      </a>
      <p className="text-[#595959]">{content}</p>
    </div>
  )
}

export default MainContent