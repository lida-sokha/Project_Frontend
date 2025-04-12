import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';

function ContactUs() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Have questions or need assistance? We're here to help! Reach out through any of the channels below.
        </p>
      </div>

      {/* Contact Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {/* Location Card */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="text-blue-600 mb-4">
            <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Our Store</h3>
          <p className="text-gray-600">123 Tech Street<br />Phnom Penh, Cambodia</p>
        </div>

        {/* Phone Card */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="text-blue-600 mb-4">
            <FontAwesomeIcon icon={faPhone} size="2x" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Call Us</h3>
          <p className="text-gray-600">
            <a href="tel:+855123456789" className="hover:text-blue-600">+855 12 345 6789</a><br />
            <a href="tel:+855987654321" className="hover:text-blue-600">+855 98 765 4321</a>
          </p>
        </div>

        {/* Email Card */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="text-blue-600 mb-4">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Email Us</h3>
          <p className="text-gray-600">
            <a href="mailto:support@techstore.com" className="hover:text-blue-600">support@techstore.com</a><br />
            <a href="mailto:sales@techstore.com" className="hover:text-blue-600">sales@techstore.com</a>
          </p>
        </div>

        {/* Hours Card */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="text-blue-600 mb-4">
            <FontAwesomeIcon icon={faClock} size="2x" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Opening Hours</h3>
          <p className="text-gray-600">
            Mon-Fri: 8:00 AM - 8:00 PM<br />
            Sat-Sun: 9:00 AM - 6:00 PM
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="your@email.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
            <input
              type="text"
              id="subject"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="How can we help?"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              id="message"
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your message here..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Map Section */}
      <div className="mt-12 rounded-lg overflow-hidden shadow-md">
        <iframe
          title="Store Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3909.0139082838576!2d104.8808949141225!3d11.550859591798579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951add5e2cd81%3A0x171e0b69c7c6f7ba!2sPhnom%20Penh!5e0!3m2!1sen!2skh!4v1620000000000!5m2!1sen!2skh"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactUs;