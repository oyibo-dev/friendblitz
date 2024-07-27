import React from "react";

const Page = () => {
  return (
    <main className="flex-grow">
      <section>
        <div className="items-center w-full mx-auto 2xl:max-w-7xl 2xl:border-x-2 border-black">
          <div className="p-8 lg:p-20 lg:py-32 items-center gap-12 h-full bg-lila-500 border-b-2 border-black">
            <div className="text-center max-w-4xl mx-auto">
              <p className="text-5xl lg:text-7xl text-black">
                Account Management
              </p>
            </div>
          </div>
        </div>
        <div className="2xl:border-x-2 2xl:max-w-7xl border-black mx-auto p-8 lg:p-20">
          <div className="max-w-3xl mx-auto">
            <div className="prose-styles">
              <p>
                Welcome to the Account Management help center page! Whether
                you’re new to our platform or a returning user, this guide will
                assist you in creating your account, updating your profile
                information, and managing your account settings with ease.
              </p>
              <h2 id="creating-an-account">Creating an Account</h2>
              <p>
                Creating an account is the first step to unlocking all the
                features our platform has to offer. Follow these simple steps to
                get started:
              </p>
              <ol>
                <li>
                  <strong>Navigate to the Sign-Up Page</strong>: Click on the
                  ‘Sign Up’ button located at the top right corner of our
                  homepage.
                </li>
                <li>
                  <strong>Fill Out the Registration Form</strong>: Provide the
                  required information, including your name, email address, and
                  password.
                </li>
                <li>
                  <strong>Verify Your Email</strong>: Check your inbox for a
                  verification email and click on the link provided to verify
                  your account.
                </li>
                <li>
                  <strong>Log In to Your New Account</strong>: Return to the
                  site and log in with your new credentials to start using our
                  services.
                </li>
              </ol>
              <h2 id="updating-profile-information">
                Updating Profile Information
              </h2>
              <p>
                Keeping your profile information up-to-date ensures that you get
                the most personalized experience on our platform. Here’s how to
                update your profile:
              </p>
              <ol>
                <li>
                  <strong>Access Your Profile</strong>: Log in to your account
                  and navigate to your profile page by clicking on your name or
                  profile picture.
                </li>
                <li>
                  <strong>Edit Your Profile</strong>: Click on the ‘Edit
                  Profile’ button to make changes to your personal information,
                  such as your name, email, or password.
                </li>
                <li>
                  <strong>Save Changes</strong>: After making your edits, be
                  sure to click the ‘Save Changes’ button to update your profile
                  information.
                </li>
              </ol>
              <h2 id="managing-account-settings">Managing Account Settings</h2>
              <p>
                Our platform offers various settings to help you manage your
                account according to your preferences. You can access these
                settings by:
              </p>
              <ol>
                <li>
                  <strong>Navigating to Account Settings</strong>: Log in and go
                  to your account settings, usually found in the drop-down menu
                  under your profile picture.
                </li>
                <li>
                  <strong>Adjusting Your Preferences</strong>: In the account
                  settings, you can manage your email preferences, privacy
                  settings, and notification preferences.
                </li>
                <li>
                  <strong>Saving Your Settings</strong>: Make sure to save any
                  changes you make so that your preferences are updated
                  accordingly.
                </li>
              </ol>
              <p>
                Should you need any further assistance, please don’t hesitate to
                reach out to our support team for help.
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
