import SelectedContact from './components/SelectedContact'
import ContactList from './components/ContactList'
import './App.css'
import { useState } from 'react';


function App() {
  const [selectedContactId, setSelectedContactId] = 
  useState(null);
 
  return (
    <>
     {selectedContactId ? (
        <div>Selected Contact View</div>
      ) : (<ContactList />
      )}
    </>
  )
}

export default App

