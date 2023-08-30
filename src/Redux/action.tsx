import { ADD_CONTACT, EDIT_CONTACT, REMOVE_CONTACT } from './actionTypes';


export const addContact = (payload:any) => {
  console.log(payload)
  return {
    type: ADD_CONTACT,
    payload,
  };
};

export const removeContact = (id:number) => {
  return {
    type: REMOVE_CONTACT,
    payload: {
      id,
    },
  };
};
export const editContact = (payload:any) => {
  console.log(payload)
  return {
    type: EDIT_CONTACT,
    payload,
  };
};

