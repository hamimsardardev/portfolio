import React, { useState } from "react";
import { motion } from "framer-motion";

const DoPart = () => {
  
  const [openItem, setOpenItem] = useState(1); // 1 মানে প্রথমটা ডিফল্ট ওপেন (তোমার কোডে ছিল)

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? 0 : id); // একই আইটেমে ক্লিক করলে বন্ধ, অন্যটায় ক্লিক করলে ওপেন
  };

  return (
    <>
      <section>
        <div className="container overflow-hidden">
          <div className="grid grid-cols-1  md:grid-cols-1 lg:grid-cols-2 gap-4 md:gap-3 lg:gap-5 py-[80px] md:py-[100px] lg:py-[150px] border-b-1 border-seconerycolor">
            <motion.div
              initial={{ opacity: 0, y: 80, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 1.2,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="flex flex-col text-center md:text-center lg:text-start"
            >
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8 }}
                className="font-roboto text-[30px] md:text-[36px] lg:text-[48px] font-semibold pb-3 md:pb-4 lg:pb-6 leading-[30p] md:leading-[36px] lg:leading-[56px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] bg-clip-text text-transparent"
              >
                What I do?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="font-roboto text-[14px] md:text-[16px] lg:text-[18px] font-normal leading-4 md:leading-[20px] lg:leading-[24px] text-primarytwo w-auto md:mx-auto lg:mx-0 md:w-[480px] lg:[w-500px]"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                purus arcu, varius eget velit non, laoreet imperdiet orci.
                Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet,
                <span className="block font-roboto text-[14px] md:text-[16px] lg:text-[18px] mt-4 font-normal leading-4 md:leading-[20px] lg:leading-[24px] text-primarytwo w-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  purus arcu, varius eget velit non.
                </span>
              </motion.p>
              <div className="mt-[30px] md:mt-[36px] lg:mt-[50px]">
                <div className="p-[2px] rounded-[8px] bg-gradient-to-r from-[#2cb86f] to-[#3381bf] inline-block">
                  <div className="group rounded-[8px] bg-third hover:bg-secondery transition duration-300">
                    <motion.button
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="button"
                    >
                      Say Hello!
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 80, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 1.2,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <div id="accordion-open" data-accordion="open">
                {/* Item 1 - User Experience (UX) */}
                <h2 id="accordion-open-heading-1">
                  <button
                    type="button"
                    onClick={() => toggleItem(1)}
                    className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                    data-accordion-target="#accordion-open-body-1"
                    aria-expanded={openItem === 1}
                    aria-controls="accordion-open-body-1"
                  >
                    <span className="flex items-center">
                      <svg
                        className="w-5 h-5 me-2 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                          clipRule="evenodd"
                        />
                      </svg>{" "}
                      User Experience (UX)
                    </span>
                    <svg
                      data-accordion-icon
                      className={`w-3 h-3 shrink-0 transition-transform duration-200 ${
                        openItem === 1 ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                </h2>
                <div
                  id="accordion-open-body-1"
                  className={openItem === 1 ? "block" : "hidden"}
                  aria-labelledby="accordion-open-heading-1"
                >
                  <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      Flowbite is an open-source library of interactive
                      components built on top of Tailwind CSS including buttons,
                      dropdowns, modals, navbars, and more.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                      Check out this guide to learn how to{" "}
                      <a
                        href="/docs/getting-started/introduction/"
                        className="text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        get started
                      </a>{" "}
                      and start developing websites even faster with components
                      on top of Tailwind CSS.
                    </p>
                  </div>
                </div>

                {/* Item 2 - User Interface (UI) */}
                <h2 id="accordion-open-heading-2">
                  <button
                    type="button"
                    onClick={() => toggleItem(2)}
                    className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                    data-accordion-target="#accordion-open-body-2"
                    aria-expanded={openItem === 2}
                    aria-controls="accordion-open-body-2"
                  >
                    <span className="flex items-center">
                      <svg
                        className="w-5 h-5 me-2 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      User Interface (UI)
                    </span>
                    <svg
                      data-accordion-icon
                      className={`w-3 h-3 shrink-0 transition-transform duration-200 ${
                        openItem === 2 ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                </h2>
                <div
                  id="accordion-open-body-2"
                  className={openItem === 2 ? "block" : "hidden"}
                  aria-labelledby="accordion-open-heading-2"
                >
                  <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      Flowbite is first conceptualized and designed using the
                      Figma software so everything you see in the library has a
                      design equivalent in our Figma file.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                      Check out the{" "}
                      <a
                        href="https://flowbite.com/figma/"
                        className="text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Web Development
                      </a>{" "}
                      based on the utility classes from Tailwind CSS and
                      components from Flowbite.
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <h2 id="accordion-open-heading-3">
                  <button
                    type="button"
                    onClick={() => toggleItem(3)}
                    className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                    data-accordion-target="#accordion-open-body-3"
                    aria-expanded={openItem === 3}
                    aria-controls="accordion-open-body-3"
                  >
                    <span className="flex items-center">
                      <svg
                        className="w-5 h-5 me-2 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                          clipRule="evenodd"
                        />
                      </svg>{" "}
                      What are the differences between Flowbite and Tailwind UI?
                    </span>
                    <svg
                      data-accordion-icon
                      className={`w-3 h-3 shrink-0 transition-transform duration-200 ${
                        openItem === 3 ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                </h2>
                <div
                  id="accordion-open-body-3"
                  className={openItem === 3 ? "block" : "hidden"}
                  aria-labelledby="accordion-open-heading-3"
                >
                  <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      The main difference is that the core components from
                      Flowbite are open source under the MIT license, whereas
                      Tailwind UI is a paid product. Another difference is that
                      Flowbite relies on smaller and standalone components,
                      whereas Tailwind UI offers sections of pages.
                    </p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      However, we actually recommend using both Flowbite,
                      Flowbite Pro, and even Tailwind UI as there is no
                      technical reason stopping you from using the best of two
                      worlds.
                    </p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      Learn more about these technologies:
                    </p>
                    <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
                      <li>
                        <a
                          href="https://flowbite.com/pro/"
                          className="text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Flowbite Pro
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://tailwindui.com/"
                          rel="nofollow"
                          className="text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Tailwind UI
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DoPart;
