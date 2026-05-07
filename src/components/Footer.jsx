import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
     <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">OmniBooks</h2>
          <p className="mt-3 text-sm">
            Discover, borrow, and enjoy your favorite books anytime.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/books">Browse Books</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div className="text-center">
                    <h3 className="text-[#FFFFFF] font-semibold mb-5 text-center text-lg">Social Links</h3>
                    <div className="flex justify-center items-center gap-6 pt-3 text-xl text-white">
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaFacebook /></a>
                        <a href="#"><FaXTwitter /></a>
                    </div>
                </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-3">Stay Updated</h3>
          <p className="text-sm mb-3">Get new book updates</p>
          <div className="flex flex-col">
            <input
              type="email"
              placeholder="Your email"
              className="w-3/4 mb-2 px-3 py-2 rounded-md text-white"
            />
            <button className="bg-blue-600 px-2 w-3/4 py-1 rounded-md text-white hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 py-4 text-center text-sm">
        © {new Date().getFullYear()} OmniBooks. All rights reserved.
      </div>
      
    </footer>
    );
};

export default Footer;