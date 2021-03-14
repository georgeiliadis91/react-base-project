import { StringDecoder } from "node:string_decoder";
import { VALID_SELECTION_NUMBER } from "../constants/constants";
import { formatTwoDecimals } from "./numberFormat";

export const errorMessage = ( errMsg:string) => {
  return `Error: ${errMsg}`;
};

export const successMessage = (successMsg:string) => {
  return `Sucess: ${successMsg}`;
};

