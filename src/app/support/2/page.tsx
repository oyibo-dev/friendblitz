import React from "react";

const Page = () => {
  return (
    <main className="flex-grow">
      <section>
        <div className="items-center w-full mx-auto 2xl:max-w-7xl 2xl:border-x-2 border-black">
          <div className="p-8 lg:p-20 lg:py-32 items-center gap-12 h-full bg-lila-500 border-b-2 border-black">
            <div className="text-center max-w-4xl mx-auto">
              <p className="text-5xl lg:text-7xl text-black">
                Frequently Asked Questions
              </p>
            </div>
          </div>
        </div>
        <div className="2xl:border-x-2 2xl:max-w-7xl border-black mx-auto p-8 lg:p-20">
          <div className="max-w-3xl mx-auto">
            <div className="prose-styles">
              <p>
                Welcome to our FAQ page, where we aim to provide answers to
                common questions about our products and services. Whether you’re
                curious about getting started, troubleshooting, or learning more
                about what we offer, you’ll find helpful information here.
              </p>
              <h2 id="getting-started">Getting Started</h2>
              <h3 id="q-how-do-i-create-an-account">
                Q: How do I create an account?
              </h3>
              <p>
                A: You can create an account by clicking on the ‘Sign Up’ button
                on our homepage and filling out the required registration form.
                Don’t forget to verify your email to complete the sign-up
                process.
              </p>
              <h3 id="q-are-there-any-subscription-plans">
                Q: Are there any subscription plans?
              </h3>
              <p>
                A: Yes, we offer various subscription plans tailored to meet
                different needs and preferences. You can view and compare our
                plans by visiting the ‘Pricing’ section of our website.
              </p>
              <h2 id="using-our-products">Using Our Products</h2>
              <h3 id="q-how-can-i-reset-my-password">
                Q: How can I reset my password?
              </h3>
              <p>
                A: If you’ve forgotten your password, simply click on the
                ‘Forgot Password’ link on the login page and follow the
                instructions to reset it.
              </p>
              <h3 id="q-where-can-i-download-the-mobile-app">
                Q: Where can I download the mobile app?
              </h3>
              <p>
                A: Our mobile app is available for download on both the App
                Store for iOS devices and Google Play for Android devices.
                Search for our app by name and download it for free.
              </p>
              <h2 id="account-management">Account Management</h2>
              <h3 id="q-how-do-i-update-my-profile-information">
                Q: How do I update my profile information?
              </h3>
              <p>
                A: You can update your profile information by logging into your
                account, navigating to your profile, and selecting ‘Edit
                Profile’ to make changes.
              </p>
              <h3 id="q-can-i-delete-my-account">
                Q: Can I delete my account?
              </h3>
              <p>
                A: Yes, if you wish to delete your account, please contact our
                support team for assistance. Keep in mind that this action is
                irreversible.
              </p>
              <h2 id="troubleshooting">Troubleshooting</h2>
              <h3 id="q-what-should-i-do-if-im-experiencing-technical-difficulties">
                Q: What should I do if I’m experiencing technical difficulties?
              </h3>
              <p>
                A: If you’re facing any technical issues, please try clearing
                your browser’s cache and cookies first. If the problem persists,
                contact our support team for further assistance.
              </p>
              <h3 id="q-how-can-i-contact-customer-support">
                Q: How can I contact customer support?
              </h3>
              <p>
                A: You can reach our customer support team by emailing us at{" "}
                <a href="mailto:support@yourwebsite.com">
                  support@yourwebsite.com
                </a>
                or by using the contact form on our website. We’re here to help!
              </p>
              <p>
                For more detailed information about our products and services,
                please refer to our help center or contact us directly. We’re
                committed to providing you with the support you need.
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
