import LOCAL_STORAGE_KEYS from "../constants/localStorageKeys";
import { DEFAULT_USER_AUTH } from "../customHooks/AuthHandler";

export default function getUserFromLocalStorage() {
  const userDetails = localStorage.getItem(LOCAL_STORAGE_KEYS.USER_AUTH);
  if (userDetails) {
    const updatedDetails = JSON.parse(userDetails);
    return updatedDetails;
  }
  return DEFAULT_USER_AUTH;
}
