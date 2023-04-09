import React from "react";
import TedPhone from "../assets/tedphone.png";
import TedEmail from "../assets/tedemail.png";

const Contact = () => {
  return (
    <div>
      {/* <div className="h-[100vh]"> */}
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div class="grid gap-16 lg:grid-cols-3">
            <div class="hidden lg:block">
              <h4 class="mb-1 pb-8 font-medium text-gray-900 dark:text-white">
                For questions, comments or inquiries about booking Pastor Rust
                as a supply preacher:
              </h4>
              <img
                className="h-10"
                src={TedPhone}
                alt="Ted's phone number"
                class="w-1/2"
              />
              <div className="pt-8"></div>
              <img
                className="h-10"
                src={TedEmail}
                alt="Ted's email address"
                class="w-1/2"
              />
              <h4 class="mb-1 font-medium text-gray-900 dark:text-white pt-8">
                Or leave a comment in the comment box to the right
              </h4>
            </div>
            <div class="col-span-2">
              <h2 class="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 lg:mb-8 md:text-4xl dark:text-white">
                Contact Ted
              </h2>
              <form action="/" class="space-y-8">
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Your email address{" "}
                    <span class="text-xs text-gray-500">
                      (So I can reply to you)
                    </span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="name@email.com"
                    required
                  />
                </div>
                <div>
                  <label
                    for="subject"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="Let me know who you are"
                    required
                  />
                </div>
                <div class="sm:col-span-2">
                  <label
                    for="message"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Let me know how I can help you"
                  ></textarea>
                  <div class="flex mt-4">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 mt-0.5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="default-checkbox"
                      class="ml-2 text-sm font-light text-gray-500 dark:text-gray-400"
                    >
                      By submitting this form, you confirm that you have read
                      and agree to our{" "}
                      <a
                        class="font-normal text-gray-900 underline hover:no-underline dark:text-white"
                        href="/"
                      >
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a
                        class="font-normal text-gray-900 underline hover:no-underline dark:text-white"
                        href="/"
                      >
                        Privacy Statement
                      </a>
                      .
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
