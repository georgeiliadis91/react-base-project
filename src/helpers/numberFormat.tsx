// 2 decimals formating ex 2.00
export const formatTwoDecimals = (num: number): string => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

// adds leading zeros example 1 -> 01
export const leadingZeros = (num: number, digits: number): string => {
  return String(num).padStart(digits + 1, "0");
};
