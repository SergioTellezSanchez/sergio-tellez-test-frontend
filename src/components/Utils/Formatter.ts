export const dateFormatter = (
  date: string | number | null | undefined | Date
) => {
  if (!date) {
    return "N/A";
  } else {
    const unformatted = new Date(date);
    return (
      ("0" + unformatted.getDate()).slice(-2) +
      "-" +
      ("0" + (unformatted.getMonth() + 1)).slice(-2) +
      "-" +
      unformatted.getFullYear()
    );
  }
};

/**
 * This function returns the percent representation from the decimal param
 * @param value
 */
export const percentageFormatter = (value: number) => {
  return `${value * 100}%`;
};

/**
 * This function returns the currency value with separators and comas and also
 * the currency Symbol.
 * @param currency
 * @param value
 */
export const currencyFormatter = (
  currency: string | undefined,
  value: number | undefined
) => {
  //To register a new currency format, first insert the locale string into
  // the localeStrings dict where the key is the currency and the value is
  // the locale String
  const localeStrings: any = {
    MXN: "es-MX",
  };

  if (currency && value) {
    return value.toLocaleString(localeStrings[currency], {
      style: "currency",
      currency: currency,
    });
  }
  return "N/A";
};
