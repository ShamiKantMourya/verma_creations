const Address = () => {
  return (
    <address className="flex flex-col justify-center h-screen px-12 pb-12">
      <div>
        <h1 className="flex justify-center text-slate-100 text-3xl text-center font-bold py-12 bg-gradient-to-r from-cyan-500 to-red-500 bg-clip-text text-transparent tab:text-4xl">
          WANT TO WORK WITH US
        </h1>
      </div>
      <section className="grid grid-cols-2 mobile:grid-cols-1 tab:grid-cols-1 place-items-center">
        <div className="col-start-1">
          <h2 className="text-lg text-slate-100 flex justify-center font-semibold py-6 tab:text-2xl">
            CONTACT US
          </h2>
          <p className="text-slate-100 flex justify-center tab:text-2xl">
            (+91) phone number
          </p>
          <p className="text-slate-100 flex justify-center py-3 tab:text-2xl">Email id</p>
          <p className="text-slate-100 flex justify-center text-center break-words pb-6 tab:text-2xl">
          📍 Block A, Vishwakarma Colony, Pul Pehaladpur, New Delhi, 110044
          </p>
        </div>
        <div className="lg:col-start-2 mobile:col-start-1 place-items-center tab:h-96 tab:w-4/5">
          <iframe
          className="lg:h-96 lg:w-96 mobile:w-80 mobile:h-72 rounded-md tab:w-full tab:h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.262689776535!2d77.2848467!3d28.501743299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1908781c223%3A0x69c9de4ef3d8501f!2sVerma%20Creations!5e0!3m2!1sen!2sin!4v1710995464417!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </address>
  );
};

export default Address;
