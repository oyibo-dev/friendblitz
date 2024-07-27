import React from "react";

const Page = () => {
  return (
    <main className="flex-grow">
      <section>
        <div className="items-center w-full mx-auto 2xl:max-w-7xl 2xl:border-x-2 border-black">
          <div className="p-8 lg:p-20 lg:py-32 items-center gap-12 h-full bg-lila-500 border-b-2 border-black">
            <div className="text-center max-w-4xl mx-auto">
              <p className="text-5xl lg:text-7xl text-black">Product Guides</p>
            </div>
          </div>
        </div>
        <div className="2xl:border-x-2 2xl:max-w-7xl border-black mx-auto p-8 lg:p-20">
          <div className="max-w-3xl mx-auto">
            <div className="prose-styles">
              <p>
                Welcome to our Product Guides page! Here, you will find detailed
                guides and step-by-step tutorials designed to help you maximize
                the use of our products. Whether you’re looking to master a
                specific feature or accomplish a particular task, our in-depth
                resources are here to assist you every step of the way.
              </p>
              <h2 id="getting-started-with-product-name">
                Getting Started with [Product Name]
              </h2>
              <h3 id="setting-up-your-account">Setting Up Your Account</h3>
              <p>
                Learn how to set up your account quickly and start using
                [Product Name] to its fullest potential.
              </p>
              <ul>
                <li>
                  <strong>Step 1</strong>: Go to the sign-up page.
                </li>
                <li>
                  <strong>Step 2</strong>: Fill in your details.
                </li>
                <li>
                  <strong>Step 3</strong>: Verify your email address.
                </li>
              </ul>
              <h3 id="navigating-the-dashboard">Navigating the Dashboard</h3>
              <p>
                A comprehensive guide on navigating through [Product Name]‘s
                dashboard efficiently.
              </p>
              <ul>
                <li>
                  Explore the main features and tools available on your
                  dashboard.
                </li>
                <li>Customize your view to suit your preferences.</li>
              </ul>
              <h2 id="feature-guides">Feature Guides</h2>
              <h3 id="feature-1-title">[Feature 1: Title]</h3>
              <p>
                Discover how to use [Feature 1] with our step-by-step tutorial,
                including tips for best practices.
              </p>
              <ul>
                <li>
                  <strong>Introduction</strong>: Overview of [Feature 1] and its
                  benefits.
                </li>
                <li>
                  <strong>Step-by-Step Guide</strong>: Detailed instructions on
                  how to use [Feature 1].
                </li>
              </ul>
              <h3 id="feature-2-title">[Feature 2: Title]</h3>
              <p>
                Master [Feature 2] to enhance your productivity and streamline
                your tasks.
              </p>
              <ul>
                <li>
                  <strong>Getting Started</strong>: What you need to know before
                  starting.
                </li>
                <li>
                  <strong>Advanced Tips</strong>: Take [Feature 2] to the next
                  level with these advanced tips.
                </li>
              </ul>
              <h2 id="troubleshooting">Troubleshooting</h2>
              <h3 id="common-issues-with-product-name">
                Common Issues with [Product Name]
              </h3>
              <p>
                Find solutions to common issues and avoid common pitfalls while
                using [Product Name].
              </p>
              <ul>
                <li>
                  <strong>Issue 1</strong>: Description and solution.
                </li>
                <li>
                  <strong>Issue 2</strong>: Description and solution.
                </li>
              </ul>
              <h2 id="further-assistance">Further Assistance</h2>
              <p>
                If you need further assistance or have questions not covered in
                our guides, please do not hesitate to contact our customer
                support team. We’re dedicated to providing you with the support
                you need to succeed with our products.
              </p>
              <p>
                For more detailed guides and tutorials, continue exploring this
                section, and stay updated with our latest features and updates.
              </p>
            </div>
            <div className="mt-12 border-2 border-black bg-white rounded-xl p-4 max-w-[48rem] mx-auto shadow-large">
              <div className="items-center inline-flex w-full">
                <p className="text-black font-semibold">Was this helpful?</p>
                <p />
                <span className="inline-flex rounded-md isolate ml-auto">
                  <button
                    type="button"
                    className="relative inline-flex items-center focus:translate-y-1 px-4 py-2 text-sm font-semibold text-black duration-200 rounded-l-lg shadow bg-white hover:text-lila-800 ring-2 h-16 ring-inset ring-black focus:z-10 ease-in-out transform transition-all focus:ring-lila-700"
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    className="relative inline-flex items-center focus:translate-y-1 px-4 py-2 -ml-px text-sm font-semibold text-black shadow duration-200 rounded-r-lg bg-white hover:text-lila-800 ring-2 h-16 ring-inset ring-black focus:z-10 ease-in-out transform transition-all focus:ring-lila-700"
                  >
                    No
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
