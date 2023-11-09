import clsx from 'clsx';
import React from 'react'
import Input from '../../../../components/MarkR/Input';
type SecondaryInfoProps = {
    className?: string;
}

function SecondaryInfo({ className }: SecondaryInfoProps) {
    return (
        <section className={clsx("grid grid-cols-5 grid-rows-7 gap-[10px]", className)}>
            <div className="border">21</div>
            <div className="border">22</div>
            <div className="border">23</div>
            <div className="border">24</div>
            <div className="border">25</div>
            <div className="border">26</div>
            <div className="border">27</div>
            <div className="border">28</div>
            <div className="border">29</div>
        </section>
    )
}

export default SecondaryInfo
