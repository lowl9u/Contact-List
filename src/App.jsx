import SelectedContact from './Components file/SelectedContact'
import ContactList from './components/ContactList'
import './App.css'
import { useState } from 'react';

//Everything here looks good to me but idk 
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

