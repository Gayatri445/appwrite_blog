import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <section className="relative overflow-hidden py-2 pb-6 bg-gray-500">
      <div className="relative z-10 mx-auto max-w-7xl  flex flex-wrap">
        <div className="flex-1 w-full p-2 md:w-1/2 lg:w-5/12  ">
          <div className="flex h-full flex-col justify-between p-2">
            <div className="mb-4 inline-flex items-center p-2">
              <Logo width="100px" />
            </div>
            <div>
              <p className="text-sm text-gray-900">
                &copy; Copyright 2023. All Rights Reserved by{" "}
                <span className="italic text-blue-900 font-semibold">
                  Blog Spot.
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full p-2 md:w-1/2 lg:w-5/12  ">
          <div className="flex justify-between flex-wrap gap-2 ">
            <div className="w-full md:w-[50%] lg:w-2/12 h-fit ">
              <h3 className="mb-2 text-md font-semibold uppercase text-gray-900 ">
                Company
              </h3>
              <ul>
                <li className="mb-2 w-full ">
                  <Link
                    className=" text-base font-medium text-gray-800 hover:text-gray-900"
                    to="/"
                  >
                    Features
                  </Link>
                </li>
                <li className="mb-2 w-full ">
                  <Link
                    className=" text-base font-medium text-gray-800 hover:text-gray-900"
                    to="/"
                  >
                    Pricing
                  </Link>
                </li>
                <li className="mb-2 w-full ">
                  <Link
                    className=" text-base font-medium text-gray-800 hover:text-gray-900"
                    to="/"
                  >
                    Affiliate Program
                  </Link>
                </li>
                <li className="w-full ">
                  <Link
                    className=" text-base font-medium text-gray-800 hover:text-gray-900"
                    to="/"
                  >
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-[50%] lg:w-2/12 h-fit  ">
              <h3 className="mb-2 text-md font-semibold uppercase text-gray-900">
                Support
              </h3>
              <ul>
                <li className="mb-2 w-full">
                  <Link
                    className=" text-base font-medium text-gray-800 hover:text-gray-900"
                    to="/"
                  >
                    Account
                  </Link>
                </li>
                <li className="mb-2 w-full">
                  <Link
                    className=" text-base font-medium text-gray-800 hover:text-gray-900"
                    to="/"
                  >
                    Help
                  </Link>
                </li>
                <li className="mb-2 w-full">
                  <Link
                    className=" text-base font-medium text-gray-800 hover:text-gray-900"
                    to="/"
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="mb-2 w-full">
                  <Link
                    className=" text-base font-medium text-gray-800 hover:text-gray-900"
                    to="/"
                  >
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-[50%] lg:w-2/12 h-fit ">
              <h3 className="mb-2 text-md font-semibold uppercase text-gray-900">
                Legals
              </h3>
              <ul>
                <li className="mb-2 w-full">
                  <Link
                    className=" text-base font-medium text-gray-800 hover:text-gray-900"
                    to="/"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="mb-2 w-full">
                  <Link
                    className=" text-base font-medium text-gray-800 hover:text-gray-900"
                    to="/"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-2 w-full">
                  <Link
                    className=" text-base font-medium text-gray-800 hover:text-gray-900"
                    to="/"
                  >
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
