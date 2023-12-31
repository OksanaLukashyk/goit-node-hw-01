import { nanoid } from "nanoid";
import fs from "fs/promises";
import path from "path";

const contactsPath = path.resolve("db", "contacts.json");

export const listContacts = async () => {
  const contacts = await fs.readFile(contactsPath);
  return JSON.parse(contacts.toString());
};

export const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const selectedContact = contacts.find((contact) => contact.id === contactId);
  return selectedContact || null;
};

export const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const idx = contacts.findIndex((contact) => contact.id === contactId);

  if (idx === -1) {
    return null;
  }

  const deletedContact = contacts.splice(idx, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return deletedContact;
};

export const addContact = async (name, email, phone) => {
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
