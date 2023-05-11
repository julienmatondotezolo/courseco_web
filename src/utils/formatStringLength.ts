export const formatStringLength = (str: string): string => {
  let charLength = 35;

  if (str.length <= charLength) {
    return str;
  } else {
    return str.substring(0, charLength - 3) + "...";
  }
};
