import { motion } from 'framer-motion';
import { HiLocationMarker, HiMail, HiPhone, HiClock } from 'react-icons/hi';

export const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-custom text-gray-900 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[url('/grid.png')] opacity-5"></div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
        className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"
      />

      {/* Content Container */}
      <div className="container mx-auto px-4 lg:px-6 py-16 lg:py-20 relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-primary via-green-600 to-primary bg-clip-text text-transparent mb-8 tracking-tight leading-[1.1] drop-shadow-sm">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-800 max-w-2xl mx-auto font-medium leading-relaxed tracking-wide">
            Get in touch with us to learn more about our <span className="text-primary font-semibold">research</span>, 
            <span className="text-primary font-semibold"> collaboration opportunities</span>, or to 
            <span className="text-primary font-semibold"> schedule a visit</span>.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="card hover:shadow-2xl transition-all duration-500 bg-white/80 p-8">
              <h2 className="text-2xl lg:text-3xl font-black mb-6 tracking-tight bg-gradient-to-r from-primary to-green-600 bg-clip-text text-transparent drop-shadow-sm">
                Send us a message
              </h2>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-bold text-gray-800 tracking-widest uppercase">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="input font-medium tracking-wide placeholder:text-gray-400 placeholder:font-normal"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="input"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="input resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button type="submit" className="btn btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="card glass-effect p-8">
              <h2 className="text-2xl lg:text-3xl font-black mb-8 tracking-tight bg-gradient-to-r from-primary to-green-600 bg-clip-text text-transparent drop-shadow-sm">
                Contact Information
              </h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-6 group">
                  <span className="text-3xl transform transition-transform group-hover:scale-110 group-hover:rotate-12">
                    <HiLocationMarker className="text-primary/80" />
                  </span>
                  <div>
                    <h3 className="font-extrabold tracking-wide mb-3 text-primary">Address</h3>
                    <p className="text-gray-800 font-medium leading-relaxed tracking-wide">
                      NSUT Hydroponics Lab,<br />
                      Netaji Subhas University of Technology,<br />
                      Sector 3, Dwarka, New Delhi, Delhi 110078
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="text-2xl">
                    <HiMail className="text-primary/80" />
                  </span>
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <a href="mailto:hydroponics@nsut.ac.in" className="text-primary hover:text-primary/80 font-medium">
                      hydroponics@nsut.ac.in
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="text-2xl">
                    <HiPhone className="text-primary/80" />
                  </span>
                  <div>
                    <h3 className="font-bold">Phone</h3>
                    <a href="tel:+911234567890" className="text-primary hover:text-primary/80 font-medium">
                      +91 123 456 7890
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <motion.div 
              className="card p-8"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center space-x-3 mb-8">
                <HiClock className="text-3xl text-primary/80" />
                <h2 className="text-3xl font-extrabold tracking-tight">Operating Hours</h2>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-800 font-medium">Monday - Friday</span>
                  <span className="font-bold tracking-wide">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-800 font-medium">Saturday</span>
                  <span className="font-bold">10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-800 font-medium">Sunday</span>
                  <span className="font-bold">Closed</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
