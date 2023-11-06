import React from 'react'

type SearchIconProps = {
    className?: string;
}

function SearchIcon({ className }: SearchIconProps) {
    return (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.60453 18.2637C14.4727 18.2637 18.4192 14.3159 18.4192 9.44595C18.4192 4.57603 14.4727 0.628174 9.60453 0.628174C4.73638 0.628174 0.790039 4.57603 0.790039 9.44595C0.790039 14.3159 4.73638 18.2637 9.60453 18.2637Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16.334 15.1349L24.2955 23.0045" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}

export default SearchIcon
