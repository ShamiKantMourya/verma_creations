// import ScrollBackToTop from "@components/ScrollBackToTop";

import Address from "@components/Address"
import ContactForm from "@components/ContactForm"
import Footer from "@components/Footer"
import Header from "@components/Header"

function App() {

  return (
    <div className="flex flex-col">
      <Header />
      {/* <ScrollBackToTop /> */}
      <ContactForm />
      <Address />
      <Footer />
    </div>
  )
}

export default App
