import React from "react";

const Page = () => {
  return (
    <main className="flex-grow">
      <section>
        <div className="items-center w-full mx-auto 2xl:max-w-7xl 2xl:border-x-2 border-black">
          <div className="p-8 lg:p-20 lg:py-32 items-center gap-12 h-full bg-lila-500 border-b-2 border-black">
            <div className="text-center max-w-4xl mx-auto">
              <p className="text-5xl lg:text-7xl text-black">
                Privacy and Security
              </p>
            </div>
          </div>
        </div>
        <div className="2xl:border-x-2 2xl:max-w-7xl border-black mx-auto p-8 lg:p-20">
          <div className="max-w-3xl mx-auto">
            <div className="prose-styles">
              <p>
                Welcome to our Privacy and Security page. Here, you’ll discover
                comprehensive information about our commitment to protecting
                your privacy, the measures we take to secure your data, and
                actionable tips to help you ensure the security of your account
                and personal information. Our goal is to empower you with the
                knowledge to confidently navigate our services, understanding
                your rights and how to protect them.
              </p>
              <h2 id="our-privacy-policy">Our Privacy Policy</h2>
              <h3 id="understanding-your-rights">Understanding Your Rights</h3>
              <p>
                Learn about the rights you have under our privacy policy,
                including accessing, modifying, and deleting your personal
                information.
              </p>
              <ul>
                <li>
                  <strong>Accessing Your Data</strong>: How to request a copy of
                  your data.
                </li>
                <li>
                  <strong>Modifying Your Information</strong>: Steps to update
                  or correct your information.
                </li>
                <li>
                  <strong>Deleting Your Account</strong>: Instructions for
                  deleting your account and what it means for your data.
                </li>
              </ul>
              <h3 id="how-we-use-your-data">How We Use Your Data</h3>
              <p>
                An overview of how we use your data to provide and improve our
                services, including:
              </p>
              <ul>
                <li>The types of data we collect.</li>
                <li>How your data is used to enhance your experience.</li>
                <li>Our policies on sharing data with third parties.</li>
              </ul>
              <h2 id="data-protection-measures">Data Protection Measures</h2>
              <h3 id="keeping-your-information-safe">
                Keeping Your Information Safe
              </h3>
              <p>
                Details on the security measures we implement to protect your
                data from unauthorized access or breaches.
              </p>
              <ul>
                <li>
                  <strong>Encryption</strong>: How we encrypt data to ensure its
                  security.
                </li>
                <li>
                  <strong>Monitoring</strong>: Our systems for detecting and
                  responding to security incidents.
                </li>
              </ul>
              <h3 id="compliance-with-regulations">
                Compliance with Regulations
              </h3>
              <p>
                Information on how we comply with data protection laws and
                regulations, ensuring your information is handled legally and
                ethically.
              </p>
              <h2 id="securing-your-account">Securing Your Account</h2>
              <h3 id="strong-password-practices">Strong Password Practices</h3>
              <p>
                Guidance on creating strong passwords and keeping your account
                secure.
              </p>
              <ul>
                <li>Tips for creating complex passwords.</li>
                <li>The importance of regular password updates.</li>
              </ul>
              <h3 id="recognizing-and-reporting-phishing">
                Recognizing and Reporting Phishing
              </h3>
              <p>
                How to identify phishing attempts and what to do if you
                encounter a suspicious email or message pretending to be from
                us.
              </p>
              <ul>
                <li>Identifying signs of phishing.</li>
                <li>Steps to report suspicious activity to our team.</li>
              </ul>
              <h3 id="two-factor-authentication-2fa">
                Two-Factor Authentication (2FA)
              </h3>
              <p>
                Encouraging the use of two-factor authentication for an added
                layer of security.
              </p>
              <ul>
                <li>How to set up 2FA on your account.</li>
                <li>The benefits of using 2FA.</li>
              </ul>
              <p>
                For more information about our privacy practices or if you have
                questions regarding your data and security, please do not
                hesitate to contact our support team. We are committed to
                maintaining a safe and secure environment for all our users.
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
