import React from 'react'
import { Link } from 'react-router-dom'
import Heading from '../components/Heading'

function Home() {
    return (
        <React.Fragment>
            <Heading>Home</Heading>
            <Link to='/home/registration-database'>registration database</Link>
        </React.Fragment>
    )
}

export default Home