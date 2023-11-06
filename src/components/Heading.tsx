import React from 'react'
type HeadingProps = {
  children: string;
}
function Heading({ children }: HeadingProps) {
  return (
    <div className='h-[46px] bg-[#CCE0FE] flex items-center'>
      <h1 className='font-sst text-[26px] font-[700] px-[16px]'>
        {children}
      </h1>
    </div>

  )
}

export default Heading
