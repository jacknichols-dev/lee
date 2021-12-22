import React from 'react'
import AllBooksCta from '../components/allBooksCta/AllBooksCta'
import { Hero } from '../components/hero/Hero'
import { Latest } from '../components/latest/Latest'
import Testimonials from '../components/testimonials/Testimonials'

const Home = () => {
    return (
        <>
        <Hero />
        <Latest />
        <Testimonials />
        <AllBooksCta />
        </>
    )
}

export default Home
