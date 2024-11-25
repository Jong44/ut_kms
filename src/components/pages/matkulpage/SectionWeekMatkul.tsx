import React from "react"
import SectionBahanAjar from "./SectionBahanAjar"
import SectionPenugasan from "./SectionPenugasan"
import { BahanAjar, Minggu, Penugasan } from "../../../api/res"
import Skeleton from "react-loading-skeleton"

interface SectionWeekMatkulProps {
    minggu: Minggu,
    bahan_ajar: BahanAjar[],
    penugasan: Penugasan
}

const SectionWeekMatkul:React.FC<SectionWeekMatkulProps> = ({minggu, bahan_ajar, penugasan}) => {
    return (
        <div>
            <div className="py-3 px-5 w-full bg-[#F5F5F5] border-l-8 border-primary rounded-l-lg">
                {minggu ? (
                    <p className="font-bold">Minggu {minggu.minggu} </p>
                ) : (
                    <Skeleton width={100} height={20} />
                )}
            </div>
            <div className="px-6 py-5">
                <SectionBahanAjar data={bahan_ajar}  />
                <SectionPenugasan data={penugasan} />
            </div>
        </div>
    )
}

export default SectionWeekMatkul