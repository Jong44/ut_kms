
const CircleProfile: React.FC<CircleProfileProps> = ({ src, height, width }) => {
  return (
    <div className={`bg-gray-300 rounded-full flex justify-center items-center bg-gray`} style={{height: `${height}`, width: `${width}`}}>
      <img src={src} alt="Profile" className="w-full h-full rounded-full object-cover" />
    </div>
  )
}

export default CircleProfile