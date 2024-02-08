import React from "react";

import Address from "@components/Address"
import ContactForm from "@components/ContactForm"
import Footer from "@components/Footer"
import Header from "@components/Header"
import ScrollBackToTop from "@components/ScrollBackToTop"

const App: React.FC = () => {

  return (
    <div className="flex flex-col">
      <Header />
      <ScrollBackToTop />
      <ContactForm />
      <Address />
      <Footer />
    </div>
  )
}

export default App
