import React from 'react';

import Header from '@components/Header';
import Footer from '@components/Footer';
import Address from '@components/Address';
import ContactForm from '@components/ContactForm';
import Content from '@components/Content';
import ScrollBackToTop from '@components/ScrollBackToTop';
import Services from '@components/Services';

const Homepage: React.FC = () => {
    return (
        <div>
            <Header />
            <ScrollBackToTop />
            <Content />
            <Services />
            <ContactForm />
            <Address />
            <Footer />
        </div>
    )
}

export default Homepage;