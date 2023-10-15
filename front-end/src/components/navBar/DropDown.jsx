import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DropDown() {
  return (
    <div className="flex">
      <Menu as="div" className="relative text-left flex">
        <div>
          <Menu.Button className="inline-flex font-extrabold w-full justify-center gap-x-1.5 px-3 py-2 text-2xl text-gray-900 ring-inset ring-gray-300 hover:bg-gray-50">
            Solutions
            <ChevronDownIcon
              className="-mr-1 h-8 w-6 text-gray-400"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
      </Menu>
      <Menu as="div" className="relative text-left flex">
        <div>
          <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 text-2xl font-extrabold text-gray-900 ring-inset ring-gray-300 hover:bg-gray-50">
            Features
            <ChevronDownIcon
              className="-mr-1 h-8 w-6 text-gray-400"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
      </Menu>
      <div className="px-3 py-2 text-2xl font-extrabold  text-gray-900 shadow-sm ring-gray-300 hover:bg-gray-50">
        Blogs
      </div>
      <Menu as="div" className="relative text-left flex">
        <div>
          <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 text-2xl font-extrabold text-gray-900 ring-inset ring-gray-300 hover:bg-gray-50">
            About
            <ChevronDownIcon
              className="-mr-1 h-8 w-6 text-gray-400"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
      </Menu>
    </div>
  );
}
