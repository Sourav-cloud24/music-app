import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* About Us */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">About Us</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              We are a modern music school helping students learn instruments,
              vocals, and music production through expert-led courses and live
              sessions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/courses" className="hover:text-white">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/webinars" className="hover:text-white">
                  Webinars
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Follow Us</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter / X
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Contact Us
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Email: support@musicschool.com</li>
              <li>Phone: +91 98765 43210</li>
              <li>Location: Bangalore, India</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Music School. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
