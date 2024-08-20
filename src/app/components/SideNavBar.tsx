"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { BsThreeDots } from 'react-icons/bs'; // Use alternative icon
import { Disclosure } from '@headlessui/react';
import NavbarNotification from '../components/ui/navbarnotification';

import {
  MdOutlineSpaceDashboard,
  MdOutlineAnalytics,
  MdOutlineIntegrationInstructions,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdOutlineLogout,
  MdHelpOutline,
} from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { FaRegComments } from 'react-icons/fa';
import { BiMessageSquareDots } from 'react-icons/bi';
import { IoIosMap } from 'react-icons/io';
import { AiOutlineForm } from 'react-icons/ai';

const SideNavbar: React.FC = () => {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/logout');
  };

  return (
    <Disclosure as="nav" className="relative">
      {({ open }) => (
        <>
          {/* Toggle Button for Mobile */}
          <Disclosure.Button className="fixed top-4 right-4 z-30 inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white lg:hidden">
            <BsThreeDots className="h-6 w-6" aria-hidden="true" /> {/* Using alternative icon */}
          </Disclosure.Button>

          {/* Sidebar */}
          <div
            className={`fixed top-0 left-0 h-screen bg-white z-20 transition-transform duration-300 ease-in-out ${
              open ? 'translate-x-0' : '-translate-x-full'
            } lg:translate-x-0 lg:w-64 overflow-y-auto`}
          >
            <div className="p-6 h-full flex flex-col">
              <h1 className="text-base text-center font-bold text-blue-900 border-b border-gray-100 pb-4">
                TREKKING MODE
              </h1>

              {/* Navigation Links */}
              <div className="flex flex-col space-y-2 my-4 border-b border-gray-100 pb-4">
                <Link
                  href="/"
                  className="flex items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg"
                >
                  <MdOutlineSpaceDashboard className="text-2xl text-gray-600 group-hover:text-white" />
                  <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
                    Dashboard
                  </h3>
                </Link>
                <Link
                  href="/profile"
                  className="flex items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg"
                >
                  <CgProfile className="text-2xl text-gray-600 group-hover:text-white" />
                  <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
                    Profile
                  </h3>
                </Link>
                <Link
                  href="/feedback"
                  className="flex items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg"
                >
                  <FaRegComments className="text-2xl text-gray-600 group-hover:text-white" />
                  <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
                    Feedback
                  </h3>
                </Link>
                <Link
                  href="/recommendation"
                  className="flex items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg"
                >
                  <MdOutlineAnalytics className="text-2xl text-gray-600 group-hover:text-white" />
                  <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
                    Recommendation
                  </h3>
                </Link>
                <Link
                  href="/schedule"
                  className="flex items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg"
                >
                  <MdOutlineIntegrationInstructions className="text-2xl text-gray-600 group-hover:text-white" />
                  <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
                    Schedule
                  </h3>
                </Link>
                <div className="flex items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg">
                  <BiMessageSquareDots className="text-2xl text-gray-600 group-hover:text-white" />
                  <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
                    Messages
                  </h3>
                  <NavbarNotification />
                </div>
              </div>

              {/* More Options */}
              <div className="flex flex-col space-y-2 my-4 border-b border-gray-100 pb-4">
                <Link
                  href="/settings"
                  className="flex items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg"
                >
                  <MdOutlineSettings className="text-2xl text-gray-600 group-hover:text-white" />
                  <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
                    Settings
                  </h3>
                </Link>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg">
                        <MdOutlineMoreHoriz className="text-2xl text-gray-600 group-hover:text-white" />
                        <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
                          More
                        </h3>
                      </Disclosure.Button>
                      <Disclosure.Panel className="pl-12 space-y-2">
                        <Link
                          href="/registration"
                          className="flex items-center gap-4 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg"
                        >
                          <AiOutlineForm className="text-2xl text-gray-600 group-hover:text-white" />
                          <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
                            Registration
                          </h3>
                        </Link>
                        <Link
                          href="/route"
                          className="flex items-center gap-4 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg"
                        >
                          <IoIosMap className="text-2xl text-gray-600 group-hover:text-white" />
                          <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
                            Route
                          </h3>
                        </Link>
                        <Link
                          href="/help"
                          className="flex items-center gap-4 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg"
                        >
                          <MdHelpOutline className="text-2xl text-gray-600 group-hover:text-white" />
                          <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
                            Help
                          </h3>
                        </Link>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>

              {/* Logout Button */}
              <div className="flex justify-center items-center gap-4 mt-auto">
                <button
                  className="flex items-center justify-center px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600"
                  onClick={handleLogout}
                >
                  <MdOutlineLogout className="mr-2" />
                  Logout
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
};

export default SideNavbar;
