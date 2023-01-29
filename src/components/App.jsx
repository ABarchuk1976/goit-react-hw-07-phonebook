import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/selectors.js';

import { AppTitle, ContactsTitle, Container } from './App.styled.js';
import InputForm from 'components/InputForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { fetchContacts } from 'redux/operations.js';
import Loader from './Loader/Loader.jsx';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <AppTitle>Phonebook</AppTitle>
      <InputForm />
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter />
      {isLoading && !error && <Loader />}
      {!!contacts && <ContactList />}
      <ToastContainer />
    </Container>
  );
};

export default App;
