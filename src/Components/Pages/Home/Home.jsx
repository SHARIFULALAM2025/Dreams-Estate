import React from 'react';

import Hero from './Hero';
import HomeFaq from './HomeFaq';
import HomeTestimonial from './HomeTestimonial';

const Home = () => {
    return (
        <div>
            <Hero />
            <HomeTestimonial/>
            <HomeFaq/>
        </div>
    );
};

export default Home;