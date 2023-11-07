import clsx from 'clsx';
import React from 'react'
type HeadingProps = {
  children: string;
  className?: string;
}
function Heading({ children, className }: HeadingProps) {
  return (
    <div className={clsx('h-[46px] bg-[#CCE0FE] flex items-center', className)}>
      <h1 className='font-sst text-[26px] font-[700] px-[16px]'>
        {children}
      </h1>
    </div>

  )
}

export default Heading
