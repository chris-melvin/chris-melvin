"use client";

export default function Contact() {
  return (
    <section className="min-h-screen bg-[#0E192F] py-16" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-8">Get in Touch</h2>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Contact Info */}
            <div className="w-full md:w-1/2">
              <p className="text-gray-300 mb-6">
                I'm always interested in hearing about new projects and
                opportunities. Whether you have a question or just want to say
                hi, feel free to drop me a message!
              </p>

              <div className="space-y-4 text-gray-300">
                <p>📍 Philippines</p>
                <p>📧 melvinfactoriza@gmail.com</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="w-full md:w-1/2">
              <form
                action="https://usebasin.com/f/a83b09cacd91"
                method="POST"
                className=""
              >
                <div>
                  <label className="text-white text-lg" htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    required
                    className="text-black text-lg block my-2 p-2 outline-none focus:outline-primary border border-primary border-solid outline-offset-0 rounded w-full"
                    type="text"
                    name="firstName"
                    id="firstName"
                  />

                  <label className="text-white text-lg" htmlFor="email">
                    Email
                  </label>
                  <input
                    required
                    className="text-black text-lg block my-2 p-2 outline-none focus:outline-primary border border-primary border-solid outline-offset-0 rounded w-full"
                    type="email"
                    name="email"
                    id="email"
                  />

                  <label className="text-white text-lg" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    required
                    className="text-black text-lg block my-2 p-2 outline-none focus:outline-primary border border-primary border-solid outline-offset-0 rounded w-full resize-none h-32"
                    id="message"
                    name="message"
                  />

                  <button
                    className="border-2 mt-4 border-primary border-solid text-primary font-medium rounded py-3 px-7 hover:bg-primary hover:text-background transition-colors duration-300"
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
