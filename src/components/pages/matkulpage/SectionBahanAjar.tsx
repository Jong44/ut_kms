import React from "react";
import { FilePrimaryIcons, PdfIcons } from "../../../assets/icons"
import Skeleton from 'react-loading-skeleton';
import { BahanAjar } from "../../../api/res";


interface SectionBahanAjarProps {
    data: BahanAjar[]
}

const SectionBahanAjar: React.FC<SectionBahanAjarProps> = ({
    data
}) => {
    return (
        <div>
            {data ?
                data.map((item) => (
                    <>
                        <div className="flex gap-4">
                            <img
                                src={FilePrimaryIcons}
                                alt="file-primary"
                                className="w-8 h-8"
                            />
                            <p className="font-primary text-lg font-semibold">Bahan Ajar</p>
                        </div>
                        <div className="p-5 flex flex-col gap-5">
                            <div className="flex gap-3">
                                <img src={PdfIcons} alt="file-primary" className="w-5 h-5" />
                                <div>
                                    <p className="font-primary font-semibold text-sm">
                                        {item.nama_bahan}
                                    </p>
                                    <p className="text-[#595959] text-xs">
                                        Diunggah: 10/31/2024
                                    </p>
                                </div>
                            </div>
                        </div>
                    </>
                ))

                : (
                    <Skeleton height={100} />
                )
            }
        </div>
    )
}

export default SectionBahanAjar