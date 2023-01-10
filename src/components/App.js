import { useSelector } from 'react-redux';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import MyLoader from './Loader';
import css from './App.module.css';

function App() {
  const { isLoading, error } = useSelector(state => state.contacts);
  return (
    <div className={css.phonebookSection}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && <MyLoader />}
      {error && <h2>Error: {error}</h2>}
      <ContactList />
    </div>
  );
}

export default App;
