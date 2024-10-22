import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const ContactDetails = () => {
  return (
    <section id="contact" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-5xl font-bold text-center mb-12">Contact Me</h2>

        <div className="flex flex-col md:flex-row md:space-x-10 items-center">
          {/* Image Section */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0 flex justify-center">
            <img 
              src="/Images/contact.png" 
              alt="Contact" 
              className="rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-105"
            />
          </div>

          {/* Contact Details Section */}
          <div className="flex flex-col md:flex-row gap-8 w-full h-full justify-center items-center">
            {/* Email */}
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex items-center space-x-4 transition-transform duration-300 transform hover:scale-105">
              <FaEnvelope className="text-3xl text-blue-500" />
              <div>
                <h3 className="text-xl font-semibold">Email</h3>
                <p className="text-gray-400">rksahu7352@gmail.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex items-center space-x-4 transition-transform duration-300 transform hover:scale-105">
              <FaPhoneAlt className="text-3xl text-blue-500" />
              <div>
                <h3 className="text-xl font-semibold">Phone</h3>
                <p className="text-gray-400">+91 8340714346</p>
              </div>
            </div>

            {/* Address */}
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex items-center space-x-4 transition-transform duration-300 transform hover:scale-105">
              <FaMapMarkerAlt className="text-3xl text-blue-500" />
              <div>
                <h3 className="text-xl font-semibold">Address</h3>
                <p className="text-gray-400">Mullana, Ambala, Haryana, 133207</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
