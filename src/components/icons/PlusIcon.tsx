import React from 'react'
type PlusIconProps = {
    className?: string;
}

function PlusIcon({ className }: PlusIconProps) {
    return (
        <svg className={className} width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 48.4972C37.2548 48.4972 48 37.7533 48 24.5C48 11.2467 37.2548 0.502686 24 0.502686C10.7451 0.502686 0 11.2467 0 24.5C0 37.7533 10.7451 48.4972 24 48.4972Z" fill="#9AC2FE" />
            <path d="M12.8003 24.5002H35.3003" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M24.0002 35.7984V13.301" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

export default PlusIcon
