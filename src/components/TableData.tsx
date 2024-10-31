import React from "react";
import Skeleton from 'react-loading-skeleton'; // Import the Skeleton component
import 'react-loading-skeleton/dist/skeleton.css'; // Import the default styles

interface HeaderData {
    label: string;
    width?: string;
    textAlign?: string;
    isBold?: boolean;
}

interface Data {
    data: string;
    width?: string;
    textAlign?: string;
    isBold?: boolean;
    onClick?: () => void;
}

interface BodyData {
    onClick?: () => void;
    data: Data[];
}

interface TableDataProps {
    title: string;
    headerData: HeaderData[];
    bodyData: BodyData[];
    placeholderSearch?: string;
    loading?: boolean; // Add loading prop
}

const TableData: React.FC<TableDataProps> = ({
    title,
    headerData,
    bodyData,
    placeholderSearch = "Cari data...",
    loading = false, // Default to false
}) => {
    const [filteredData, setFilteredData] = React.useState(bodyData);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value === '') {
            setFilteredData(bodyData);
        } else {
            const filtered = bodyData.filter((data) => {
                return data.data.some((item) => item.data.toLowerCase().includes(value.toLowerCase()));
            });
            setFilteredData(filtered);
        }
    };

    return (
        <div className="shadow-[0px_2px_16px_0px_#d3d3d3] rounded-2xl">
            <div className="bg-primary rounded-t-2xl flex items-center justify-between px-5 py-4">
                <h3 className="font-medium text-white">{title}</h3>
                <input
                    type="text"
                    placeholder={placeholderSearch}
                    className="bg-[#F5F5F5] text-sm px-4 py-2 rounded-xl w-[40%]"
                    onChange={handleSearch}
                />
            </div>
            <div>
                {loading ? (
                    <div className="p-5">
                        {/* Skeleton for header */}
                        <div className="flex mb-3">
                            {headerData.map((_, index) => (
                                <Skeleton key={index} height={24} width={150} className="mr-2" />
                            ))}
                        </div>
                        {/* Skeleton for body rows */}
                        {Array(5).fill(0).map((_, index) => (
                            <div key={index} className="flex mb-3">
                                {headerData.map((_, colIndex) => (
                                    <Skeleton key={colIndex} height={20} width={150} className="mr-2" />
                                ))}
                            </div>
                        ))}
                    </div>
                ) : (
                    <table className="w-full">
                        <thead className="text-primary text-left">
                            <tr>
                                {headerData.map((header, index) => (
                                    <th
                                        key={index}
                                        className={`py-3 px-5 ${header.width ? `w-[${header.width}]` : ''} ${header.textAlign ? header.textAlign : ''} ${header.isBold ? 'font-bold' : ''}`}
                                    >
                                        {header.label}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.length > 0 ? filteredData.map((body, index) => (
                                <tr
                                    key={index}
                                    onClick={body.onClick}
                                    className="border-b border-[#bfbfbf] hover:bg-[#F5F5F5] cursor-pointer"
                                >
                                    {body.data.map((data, index) => (
                                        <td
                                            key={index}
                                            className={`py-3 px-5 ${data.width ? `w-[${data.width}]` : ''} ${data.textAlign ? data.textAlign : ''} ${data.isBold ? 'font-bold' : ''}`}
                                        >
                                            {data.data}
                                        </td>
                                    ))}
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan={headerData.length} className="text-center py-5">Data tidak ditemukan</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                )}
                <div className="flex justify-center items-center py-5 text-xs text-[#595959]">
                    <div className="flex gap-2">
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                        <p>4</p>
                        <p>5</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TableData;
