import Image from "next/image";
import Link from "next/link";
import React from "react";

const navLinks = [
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Payment",
    href: "/payments",
  },
  {
    title: "Products",
    href: "/products",
  },
  {
    title: "Developers",
    href: "/devloper",
  },
  {
    title: "Resourse",
    href: "/resourse",
  },
  {
    title: "Pricing",
    href: "/about",
  },
];

function Nav() {
  return (
    <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full py-7">
      <nav
        className="relative max-w-7xl w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-4 md:px-8 mx-auto"
        aria-label="Global"
      >
        <div className="md:col-span-3">
          <Link
            className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
            href="#"
            aria-label="Chapa"
          >
            <Image src="/logo.svg" alt="Chapa logo" width={101} height={26} />
          </Link>
        </div>

        <div className="flex items-center gap-x-4 ms-auto py-1 md:ps-2 md:order-3 md:col-span-3">
          <div className="mx-8 flex font-[600] text-[#434E60] cursor-pointer">
            EN
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#7DC400"
            >
              <path d="M480-371.69 267.69-584 296-612.31l184 184 184-184L692.31-584 480-371.69Z" />
            </svg>
          </div>
          <button
            type="button"
            className="h-[48px] px-8 inline-flex items-center gap-x-2 text-sm rounded-xl border border-transparent bg-[#7DC400] text-white hover:bg-lime-500 transition disabled:opacity-50 disabled:pointer-events-none focus:outline-none font-[800]"
          >
            Login
          </button>
          <div className="md:hidden">
            <button
              type="button"
              className="hs-collapse-toggle size-[38px] flex justify-center items-center text-sm font-semibold rounded-xl border border-gray-200 text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700"
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
            >
              <svg
                className="hs-collapse-open:hidden flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                className="hs-collapse-open:block hidden flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div
          id="navbar-collapse-with-animation"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-6"
        >
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-10 md:mt-0">
            {navLinks.map((item, index) => (
              <div key={index}>
                <a
                  className="relative inline-block text-[#434E60] before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1  dark:text-white font-[500]"
                  href={item.href}
                  aria-current="page"
                >
                  {item.title}
                </a>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
