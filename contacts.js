// const { nanoid } = require("nanoid");
const nanoid = require("nanoid");
const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "db/contacts.json");

const listContacts = async () => {
  const allContacts = await fs.readFile(contactsPath);
  return JSON.parse(allContacts);
};

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const selectedContact = contacts.find((contact) => contact.id === contactId);
  return selectedContact || null;
};

const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const idx = contacts.findIndex((contact) => contact.id === contactId);

  if (idx === -1) {
    return null;
  }

  const deletedContact = contacts.splice(idx, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return deletedContact;
};

const addContact = async (name, email, phone) => {
  const contacts = await listContacts();
  const addedContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };
  contacts.push(addedContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return addedContact;
};

module.exports = { listContacts, getContactById, removeContact, addContact };
