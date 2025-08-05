import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-4 w-full py-10 md:py-16">
        <div className="grid md:grid-cols-3 gap-7">
          <div>
            <Link href="/" className="mb-10 block">
              <Image
                src="/logo.png"
                alt="logo"
                width={128}
                height={49}
                priority
              />
            </Link>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              dolores!
            </p>
          </div>
          <div>
            <div className="flex gap-20">
              <div className="flex-1 md:flex-none">
                <h1 className="mb-8 text-xl font-semibold text-white">Links</h1>
                <ul>
                  <li className="mb-4">
                    <Link href="/" className="text-gray-400 hover:text-white">
                      Home
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      href="/about"
                      className="text-gray-400 hover:text-white"
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      href="/room"
                      className="text-gray-400 hover:text-white"
                    >
                      Rooms
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      href="/contact"
                      className="text-gray-400 hover:text-white"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex-1 md:flex-none">
                <h1 className="mb-8 text-xl font-semibold text-white">Legal</h1>
                <ul>
                  <li className="mb-4">
                    <Link href="#" className="text-gray-400 hover:text-white">
                      Legal
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="#" className="text-gray-400 hover:text-white">
                      Term & Conditions
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="#" className="text-gray-400 hover:text-white">
                      Payment Method
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="#" className="text-gray-400 hover:text-white">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h4 className="mb-8 text-xl font-semibold text-white">
              Newsletter
            </h4>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              dolores!
            </p>
            <form action="" className="mt-5">
              <div className="mb-5">
                <input
                  type="text"
                  name="email"
                  className="w-full p-3 rounded-sm bg-white"
                  placeholder="username@gmail.com"
                />
              </div>
              <button className="bg-orange-400 p-3 font-bold text-white w-full text-center rounded-sm hover:bg-orange-500">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-4 border-t border-gray-500 py-8 text-center text-base text-gray-500">
        &copy; Copyright 2025 | Online Booking Hotel | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
