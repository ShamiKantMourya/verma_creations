import React from 'react';

import Header from "@components/Header";
import Footer from '@components/Footer';
import Address from '@components/Address';
import ContactForm from '@components/ContactForm';
import ScrollBackToTop from '@components/ScrollBackToTop';
import Services from '@components/Services';
import Slider from '@components/Slider/Slider';

const Homepage: React.FC = () => {
    return (
        <div>
            <Header />
            <ScrollBackToTop />
            <Slider />
            <Services />
            <ContactForm />
            <Address />
            <Footer />
        </div>
    )
}

export default Homepage;