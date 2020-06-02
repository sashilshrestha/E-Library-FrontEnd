import React, { Component } from "react";

class Herosection extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <section className="text-gray-700 body-font" id="hero">
          <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
            <div
              className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center"
              data-aos="fade-down"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
            >
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                E-Library
              </h1>
              <p className="mb-8 leading-relaxed text-white">
                A online library system with all study materials and books.
              </p>
              <div className="flex w-full justify-center">
                <input
                  className="border-0 bg-gray-100 rounded mr-4 border border-gray-400 focus:outline-none focus:border-orange-500 text-base px-4 lg:w-full xl:w-1/2 w-2/4 md:w-full"
                  placeholder="Search Books ..."
                  type="text"
                />

                <div class="dropdown inline-block relative mr-4">
                  <button class="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center focus:outline-none">
                    <span class="mr-1">Filter</span>
                    <svg
                      class="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                    </svg>
                  </button>
                  <ul class="dropdown-menu absolute hidden text-gray-700 pt-1  text-left">
                    <li class="">
                      <a
                        class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        Books
                      </a>
                    </li>
                    <li class="">
                      <a
                        class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        Articles
                      </a>
                    </li>
                    <li class="">
                      <a
                        class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        Comics
                      </a>
                    </li>
                  </ul>
                </div>

                <button className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg">
                  Button
                </button>
              </div>

              <div className="flex"></div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Herosection;
