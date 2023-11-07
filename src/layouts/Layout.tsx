import React from 'react'
import Header from './Header';

type LayoutProps = {
    children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
    return (
        <React.Fragment>
            <Header />
            <main className='relative top-[-20px] container p-0 shadow-page'>
                {children}
            </main>
        </React.Fragment>
    )
}

export default Layout
