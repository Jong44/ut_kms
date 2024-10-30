import React from "react";
import { MoreIcons } from "../assets/icons";
import FileIcons from "../assets/icons/FileIcons";

interface CardFolderProps {
  title: string
}

const CardFolder:React.FC<CardFolderProps> = ({ title }) => {
  return (
    <div className="flex items-center justify-between bg-gray p-4 rounded-lg">
        <div className="flex items-center gap-3">
          <FileIcons color="#262626" width={25} height={20} />
          <p className="text-center text-sm font-medium">{title}</p>
        </div>
        <img src={MoreIcons} alt="More Icons" />
    </div>
  )
}

export default CardFolder