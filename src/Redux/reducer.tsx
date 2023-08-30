import { ADD_CONTACT, EDIT_CONTACT, REMOVE_CONTACT } from "./actionTypes";

interface Contact {
  id: number;
  first_name: string;
  last_name: string;
  status: string;
}

interface State {
  contacts: Contact[];
}

const initialState: State = {
  contacts: JSON.parse(localStorage.getItem("contacts") || "[]"),
};

export default function reducer(state = initialState, action: any): State {
  switch (action.type) {
    case ADD_CONTACT: {
      let flag = 0;
      if (
        action.payload.first_name === "" ||
        action.payload.last_name === ""
      ) {
        alert("ohh You Missed Required Input, Please fill");
        flag = 1;
      } else {
        state.contacts.forEach((el: Contact) => {
          if (
            el.first_name === action.payload.first_name &&
            el.last_name === action.payload.last_name
          ) {
            alert("Name Already Exist In Contact");
            flag = 1;
          }
        });
      }

      if (!flag) {
        alert("Contact Saved Successfully!!!");
        const updatedContacts: Contact[] = JSON.parse(
          localStorage.getItem("contacts") || "[]"
        );
        updatedContacts.push({
          id: state.contacts.length + 1,
          ...action.payload,
        });
        localStorage.setItem("contacts", JSON.stringify(updatedContacts));
        return {
          ...state,
          contacts: [...updatedContacts],
        };
      }
      return state;
    }

    case REMOVE_CONTACT: {
      const Contacts: Contact[] = JSON.parse(
        localStorage.getItem("contacts") || "[]"
      );
      const updatedContacts: Contact[] = Contacts.filter(
        (el: Contact) => el.id !== action.payload.id
      );
      localStorage.setItem("contacts", JSON.stringify(updatedContacts));
      return {
        ...state,
        contacts: [...updatedContacts],
      };
    }

    case EDIT_CONTACT: {
      if (
        action.payload.first_name === "" ||
        action.payload.last_name === ""
       
      ) {
        alert("Input Fields Can Not Be Leave Empty");
        return state;
      }

      const flag = state.contacts.some(
        (el: Contact) =>
          el.id !== action.payload.id &&
          el.first_name === action.payload.first_name &&
          el.last_name === action.payload.last_name
      );
      if (flag) {
        return state;
      } else {
        const Contacts: Contact[] = JSON.parse(
          localStorage.getItem("contacts") || "[]"
        );
        const updatedContacts: Contact[] = Contacts.map((el: Contact) => {
          if (el.id === action.payload.id) {
            return { ...action.payload };
          } else {
            return el;
          }
        });
        localStorage.setItem("contacts", JSON.stringify(updatedContacts));
        alert("Contact has been Updated");
        return {
          ...state,
          contacts: state.contacts.map((el: Contact) => {
            if (el.id === action.payload.id) {
              return (el = { ...action.payload });
            } else {
              return el;
            }
          }),
        };
      }
    }

    default:
      return state;
  }
}
