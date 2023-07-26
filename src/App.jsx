import React, { useState, useEffect } from "react";
import ContactList from "./components/ContactList";
import SelectedContact from "./components/SelectedContact";

// const dummyContacts = [
//   { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
//   { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
//   { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
// ];

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {selectedContactId ? (
        <SelectedContact
          selectedContactId={selectedContactId}
          setSelectedContactId={setSelectedContactId}
        />
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </>
  );
}

export default App;

// const App = () => {
//   const [contacts, setContacts] = useState([]);
//   const [selectedContactId, setSelectedContactId] = useState(null);
//   console.log("Contacts: ", contacts);

//   useEffect(() => {
//     const fetchContacts = async () => {
//       try {
//         const response = await fetch(
//           "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
//         );
//         const result = await response.json();
//         setContacts(result);
//         // console.log("result", result);
//       } catch (error) {
//         console.error("There was an error fetching contacts", error);
//       }
//     };
//     fetchContacts();
//   }, []);

//   return (
//     <>
//       {selectedContactId ? (
//         <selectedContact
//           selectedContactId={selectedContactId}
//           setSelectedContactId={setSelectedContactId}
//         />
//       ) : (
//         <ContactList
//           contacts={contacts}
//           setSelectedContactId={setSelectedContactId}
//         />
//       )}
//     </>
//   );
// };

// export default App;
