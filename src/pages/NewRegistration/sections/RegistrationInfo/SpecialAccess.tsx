import React from 'react'
import { SA_TYPE } from '../../../../data/mockup';
import PickList from '../../../../components/MarkR/PickList'
import DateField from '../../../../components/MarkR/DateField'
import Input from '../../../../components/MarkR/Input';
import clsx from 'clsx';
type SpecialAccessProps = {
  className?: string;
}

function SpecialAccess({ className }: SpecialAccessProps) {
  return (
    <section className={clsx('grid grid-cols-5 grid-rows-2 gap-[10px]', className)}>
      <PickList title='SA Type' placeholder='Select SA Type' data={SA_TYPE} />
      <DateField title='SA Submission Date' />
      <DateField title='SA Approval Date' />
      <DateField title='SA Expiry Date' />
      <Input label='SA Approval Number' placeholder='OTHER Upload file' />
      <Input label='SA Fee' placeholder='Enter SA Fee' type='number' />
    </section>
  )
}

export default SpecialAccess
