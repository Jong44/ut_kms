interface FileIconsProps {
   color: string,
    width: number,
    height: number
}

const FileIcons: React.FC<FileIconsProps> = ({ color, width, height }) => {
    return (
        <svg width={width} height={height} viewBox={`0 0 30 25`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_4_381)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0.849976H3C1.35 0.849976 0 2.19998 0 3.84998V21.85C0 23.5 1.35 24.85 3 24.85H27C28.65 24.85 30 23.5 30 21.85V6.84998C30 5.19998 28.65 3.84998 27 3.84998H15L12 0.849976Z" fill={color} />
            </g>
            <defs>
                <clipPath id="clip0_4_381">
                    <rect width={width} height={height} fill="white" transform="translate(0 0.849976)" />
                </clipPath>
            </defs>
        </svg>

    )
}

export default FileIcons