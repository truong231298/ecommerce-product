import React from 'react'
import logo from "/images/logo.svg"
import iconMenu from "/images/icon-menu.svg"
import iconClose from "/images/icon-close.svg"
import iconCart from "/images/icon-cart.svg"
import avatar from "/images/image-avatar.png"
import product from "/images/image-product-1-thumbnail.jpg"
import del from "/images/icon-delete.svg"

import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'


const navigation = [
  { name: 'Collections', href: '#', current: false },
  { name: 'Men', href: '#', current: false },
  { name: 'Women', href: '#', current: false },
  { name: 'About', href: '#', current: false },
  { name: 'Contact', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const Navbar = ({ number, setNumber }) => {
  return (
    <Disclosure as="nav" className="bg-white shadow-sm">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <img src={iconClose} className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <img src={iconMenu} className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 sm:w-auto w-20 cursor-pointer"
                    src={logo}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-500 hover:text-black',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-4">
                  <div>
                    <Menu.Button className="relative flex text-sm">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8"
                        src={iconCart}
                        alt=""
                      />
                      <p className='-translate-x-4 -translate-y-4 bg-Orange h-6 px-2 text-white rounded-full'>{number}</p>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute sm:right-0 -right-20 z-10 mt-2 w-96 origin-top-right rounded-md bg-white py-2 px-4 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {/* cart */}
                        {({ active }) => (
                          <div className="text-gray-800  w-full">
                            <h1 className="text-lg font-semibold mb-2">Cart</h1>
                            <hr className="mb-2" />
                            <div className='w-full  h-32 border border-gray-300 rounded-md p-2'>
                              {number === 0 ?
                                <h1 className='text-center'>Your cart is empty</h1> :
                                <div className='flex flex-col gap-4'>
                                  <div className='flex flex-row gap-2 items-center'>
                                    <span className='flex flex-row gap-2 text-gray-500'>
                                      <img src={product} alt="" className='w-16 rounded-lg' />
                                      <h1>
                                        <p>Fall Limited Edition Sneekers</p>
                                        <p>$125.00 * {number}  <strong>${125.00 * number}</strong></p>

                                      </h1>
                                    </span>
                                    <img onClick={() => setNumber(0)} src={del} alt="" className='w-6 h-6 cursor-pointer' />
                                  </div>
                                  <button className='text-White w-full bg-Orange rounded-lg py-2 '>Checkout</button>
                                </div>}


                            </div>
                          </div>
                        )}
                      </Menu.Item>
                    </Menu.Items>


                  </Transition>
                </Menu>
                <div className='relative ml-8'>
                  <img src={avatar} alt="" className='w-10 h-10' />
                </div>

              </div>
            </div>
          </div>

          <Disclosure.Panel className="absolute bg-white w-2/3 h-full z-99 sm:hidden">
            <div className=" space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? ' text-black' : 'text-black hover:text-gray-300',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar