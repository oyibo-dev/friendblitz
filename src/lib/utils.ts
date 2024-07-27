import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export class numberFormatter {
  private cleanedNumber: string;
  private countryCode: string;

  /**
   * Constructs a new instance of the NumberFormatter class.
   * Validates the provided country code and cleans the phone number.
   *
   * @param {string} number - The raw phone number to format.
   * @param {string} countryCode - The country code associated with the phone number.
   */
  constructor(number: string, countryCode: string) {
    // Validate the country code
    if (!countryCode.startsWith("+")) {
      throw new Error("Country code must start with '+'");
    }
    // Validate the country code length
    if (countryCode.length < 2 || countryCode.length > 4) {
      throw new Error(
        "Country code length must be between 2 and 4 characters after '+'"
      );
    }

    // Clean the phone number and remove the initial '0' if present in one step
    this.cleanedNumber = number.replace(/\D/g, "");
    this.countryCode = countryCode;

    // Additional validation to prevent common mistakes
    this.validatePrefix();
  }

  /**
   * Validates the prefix of the cleaned phone number against known common mistakes.
   */
  private validatePrefix(): void {
    // Define commonMistakes with an index signature
    const commonMistakes: { [key: string]: string[] } = {
      "+234": ["018", "008", "019", "009", "017", "007"], // Example for Nigeria (+234)
      // Add more country codes and their common mistakes here
    };

    const prefix = this.cleanedNumber.substring(0, 3); // Assuming the first 3 digits are the prefix
    if (commonMistakes[this.countryCode]?.includes(prefix)) {
      throw new Error(
        `Common mistake detected: '${prefix}' is not a valid prefix for ${this.countryCode}.`
      );
    }
  }

  /**
   * Returns the phone number formatted with the country code prefix.
   *
   * @returns {string} The phone number with the country code prefix.
   */
  withPrefix(): string {
    return `${this.countryCode}${this.cleanedNumber.replace(/^0/, "")}`;
  }

  /**
   * Returns the phone number without the country code prefix.
   *
   * @returns {string} The phone number without the country code prefix.
   */
  withoutPrefix(): string {
    return this.cleanedNumber;
  }

  /**
   * Returns only the country code prefix.
   *
   * @returns {string} The country code prefix.
   */
  getPrefix(): string {
    return this.countryCode;
  }

  /**
   * Checks if the phone number is considered valid based on its length.
   *
   * @returns {boolean} True if the phone number is valid, false otherwise.
   */
  isValid(): boolean {
    // Basic validation: check if the cleaned phone number has a reasonable length
    return this.cleanedNumber.length >= 7 && this.cleanedNumber.length <= 15;
  }
}

/**
 * Type definition for Mobile Network Operator (MNO) data.
 */
export type MNOData = {
  name: string;
  prefix: string[];
};

/**
 * Determines the Mobile Network Operator (MNO) based on the prefix of a given Nigerian phone number.
 *
 * @param {string} number - The phone number to identify the MNO for.
 * @returns {string} The name of the identified MNO or 'Unknown' if not identifiable.
 */
export function getMNO(number: string): string {
  // Normalize the phone number by replacing '+234' with '0' if present
  let formattedNumber = number.startsWith("+234")
    ? number.replace("+234", "0")
    : number;

  // Predefined MNO data
  const mnoData: MNOData[] = [
    {
      name: "airtel",
      prefix: [
        "0802",
        "0808",
        "0708",
        "0812",
        "0701",
        "0902",
        "0901",
        "0904",
        "0907",
        "0912",
      ],
    },
    {
      name: "mtn",
      prefix: [
        "0803",
        "0806",
        "0703",
        "0706",
        "0813",
        "0816",
        "0810",
        "0814",
        "0903",
        "0906",
        "0913",
        "0916",
        "07025",
        "07026",
        "0704",
      ],
    },
    {
      name: "glo",
      prefix: ["0805", "0807", "0705", "0815", "0811", "0905", "0915"],
    },
  ];

  // Create a map for efficient lookup of MNO by prefix
  const prefixMap: { [key: string]: string } = {};
  mnoData.forEach((mno) => {
    mno.prefix.forEach((prefix) => {
      prefixMap[prefix] = mno.name; // Map each prefix to its corresponding MNO name
    });
  });

  // Iterate over the map to find a match for the formatted number's prefix
  for (const prefix in prefixMap) {
    if (formattedNumber.startsWith(prefix)) {
      return prefixMap[prefix]; // Return the MNO name if a match is found
    }
  }

  // If no matching prefix is found, return 'Unknown'
  return "Unknown";
}

/**
 * Implements the Caesar Cipher encryption/decryption algorithm.
 * It supports both encoding and decoding modes, and optionally encodes/decodes the result in Base64.
 *
 * @param {string} text - The input text to be encrypted or decrypted.
 * @param {number} shift - The number of positions to shift each character in the text.
 * @param {'encode'|'decode'} mode - The operation mode ('encode' for encryption, 'decode' for decryption).
 * @param {boolean} [base64=false] - Whether to encode/decode the result in Base64.
 * @returns {string} The resulting text after applying the Caesar Cipher and optional Base64 encoding/decoding.
 */
export function caesarCipher(
  text: string,
  shift: number,
  mode: "encode" | "decode",
  base64: boolean = false
): string {
  let result = "";

  // Ensure the shift is within the range of the alphabet
  shift = ((shift % 26) + 26) % 26; // Adjust shift to be positive and within range

  if (base64 && mode === "decode") {
    text = atob(text); // Decode Base64 before applying Caesar cipher
  }

  for (let i = 0; i < text.length; i++) {
    let char = text.charAt(i);
    let asciiOffset: number, newCharAscii: number;

    // Check if the character is a letter
    if (char.match(/[a-z]/i)) {
      asciiOffset =
        char.toLowerCase() === char ? "a".charCodeAt(0) : "A".charCodeAt(0);
      let charAscii = char.charCodeAt(0);
      if (mode === "encode") {
        newCharAscii = ((charAscii - asciiOffset + shift) % 26) + asciiOffset;
      } else {
        // Decoding mode
        newCharAscii =
          ((charAscii - asciiOffset - shift + 26) % 26) + asciiOffset;
      }
    } else if (char.match(/[0-9]/)) {
      // Check if the character is a number
      asciiOffset = "0".charCodeAt(0);
      let charAscii = char.charCodeAt(0);
      if (mode === "encode") {
        newCharAscii = ((charAscii - asciiOffset + shift) % 10) + asciiOffset;
      } else {
        // Decoding mode
        newCharAscii =
          ((charAscii - asciiOffset - shift + 10) % 10) + asciiOffset;
      }
    } else {
      // If it's not a letter or number, just append it as is
      result += char;
      continue;
    }

    result += String.fromCharCode(newCharAscii);
  }

  if (base64 && mode === "encode") {
    result = btoa(result); // Encode result to Base64 after applying Caesar cipher
  }

  return result;
}
