import { useState, useEffect } from "react";
// Then tried to work a little bit on the lst section


export default function selectedContact() { 
    const [selectedContactId, setSelectedContactId] = useState([]);
    const [contact, setContact] = useState(null);

    useEffect(() => {
    async function fetchselectedContact() {
        try {
         const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selctedContactId}`
         );
         const result = await response.json();
         console.log(result.contact);   
         setContact(result.contact);
        } catch (error) {
          setError(setError)  
        }
    }
    fetchselectedContact();
    }, []);
return(
    <>
    
    </>
)
}