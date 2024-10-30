import React from 'react'

interface CardTagProps {
    tag: string
}

const CardTag:React.FC<CardTagProps> = ({tag}) => {
  return (
    <div className="border border-[#bfbfbf] py-2 px-4 rounded-lg">
        <p className="text-sm text-[#595959]  max-md:text-xs">{tag}</p>
    </div>
  )
}

export default CardTag