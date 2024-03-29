import React from 'react';

import Header from '@components/Header';
import ScrollBackToTop from '@components/ScrollBackToTop';
import GalleryLayout from '@components/layout-grid';
import Footer from '@components/Footer';

const Gallery: React.FC = () => {
  return (
    <>
      <Header />
      <ScrollBackToTop />
      <GalleryLayout />
      <Footer />
    </>
  )
};

export default Gallery;
