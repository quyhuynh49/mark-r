import React from 'react'
import Header from './Header';

type LayoutProps = {
    children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
    return (
        <React.Fragment>
            <Header />
            <main className='relative top-[-20px] container'>
                <div className='shadow-page'>
                    {children}
                </div>
            </main>
        </React.Fragment>
    )
}

export default Layout
