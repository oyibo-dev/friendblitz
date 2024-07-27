/* eslint-disable @next/next/no-img-element */
"use client";
import { useDebounce } from "@/lib/hooks/use-debounce";
import { caesarCipher, getMNO, numberFormatter } from "@/lib/utils";
import { useCallback, useEffect, useRef, useState } from "react";
import { z } from "zod";
import { account, databases, ID } from "../appwrite";
import { Query } from "appwrite";
import { COUNTRY_CODE_NUMERIC } from "@/lib/constants";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useLocalStorage } from "@/lib/hooks/use-local-storage";
import { Loader } from "../components/loader";
import cookies from "js-cookie";

export default function Page() {
  // Critical User Inputs
  const [inputValue, setInputValue] = useState<string>(""); // State for input value
  const [number, setNumber] = useState<string>(""); // State for number input

  // UI Control States
  const [isDisabled, setIsDisabled] = useState<boolean>(false); // Disable button state
  const [showResetButton, setShowResetButton] = useState<boolean>(false); // Show reset button state
  const [showManualRegister, setShowManualRegister] = useState(false); // State for manual call button
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // Modal visibility state

  // Feedback and Status Indicators
  const [error, setError] = useState<string>(""); // Error message state
  const [isLoading, setIsLoading] = useState<boolean>(false); // Loading state

  // Session and Contextual Information
  // const [friend, setFriend] = useState<Models.Document | null>(null); // Friend state
  const [userId, setUserId] = useState<string | null>(null); // User ID state
  // const [username, setUsername] = useState<string>(""); // Username state

  // Custom hooks for local storage
  const [necessary, setNecessary] = useLocalStorage("necessary", false);
  const [functional, setFunctional] = useLocalStorage("functional", false);

  // Refs
  const OTPRef = useRef<HTMLInputElement>(null); // Reference to OTP input field

  // Debounce effect
  const debouncedNumber = useDebounce<string>(number, 500); // Debounce the number input to limit rapid updates

  // Navigation and query utilities
  const router = useRouter();
  // const pathname = usePathname();
  // const searchParams = useSearchParams();

  // Schema for input validation and transformation
  const inputSchema = z.union([
    z
      .string()
      .regex(/^\d+(\.\d+)?$/)
      .transform((val) => ({ type: "number", value: val })), // Validates numeric input with optional decimal
    z.string().transform((val) => ({
      type: "text",
      value: val
        .trim()
        .replace(/[^\w\s]/g, "")
        .toLowerCase(),
    })), // Trims and sanitizes text input
  ]);

  /**
   * Handles input change events on text inputs.
   *
   * @param event The keyboard event triggered by the user.
   */
  const handleInputChange = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // Check if the Enter key was pressed
    if (event.key === "Enter") {
      // Extract the current input value
      const inputValue = event.currentTarget.value;

      // Validate and transform the input value using inputSchema
      const result = inputSchema.parse(inputValue);

      if (result.type === "number") {
        // If the input is numeric and starts with a zero, keep it as a string to preserve the leading zero
        const mno = getMNO(result.value); // Assuming getMNO is defined elsewhere
        const isKnownMNO = mno !== "Unknown"; // Check if MNO is recognized

        if (isKnownMNO) {
          setNumber(result.value); // Update state with known MNO
        } else {
          setError("The entered number is invalid."); // Set error message if MNO is unknown
        }
      } else if (result.type === "text") {
        // Clean up the input: trim and convert to lowercase
        const cleanedText = result.value.replace(/[^\w\s]/g, "").toLowerCase(); // Remove non-alphanumeric characters and convert to lowercase

        // Query the database for the username
        databases
          .listDocuments(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE!,
            process.env.NEXT_PUBLIC_APPWRITE_USERS_COLLECTION!,
            [Query.equal("USERNAME", cleanedText)] // Query for matching usernames
          )
          .then(
            function (response) {
              if (response["documents"].some(() => true)) {
                // Check if any documents match
                const decodedNumber = caesarCipher(
                  response["documents"][0]["PHONE_NUMBER"], // Decode the phone number
                  Number(process.env.NEXT_PUBLIC_CIPHER_SHIFT!),
                  "decode",
                  true
                );
                setNumber(decodedNumber); // Update state with decoded number
              }
            },
            function (error) {
              setError(error);
            } // Handle errors
          );
      }
    }
  };

  /**
   * Registers a user by generating a unique session token based on their phone number.
   *
   * @param number The phone number of the user to be registered.
   */
  const register = useCallback(async (number: string) => {
    // Format the phone number with a country prefix
    const formatter = new numberFormatter(number, COUNTRY_CODE_NUMERIC);

    // Generate a unique session token for the user using the formatted number
    const token = account.createPhoneToken(
      ID.unique(),
      formatter.withPrefix() // Ensure the number includes the country prefix
    );

    // Display a toast notification for the token generation promise
    toast.promise(token, {
      loading: "Loading...",
      success: (data) => {
        setUserId(data.userId);
        return `We sent you a OTP code. Be sure to check your spam too.`;
      },
      error: "Your sign-in request failed. Please try again.",
    });
  }, []); // No dependencies; the function does not use external values that could change over time

  /**
   * Adjusts UI and triggers registration based on `debouncedNumber` length.
   * On reaching 11 characters, disables input and shows reset button via `register`.
   * Otherwise, enables input and hides reset button.
   */
  useEffect(() => {
    // Check if the debounced input length is exactly 11 characters
    if (debouncedNumber.length === 11) {
      // Register the user with the debounced number
      register(debouncedNumber);
      // Disable the input field
      setIsDisabled(true);
      // Show the reset button
      setShowResetButton(true);
      // Set a timer to enable manual register button after 10 seconds
      setTimeout(() => {
        setShowManualRegister(true);
      }, 10000); // 10 seconds
    } else {
      // Enable the input field if the length is not 11
      setIsDisabled(false);
      // Hide the reset button if the length is not 11
      setShowResetButton(false);
    }
  }, [debouncedNumber, register]); // Dependency array includes debouncedNumber and register

  /**
   * Resets the input field and related UI states.
   */
  const resetInput = () => {
    // Clear the input field
    setInputValue("");
    setNumber("");
    // Re-enable the input field
    setIsDisabled(false);
    // Hide the reset button
    setShowResetButton(false);
    // Hide the manual register button
    setShowManualRegister(false);
  };

  /**
   * Login function to authenticate a user based on a 6-digit OTP.
   * @param none - This function does not accept any parameters.
   */
  const login = async () => {
    // Check if the userId is defined and if the OTP length is exactly 6
    if (userId && OTPRef.current && OTPRef.current.value.length === 6) {
      setIsLoading(true); // Set isLoading to true when the login process starts

      // Define a session using the provided userId and OTP
      const session = await account.updatePhoneSession(
        userId,
        OTPRef.current.value
      );

      // Attempt to fetch a user document from the database using the session token
      if (session) {
        // TODO: Implement with Next.js action later
        // Set a cookie with the name and value
        cookies.set("session", session.userId);

        // Redirect the user to the leaderboard page
        router.push("/leaderboard");
      }
    }
  };

  /**
   * Toggles the modal open/close state.
   */
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  /**
   * Toggles the necessary preference state.
   */
  const toggleNecessary = () => {
    setNecessary(!necessary);
  };

  /**
   * Toggles the functional preference state.
   */
  const toggleFunctional = () => {
    setFunctional(!functional);
  };

  /**
   * Saves the current preferences state.
   */
  const savePreferences = () => {
    setNecessary(necessary); // Save the latest necessary preference state
    setFunctional(functional); // Save the latest functional preference state
  };

  return (
    <main className="flex-grow">
      <section>
        <div className="2xl:max-w-7xl mx-auto 2xl:border-x-2 border-black">
          <div className="relative justify-center max-h-full overflow-hidden lg:px-0 md:px-12 grid lg:grid-cols-2 h-screen lg:divide-x-2 divide-black">
            <div className="relative z-10 flex flex-col flex-1 px-4 py-10 bg-yellow-500 lg:py-24 md:flex-none md:px-28 sm:justify-center">
              <div className="w-full mx-auto md:px-0 sm:px-4 text-center">
                <h2 className="text-3xl lg:text-5xl font-medium text-black">
                  Sign in to Friend Blitz
                </h2>
                <div className="mt-6">
                  <div className="space-y-6">
                    <div className="border-2 border-black divide-y-2 divide-black shadow rounded-xl overflow-hidden">
                      <div>
                        <label htmlFor="username" className="sr-only">
                          Username or phone number
                        </label>
                        <div className="relative">
                          <input
                            id="username"
                            type="text"
                            placeholder="Username or Phone number"
                            className="block w-full px-3 py-4 text-xl text-black border-2 border-transparent appearance-none placeholder-black border-black focus:border-black focus:bg-lila-500 focus:outline-none focus:ring-black sm:text-sm"
                            onChange={(e) => setInputValue(e.target.value)}
                            value={inputValue}
                            onKeyDown={handleInputChange}
                            disabled={isDisabled}
                            autoComplete="off"
                          />
                          {showResetButton && (
                            <div
                              onClick={resetInput}
                              className="cursor-pointer absolute inset-y-0 right-0 flex items-center pr-3"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-circle-letter-x h-5 w-5 text-warning-500"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <circle cx={12} cy={12} r={9} />
                                <path d="M10 8l4 8" />
                                <path d="M10 16l4 -8" />
                              </svg>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-span-full">
                        <label htmlFor="OTP" className="sr-only">
                          OTP
                        </label>
                        <input
                          ref={OTPRef}
                          maxLength={6}
                          id="opt"
                          type="text"
                          placeholder="Type otp here..."
                          className="block w-full px-3 py-4 text-xl text-black border-2 border-transparent appearance-none placeholder-black border-black focus:border-black focus:bg-lila-500 focus:outline-none focus:ring-black sm:text-sm"
                          disabled={!number}
                          autoComplete="off"
                        />
                      </div>
                    </div>
                    {showManualRegister && (
                      <div className="flex items-center justify-between">
                        <div className="text-sm">
                          <span
                            onClick={() => register(debouncedNumber)}
                            className="text-black lg:text-2xl hover:text-black cursor-pointer"
                          >
                            Request OTP Again
                          </span>
                        </div>
                      </div>
                    )}
                    {error && (
                      <div className="flex items-center justify-between">
                        <div className="text-sm">
                          <span className="text-danger-500 lg:text-2xl pointer-events-none">
                            {error}
                          </span>
                        </div>
                      </div>
                    )}
                    {/* {friend && (
                      <div>
                        <button
                          type="submit"
                          aria-label="submit"
                          className="text-black items-center shadow shadow-black text-lg font-semibold inline-flex px-6 focus:outline-none justify-center text-center bg-white border-black ease-in-out transform transition-all focus:ring-lila-700 focus:shadow-none border-2 duration-100 focus:bg-black focus:text-white py-3 rounded-lg h-16 tracking-wide focus:translate-y-1 w-full hover:text-lila-800"
                        >
                        </button>
                      </div>
                    )} */}
                    <div className="flex-col flex gap-3 mt-10">
                      <button
                        type="submit"
                        className="text-black items-center shadow shadow-black text-lg font-semibold inline-flex px-6 focus:outline-none justify-between text-center bg-white border-black ease-in-out transform transition-all focus:ring-lila-700 focus:shadow-none border-2 duration-100 focus:bg-black focus:text-white sm:w-auto py-3 rounded-lg h-16 tracking-wide focus:translate-y-1 w-full hover:text-lila-800 gap-3"
                        onClick={() =>
                          toast.error(
                            "Your sign-in request failed. Please try again."
                          )
                        }
                      >
                        <span>Log in with</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-brand-facebook"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                        </svg>
                      </button>
                      <button
                        type="submit"
                        className="text-black items-center shadow shadow-black text-lg font-semibold inline-flex px-6 focus:outline-none justify-between text-center bg-white border-black ease-in-out transform transition-all focus:ring-lila-700 focus:shadow-none border-2 duration-100 focus:bg-black focus:text-white sm:w-auto py-3 rounded-lg h-16 tracking-wide focus:translate-y-1 w-full hover:text-lila-800"
                        onClick={() => setIsModalOpen(true)}
                        disabled={!userId}
                      >
                        Log in
                        <svg
                          className="size-8"
                          viewBox="0 0 36 36"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.22789 16.8936H4.22789V18.8936H5.22789V16.8936ZM31.2279 18.8936C31.7802 18.8936 32.2279 18.4459 32.2279 17.8936C32.2279 17.3413 31.7802 16.8936 31.2279 16.8936V18.8936ZM22.2279 7.89362V6.89362H20.2279V7.89362H22.2279ZM30.6485 18.671C31.1334 18.9355 31.7408 18.7568 32.0053 18.2719C32.2697 17.7871 32.0911 17.1797 31.6062 16.9152L30.6485 18.671ZM20.2278 27.7931V28.7931H22.2278V27.7931H20.2278ZM5.22789 18.8936H31.1273V16.8936H5.22789V18.8936ZM31.1273 18.8936H31.2279V16.8936H31.1273V18.8936ZM20.2279 7.89362C20.2279 9.36603 21.0232 10.7723 21.9994 11.9705C22.9957 13.1932 24.2995 14.3434 25.5662 15.3222C26.8387 16.3055 28.1063 17.1406 29.0529 17.7286C29.5271 18.0232 29.9231 18.2571 30.2017 18.4181C30.341 18.4987 30.4511 18.561 30.5272 18.6037C30.5653 18.625 30.5948 18.6414 30.6152 18.6527C30.6254 18.6583 30.6334 18.6627 30.6389 18.6658C30.6417 18.6673 30.6439 18.6685 30.6455 18.6694C30.6463 18.6698 30.647 18.6702 30.6475 18.6704C30.6477 18.6706 30.648 18.6707 30.6481 18.6708C30.6484 18.6709 30.6485 18.671 31.1274 17.7931C31.6062 16.9152 31.6063 16.9153 31.6064 16.9153C31.6064 16.9153 31.6064 16.9153 31.6064 16.9153C31.6063 16.9152 31.606 16.9151 31.6056 16.9149C31.6048 16.9144 31.6034 16.9137 31.6015 16.9126C31.5975 16.9104 31.5913 16.907 31.5828 16.9023C31.5657 16.8929 31.5397 16.8784 31.5052 16.8591C31.4363 16.8204 31.3337 16.7624 31.2024 16.6865C30.9396 16.5346 30.5621 16.3116 30.1083 16.0297C29.1987 15.4647 27.9914 14.6686 26.7891 13.7396C25.5809 12.806 24.4098 11.7626 23.5499 10.7072C22.67 9.62732 22.2279 8.6712 22.2279 7.89362H20.2279ZM31.1273 17.8936C30.7527 16.9664 30.7524 16.9666 30.7521 16.9667C30.7519 16.9667 30.7516 16.9669 30.7513 16.967C30.7507 16.9673 30.7499 16.9676 30.749 16.9679C30.7472 16.9687 30.7447 16.9697 30.7417 16.9709C30.7357 16.9734 30.7273 16.9768 30.7166 16.9812C30.6953 16.99 30.6648 17.0028 30.6258 17.0193C30.5478 17.0524 30.4356 17.1007 30.2941 17.1639C30.0113 17.2903 29.6105 17.4762 29.1309 17.7176C28.1742 18.1991 26.8918 18.9078 25.603 19.8126C24.3193 20.7138 22.9944 21.8337 21.9824 23.1472C20.9694 24.4621 20.2278 26.0278 20.2278 27.7931H22.2278C22.2278 26.6087 22.7237 25.4621 23.5668 24.3678C24.411 23.272 25.5609 22.2858 26.7521 21.4495C27.9382 20.6169 29.1306 19.9568 30.0301 19.504C30.4786 19.2782 30.8512 19.1055 31.1097 18.9901C31.2389 18.9324 31.3394 18.8891 31.4064 18.8607C31.4399 18.8465 31.465 18.836 31.4812 18.8293C31.4892 18.826 31.495 18.8236 31.4985 18.8222C31.5003 18.8215 31.5014 18.821 31.502 18.8208C31.5023 18.8206 31.5024 18.8206 31.5024 18.8206C31.5024 18.8206 31.5023 18.8206 31.5023 18.8206C31.5021 18.8207 31.5019 18.8208 31.1273 17.8936Z"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden bg-lila-500 lg:block lg:flex-1 lg:relative sm:contents">
              <div className="absolute inset-0 object-cover w-full h-full bg-lila-500">
                <img
                  className="object-center w-full h-full"
                  src="/logo.svg"
                  alt="logo"
                  width={1310}
                  height={873}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              toggleModal();
            }
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal"
          className="fixed inset-0 z-10 w-screen overflow-y-auto"
        >
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-lila-500 bg-opacity-50"
            aria-hidden="true"
          ></div>
          {/* Panel */}
          <div
            onClick={toggleModal}
            className="relative flex min-h-screen items-center justify-center p-4"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg overflow-y-auto ring-2 ring-inset ring-black text-black bg-white shadow-small rounded-xl p-8"
            >
              <div>
                <div>
                  <h2
                    className="text-xl font-medium text-black"
                    id="modal-title-6"
                  >
                    Customize Consent Preferences
                  </h2>
                  {/* Content */}
                  <p className="mt-6 text-black text-base">
                    We use first-party and third-party cookies to provide a
                    better experience, tailor and measure ads, analyze traffic,
                    and personalize content. See Section 4 of our
                    <a
                      href="#_"
                      className="text-lila-800 hover:text-black duration-300"
                    >
                      Privacy Policy
                    </a>{" "}
                    to learn more.
                  </p>
                  <div className="mt-4">
                    <div className="flex items-center justify-between py-3">
                      <span className="flex flex-grow flex-col">
                        <span
                          className="text-sm font-medium leading-6 text-black"
                          id="availability-label"
                        >
                          Necessary
                        </span>
                        <span className="text-xs text-black">
                          Necessary cookies are required for this website to
                          function and cannot be disabled.
                        </span>
                      </span>
                      {/* Toggle */}
                      <div className="items-center inline-flex p-4 bg-white">
                        <button
                          onClick={toggleNecessary}
                          type="button"
                          role="switch"
                          aria-checked={necessary}
                          aria-labelledby="toggle-label-1"
                          className={`relative inline-flex w-10 rounded-full py-1 transition bg-lila-500 border-2 shadow-small border-black ${
                            necessary ? "" : "bg-black"
                          }`}
                        >
                          <span
                            className={`bg-black h-2 w-2 rounded-full transition shadow-md ${
                              necessary
                                ? "translate-x-6 bg-white"
                                : "translate-x-1"
                            }`}
                            aria-hidden="true"
                          ></span>
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-3">
                      <span className="flex flex-grow flex-col">
                        <span
                          className="text-sm font-medium leading-6 text-black"
                          id="availability-label"
                        >
                          Functional
                        </span>
                        <span className="text-xs text-black">
                          Functional cookies enable this website to provide
                          enhanced functionality and personalization.
                        </span>
                      </span>
                      {/* Toggle */}
                      <div className="items-center inline-flex p-4 bg-white">
                        <button
                          onClick={toggleFunctional}
                          type="button"
                          role="switch"
                          aria-checked={functional}
                          aria-labelledby="toggle-label-2"
                          className={`relative inline-flex w-10 rounded-full py-1 transition bg-lila-500 border-2 shadow-small border-black ${
                            functional ? "" : "bg-black"
                          }`}
                        >
                          <span
                            className={`bg-black h-2 w-2 rounded-full transition shadow-md ${
                              functional
                                ? "translate-x-6 bg-white"
                                : "translate-x-1"
                            }`}
                            aria-hidden="true"
                          ></span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="inline-flex flex-wrap items-center w-full gap-2 mt-10">
                    <button
                      onClick={savePreferences}
                      className="text-black items-center shadow shadow-black text-lg font-semibold inline-flex px-6 focus:outline-none justify-center text-center bg-white border-black ease-in-out transform transition-all focus:ring-lila-700 focus:shadow-none border-2 duration-100 focus:bg-black focus:text-white py-3 rounded-lg h-16 tracking-wide focus:translate-y-1 w-full hover:text-lila-800"
                    >
                      Save my preferences
                    </button>
                    <button
                      onClick={() => router.back()}
                      className="text-danger-950 items-center shadow shadow-danger-500 text-lg font-semibold inline-flex px-6 focus:outline-none justify-center text-center bg-danger-300 focus:bg-danger-500 border-danger-500 ease-in-out duration-300 outline-none hover:bg-danger-400 hover:text-white focus:text-white focus:shadow-none border-2 py-3 rounded-lg h-16 tracking-wide focus:translate-y-1 w-full"
                    >
                      Reject all
                    </button>
                    <button
                      className="text-black items-center shadow shadow-lila-600 text-lg font-semibold inline-flex px-6 focus:outline-none justify-center text-center bg-lila-300 focus:bg-lila-600 border-lila-600 duration-300 outline-none focus:shadow-none border-2 py-3 rounded-lg h-16 tracking-wide focus:translate-y-1 w-full hover:bg-lila-500"
                      onClick={login}
                    >
                      {!isLoading ? (
                        "Accept all"
                      ) : (
                        <Loader className="size-8 animate-spin" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
