export default function ContactRow({ setSelectedContactId, contact }) {
    //... It says, your coponent logic, Idk what component logic lol needs to be here 
  
  return (
      <tr   onClick={() => {
        setSelectedContactId(contact.id);
      }}
    >
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
      </tr>
    );
  }