import React from "react";

const Page = () => {
  return (
    <main className="flex-grow">
      <section>
        <div className="items-center w-full mx-auto 2xl:max-w-7xl 2xl:border-x-2 border-black">
          <div className="p-8 lg:p-20 lg:py-32 items-center gap-12 h-full bg-lila-500 border-b-2 border-black">
            <div className="text-center max-w-4xl mx-auto">
              <p className="text-5xl lg:text-7xl text-black">
                Billing and Payments
              </p>
            </div>
          </div>
        </div>
        <div className="2xl:border-x-2 2xl:max-w-7xl border-black mx-auto p-8 lg:p-20">
          <div className="max-w-3xl mx-auto">
            <div className="prose-styles">
              <p>
                Welcome to our Billing and Payments information page. Here,
                you’ll find comprehensive details on how billing works, learn
                about the variety of payment methods available, and find
                guidance for any payment-related inquiries you might have. Our
                aim is to make your billing and payment process as smooth and
                understandable as possible.
              </p>
              <h2 id="how-billing-works">How Billing Works</h2>
              <p>
                Understanding the billing process is essential for a hassle-free
                experience with our services. Here’s what you need to know:
              </p>
              <h3 id="billing-cycle">Billing Cycle</h3>
              <p>
                Your billing cycle begins on the day you sign up for a paid
                account and recurs monthly or annually, depending on your chosen
                plan. You’ll receive a notification email a few days before your
                billing date.
              </p>
              <h3 id="invoices">Invoices</h3>
              <p>
                After each payment, an invoice will be generated and sent to
                your email address. You can also access all your invoices
                directly from your account settings under the billing section.
              </p>
              <h3 id="upgrades-downgrades-and-cancellations">
                Upgrades, Downgrades, and Cancellations
              </h3>
              <p>
                You can upgrade or downgrade your subscription plan at any time.
                Charges will be prorated accordingly. If you decide to cancel
                your subscription, your account will remain active until the end
                of your current billing period.
              </p>
              <h2 id="payment-methods">Payment Methods</h2>
              <p>
                We strive to offer a variety of payment methods for your
                convenience:
              </p>
              <ul>
                <li>
                  <strong>Credit and Debit Cards</strong>: We accept major
                  credit and debit cards, including Visa, MasterCard, and
                  American Express.
                </li>
                <li>
                  <strong>Online Payment Services</strong>: Payments can also be
                  made via PayPal, Apple Pay, and Google Pay where available.
                </li>
                <li>
                  <strong>Bank Transfers and Checks</strong>: For annual
                  subscriptions, we can accommodate payments through bank
                  transfers or checks upon request.
                </li>
              </ul>
              <h2 id="payment-related-inquiries">Payment-Related Inquiries</h2>
              <p>
                If you encounter any issues with your payment or have questions
                regarding billing:
              </p>
              <h3 id="failed-payments">Failed Payments</h3>
              <p>
                If your payment fails, check to ensure your payment information
                is up to date and accurate. You will also receive instructions
                on how to resolve the payment issue in a notification email.
              </p>
              <h3 id="refunds-and-credits">Refunds and Credits</h3>
              <p>
                Our refund policy allows for refunds under certain conditions.
                If you believe you’re eligible for a refund, please contact our
                support team with details of your request.
              </p>
              <h3 id="updating-payment-information">
                Updating Payment Information
              </h3>
              <p>
                You can update your payment information directly from your
                account settings. It’s important to keep this information
                current to avoid service interruptions.
              </p>
              <p>
                For further assistance with billing and payments, please don’t
                hesitate to contact our customer support team. We’re here to
                help ensure your experience is seamless and satisfactory.
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
