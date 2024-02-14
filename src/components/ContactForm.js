import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact, editContact } from '../features/contacts/contactsSlice';
import styled from 'styled-components';

// Styled Components
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  }
`;

export const ContactForm = ({ contact: initialContact, setEditing }) => {
  const [contact, setContact] = useState(initialContact || { name: '', email: '', phone: '' });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contact.id) {
      dispatch(editContact(contact));
    } else {
      dispatch(addContact(contact));
    }
    setContact({ name: '', email: '', phone: '' }); // Reset form fields
    setEditing(false); // Hide form if in editing mode
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name="name"
        placeholder="Nome"
        value={contact.name}
        onChange={handleChange}
      />
      <Input
        name="phone"
        placeholder="Telefone"
        value={contact.phone}
        onChange={handleChange}
      />
      <Input
        name="email"
        placeholder="Email"
        value={contact.email}
        onChange={handleChange}
      />
      <Button type="submit">{initialContact ? 'Update Contact' : 'Adicionar'}</Button>
    </Form>
  );
};
