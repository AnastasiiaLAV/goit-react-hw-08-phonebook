import { useDispatch, useSelector } from "react-redux";
import { getFilter, getFilteredContacts } from "redux/selectors";
import { removeContacts } from "redux/contacts/contacts-operations";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import ContactForm from "./FormAddCohntacts/Form";


const MyContacts = () => {
    const contacts = useSelector(getFilteredContacts);
const filter = useSelector(getFilter);

const dispatch = useDispatch();

const deleteContact =(payload) => {
    dispatch(removeContacts(payload));
  } 

    return (
        <>
            <div>
                <h1>Phonebook</h1>
                <ContactForm/>
            </div>
            <div>
                <h2>Contacts</h2>
                <Filter filter={filter}/>
                <ContactList contacts={contacts} onDeleteContact={deleteContact}/>
            </div>
        </>
    );
}

export default MyContacts;