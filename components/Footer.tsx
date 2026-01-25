"use client"
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full mt-[5rem] p-6 bg-green-800">
      <div className="w-full mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-12 gap-12">
        <div>
          <div>
            <Image
              src="/brand-logo.png"
              alt="farmlook logo"
              width={300}
              height={300}
              priority
              className="w-[8rem]"
            />
          </div>
          <p className="text-gray-400 text-lg mt-3">
            Empowering Nigerian Famers with Ai driven diagnostics for a
            food-secure future
          </p>
        </div>
        {/* Links 01 */}
        <div className="flex flex-col">
          <h2 className="text-gray-200 mb-3 font-semibold">Products</h2>
          <Link
            href="#features"
            className="font-medium text-md text-gray-400 hover:text-gray-300 mb-2"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="font-medium text-md text-gray-400 hover:text-gray-300 mb-2"
          >
            How it works
          </Link>
          <Link
            href="https://expo.dev/artifacts/eas/pEFJDnhXdzCHVJtArLv3mF.apk"
            download
            target="_blank"
            className="font-medium text-md text-gray-400 hover:text-gray-300 mb-2"
          >
            Download
          </Link>
        </div>
        {/* Links 02 */}
        <div className="flex flex-col">
          <h2 className="text-gray-200 font-semibold mb-3">Contact</h2>
          <Link
            href="#features"
            className="font-medium text-md text-gray-400 hover:text-gray-300 mb-2"
          >
            Support
          </Link>
          <Link
            href="https://www.linkedin.com/company/farmlook-ai"
            className="font-medium text-md text-gray-400 hover:text-gray-300 mb-2"
          >
            LinkedIn
          </Link>
          <Link
            href="mailto:hello@farmlook.com.ng"
            className="font-medium text-md text-gray-400 hover:text-gray-300 mb-2"
          >
            Email Us
          </Link>
        </div>
      </div>
      <div className="border-t border-gray-400 py-5">
        <p className="text-gray-400 text-lg">
          &copy; {new Date().getFullYear()} FarmLook. All rights reserved. Built
          for Nigeria {"\u{1F1F3}\u{1F1EC}"}.
        </p>
      </div>
    </div>
  );
};

export default Footer;
