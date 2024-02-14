import React, { useState } from 'react';
import { ContactsList } from './components/ContactsList';
import { ContactForm } from './components/ContactForm';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { GlobalStyle } from './styles/GlobalStyle';

// Styled Components
const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const Header = styled.h1`
  text-align: center;
  color: #333;
  font-size: 2rem;
  margin-top: 2rem;
`;

const AddButton = styled.button`
  display: block;
  width: 100%;
  padding: 10px 15px;
  background-color: #000;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;
  &:hover {
    background-color: transparent;
    border: solid 1px black;
    color: black;
  }
`;

function App() {
  const [isEditing, setEditing] = useState(false);
  const [currentContact, setCurrentContact] = useState(null);
  const contacts = useSelector((state) => state.contacts.list);

  const handleEditClick = (contact) => {
    setEditing(true);
    setCurrentContact(contact);
  };

  const handleAddClick = () => {
    setEditing(true);
    setCurrentContact(null);
  };

  return (
    
    <Container>
      <Header>Lista de Contato React</Header>
      {isEditing ? (
        <ContactForm
          contact={currentContact}
          setEditing={setEditing}
        />
      ) : (
        <>
          <AddButton onClick={handleAddClick}>Novo Contato</AddButton>
          <ContactsList onEdit={handleEditClick} />
        </>
      )}
    </Container>
  );
}

export default App;
