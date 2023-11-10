import clsx from 'clsx';
import React from 'react'

type InputProps = {
    label: string;
    placeholder: string;
    className?: string;
    variant?: 'main' | 'secondary';
    type?: 'number' | 'text';
}

export default function Input({ label, placeholder, className, variant, type }: InputProps) {

    const labelStyles = 'text-[14px] text-[#003C71] font-sst font-[700] flex';

    const inputBaseStyles = clsx(
        'w-full focus:outline-none placeholder:text-[16px] font-sst placeholder:font-[500]',
        MAPPING_INPUT_BASE_STYLE_DEFAULT[variant || 'main'],
    );

    const inputStyles = clsx(
        'w-full h-full p-[10px] rounded-[15px]',
        MAPPING_INPUT_WRAPPER_STYLE_DEFAULT[variant || 'main'],
        className,
    )

    return (
        <div className={inputStyles}>
            <label className={labelStyles} htmlFor={label}>{label.toUpperCase()}</label>
            <input className={inputBaseStyles} id={label} type={type || "text"} placeholder={placeholder} />
        </div>
    )
}

const MAPPING_INPUT_WRAPPER_STYLE_DEFAULT: { [key: string]: string } = {
    main: 'bg-[#F2F7FF]',
    secondary: 'bg-[#F2F2F2]'
}

const MAPPING_INPUT_BASE_STYLE_DEFAULT: { [key: string]: string } = {
    main: 'bg-[#F2F7FF] placeholder:text-[#9AC2FE]',
    secondary: 'bg-[#F2F2F2] placeholder:text-[#CCCCCC]'
}
