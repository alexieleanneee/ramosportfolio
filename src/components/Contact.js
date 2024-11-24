import React from "react";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert("Error: " + error.message));
  }

  return (
    <section id="contact" className="relative bg-pink-500 text-white body-font">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11427.50109028584!2d120.9606890250729!3d14.614380215141292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b5a8cb06b1b0a9%3A0x828ed7d6f040af07!2sSan%20Pascual%2C%20Obando%2C%20Bulacan%2C%20Philippines!5e0!3m2!1sen!2sph!4v1731400000000!5m2!1sen!2sph"
          />
          <div className="bg-gray-900 bg-opacity-80 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                San Pascual <br />
                Obando, Bulacan
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold tracking-widest text-xs">
                EMAIL
              </h2>
              <a
                href="mailto:ramos2105463@ceu.edu.ph"
                className="leading-relaxed text-white underline"
              >
                ramos2105463@ceu.edu.ph
              </a>
              <h2 className="title-font font-semibold tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">127-326-1026</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          {/* Hidden input for Netlify form handling */}
          <input type="hidden" name="form-name" value="contact" />

          <h2 className="sm:text-4xl text-3xl mb-1 font-medium title-font">
            Hire Me
          </h2>
          <p className="leading-relaxed mb-5">
            I am always looking for new opportunities to collaborate on exciting
            projects. Whether you need a creative developer, an IT expert, or a
            passionate problem solver, I'm here to help bring your ideas to
            life. <br />
            Let's create something amazing together! Feel free to drop me a
            message.
          </p>

          {/* Name Input */}
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white-800 rounded border border-gray-700 focus:border-white focus:ring-2 focus:ring-white text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>

          {/* Email Input */}
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white-800 rounded border border-gray-700 focus:border-white focus:ring-2 focus:ring-white text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>

          {/* Message Input */}
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-white-800 rounded border border-gray-700 focus:border-white focus:ring-2 focus:ring-white h-32 text-white py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-white-900 hover:bg-gray-700 text-white py-2 px-6 rounded text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
