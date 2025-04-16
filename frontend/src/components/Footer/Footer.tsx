import React from "react";

const Footer = () => {
  const custm = [
    "FAQ",
    "Shipping Policy",
    "Refund Policy",
    "Cancellation Policy",
    "Privacy Policy",
    "Terms of Service",
    "Contact Information",
    "Wild forest honey certificate",
    "Dark Forest Honey Certificate",
  ];

  return (
    <footer className="w-full bg-[#F8C027] px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10">
        {/* Newsletter */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Sign up to our newsletter</h2>
          {/* Optional: Add an email input & button */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg w-full sm:w-auto"
            />
            <button className="bg-black text-white px-6 py-2 rounded-lg">Subscribe</button>
          </div>
        </div>

        {/* Customer Care */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4">Customer Care</h2>
          <ul>
            {custm.map((item, index) => (
              <li key={index} className="text-lg mt-3 list-none">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4">Contact Info</h2>
          <ul>
            {custm.map((item, index) => (
              <li key={index} className="text-lg mt-3 list-none">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
