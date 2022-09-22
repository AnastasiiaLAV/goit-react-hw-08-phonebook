// import ContactForm from "./components/Form/Form";
// import ContactList from "./components/ContactList/ContactList";
// import Filter from "./components/Filter/Filter";
// import { Wrapper } from "./App.styled";
// import { useDispatch, useSelector } from "react-redux";
// import { getFilter, getFilteredContacts } from "redux/selectors";
// import { removeContacts } from "redux/contacts/contacts-operations";

import UserRouters from "modules/UserRouters/UserRouters";
import Navbar from "modules/Navbar/Navbar";

export default function App() {
// const contacts = useSelector(getFilteredContacts);
// const filter = useSelector(getFilter);

// const dispatch = useDispatch();

// const deleteContact =(payload) => {
//     dispatch(removeContacts(payload));
//   } 

  return (
    <div>
      <Navbar/>
      <UserRouters/>
    </div>
      // <Wrapper>
      //   <h1>Phonebook</h1>
      //   <ContactForm/>

      //   <h2>Contacts</h2>
      //   <Filter filter={filter}/>
      //   <ContactList contacts={contacts} onDeleteContact={deleteContact}/>
      // </Wrapper>
    )
}
