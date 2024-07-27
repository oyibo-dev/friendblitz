import React from "react";

const Page = () => {
  return (
    <main className="flex-grow">
      <section>
        <div className="items-center w-full mx-auto 2xl:max-w-7xl 2xl:border-x-2 border-black">
          <div className="p-8 lg:p-20 lg:py-32 items-center gap-12 h-full bg-lila-500 border-b-2 border-black">
            <div className="text-center max-w-4xl mx-auto">
              <p className="text-5xl lg:text-7xl text-black">Troubleshoting</p>
            </div>
          </div>
        </div>
        <div className="2xl:border-x-2 2xl:max-w-7xl border-black mx-auto p-8 lg:p-20">
          <div className="max-w-3xl mx-auto">
            <div className="prose-styles">
              <p>
                Welcome to our Troubleshooting guide. Here, you’ll find
                assistance for resolving technical issues and advice on
                troubleshooting common problems you may encounter with our
                products and services. Our goal is to help you find solutions
                quickly and efficiently.
              </p>
              <h2 id="technical-issues">Technical Issues</h2>
              <h3 id="internet-connectivity-problems">
                Internet Connectivity Problems
              </h3>
              <p>If you’re experiencing issues with internet connectivity:</p>
              <ol>
                <li>
                  <strong>Check Your Connection</strong>: Ensure your device is
                  properly connected to the internet. Try connecting to a
                  different website to see if the issue is isolated to our
                  service.
                </li>
                <li>
                  <strong>Restart Your Router</strong>: Sometimes, simply
                  restarting your router can resolve connectivity issues.
                </li>
                <li>
                  <strong>Disable VPN or Proxy</strong>: If you’re using a VPN
                  or proxy, try disabling it to see if it resolves the issue.
                </li>
              </ol>
              <h3 id="login-difficulties">Login Difficulties</h3>
              <p>If you’re having trouble logging in:</p>
              <ol>
                <li>
                  <strong>Reset Your Password</strong>: If you’ve forgotten your
                  password, use the ‘Forgot Password’ feature to reset it.
                </li>
                <li>
                  <strong>Clear Browser Cache</strong>: Clear your browser’s
                  cache and cookies, as this can sometimes resolve login issues.
                </li>
                <li>
                  <strong>Enable Cookies</strong>: Ensure that cookies are
                  enabled in your browser settings.
                </li>
              </ol>
              <h3 id="app-crashes-or-freezes">App Crashes or Freezes</h3>
              <p>If the app crashes or freezes:</p>
              <ol>
                <li>
                  <strong>Update the App</strong>: Make sure you’re using the
                  latest version of the app. Check the App Store or Google Play
                  for updates.
                </li>
                <li>
                  <strong>Restart Your Device</strong>: Sometimes, restarting
                  your device can resolve app performance issues.
                </li>
                <li>
                  <strong>Reinstall the App</strong>: If problems persist, try
                  uninstalling and then reinstalling the app.
                </li>
              </ol>
              <h2 id="common-problems">Common Problems</h2>
              <h3 id="difficulty-accessing-features">
                Difficulty Accessing Features
              </h3>
              <p>If certain features are not working as expected:</p>
              <ol>
                <li>
                  <strong>Check for Updates</strong>: Ensure your app or
                  software is up to date, as new updates may include fixes for
                  known issues.
                </li>
                <li>
                  <strong>Review the Help Center</strong>: Look for articles
                  related to the specific feature in our help center for any
                  usage guidelines.
                </li>
                <li>
                  <strong>Contact Support</strong>: If you’re still having
                  trouble, our support team is ready to assist. Provide them
                  with details about the issue you’re facing.
                </li>
              </ol>
              <h3 id="account-syncing-issues">Account Syncing Issues</h3>
              <p>For problems with account syncing:</p>
              <ol>
                <li>
                  <strong>Check Account Settings</strong>: Ensure your account
                  settings are correctly configured for syncing.
                </li>
                <li>
                  <strong>Manual Sync</strong>: Try manually syncing your
                  account data if the automatic sync isn’t working.
                </li>
                <li>
                  <strong>Restart the Application</strong>: Closing and
                  reopening the application can sometimes kickstart the syncing
                  process.
                </li>
              </ol>
              <p>
                For more detailed troubleshooting guides or if you’re
                encountering an issue not covered here, please reach out to our
                customer support team. We’re committed to ensuring you have a
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
