    import React from 'react';
    import { useSelector, useDispatch } from 'react-redux';
    import { removeContact } from '../features/contacts/contactsSlice';
    import styled from 'styled-components';

    const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 2rem;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.05);
  border-radius: 8px;
  overflow: hidden;
`;

const Th = styled.th`
  background-color: #ffffff;
  color: #333333;
  font-weight: 700;
  padding: 15px 20px;
  text-align: left;
  border-bottom: 2px solid #f0f0f0;
  font-family: 'Roboto', sans-serif;
`;

const Td = styled.td`
  padding: 15px 20px;
  border-bottom: 1px solid #f0f0f0;
  font-family: 'Roboto', sans-serif;
  &:last-child {
    text-align: right;
  }
`;

const ActionButton = styled.button`
  padding: 8px 12px;
  margin-right: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  background-color: #000;
  color: white;
  transition: background-color 0.2s;
  font-family: 'Roboto', sans-serif;

  &:hover {
    background-color: transparent;
    color: black;
    border: solid 1px gray;
  }

  &.delete {
    background-color: #e74c3c;

    &:hover {
      background-color: transparent;
      color: red;
    }
  }
`;

export const ContactsList = ({ onEdit }) => {
    const contacts = useSelector((state) => state.contacts.list);
    const dispatch = useDispatch();
  
    return (
      <Table>
        <thead>
          <tr>
            <Th>Nome</Th>
            <Th>Telefone</Th>
            <Th>Email</Th>
            <Th>Ações</Th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <Td>{contact.name}</Td>
              <Td>{contact.phone}</Td>
              <Td>{contact.email}</Td>
              <Td>
                <ActionButton onClick={() => onEdit(contact)}>Editar</ActionButton>
                <ActionButton className="delete" onClick={() => dispatch(removeContact(contact.id))}>
                  Excluir
                </ActionButton>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  };
