import { GET_USERPROFILE, EDIT_LASTNAME, EDIT_FIRSTNAME } from "./type.actions";

export const userProfile = (userData) => {
  return {
    type: GET_USERPROFILE,
    payload: userData,
  };
};

export const updateFirstname = (firstname) => {
  return {
    type: EDIT_FIRSTNAME,
    payload: firstname,
  };
};

export const updateLastname = (firstname) => {
  return {
    type: EDIT_LASTNAME,
    payload: firstname,
  };
};
