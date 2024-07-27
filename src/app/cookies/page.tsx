import React from "react";
import MainNav from "../components/main-nav";

export default function Page() {
  return (
    <>
      <MainNav />
      <main className="flex-grow">
        <section>
          <div className="p-8 lg:p-20 lg:py-32 items-center 2xl:max-w-7xl mx-auto gap-12 h-full bg-red-500 border-b-2 2xl:border-x-2 border-black">
            <div className="text-center max-w-4xl mx-auto">
              <p className="text-5xl lg:text-7xl text-black">Cookies </p>
              <p className="max-w-xl mt-4 xl:text-2xl mx-auto tracking-tight text-black">
                <time dateTime="2024-07-25">Thu Jul 25 </time>
              </p>
            </div>
          </div>
          <div className="2xl:border-x-2 2xl:max-w-7xl border-black mx-auto p-8 lg:p-20">
            <div className="max-w-3xl mx-auto">
              <div className="prose-styles">
                <p>
                  This cookie policy describes how Flabbergasted (Flabbergasted)
                  uses “cookies” and other similar technologies, in connection
                  with our Site and Services. For more information on
                  Flabbergasted privacy practices, please see our Privacy
                  Policy.
                </p>
                <h3 id="about-cookies">About cookies</h3>
                <p>
                  A cookie is a small piece of information stored on your
                  computer via the web browser you use. Cookies are used to
                  personalize your web experience with a website. They help with
                  things like understanding how you use a website, remembering
                  your login details, and storing site preferences.
                </p>
                <h3 id="how-flabbergasted-uses-cookies">
                  How Flabbergasted uses cookies
                </h3>
                <p>
                  Flabbergasted uses two types of cookies: first and third-party
                  cookies. First party cookies are set and read by us when you
                  use Flabbergasted. Third party cookies are set by companies
                  other than Flabbergasted and collect information about you
                  which may be sent to a third party. Flabbergasted uses third
                  party cookies for site analytics purposes.
                </p>
                <h3 id="opting-out">Opting out</h3>
                <p>
                  You can customize your web browser to accept, reject, or
                  delete cookies. All major browsers will give you the option to
                  block some or all cookies and to clear existing cookie data.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
