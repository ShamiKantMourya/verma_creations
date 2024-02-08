
const ContactForm = () => {
  return (
    <div className="flex justify-center w-full h-auto mt-20 bg-gray-700">
      <div className="flex flex-col justify-evenly px-8 bg-black my-10">
        <p className="flex justify-center text-slate-100  font-bold text-xl mt-16">REACH OUT VIA THE FORM BELOW</p>
        <input type="text" placeholder="Full Name" className="bg-transparent mb-4 mt-8 text-slate-100 outline-none border-b-2"/>
        <input type="text" placeholder="Email" className="bg-transparent my-4 text-slate-100 outline-none border-b-2"/>
        <input className="bg-transparent my-4 text-slate-100 outline-none border-b-2" type="number" placeholder="Phone Number" minLength={10} required/>
        <button className="flex items-center justify-center border-slate-100 h-10 p-2 text-slate-100 my-5 border-2 w-32 mb-20">SUBMIT FORM</button>
      </div>
    </div>
  )
}

export default ContactForm;