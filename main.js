var app = angular.module("app", ["ngAnimate"]);

app.factory("contacts", function() {
    return [
        {"firstName": "Angelica", "lastName": "Britt", "phone": "513-0955"},
        {"firstName": "Amery", "lastName": "Compton", "phone": "1-513-0955"}
    ];
});

app.controller("AppCtrl", function (contacts) {
    this.contacts = contacts;
    this.selectedContact = null;
    this.contactCopy = null;

    this.selectContact = function(contact) {
        this.selectedContact = contact;
        this.contactCopy = angular.copy(contact);
    }

    this.saveContact = function() {
        this.selectedContact.firstName = this.contactCopy.firstName;
    }
});

