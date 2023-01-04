import React from "react";

const Contact = () => {
  return (
    <div className="lg:pt-52 2xl:pt-56">
      <div className="flex">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1401.484130475399!2d106.8067545824225!3d-6.522220680237036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c3db9bbedcc3%3A0x1f5280e86053b1e9!2sSMK%20N%201%20Cibinong!5e0!3m2!1sen!2sid!4v1672636259221!5m2!1sen!2sid"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="w-full h-[90vh] lg:w-[85%] xl:w-[85%] 2xl:w-[80%] lg:h-[350px] xl:h-[450px] 2xl:h-[550px] grayscale"
        ></iframe>

        <div className="hidden lg:grid-cols-4 lg:grid lg:font-semibold lg:gap-11 xl:gap-20 2xl:gap-28 lg:-mt-10 lg:-ml-[300px] xl:-ml-[400px] 2xl:-ml-[500px] lg:z-0 lg:uppercase lg:text-7xl lg:text-background/80">
          <h1 className="text-background/50">L</h1>
          <h1 className="text-background/50">E</h1>
          <h1 className="text-background/50">T'</h1>
          <h1 className="text-background/50">S</h1>
          <h1 className="text-background/80">W</h1>
          <h1 className="text-background/80">O</h1>
          <h1 className="text-background/80">R</h1>
          <h1 className="text-background">K</h1>
          <h1 className="text-background/60">T</h1>
          <h1 className="text-background/60">O</h1>
          <h1 className="text-background/60">G</h1>
          <h1 className="text-background/60">E</h1>
          <h1 className="text-background/50">T</h1>
          <h1 className="text-background/50">H</h1>
          <h1 className="text-background/50">E</h1>
          <h1 className="text-background/50">R</h1>
        </div>
      </div>
      <div className="py-20 2xl:py-24">
        <form className="grid grid-cols-1 gap-8 p-2 mx-4 mb-32 md:mx-8 md:grid-cols-2 lg:mx-20 xl:mx-32 2xl:mx-40">
          <div className="mb-10 text-3xl font-semibold md:text-4xl md:col-span-2 text-background/90 2xl:text-5xl">
            <div className="mb-4 text-base font-light tracking-widest text-gray-500 uppercase">
              contact
            </div>
            Love to hear from you, Get in touch
          </div>
          <div className="md:col-start-1">
            <label className="text-background" forInput="name">
              Your Name
            </label>
            <input
              className="w-full p-4 text-sm bg-gray-100 border-none rounded-md focus:ring-0"
              name="name"
              id="name"
              placeholder="What's your name?"
            />
          </div>
          <div className="">
            <label className="text-background" forInput="email">
              Your email
            </label>
            <input
              className="w-full p-4 text-sm bg-gray-100 border-none rounded-md focus:ring-0"
              type="email"
              name="email"
              id="email"
              placeholder="What's your email address?"
            />
          </div>
          <div className="md:col-span-2">
            <label className="text-background" forInput="phone">
              Phone
            </label>
            <input
              className="w-full p-4 text-sm bg-gray-100 border-none rounded-md focus:ring-0"
              placeholder="What's your phone number?"
            />
          </div>
          <div className="md:col-span-2">
            <label className="text-background" forInput="message">
              Message
            </label>
            <textarea
              id="message"
              rows="8"
              className="block w-full p-4 text-sm bg-gray-100 border-none rounded-md text-background focus:ring-0 focus:border-none"
              placeholder="Your message..."
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-6 py-3 mt-5 font-medium transition duration-300 border-none rounded-md text-semibold text-softWhite bg-background focus:ring-0"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
