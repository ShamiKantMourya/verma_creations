import React from "react";

import Address from "@components/Address"
import ContactForm from "@components/ContactForm"
import Footer from "@components/Footer"
import Header from "@components/Header"
import ScrollBackToTop from "@components/ScrollBackToTop";
import Services from "@components/Services";

const App: React.FC = () => {

  return (
    <div className="flex flex-col">
      <Header />
      <ScrollBackToTop />
      <Services />
      <ContactForm />
      <Address />
      <Footer />
    </div>
  )
}

export default App
