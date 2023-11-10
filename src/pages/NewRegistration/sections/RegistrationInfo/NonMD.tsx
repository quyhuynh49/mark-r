import clsx from 'clsx';
import React from 'react'
import DateField from '../../../../components/MarkR/DateField'
import Input from '../../../../components/MarkR/Input';

type NonMDProps = {
    className?: string;
}

function NonMD({ className }: NonMDProps) {
    return (
        <section className={clsx('grid grid-cols-5 grid-rows-1 gap-[10px]', className)}>
            <DateField title='Non-MD Letter Submission Date' />
            <DateField title='Non-MD Letter Approval Date' />
            <DateField title='Non-MD Letter Expiry Date' />
            <Input label='Non-MD Approval Nr.' placeholder='Enter Non-MD Approval Nr.' type='number' />
            <Input label='Non-MD Access Fee' placeholder='Enter Non-MD Access Fee' type='number' />
        </section>
    )
}

export default NonMD
