"use client";

import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { useSession, signOut } from "next-auth/react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

const Navlink = () => {
  const [Open, setOpen] = useState(false);
  const { data: session } = useSession();
  return (
    <>
    {session?.user ? (
      <div className="flex items-center justify-end md:order-2">
        <div className="hidden text-sm bg-gray-50 border rounded-full md:me-0 md:block focus:ring-4 focus:ring-gray-300">
          <Image src={session.user.image || "/avatar.svg"} alt="avatar" width={64} height={64} className="size-8 rounded-full"/>
        </div>
        <div className="flex items-center">
          <button onClick={() => signOut()} className="md:block hidden py-2 px-4 bg-gray-50 text-gray-700 hover:bg-gray-100 rounded-sm cursor-pointer">
            Sign Out
          </button>
        </div>
      </div>
    ):null}
      <button
        onClick={() => setOpen(!Open)}
        className="inline-flex item-center p-2 justify-center text-sm text-gray-500 rounded-md md:hidden hover:bg-gray-100"
      >
        {!Open ? <IoMenu className="size-8" /> : <IoClose className="size-8" />}
      </button>

      <div
        className={clsx("w-full md:block md:w-auto", {
          hidden: !Open,
        })}
      >
        <ul className="flex flex-col font-semibold text-sm uppercase p-4 mt-4 rounded-sm bg-gray-50 md:flex-row md:item-center md:space-x-10 md:p-0 md:mt-0 md:border-0 md:bg-white">
          <li>
            <Link
              href="/"
              className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/room"
              className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0"
            >
              Rooms
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0"
            >
              Contact
            </Link>
          </li>
          {session && (
            <>
              <li>
                <Link
                  href="/myreservation"
                  className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0"
                >
                  My Reservation
                </Link>
              </li>
              {session.user.role === "admin" && (
                <>
                  <li>
                    <Link
                      href="/admin/dashboard"
                      className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/admin/room"
                      className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0"
                    >
                      Manage Room
                    </Link>
                  </li>
                </>
              )}
            </>
          )}
          {session ? (
            <li className="pt-2 md:pt-0">
            <button
              onClick={() => signOut()}
              className="md:hidden py-2.5 px-4 bg-red-400 text-white hover:bg-red-500 rounded-sm cursor-pointer"
            >
              Sign Out
            </button>
          </li>
          ) : (
            <li className="pt-2 md:pt-0">
            <Link
              href="/signin"
              className="py-2.5 px-6 bg-orange-400 text-white hover:bg-orange-500 rounded-sm"
            >
              Sign In
            </Link>
          </li>
          ) }
          
        </ul>
      </div>
    </>
  );
};

export default Navlink;
