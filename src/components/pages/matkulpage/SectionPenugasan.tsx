
import React, { useEffect } from 'react'
import { Penugasan } from '../../../api/res'
import { FilePrimaryIcons } from '../../../assets/icons'
import formatDate from '../../../utils/formatDate'

interface SectionPenugasanProps {
    data: Penugasan
}

const SectionPenugasan:React.FC<SectionPenugasanProps> = ({
    data
}) => {
    useEffect(() => {
        console.log(data)
    }, [data])
    return (
        <>
            <div className="flex gap-4 mt-2">
                <img
                    src={FilePrimaryIcons}
                    alt="file-primary"
                    className="w-8 h-8"
                />
                <p className="font-primary font-semibold">Penugasan</p>
            </div>
            <div className="p-5">
                <p className="font-medium text-sm">{data.nama_tugas}</p>
                <p className="text-[#595959] text-sm">
                    {data.deskripsi}
                </p>
                <p className="text-[#595959] text-xs underline cursor-pointer mt-3">
                    1 Lampiran
                </p>
                <div className="flex items-center gap-10  mt-3">
                    <a
                        href="1/jawaban/1"
                        className="bg-[#F5F5F5] px-4 py-2 rounded-lg text-xs"
                    >
                        Lihat Jawaban
                    </a>
                    <p className="text-[#595959] text-xs">Tenggat: {formatDate(data.tenggat)}</p>
                </div>
            </div>
        </>
    )
}

export default SectionPenugasan