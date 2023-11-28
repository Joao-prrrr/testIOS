import ContactsX from 'cordova-plugin-contacts-x';

class Contact {
    constructor(email, phone) {
        this.email = email;
        this.phone = phone;
    }

    static GetAllContacts() {
        ContactsX.getAllContacts(function(contacts) {
            return contacts;
        }, function(error) {
            return error;
        });
        
    }

}