import { useSelector } from 'react-redux';

import { selectVisibleContacts } from 'redux/selectors';

import ContactListItem from 'components/ContactListItem';
import { StyledList } from './ContactList.styled';

const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  console.log('VisibleContacts: ', visibleContacts, 'All contacts: ');

  return (
    <StyledList>
      {visibleContacts.map(({ id, name, phone }) => (
        <ContactListItem key={id} id={id} name={name} phone={phone} />
      ))}
    </StyledList>
  );
};

export default ContactList;
