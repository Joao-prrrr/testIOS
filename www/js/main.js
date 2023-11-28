import Contacts from './Contacts.js';

const readAllContactsBtn = document.getElementById('readAllContacts');

readAllContactsBtn.addEventListener('click', () => {
    let contactsArray = Contacts.readAllContacts();
    console.log(contactsArray);
});