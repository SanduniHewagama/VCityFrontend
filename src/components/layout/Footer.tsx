import { 
    FaTiktok, 
    FaFacebookF, 
    FaLinkedinIn, 
    FaInstagram, 
    FaPinterestP, 
    FaGlobe, 
    FaShoppingCart 
  } from "react-icons/fa";
  import { FaXTwitter } from "react-icons/fa6";
  
  const footerLinks = [
    {
      heading: "Shop",
      links: ["New Arrivals", "Best Sellers", "Top Deals", "Gift Cards"],
    },
    {
      heading: "Customer Service",
      links: ["Help Center", "Track Order", "Shipping & Delivery", "Returns & Refunds"],
    },
    {
      heading: "Company",
      links: ["About VirtualCity", "Careers", "Investor Relations", "Blog"],
    },
    {
      heading: "Legal",
      links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Intellectual Property"],
    },
    {
      heading: "Follow Us",
      links: ["Facebook", "Instagram", "Twitter", "LinkedIn"],
    },
  ];
  
  export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white">
        {/* Top Section with Links */}
        <div className="bg-[url('/footerBg.jpg')] bg-cover bg-center py-12 px-6">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center md:text-left">
            {footerLinks.map((section, i) => (
              <div key={i}>
                <h3 className="font-semibold text-xl text-white mb-3 relative after:content-[''] after:block after:w-10 after:h-1 after:bg-blue-500 after:mt-2 after:mx-auto md:after:mx-0">
                  {section.heading}
                </h3>
                <ul>
                  {section.links.map((link, j) => (
                    <li key={j} className="text-gray-400 text-sm cursor-pointer hover:text-blue-400 transition duration-300">
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
  
        {/* Bottom Section with Branding & Social Media */}
        <div className="border-t  border-gray-600 py-6 px-6 flex flex-col md:flex-row items-center justify-between text-gray-400 space-y-4 md:space-y-0 bg-black">
          {/* Branding */}
          <div className="text-3xl font-bold text-white flex items-center gap-3">
            <span className="text-blue-500 ">Virtual</span>City
          </div>
  
          {/* Copyright */}
          <p className="text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} VirtualCity. All Rights Reserved.
          </p>
  
          {/* Social Icons */}
          <div className="flex gap-5 text-2xl">
            <FaTiktok className="hover:text-blue-400 transition duration-300 cursor-pointer" />
            <FaFacebookF className="hover:text-blue-400 transition duration-300 cursor-pointer" />
            <FaLinkedinIn className="hover:text-blue-400 transition duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-blue-400 transition duration-300 cursor-pointer" />
            <FaPinterestP className="hover:text-blue-400 transition duration-300 cursor-pointer" />
            <FaXTwitter className="hover:text-blue-400 transition duration-300 cursor-pointer" />
            <FaGlobe className="hover:text-blue-400 transition duration-300 cursor-pointer" />
            <span className="text-sm cursor-pointer hover:text-blue-400">English (UK)</span>
          </div>
        </div>
      </footer>
    );
  }
  