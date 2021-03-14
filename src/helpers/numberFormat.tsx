// 2 decimals formating ex 2.00
export const formatTwoDecimals = (num: number) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };
  
// adds leading zeros example 1 -> 01
export const leadingZeros = (num: number, digits: number) => {
return String(num).padStart(digits, "0");
};